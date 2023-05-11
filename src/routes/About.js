import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'
import Extracurricular from '../components/Extracurricular'

const About = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="ABOUT." text="I am a 3rd year student." />
      <AboutContent />
      <Extracurricular/>
      <Footer />
    </>
  )
}

export default About
