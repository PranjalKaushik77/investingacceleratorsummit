import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // 'success', 'error', or null
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setMessage('')

    // Use environment variable for API URL, fallback to localhost for development
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    try {
      const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thank you for subscribing! You\'ll receive updates on future events.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to connect to server. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <Mail className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Subscribe to our newsletter for exclusive updates, early access to recordings, and investment insights.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-base md:text-lg"
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/900/20 transition-all text-base md:text-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  Subscribe
                </>
              )}
            </motion.button>
          </div>

          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 p-4 rounded-xl ${
                status === 'success'
                  ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                  : 'bg-red-500/10 border border-red-500/20 text-red-400'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm md:text-base">{message}</span>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Newsletter

