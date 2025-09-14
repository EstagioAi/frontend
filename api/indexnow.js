export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { url, key } = req.query;
      if (!url || !key) return res.status(400).json({ error: 'Missing url or key' });

      const endpoint = `https://api.indexnow.org/indexnow?url=${encodeURIComponent(url)}&key=${encodeURIComponent(key)}`;
      const r = await fetch(endpoint, { method: 'GET' });
      const text = await r.text();
      return res.status(r.status).send(text);
    }

    if (req.method === 'POST') {
      const body = req.body && typeof req.body === 'object' ? req.body : JSON.parse(req.body || '{}');
      const r = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      });
      const text = await r.text();
      return res.status(r.status).send(text);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    return res.status(500).json({ error: 'Internal error', message: err?.message });
  }
}
