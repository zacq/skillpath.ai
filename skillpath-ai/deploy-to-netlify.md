# Deploying SkillPath.AI to Netlify

This document provides instructions for deploying the SkillPath.AI application to Netlify.

## Prerequisites

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Authenticate with Netlify:
   ```bash
   netlify login
   ```

## Deployment Steps

### Option 1: Deploy via Netlify CLI

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   ```bash
   netlify deploy
   ```
   - When prompted, select "Create & configure a new site"
   - Choose your team
   - Enter a site name (or press enter for a random name)
   - Specify the publish directory as `build`

3. Preview the deployment and verify everything looks correct

4. Deploy to production:
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify UI

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

## Setting Environment Variables

After deploying, you'll need to set up environment variables for the N8N webhook:

1. Go to your site settings in Netlify
2. Navigate to "Build & deploy" > "Environment"
3. Add the following variables:
   - `REACT_APP_ENABLE_WEBHOOK`: Set to `true` when ready to use the webhook
   - `REACT_APP_N8N_WEBHOOK_URL`: Set to your N8N webhook URL

## Updating the Site

To update the site after making changes:

1. Push changes to your GitHub repository (if using continuous deployment)
2. Or, run the following commands:
   ```bash
   npm run build
   netlify deploy --prod
   ```

## Troubleshooting

If you encounter issues with the deployment:

1. Check the Netlify deployment logs
2. Verify that all environment variables are set correctly
3. Ensure the build process completes successfully locally before deploying
