# Deployment Guide

This guide covers deploying both the frontend (React) and backend (Express) to the internet.

## Recommended Setup (Easiest)

- **Frontend**: Vercel (Free, Easy)
- **Backend**: Render or Railway (Free tier available)
- **Database**: MongoDB Atlas (Already using - Free tier)

---

## Option 1: Vercel (Frontend) + Render (Backend) ⭐ RECOMMENDED

### Part A: Deploy Frontend to Vercel

1. **Build your frontend for production:**
   ```bash
   npm run build
   ```

2. **Create `vercel.json` in root directory:**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "devCommand": "npm run dev",
     "installCommand": "npm install",
     "framework": "vite",
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

3. **Install Vercel CLI (optional, can use website too):**
   ```bash
   npm i -g vercel
   ```

4. **Deploy:**
   ```bash
   vercel
   ```
   Or go to [vercel.com](https://vercel.com), sign up, and import your GitHub repository.

5. **Add Environment Variables in Vercel Dashboard:**
   - Go to your project settings → Environment Variables
   - Add: `VITE_API_URL` = `https://your-backend-url.onrender.com` (get this after deploying backend)

### Part B: Deploy Backend to Render

1. **Create `render.yaml` in root directory:**
   ```yaml
   services:
     - type: web
       name: investing-summit-api
       env: node
       buildCommand: npm install
       startCommand: npm run server
       envVars:
         - key: MONGODB_URI
           sync: false
         - key: PORT
           value: 10000
         - key: NODE_ENV
           value: production
   ```

2. **Create account at [render.com](https://render.com)**

3. **Create New Web Service:**
   - Connect your GitHub repository
   - Select the repository
   - Settings:
     - **Name**: investing-summit-api
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm run server`
     - **Instance Type**: Free

4. **Add Environment Variables:**
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `PORT`: `10000` (Render sets this automatically, but good to have)
   - `NODE_ENV`: `production`

5. **Deploy:**
   - Click "Create Web Service"
   - Wait for deployment (first time takes 5-10 minutes)
   - Copy your service URL (e.g., `https://investing-summit-api.onrender.com`)

6. **Update Frontend API URL:**
   - Go back to Vercel dashboard
   - Update `VITE_API_URL` environment variable with your Render backend URL
   - Redeploy frontend

---

## Option 2: Vercel (Frontend) + Railway (Backend)

### Deploy Backend to Railway

1. **Create account at [railway.app](https://railway.app)**

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your repository

3. **Configure Service:**
   - Railway auto-detects Node.js
   - Set **Root Directory**: `./` (or leave default)
   - Set **Start Command**: `npm run server`

4. **Add Environment Variables:**
   - Click "Variables" tab
   - Add:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `PORT`: Railway provides this automatically via `PORT` env var
     - `NODE_ENV`: `production`

5. **Deploy:**
   - Railway will automatically deploy
   - Copy the generated URL (e.g., `https://your-app.up.railway.app`)

6. **Update Frontend:**
   - Update `VITE_API_URL` in Vercel with Railway backend URL

---

## Option 3: Deploy Both to Render

### Deploy Frontend to Render

1. **Create Static Site in Render:**
   - New → Static Site
   - Connect GitHub repository
   - Settings:
     - **Name**: investing-summit-frontend
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`

2. **Add Environment Variable:**
   - `VITE_API_URL`: Your backend URL (add after backend is deployed)

### Deploy Backend to Render
(Follow Part B from Option 1 above)

---

## Important: Update Frontend API URL

After deploying the backend, you need to update the frontend to use the production API URL instead of `localhost:5000`.

### Option A: Using Environment Variables (Recommended)

1. **Update `src/components/Newsletter.jsx`:**
   ```jsx
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
   
   const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
     // ... rest of code
   })
   ```

2. **Update `src/components/Newsletter.jsx` to use environment variable**

### Option B: Hardcode for Production

Update the API URL directly in `Newsletter.jsx` with your production backend URL.

---

## Step-by-Step Deployment Checklist

### Pre-Deployment

- [ ] Test everything locally
- [ ] Build frontend: `npm run build` (check for errors)
- [ ] Ensure `.env` file is NOT committed to Git (should be in `.gitignore`)
- [ ] MongoDB Atlas is set up and connection string works
- [ ] All environment variables documented

### Backend Deployment

- [ ] Choose deployment platform (Render/Railway)
- [ ] Create account
- [ ] Connect GitHub repository
- [ ] Configure build and start commands
- [ ] Add environment variables (MONGODB_URI, PORT, NODE_ENV)
- [ ] Deploy and verify backend URL works
- [ ] Test health endpoint: `https://your-backend-url/api/health`

### Frontend Deployment

- [ ] Choose deployment platform (Vercel/Netlify/Render)
- [ ] Create account
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Add environment variable `VITE_API_URL` with backend URL
- [ ] Deploy
- [ ] Test newsletter subscription

### Post-Deployment

- [ ] Test frontend loads correctly
- [ ] Test newsletter subscription form
- [ ] Verify emails are saved to MongoDB Atlas
- [ ] Check console for any errors
- [ ] Update CORS settings if needed (should already be configured)

---

## CORS Configuration

The backend already has CORS enabled, but if you encounter CORS errors, update `server/index.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app',
    'https://your-frontend-url.netlify.app'
  ],
  credentials: true
}))
```

---

## MongoDB Atlas Whitelist

Make sure to add your deployment server's IP addresses to MongoDB Atlas Network Access:
1. Go to MongoDB Atlas Dashboard
2. Network Access → Add IP Address
3. Add: `0.0.0.0/0` (Allow all IPs - for development)
   OR add specific IPs of your deployment platforms

---

## Free Tier Limitations

### Render Free Tier
- Spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds
- Perfect for demos and small projects

### Railway Free Tier
- $5 free credit per month
- Pay-as-you-go after
- More reliable than Render free tier

### Vercel Free Tier
- Excellent for frontend
- Unlimited bandwidth for personal projects
- Perfect for React apps

---

## Quick Deploy Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "deploy:frontend": "vercel --prod",
    "deploy:backend": "echo 'Deploy via Render/Railway dashboard'"
  }
}
```

---

## Troubleshooting

### Backend won't start
- Check logs in Render/Railway dashboard
- Verify environment variables are set correctly
- Check MongoDB connection string

### Frontend can't connect to backend
- Verify `VITE_API_URL` is set correctly
- Check backend URL is accessible
- Check CORS configuration
- Look at browser console for errors

### CORS errors
- Update CORS origin in `server/index.js` to include your frontend URL
- Redeploy backend

### Environment variables not working
- Vite requires `VITE_` prefix for frontend env variables
- Rebuild/redeploy after changing env variables
- Restart development server if testing locally

