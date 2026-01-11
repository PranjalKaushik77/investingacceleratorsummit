import React from 'react'
import { motion } from 'framer-motion'

const Philosophy = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-4">
            The Philosophy
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Less Theory.
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary mb-6">
            More Application.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Investors today have too much information. There are too many tweets and theories. But seeing an expert analyze a real business in real-time? That is rare.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: '01',
              title: 'THE CONSTRAINT',
              subtitle: '20 Minutes. Straight to the Point.',
              description: 'Our speakers don\'t waste time. They skip the history lesson and focus entirely on the core reasons to invest.'
            },
            {
              number: '02',
              title: 'THE FOCUS',
              subtitle: 'One Stock. Deep Dive.',
              description: 'No general market chat. Each expert breaks down one specific company and explains the key drivers behind its potential.'
            },
            {
              number: '03',
              title: 'THE OUTPUT',
              subtitle: 'Real Insights. Full Transparency.',
              description: 'See the logic, the risks, and the future triggers. It is a complete, professional investment case—not just a recommendation.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-primary/20 mb-4">{item.number}</div>
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{item.subtitle}</p>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-serif italic text-white font-light">
            "This is not a classroom. It is a boardroom."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy

