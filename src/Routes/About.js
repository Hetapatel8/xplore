import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import AImage from '../Components/Images/AboutImg.jpg'
import AboutComp1 from '../Components/AboutComp1.js'
import AboutBox from '../Components/AboutBox'
import ImageBox from '../Components/ImageBox'
import Footer from '../Components/Footer'


function About() {
  return (
    <>
      <Navbar />
      <Hero
        CName='hero-mid' HeroImg={AImage} HeroTitle={`About xplore`}
        HeroText={`Learn more about us.`}
        HeroButtonText='Explore More'
        HeroButton='AboutBtn'
      />
      <AboutComp1 />
      <AboutBox />
      <ImageBox />
      <Footer />
      
    </>
  )
}

export default About