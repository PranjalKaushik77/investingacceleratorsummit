import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: "Who should attend the Investing Accelerator Summit?",
    answer: "The summit is designed for serious investors, financial professionals, and anyone looking to deepen their understanding of fundamental analysis and investment strategies."
  },
  {
    question: "What is included in the All Access Digital Pass?",
    answer: "The All Access Digital Pass includes full HD recordings of all 20 sessions, instant access to all content, and the ability to watch at your own pace."
  },
  {
    question: "What is the format of the sessions?",
    answer: "Each expert delivers a focused 20-minute deep dive into a specific business or investment topic, providing pure applied analysis with no fluff."
  },
  {
    question: "What if I miss a session?",
    answer: "No worries! All sessions are recorded in HD and available instantly through the All Access Digital Pass. You can watch them anytime, anywhere."
  },
  {
    question: "Is there a refund policy?",
    answer: "Please refer to our Terms & Conditions page for detailed refund policy information."
  },
  {
    question: "Are these buy/sell recommendations?",
    answer: "No. The summit focuses on fundamental analysis, business insights, and investment frameworks. It provides educational content, not specific buy/sell recommendations."
  },
  {
    question: "How do I access the summit?",
    answer: "After purchasing the All Access Digital Pass, you will receive instant access to all recordings through your email confirmation."
  },
  {
    question: "I have more questions. Who can I contact?",
    answer: "You can reach us at connect@investingacceleratorsummit.com for any additional questions or support."
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 md:py-32 bg-background relative border-t border-white/5 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03] hover:border-white/20 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium text-lg md:text-xl pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

