import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './about'
import Service from './service'
import Features from './features'
import Testimonials from './testimonials'
import Faq from './faq'
import Call from './call'
import Footer from './footer'
const Home = () => {
  return (
      <div >
        <Header />
        <Hero />
        <About />
        <Service />
        <Features />
        <Testimonials />
        <Faq />
        <Call />
        <Footer />
    </div>
  )
}

export default Home