import React from 'react'
// import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
// import Footer from './components/Footer'

function ALL() {
  return (
    <div className=''>
      {/* <Navbar/> */}
      <HeroSection />
      <Testimonials />



      <FAQ />

      {/* <Footer/> */}
    </div>
  )
}

export default ALL
