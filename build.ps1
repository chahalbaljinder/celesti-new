# PowerShell build script for Celesti website

Write-Host "Starting build process for Celesti website..." -ForegroundColor Cyan

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
Set-Location -Path ".\client"
npm install

# Build the client
Write-Host "Building client..." -ForegroundColor Cyan
npm run build

Write-Host "Build complete! The site is ready for deployment." -ForegroundColor Green
