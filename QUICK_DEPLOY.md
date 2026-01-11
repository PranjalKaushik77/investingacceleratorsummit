# Quick Deployment Guide

## Fastest Way: Vercel (Frontend) + Render (Backend)

### Step 1: Deploy Backend to Render (5 minutes)

1. Go to [render.com](https://render.com) and sign up (free)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `investing-summit-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Plan**: Free
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
6. Click "Create Web Service"
7. Wait for deployment (~5 minutes)
8. **Copy your backend URL** (e.g., `https://investing-summit-api.onrender.com`)

### Step 2: Deploy Frontend to Vercel (3 minutes)

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your Render backend URL from Step 1
6. Click "Deploy"
7. Wait for deployment (~2 minutes)
8. **Done!** Your site is live!

### Step 3: Test Everything

1. Visit your Vercel frontend URL
2. Test the newsletter subscription form
3. Check MongoDB Atlas to verify emails are being saved
4. Check browser console for any errors

---

## What Changed in the Code

✅ **Newsletter.jsx**: Now uses `VITE_API_URL` environment variable
✅ **server/index.js**: CORS configured for production
✅ **vercel.json**: Added for Vercel deployment
✅ **render.yaml**: Added for Render deployment

---

## Environment Variables Summary

### Backend (Render):

- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NODE_ENV`: `production`
- `PORT`: Auto-set by Render (optional)

### Frontend (Vercel):

- `VITE_API_URL`: Your Render backend URL (e.g., `https://investing-summit-api.onrender.com`)

---

## Common Issues

### Backend shows "Application Error"

- Check Render logs
- Verify MongoDB connection string is correct
- Make sure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### Frontend can't connect to backend

- Verify `VITE_API_URL` is set correctly in Vercel
- Check that backend URL is accessible (visit it in browser)
- Check browser console for CORS errors

### CORS Error

- The backend CORS is already configured to allow all origins
- If needed, update `server/index.js` CORS origin list

---

## MongoDB Atlas Setup (If Not Done)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. Create database user
4. Whitelist IP: Add `0.0.0.0/0` (allow all) for testing
5. Get connection string and use it as `MONGODB_URI`

---

## Update Code After Deployment

If you make changes:

1. Push to GitHub
2. Render and Vercel will auto-deploy
3. If you change environment variables, redeploy manually

---

## Total Cost: $0 (Free Tier)

- ✅ Vercel: Free for personal projects
- ✅ Render: Free tier (spins down after inactivity)
- ✅ MongoDB Atlas: Free tier (512MB storage)
