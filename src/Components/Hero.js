import React from 'react'
import './HeroStyles.css'


function Hero(props) {
    const {HeroImg, HeroTitle, HeroText, CName, HeroButtonText, HeroButton} = props
  return (
    <>
    <div className={CName}>
        <img src={HeroImg} alt='heroImg'></img>
        <div className="hero-text">
            <h1>{HeroTitle}</h1>
            <p>{HeroText}</p>
            <a href='/packages'><button className={HeroButton}>{HeroButtonText}</button></a>
        </div>
    </div>
    </>
  )
}

export default Hero