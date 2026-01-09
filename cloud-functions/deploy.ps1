# Deploy CORS Proxy to Google Cloud Functions

Write-Host "🚀 Deploying CORS Proxy to Google Cloud Functions..." -ForegroundColor Cyan

# Check if gcloud is installed
if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Google Cloud CLI not found!" -ForegroundColor Red
    Write-Host "Install from: https://cloud.google.com/sdk/docs/install" -ForegroundColor Yellow
    exit 1
}

# Navigate to function directory
Set-Location cloud-functions/cors-proxy

Write-Host "📦 Deploying to Google Cloud..." -ForegroundColor Yellow

gcloud functions deploy corsProxy `
  --gen2 `
  --runtime=nodejs20 `
  --region=asia-southeast1 `
  --source=. `
  --entry-point=corsProxy `
  --trigger-http `
  --allow-unauthenticated `
  --max-instances=10 `
  --memory=256MB `
  --timeout=60s

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Copy the function URL from above"
    Write-Host "2. Update .env file:"
    Write-Host "   VITE_CORS_PROXY_URL=https://YOUR-FUNCTION-URL"
    Write-Host "3. Restart your dev server: pnpm dev"
    Write-Host ""
    Write-Host "💡 Test your proxy:"
    Write-Host "   curl 'https://YOUR-FUNCTION-URL?url=https://rss.app/feeds/YOUR-FEED.xml'"
} else {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

# Return to project root
Set-Location ../..
