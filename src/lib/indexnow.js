const INDEXNOW_KEY = '39d8663675304cde9d7b3f950fb03e34'
const HOST = 'estagioai.com'

let lastSubmitAt = 0
const MIN_INTERVAL_MS = 3000

function shouldRun() {
  if (typeof window === 'undefined') return false
  const isProd = window.location.hostname === HOST || window.location.hostname.endsWith(`.${HOST}`)
  return isProd
}

export async function submitIndexNow(url) {
  try {
    if (!shouldRun()) return
    const now = Date.now()
    if (now - lastSubmitAt < MIN_INTERVAL_MS) return
    lastSubmitAt = now

    const targetUrl = typeof url === 'string' ? url : window.location.href

    const endpoint = `/api/indexnow?url=${encodeURIComponent(targetUrl)}&key=${INDEXNOW_KEY}`
    await fetch(endpoint, { method: 'GET', cache: 'no-store' })
  } catch (err) {
    // Swallow network/indexing errors in production; log only in dev to avoid user-facing noise
    if (import.meta.env && import.meta.env.DEV) {
      console.debug('IndexNow submit failed', err)
    }
  }
}

export async function submitIndexNowBatch(urls) {
  try {
    if (!shouldRun()) return
    if (!Array.isArray(urls) || urls.length === 0) return
    const body = { host: HOST, key: INDEXNOW_KEY, urlList: urls }
    await fetch('/api/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      cache: 'no-store'
    })
  } catch (err) {
    if (import.meta.env && import.meta.env.DEV) {
      console.debug('IndexNow batch submit failed', err)
    }
  }
}
