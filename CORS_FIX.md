# CORS Error Fix

## The Problem

You're getting this error:
```
Access to fetch at 'https://investingacceleratorsummit.onrender.com/api/newsletter/subscribe' 
from origin 'https://investingacceleratorsummit.vercel.app' 
has been blocked by CORS policy
```

This means the backend server isn't allowing requests from your Vercel frontend.

## The Solution

I've updated `server/index.js` to allow all origins. Now you need to:

### Step 1: Commit and Push Your Changes

```bash
git add server/index.js
git commit -m "Fix CORS configuration for production"
git push
```

### Step 2: Redeploy on Render

1. Go to your Render dashboard: https://dashboard.render.com
2. Find your `investingacceleratorsummit` service
3. Click on it
4. Go to the "Events" or "Logs" tab
5. Click "Manual Deploy" → "Clear build cache & deploy"

OR

Render will automatically redeploy when you push to your GitHub repository (if you have auto-deploy enabled).

### Step 3: Wait for Deployment

- Wait 2-5 minutes for the deployment to complete
- Check the logs to make sure it deployed successfully

### Step 4: Test Again

1. Visit your Vercel frontend: https://investingacceleratorsummit.vercel.app
2. Try the newsletter subscription form
3. The CORS error should be fixed!

## What Changed

The CORS configuration was updated to:
- Allow all origins (`origin: '*'`)
- Support all HTTP methods (GET, POST, PUT, DELETE, OPTIONS)
- Allow necessary headers

## Alternative: Specific Origins (More Secure)

If you want to restrict CORS to only your Vercel frontend (more secure), update `server/index.js`:

```javascript
app.use(cors({
  origin: [
    'https://investingacceleratorsummit.vercel.app',
    'http://localhost:3000', // For local development
    'http://localhost:5173'  // For local development
  ],
  credentials: false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
```

But for now, allowing all origins (`origin: '*'`) is the simplest fix.

## Still Having Issues?

1. **Check Render Logs**: Make sure the deployment succeeded
2. **Verify the Code**: Make sure the updated `server/index.js` was pushed to GitHub
3. **Clear Browser Cache**: Try in incognito mode or clear cache
4. **Check Network Tab**: Look at the actual request/response headers

## Quick Test

Test if CORS is working by visiting:
```
https://investingacceleratorsummit.onrender.com/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

