# Investing Accelerator Summit Website

A replica of the Investing Accelerator Summit website with added features: newsletter subscription and testimonials section.

## Features

- **Hero Section**: Eye-catching hero with animations and call-to-action
- **Testimonials**: Reviews section showcasing attendee feedback
- **Newsletter Subscription**: Email collection with MongoDB integration
- **FAQ Section**: Accordion-style frequently asked questions
- **Responsive Design**: Mobile-friendly layout

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Icons**: Lucide React

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/investing-summit
PORT=5000
```

3. Start the development server (frontend):
```bash
npm run dev
```

4. Start the backend server (in a separate terminal):
```bash
npm run server
```

The frontend will run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Project Structure

```
investing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Newsletter.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   ├── models/
│   │   └── Subscriber.js
│   ├── routes/
│   │   └── newsletter.js
│   └── index.js
├── package.json
└── README.md
```

## API Endpoints

- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers (optional)
- `GET /api/health` - Health check

## License

MIT

