const functions = require('@google-cloud/functions-framework');

// Allowlist of domains that can be proxied
const ALLOWED_DOMAINS = [
  'rss.app',
  'itviec.com',
  'linkedin.com',
  'feeds.feedburner.com'
];

// Your frontend domain(s) - update these to match your deployment
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'https://your-app.web.app', // Update with your actual domain
];

function isAllowedUrl(url) {
  try {
    const parsed = new URL(url);
    return ALLOWED_DOMAINS.some(domain => 
      parsed.hostname === domain || parsed.hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

functions.http('corsProxy', async (req, res) => {
  // Set CORS headers
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
  } else if (ALLOWED_ORIGINS.includes('*')) {
    res.set('Access-Control-Allow-Origin', '*');
  }
  
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Max-Age', '3600');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get target URL from query parameter
  const targetUrl = req.query.url;
  
  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  if (!isAllowedUrl(targetUrl)) {
    return res.status(403).json({ error: 'Domain not allowed' });
  }

  try {
    // Fetch the RSS feed
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        'User-Agent': 'Mozilla/5.0 (compatible; RSS-Proxy/1.0)'
      }
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Upstream error: ${response.status} ${response.statusText}` 
      });
    }

    const contentType = response.headers.get('content-type') || 'application/xml';
    const data = await response.text();

    // Forward the response
    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes
    res.status(200).send(data);

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch resource',
      message: error.message 
    });
  }
});
