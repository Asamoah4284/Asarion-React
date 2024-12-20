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
import Executives from './Executives'
const Home = () => {


  return (
      <div >
        <Header />
        <Hero />
        <About />
        <Service />
        <Features />
        {/* <Executives /> */}
        <Testimonials />
        <Faq />
        <Call />
        {/* <Brands/> */}
        <Footer />
    </div>
  )
}

export default Home