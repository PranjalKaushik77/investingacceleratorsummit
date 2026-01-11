import React from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'

const Hero = () => {
  return (
    <section className="min-h-screen bg-background text-gray-300 font-sans selection:bg-primary/30 selection:text-white relative overflow-hidden flex flex-col items-center justify-center p-6 py-20">
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-16 h-auto mx-auto mb-8 opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <Logo className="w-full h-full" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400"
        >
          20 Expert. 20 Minute Each. 20 Business Deep Dive.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg mx-auto leading-relaxed font-light italic"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Pure Applied Analysis. No Fluff.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          The Summit has concluded. Missed the live action? No worries — get full HD recordings of all 20 sessions. (Instant Access).
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/900/20 transition-all text-lg"
          >
            GET RECORDINGS
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

