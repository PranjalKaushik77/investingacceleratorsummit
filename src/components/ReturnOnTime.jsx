import React from 'react'
import { motion } from 'framer-motion'

const ReturnOnTime = () => {
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
            Return on Time Invested
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            8 Hours. 20 Case Studies.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
            One Masterclass.
          </p>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            This is not about getting fish. It is about learning to fish. Elevate your own research process by observing the rigor of the experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              number: '01',
              title: 'THE STANDARD',
              subtitle: 'Research Depth',
              description: 'Move beyond simple screeners. Witness the intensity of analysis—spanning annual reports to industry data—required to truly understand a business model at an institutional level.'
            },
            {
              number: '02',
              title: 'THE STRUCTURE',
              subtitle: 'Thesis Architecture',
              description: 'Information is noise; a thesis is a signal. Observe how experts synthesize complex data points into a coherent, intellectually honest investment argument.'
            },
            {
              number: '03',
              title: 'THE DEFENSE',
              subtitle: 'Blindspot Detection',
              description: 'What are you missing? Learn to identify the subtle risks—regulatory, competitive, or governance-related—that often escape the retail eye.'
            },
            {
              number: '04',
              title: 'THE DISCIPLINE',
              subtitle: 'Valuation Logic',
              description: 'Price is what you pay; value is what you get. See diverse valuation frameworks in action to understand how professionals determine a margin of safety.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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
          className="text-center mt-12 pt-8 border-t border-white/5"
        >
          <p className="text-sm text-gray-500 italic">
            * The analysis presented is for educational purposes only and does not constitute financial advice or stock recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ReturnOnTime

