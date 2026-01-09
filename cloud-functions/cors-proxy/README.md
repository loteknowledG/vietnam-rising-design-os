# CORS Proxy for RSS Feeds

Google Cloud Function that proxies RSS feed requests to bypass CORS restrictions.

## Setup

### 1. Install Google Cloud CLI

Download and install from: https://cloud.google.com/sdk/docs/install

### 2. Initialize and authenticate

```bash
gcloud init
gcloud auth login
```

### 3. Create a new project (or use existing)

```bash
gcloud projects create vietnam-jobs-rss --name="Vietnam Jobs RSS"
gcloud config set project vietnam-jobs-rss
```

### 4. Enable required APIs

```bash
gcloud services enable cloudfunctions.googleapis.com
gcloud services enable cloudbuild.googleapis.com
```

### 5. Deploy the function

```bash
cd cloud-functions/cors-proxy

gcloud functions deploy corsProxy \
  --gen2 \
  --runtime=nodejs20 \
  --region=asia-southeast1 \
  --source=. \
  --entry-point=corsProxy \
  --trigger-http \
  --allow-unauthenticated \
  --max-instances=10 \
  --memory=256MB \
  --timeout=60s
```

### 6. Get the function URL

After deployment, you'll get a URL like:
```
https://asia-southeast1-vietnam-jobs-rss.cloudfunctions.net/corsProxy
```

### 7. Update your code

Update the `CORS_PROXY_URL` in your application to use this URL.

## Usage

Request RSS feeds through the proxy:

```
https://YOUR-FUNCTION-URL?url=https://rss.app/feeds/your-feed-id.xml
```

## Configuration

### Add allowed domains

Edit `index.js` and add domains to `ALLOWED_DOMAINS`:

```javascript
const ALLOWED_DOMAINS = [
  'rss.app',
  'itviec.com',
  'your-domain.com'
];
```

### Add allowed origins

Edit `index.js` and add your frontend domains to `ALLOWED_ORIGINS`:

```javascript
const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'https://your-app.web.app'
];
```

### Redeploy

After making changes, redeploy:

```bash
gcloud functions deploy corsProxy \
  --gen2 \
  --runtime=nodejs20 \
  --region=asia-southeast1 \
  --source=. \
  --entry-point=corsProxy \
  --trigger-http \
  --allow-unauthenticated
```

## Local Testing

Test locally with Functions Framework:

```bash
npm install
npx @google-cloud/functions-framework --target=corsProxy --port=8080
```

Test the endpoint:
```bash
curl "http://localhost:8080?url=https://rss.app/feeds/your-feed.xml"
```

## Monitoring

View logs:
```bash
gcloud functions logs read corsProxy --region=asia-southeast1
```

View metrics in Google Cloud Console:
https://console.cloud.google.com/functions

## Costs

Cloud Functions pricing (as of 2024):
- First 2 million invocations/month: Free
- Additional invocations: $0.40 per million
- 256MB memory @ 60s timeout is very cheap

For typical RSS feed usage, this should stay within free tier.

## Security Notes

- Only allowlisted domains can be proxied
- Only allowlisted origins can make requests (configure CORS)
- Rate limiting is handled by Google Cloud Functions
- No authentication required (public proxy)

If you need authentication, add an API key check:

```javascript
const API_KEY = process.env.API_KEY;
if (req.headers['x-api-key'] !== API_KEY) {
  return res.status(401).json({ error: 'Unauthorized' });
}
```
