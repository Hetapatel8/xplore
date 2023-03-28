import React from 'react'
import { FaPhoneAlt} from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"

function ContactBox() {
    const items = [
        {
            icon: <FaPhoneAlt size='3rem' />,
            title: 'Contact Us',
            text: '+123 4455677',
        },
        {
            icon: <MdEmail size='3rem' />,
            title: 'Gmail',
            text: 'Xplore.ag@gmail.com',
        },
        {
            icon: <MdLocationOn size='3rem'/>,
            title: 'Location',
            text: '345, main street USA',
        },

    ]
  return (
    <>
    <div className="contactBoxContainer">
        <div className="CBoxRow">
            {
                items.map((item) => (
                    <>
                        <div className="CBoxCol">
                            <span className='mb-3'>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default ContactBox