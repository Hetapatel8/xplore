import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa"
import { MdCopyright, MdEmail, MdLocationOn } from "react-icons/md"
import { FooterContainer } from './StyledComp.styles'

function Footer() {
    return (
        <>
            <FooterContainer>

                <div className="topRow">
                    <div className="topCol">
                        <h1>Xplore</h1>
                        <p>Choose Your Favourite Destination.</p>
                    </div>
                    <div className="topCol">
                        <ul>
                            <li><a href=""><FaFacebookSquare size='2rem' /></a></li>
                            <li><a href=""><FaInstagramSquare size='2rem' /></a></li>
                            <li><a href=""><FaTwitterSquare size='2rem'/></a></li>
                            <li><a href=""><FaYoutubeSquare size='2rem' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottomRow">
                    <div className='bottomCol'>
                        <h4>Company</h4>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/packages'>Packages</a></li>
                            <li><a href='/contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='bottomCol'>
                        <h4>Bookings</h4>
                        <ul>
                            <li><a href='#'>Lift Tickets</a></li>
                            <li><a href='#'>Season Passes</a></li>
                            <li><a href='#'>Vacation Packages</a></li>
                        </ul>
                    </div>
                    <div className='bottomCol'>
                        <h4>Support</h4>
                        <ul>
                            <li><a href='#'>Help & Support</a></li>
                            <li><a href='#'>Terms & Conditions</a></li>
                            <li> <a href='#'>Buying Policy</a></li>
                            <li><a href='#'>24/7 Services</a></li>
                        </ul>
                    </div>
                    <div className='bottomCol'>
                        <h4>Communication</h4>
                        <div className="phone">
                            <a href='#'><FaPhoneAlt size='1.2rem' /></a>
                            <a href='#'>+123 4455677</a>
                        </div>
                        <div className="phone">
                            <a href='#'><MdEmail size='1.5rem' /></a>
                            <a href='#'>Xplore@gmail.com</a>
                        </div>
                        <div className="phone">
                            <a href='#'><MdLocationOn size='1.5rem' /></a>
                            <a href='#'>345, main street USA</a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="hrRow">
                    <MdCopyright size='1rem'></MdCopyright>
                    <p>2023 Powered By Xplore </p>
                </div>
            </FooterContainer>
        </>
    )
}

export default Footer