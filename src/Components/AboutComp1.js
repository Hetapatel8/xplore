import React from 'react'
import { AboutComp1Container } from './StyledComp.styles'
import destination from './Images/destination.png'
import bus from './Images/bus.png'
import guide from './Images/guide.png'
import vid1 from './Images/AboutVid1.mp4'


function AboutComp1() {
    return (
        <>
            <AboutComp1Container>
                <div className="row">
                    <div className="leftCol">
                        <h1>Why are we Best?</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, natus delectus hic doloribus voluptates sapiente. Vitae id debitis qui, adipisci quasi pariatur inventore sequi non molestias impedit veritatis ut quod!</p>

                        <div className="box">
                            <img src={destination}></img>
                            <div className="box-info">
                                <h3>Diverse Destinations</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates sit necessitatibus eaque iur!</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={bus} width='64px' height='64px'></img>
                            <div className="box-info">
                                <h3>Adventure Time</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates sit necessitatibus eaque iur!</p>
                            </div>
                        </div>
                        <div className="box">
                            <img src={guide}></img>
                            <div className="box-info">
                                <h3>Guide Tour</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo voluptates sit necessitatibus eaque iur!</p>
                            </div>
                        </div>
                    </div>
                    <div className="rightCol">
                        <video autoPlay muted loop >
                            <source src={vid1} type='video/mp4'></source>
                        </video>
                    </div>
                </div>
            </AboutComp1Container>
        </>
    )
}


export default AboutComp1

