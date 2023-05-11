import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Experience from '../components/Experience'

const MyWork = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="EXPERIENCE" text="Internships" />
      <Experience/>
      <Footer />
    </>
  )
}

export default MyWork
