import { getStore } from '@netlify/blobs'

export default async (req) => {
  const url = new URL(req.url)
  const key = url.searchParams.get('key') || req.headers.get('x-dash-key') || ''
  const expected = process.env.DASHBOARD_PASSWORD || ''

  if (!expected || key !== expected) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
  }

  let visits = []
  try {
    const store = getStore('analytics')
    visits = (await store.get('visits', { type: 'json' })) || []
  } catch {
    visits = []
  }

  return new Response(JSON.stringify({ visits }), {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}
