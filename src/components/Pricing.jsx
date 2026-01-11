import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const Pricing = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-4">
            RECORDINGS ACCESS
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12">
            All Inclusive Summit Pass
          </h3>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl md:text-4xl text-gray-500 line-through">₹15,000</span>
              <span className="text-4xl md:text-5xl font-bold text-primary">₹5,999</span>
            </div>
            <p className="text-primary font-semibold mb-8">
              You save 60% (Limited Time)
            </p>
            <p className="text-gray-400 mb-8">
              Breakdown: ₹300 per Expert Session
            </p>

            <div className="text-left max-w-md mx-auto mb-8 space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Full Access to Event Recordings (Instant)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">20 High-Conviction Stock Deep Dives</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">1-Year Access to HD Recordings</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Speaker Presentation Decks</span>
              </div>
            </div>

            <div className="mb-6">
              <span className="inline-block bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                RECORDING ACCESS
              </span>
              <p className="text-white font-semibold">AVAILABLE NOW</p>
              <p className="text-gray-400 text-sm mt-2">Secure your access to the content library.</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/900/20 transition-all text-lg mx-auto mb-6"
            >
              GET RECORDINGS - ₹5,999
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Join 1,200+ investors who attended.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

