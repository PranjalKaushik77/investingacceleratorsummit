import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Portfolio Manager",
    company: "Investment Firm",
    content: "The summit provided incredible insights into fundamental analysis. Each 20-minute session was packed with actionable knowledge. Highly recommend to any serious investor.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Financial Analyst",
    company: "Asset Management",
    content: "Pure applied analysis with no fluff - exactly what I needed. The recordings allowed me to learn at my own pace. One of the best investment education experiences I've had.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Individual Investor",
    company: "Self-employed",
    content: "As someone building my investment knowledge, this summit was invaluable. The expert speakers broke down complex concepts in digestible 20-minute sessions. Worth every penny.",
    rating: 5
  },
  {
    name: "Deepika Singh",
    role: "Research Head",
    company: "Financial Services",
    content: "The quality of speakers and depth of content exceeded expectations. The HD recordings are crystal clear, and I can revisit sessions whenever I need a refresher.",
    rating: 5
  },
  {
    name: "Vikram Reddy",
    role: "Wealth Advisor",
    company: "Private Banking",
    content: "Practical frameworks and real-world insights from market veterans. This summit elevated my understanding of fundamental analysis significantly.",
    rating: 5
  },
  {
    name: "Anjali Mehta",
    role: "Investment Strategist",
    company: "Hedge Fund",
    content: "Each session delivered exactly what was promised - deep dives with applied analysis. The variety of experts and topics made this a comprehensive learning experience.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
          >
            <Quote className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-4">
            What Our Attendees Say
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Join 1,200+ investors who attended and transformed their understanding of fundamental analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                "{testimonial.content}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-base md:text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

