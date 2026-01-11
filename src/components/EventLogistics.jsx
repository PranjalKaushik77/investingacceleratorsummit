import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Video, FileText } from 'lucide-react'

const EventLogistics = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-8">
            Event Logistics
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">Held on Sunday, Dec 21</span>
            </div>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">Recordings Available Now</span>
            </div>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-6 py-4">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-white font-medium">Presentation Decks Included</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-left"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              "We designed this format because we value your time. In 8 hours, we delivered more actionable research than you could consume in 6 months of reading. The recordings capture every insight."
            </p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-white font-semibold text-lg">CA Utkarsh Pandey</p>
              <p className="text-gray-400 text-sm">Convener</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventLogistics

