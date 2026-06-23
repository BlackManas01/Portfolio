import { getStore } from '@netlify/blobs'

function parseUA(ua = '') {
  const browser = /Edg\//.test(ua)
    ? 'Edge'
    : /OPR\/|Opera/.test(ua)
      ? 'Opera'
      : /Chrome\//.test(ua) && !/Chromium/.test(ua)
        ? 'Chrome'
        : /Firefox\//.test(ua)
          ? 'Firefox'
          : /Safari\//.test(ua) && /Version\//.test(ua)
            ? 'Safari'
            : 'Unknown'
  const os = /Windows/.test(ua)
    ? 'Windows'
    : /Android/.test(ua)
      ? 'Android'
      : /iPhone|iPad|iPod/.test(ua)
        ? 'iOS'
        : /Mac OS X/.test(ua)
          ? 'macOS'
          : /Linux/.test(ua)
            ? 'Linux'
            : 'Unknown'
  const device = /Mobile|Android|iPhone|iPod/.test(ua) ? 'Mobile' : /iPad|Tablet/.test(ua) ? 'Tablet' : 'Desktop'
  return { browser, os, device }
}

// Automated traffic we never want in the dashboard (crawlers, headless test browsers, monitors).
const BOT = /bot\b|crawl|spider|slurp|headless|playwright|puppeteer|phantom|lighthouse|chrome-lighthouse|pingdom|uptime|monitor|preview|facebookexternalhit|embedly|netlify|vercel|render|prerender|http-client|curl|wget|python-requests|axios|node-fetch/i

export default async (req, context) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let body = {}
  try {
    body = await req.json()
  } catch {
    body = {}
  }

  const ua = req.headers.get('user-agent') || ''

  // Drop automated traffic and the owner's own visits before they ever hit storage.
  if (!ua || BOT.test(ua) || body.owner === true) {
    return new Response('skip', { status: 200 })
  }

  const { browser, os, device } = parseUA(ua)
  const geo = context.geo || {}

  const record = {
    time: new Date().toISOString(),
    visitorId: String(body.visitorId || 'unknown').slice(0, 40),
    city: geo.city || '',
    region: geo.subdivision?.name || '',
    country: geo.country?.name || '',
    countryCode: geo.country?.code || '',
    timezone: geo.timezone || '',
    browser,
    os,
    device,
    referrer: String(body.referrer || '').slice(0, 200),
    path: String(body.path || '/').slice(0, 100),
  }

  try {
    const store = getStore({ name: 'analytics', consistency: 'strong' })
    const existing = (await store.get('visits', { type: 'json' })) || []
    existing.push(record)
    const trimmed = existing.slice(-1000)
    await store.setJSON('visits', trimmed)
  } catch {
    return new Response('error', { status: 500 })
  }

  return new Response('ok', { status: 200 })
}
