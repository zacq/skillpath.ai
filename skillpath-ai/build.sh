#!/bin/bash

# Display current directory
echo "Current directory: $(pwd)"

# List files in current directory
echo "Files in current directory:"
ls -la

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "package.json found"
else
    echo "package.json not found"
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "Build successful"
else
    echo "Build failed"
    exit 1
fi

echo "Build process completed successfully"
