import React from 'react'
import { ReasonContainer } from './StyledComp.styles'

function Reasons() {
    const items = [
        {
            icon: 'handshake',
            text: 'Tried and Trusted',
            subText: `we're trusted worldwide by 20 \n  million travellers just like you.`,
        },
        {
            icon: 'communication',
            text: 'Reliable Support',
            subText: `We're here for you. Reach out to us \n anytime by email, phone or chat.`,
        },
        {
            icon: 'groups',
            text: 'One-stop Travel Partner',
            subText: `Your search ends here. We've got \n your entire trip covered!`,
        },
    ]
    const iconsStyle = {
        fontSize: '58px',
        color: '#00c2c5'
    }
    return (
        <>
            <ReasonContainer>
            <h1>Why Choose Us</h1>
                <div className="itemRow">

                {
                    items.map((item) => (
                        <>
                            <div className="itemsContainer">
                                <div className="itemBox">
                                    <span className="material-symbols-rounded"
                                    style={iconsStyle}
                                    >{item.icon}</span>
                                </div>
                                <h3>{item.text}</h3>
                                <p>{item.subText}</p>
                            </div>
                        </>
                    ))
                }
                </div>
            </ReasonContainer>
        </>
    )
}

export default Reasons