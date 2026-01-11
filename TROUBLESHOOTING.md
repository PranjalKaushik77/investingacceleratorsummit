# Troubleshooting: Backend Server Connection

## Error: ERR_CONNECTION_REFUSED

This error means the backend server is not running. Follow these steps:

### Step 1: Create/Check .env File

Create a `.env` file in the root directory with your MongoDB Atlas connection string:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/investing-summit?retryWrites=true&w=majority
PORT=5000
```

**Important Notes:**
- Replace `username` and `password` with your MongoDB Atlas credentials
- Replace `cluster.mongodb.net` with your actual cluster URL
- The database name `investing-summit` will be created automatically

### Step 2: Install Dependencies (if not done)

```bash
npm install
```

### Step 3: Start the Backend Server

Open a **new terminal window** and run:

```bash
npm run server
```

You should see:
```
Connected to MongoDB
Server is running on port 5000
```

### Step 4: Keep Both Terminals Running

You need **TWO terminals** running simultaneously:

**Terminal 1 (Backend):**
```bash
npm run server
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

### Step 5: Test the Connection

1. Make sure backend is running (check Terminal 1 for "Server is running on port 5000")
2. Make sure frontend is running (check Terminal 2 for the Vite server URL)
3. Open your browser and navigate to the frontend URL (usually http://localhost:3000)
4. Try subscribing to the newsletter

### Common Issues

#### Issue: MongoDB Connection Error
**Solution:** 
- Check your MongoDB Atlas connection string
- Make sure your IP address is whitelisted in MongoDB Atlas (Network Access)
- Make sure your MongoDB user has read/write permissions

#### Issue: Port Already in Use
**Solution:**
- Change PORT in `.env` file to a different port (e.g., 5001)
- Update the API URL in `src/components/Newsletter.jsx` to match the new port

#### Issue: Module Not Found
**Solution:**
- Run `npm install` again
- Make sure you're in the correct directory

### Quick Test

Test if the server is running by visiting:
```
http://localhost:5000/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

