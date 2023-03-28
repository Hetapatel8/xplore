import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import SImage from '../Components/Images/ServiceImg.jpg'
import PackagesComp from '../Components/PackagesComp'
import Footer from '../Components/Footer'

function Packages() {
  return (
    <>
    <Navbar />
    <Hero
    CName='hero-mid' HeroImg={SImage} HeroTitle={`Xplore Packages`}
    HeroText={`If you take any of our booking services here, you get all kinds of benefits from us.`}
    HeroButton='AboutBtn'
     />
    <PackagesComp pTitle= 'Mountains Packages'/>
    <PackagesComp pTitle= 'Beach Packages'/>
    <PackagesComp pTitle= 'Trekking Packages'/>
    <Footer />
    </>
  )
}

export default Packages