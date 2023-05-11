import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import Work from '../components/Work'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Work title="Education" />
      <Footer />
    </>
  )
}

export default Home
