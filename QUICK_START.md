# Quick Start Guide

## To Fix ERR_CONNECTION_REFUSED Error

You need to run **TWO** terminal windows:

### Terminal 1: Backend Server

```bash
cd "C:\Users\PRANJAL KAUSHIK\Downloads\investing"
npm run server
```

**Expected Output:**
```
Connected to MongoDB
Server is running on port 5000
```

### Terminal 2: Frontend Server

```bash
cd "C:\Users\PRANJAL KAUSHIK\Downloads\investing"
npm run dev
```

**Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

## Check Your .env File

Make sure your `.env` file has:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/investing-summit?retryWrites=true&w=majority
PORT=5000
```

Replace:
- `YOUR_USERNAME` - Your MongoDB Atlas username
- `YOUR_PASSWORD` - Your MongoDB Atlas password  
- `YOUR_CLUSTER` - Your MongoDB Atlas cluster name

## Test the Server

Once the backend is running, test it by visiting:
```
http://localhost:5000/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

## Common Issues

### MongoDB Connection Error
- Check your connection string in `.env`
- Make sure your IP is whitelisted in MongoDB Atlas
- Make sure username/password are correct

### Port Already in Use
- Close any other applications using port 5000
- Or change PORT in `.env` to a different number (e.g., 5001)

