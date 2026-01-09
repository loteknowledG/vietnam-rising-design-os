# Setup Google Cloud Functions CORS Proxy

Write-Host "🔧 Setting up Google Cloud for CORS Proxy..." -ForegroundColor Cyan

# Check if gcloud is installed
if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Google Cloud CLI not found!" -ForegroundColor Red
    Write-Host "Install from: https://cloud.google.com/sdk/docs/install" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "1️⃣  Authenticating with Google Cloud..." -ForegroundColor Yellow
gcloud auth login

Write-Host ""
Write-Host "2️⃣  Create or select a project" -ForegroundColor Yellow
Write-Host "Enter project ID (e.g., vietnam-jobs-rss): " -NoNewline -ForegroundColor Cyan
$projectId = Read-Host

$createNew = Read-Host "Create new project? (y/N)"
if ($createNew -eq "y" -or $createNew -eq "Y") {
    Write-Host "Creating project $projectId..." -ForegroundColor Yellow
    gcloud projects create $projectId --name="Vietnam Jobs RSS"
}

Write-Host "Setting active project to $projectId..." -ForegroundColor Yellow
gcloud config set project $projectId

Write-Host ""
Write-Host "3️⃣  Enabling required APIs..." -ForegroundColor Yellow
gcloud services enable cloudfunctions.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Review cloud-functions/cors-proxy/index.js"
Write-Host "2. Update ALLOWED_ORIGINS with your domain"
Write-Host "3. Run: .\cloud-functions\deploy.ps1"
Write-Host ""
