import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const speakers = [
  { 
    name: 'Vivek Mashrani', 
    company: 'TechnoFunda Investing',
    bio: 'SEBI Registered Investment Advisor specializing in technical and fundamental analysis integration for wealth creation.'
  },
  { 
    name: 'Ishmohit Arora', 
    company: 'SOIC',
    bio: 'Forensic expert and financial analyst with deep expertise in corporate governance and risk assessment.'
  },
  { 
    name: 'Vijay Bharadia', 
    company: 'Wallfort PMS',
    bio: 'Portfolio Manager managing significant capital with focus on value investing and long-term wealth creation.'
  },
  { 
    name: 'Kumar Saurabh', 
    company: 'Scientific Investing',
    bio: 'Quant strategist applying data-driven methodologies and rigorous analysis frameworks to investment decisions.'
  },
  { 
    name: 'Rajeev Agarwal', 
    company: 'DoorDarshi Advisors',
    bio: 'SEBI Registered IA with expertise in identifying value opportunities through comprehensive fundamental research.'
  },
  { 
    name: 'Gunjan Kabra', 
    company: 'Niveshaay',
    bio: 'Investment professional specializing in equity research and portfolio management for institutional clients.'
  },
  { 
    name: 'Parveen Yadav', 
    company: 'Market Scientist',
    bio: 'Quantitative analyst and market researcher combining scientific rigor with practical investment insights.'
  },
  { 
    name: 'Amitabh Vatsya', 
    company: 'Sadhan',
    bio: 'PMS Fund Manager with extensive experience in equity markets and strategic investment planning.'
  },
  { 
    name: 'Sonam Srivastava', 
    company: 'Wright Research',
    bio: 'Research head specializing in systematic investment strategies and quantitative market analysis.'
  },
  { 
    name: 'Vikas Gupta', 
    company: 'Omniscience Capital',
    bio: 'Capital allocator managing multi-cap portfolios with focus on risk-adjusted returns and alpha generation.'
  },
  { 
    name: 'Rusmik Oza', 
    company: '9 Rays EquiResearch',
    bio: 'Equity research expert with deep understanding of sectoral trends and company fundamentals.'
  },
  { 
    name: 'Akshay Jogani', 
    company: 'Xponent Tribe',
    bio: 'Investment strategist focusing on growth companies and emerging market opportunities.'
  },
  { 
    name: 'Raghav Aggarwal', 
    company: 'Fluid AI',
    bio: 'Technology-driven investment professional leveraging AI and machine learning in investment decision-making.'
  },
  { 
    name: 'Abhinav Aggarwal', 
    company: 'Fluid AI',
    bio: 'Fintech expert combining artificial intelligence with traditional investment analysis for superior insights.'
  },
  { 
    name: 'Ankit Kanodia', 
    company: 'Zen Nivesh',
    bio: 'Investment advisor practicing disciplined value investing with emphasis on margin of safety.'
  },
  { 
    name: 'Ganesh Nagarsekar', 
    company: 'GSN Invest',
    bio: 'Fund manager with proven track record in identifying high-quality businesses at attractive valuations.'
  },
  { 
    name: 'Nitin Mangal', 
    company: 'Trudence Capital',
    bio: 'Portfolio manager focusing on long-term value creation through prudent capital allocation strategies.'
  },
  { 
    name: 'Piyush Sarawagi', 
    company: 'Agility Advisors',
    bio: 'Investment advisor specializing in dynamic portfolio strategies and market-responsive investment approaches.'
  },
  { 
    name: 'Shashank Mahajan', 
    company: 'Value Educator',
    bio: 'Value investing practitioner and educator with expertise in teaching fundamental analysis and valuation.'
  },
  { 
    name: 'Shubham Sethi', 
    company: 'The Logical Investor',
    bio: 'Investment professional advocating logical, evidence-based investment approaches for wealth creation.'
  },
  { 
    name: 'Gaurav Agarwal', 
    company: 'Nine One Capital',
    bio: 'Capital manager with focus on identifying undervalued opportunities and executing disciplined investment strategies.'
  },
]

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const openPopup = (speaker) => {
    setSelectedSpeaker(speaker)
  }

  const closePopup = () => {
    setSelectedSpeaker(null)
  }

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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white font-serif mb-6">
            The Architects of Alpha.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
            We have assembled a "Special Forces" unit of the Indian investment landscape. This lineup includes SEBI Registered IAs, Forensic Experts, Quant Strategists, and PMS Fund Managers. These are not just commentators; they are practitioners who manage significant capital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:bg-white/[0.05] cursor-pointer"
              onClick={() => openPopup(speaker)}
            >
              <p className="text-white font-semibold text-lg mb-1 hover:text-primary transition-colors">
                {speaker.name}
              </p>
              <p className="text-gray-400 text-sm md:text-base">{speaker.company}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={closePopup}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#131825] border border-white/10 rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative">
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>

                {/* Content */}
                <div className="pr-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-xl text-primary mb-6 font-semibold">
                    {selectedSpeaker.company}
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {selectedSpeaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Speakers
