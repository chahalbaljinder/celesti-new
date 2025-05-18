#!/bin/bash

# Build script for Celesti website

echo "Starting build process for Celesti website..."

# Install dependencies
echo "Installing dependencies..."
cd client && npm install

# Build the client
echo "Building client..."
cd client && npm run build

echo "Build complete! The site is ready for deployment."
