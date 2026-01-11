import React from 'react'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Speakers from './components/Speakers'
import ReturnOnTime from './components/ReturnOnTime'
import EventLogistics from './components/EventLogistics'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-light">
      <Hero />
      <Philosophy />
      <Speakers />
      <ReturnOnTime />
      <EventLogistics />
      <Testimonials />
      <Newsletter />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

