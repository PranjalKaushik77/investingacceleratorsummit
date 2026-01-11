# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/investing-summit
   PORT=5000
   ```
   
   For MongoDB Atlas (cloud), use:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/investing-summit
   PORT=5000
   ```

3. **Start MongoDB** (if using local MongoDB)
   
   Make sure MongoDB is running on your system. If not installed, you can use MongoDB Atlas (free cloud option) or install locally.

4. **Start the Development Server**
   
   In one terminal, start the frontend:
   ```bash
   npm run dev
   ```
   
   In another terminal, start the backend:
   ```bash
   npm run server
   ```

5. **Access the Website**
   
   Open your browser and go to: `http://localhost:3000`

## Features Added

✅ **Newsletter Subscription**
- Email collection form
- MongoDB storage
- Success/error handling
- Located between Testimonials and Pricing sections

✅ **Testimonials/Reviews Section**
- 6 sample testimonials with ratings
- Beautiful card layout
- Located after Hero section

✅ **All Original Content Preserved**
- Hero section with animations
- FAQ section with accordion
- Footer with links
- Pricing/CTA section

## Testing the Newsletter

1. Fill in an email address in the newsletter form
2. Click "Subscribe"
3. Check your MongoDB database to see the stored email
4. Try the same email again - it should show an error message

## Project Structure

```
investing/
├── src/                    # Frontend React code
│   ├── components/        # React components
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── server/                # Backend Express code
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── index.js          # Server entry point
├── package.json          # Dependencies
└── .env                  # Environment variables (create this)
```

## Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running (if local)
- Check your connection string in `.env`
- Verify network access if using MongoDB Atlas

**Port Already in Use:**
- Change the PORT in `.env` file
- Or kill the process using the port

**Frontend Can't Connect to Backend:**
- Make sure the backend server is running
- Check the API URL in `src/components/Newsletter.jsx` (should be `http://localhost:5000`)

