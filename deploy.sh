#!/bin/bash

# Portfolio Deployment Script for GitHub Pages
# This script builds and deploys the portfolio to GitHub Pages

set -e  # Exit on error

echo "🚀 Starting deployment process..."

# Navigate to portfolio directory
cd "$(dirname "$0")"

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if gh-pages is installed
if ! command -v gh-pages &> /dev/null; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Build the project
echo "🔨 Building portfolio..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed - dist directory not found"
    exit 1
fi

# Ensure .nojekyll file exists in dist (required for GitHub Pages)
if [ ! -f "dist/.nojekyll" ]; then
    echo "⚠️  Warning: .nojekyll file not found in dist, creating it..."
    touch dist/.nojekyll
fi

# Verify critical files exist
if [ ! -f "dist/index.html" ]; then
    echo "❌ Error: index.html not found in dist"
    exit 1
fi

echo "✓ Build verification complete"

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your portfolio should be available at: https://natspotify.github.io/me/"

