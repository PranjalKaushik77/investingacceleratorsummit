import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-background border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="mailto:connect@investingacceleratorsummit.com"
              className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
            >
              connect@investingacceleratorsummit.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a
              href="#schedule"
              className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
            >
              Schedule
            </a>
            <a
              href="#disclaimer"
              className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
            >
              Disclaimer
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base"
            >
              Terms & Conditions
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

