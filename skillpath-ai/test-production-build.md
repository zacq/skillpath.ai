# Testing the Production Build Locally

Before deploying to Netlify, it's a good practice to test the production build locally to ensure everything works as expected.

## Prerequisites

You need to have a static file server. If you don't have one installed, you can use `serve`:

```bash
npm install -g serve
```

## Testing Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. Serve the production build:
   ```bash
   serve -s build
   ```

3. Open your browser and navigate to http://localhost:5000

4. Test all functionality:
   - Verify the landing page loads correctly
   - Test the chat button functionality
   - Check that all links work properly
   - Ensure the UI is responsive on different screen sizes

## Testing with Environment Variables

To test with specific environment variables:

1. Create a `.env.production.local` file in the project root:
   ```
   REACT_APP_ENABLE_WEBHOOK=true
   REACT_APP_N8N_WEBHOOK_URL=your_test_webhook_url
   ```

2. Rebuild the application:
   ```bash
   npm run build
   ```

3. Serve and test as described above

## Common Issues

- **Missing assets**: If images or styles are missing, check the paths in your code
- **API errors**: Verify that API endpoints are correctly configured for production
- **CORS issues**: If using the N8N webhook, ensure CORS is properly configured

## Next Steps

Once you've verified that the production build works correctly locally, you can proceed with deploying to Netlify using the instructions in `deploy-to-netlify.md`.
