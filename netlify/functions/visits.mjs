import { getStore } from '@netlify/blobs'

export default async (req) => {
  const url = new URL(req.url)
  const key = (url.searchParams.get('key') || req.headers.get('x-dash-key') || '').trim()
  const expected = (process.env.DASHBOARD_PASSWORD || '').trim()

  // Safe diagnostic: reports whether the password is configured (never reveals it)
  if (key === '__diag__') {
    return new Response(
      JSON.stringify({ configured: Boolean(expected), length: expected.length }),
      { status: 200, headers: { 'content-type': 'application/json' } },
    )
  }

  if (!expected || key !== expected) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
  }

  const store = getStore({ name: 'analytics', consistency: 'strong' })

  // Authenticated wipe: clears all stored visits.
  if (url.searchParams.get('clear') === '1') {
    try {
      await store.setJSON('visits', [])
    } catch {
      return new Response(JSON.stringify({ error: 'Could not clear' }), {
        status: 500,
        headers: { 'content-type': 'application/json' },
      })
    }
    return new Response(JSON.stringify({ visits: [], cleared: true }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
    })
  }

  let visits = []
  try {
    visits = (await store.get('visits', { type: 'json' })) || []
  } catch {
    visits = []
  }

  return new Response(JSON.stringify({ visits }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}
