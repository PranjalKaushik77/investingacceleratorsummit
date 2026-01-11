import express from 'express'
import Subscriber from '../models/Subscriber.js'

const router = express.Router()

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Please provide a valid email address' })
    }

    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email: email.toLowerCase() })

    if (existingSubscriber) {
      return res.status(400).json({ message: 'This email is already subscribed' })
    }

    // Create new subscriber
    const subscriber = new Subscriber({
      email: email.toLowerCase(),
    })

    await subscriber.save()

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      subscriber: {
        email: subscriber.email,
        createdAt: subscriber.createdAt,
      },
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    res.status(500).json({ message: 'Internal server error. Please try again later.' })
  }
})

// Get all subscribers (optional - for admin use)
router.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}).sort({ createdAt: -1 }).select('email createdAt')
    res.json({ subscribers, count: subscribers.length })
  } catch (error) {
    console.error('Get subscribers error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

export default router

