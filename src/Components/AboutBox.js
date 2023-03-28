import React from "react"
import { AboutBoxContainer } from "./StyledComp.styles"
import { AiFillDollarCircle, AiFillSafetyCertificate } from 'react-icons/ai'
import {MdOutlineFreeCancellation} from "react-icons/md"
import { FaStar } from 'react-icons/fa'
import {Ri24HoursFill} from 'react-icons/ri'
import {TbArrowGuide} from 'react-icons/tb'

function AboutBox() {
    const items = [
        {
            icon: <AiFillDollarCircle size='3rem' />,
            title: 'Affordable Prices',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },
        {
            icon: <MdOutlineFreeCancellation size='3rem' />,
            title: 'Free Cancellation',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },
        {
            icon: <AiFillSafetyCertificate size='3rem' />,
            title: 'Safety and secure',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },
        {
            icon: <FaStar size='3rem' />,
            title: 'Loyalty program',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },
        {
            icon: <Ri24HoursFill size='3rem' />,
            title: '24h customer service',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },
        {
            icon: <TbArrowGuide size='3rem' />,
            title: 'destination guides',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ab id est queueMicrotask."
        },

    ]
    return (
        <>
            <AboutBoxContainer>
                <h1>Why Book With Us?</h1>
                <p>Because of 10,000+ people trust us for our good service and amenities. Besides we provide -</p>
                <div className="aboutBoxRow">
                    {
                        items.map((item) => (
                            <>
                                <div className="aboutCol">
                                    <div className="icon-box">{item.icon}</div>
                                    <div className="box-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </>
                        ))
                    }

                </div>
            </AboutBoxContainer>
        </>
    )
}

export default AboutBox