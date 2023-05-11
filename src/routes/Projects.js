import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import PricingCard from '../components/PricingCard'
import WorkProject from '../components/WorkProject';
import Certificates from '../components/Certificates'

const Projects = () => {
  return (
    <>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Some of my recent works" />
      < WorkProject title="Projects" />
      {/* <PricingCard /> */}
      <Certificates/>
      <Footer />


    </>
  )
}

export default Projects
