import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import CImage from '../Components/Images/ContactImg.jpg'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import ContactBox from '../Components/ContactBox'


function Contact() {
  return (
    <>
    <Navbar />
    <Hero 
     CName='hero-mid' HeroImg={CImage} HeroTitle={`Contact`}
     HeroButtonText='Explore More' 
     HeroButton='AboutBtn'
    />
    <ContactForm />
    <ContactBox />
    <Footer />
    </>
  )
}

export default Contact