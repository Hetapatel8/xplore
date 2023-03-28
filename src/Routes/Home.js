import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import HImage from '../Components/Images/HeroImgC.jpg'
import Destinations from '../Components/Destinations'
import HeroBox from '../Components/HeroBox'
import Packages from '../Components/PackagesComp'
import Reasons from '../Components/Reasons'
import VideoInfo from '../Components/VideoInfo'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <Hero 
    CName='hero' HeroImg={HImage} HeroTitle={`Let's Explore The World \n With Xplore`}
    HeroText={`Travelling isn't always about running away from things, \n sometimes its's about running into what you truly want. `}
    HeroButtonText='Explore More'
    HeroButton='heroBtn'
    />
    <HeroBox />
    <Destinations />
    <Packages />
    <Reasons />
    <VideoInfo />
    <Testimonials />
    <Footer />
    </>
  )
}

export default Home

// https://www.behance.net/gallery/165714257/Travel-Website-Design-Using-WordPress?tracking_source=search_projects%7CTravel+Website

//https://www.behance.net/gallery/165667389/Travel-Agency-Website?tracking_source=search_projects%7CTravel+Website