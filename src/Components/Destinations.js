import React from 'react'
import './DestinationStyles.css'


function Destinations() {
    const desColPStyle = {
        marginTop: '4px',
        fontWeight: 200,
        fontSize: '14px'
    }
    const starStyle = {
        color: 'yellow',
        fontSize: '15px',
        fontWeight: 'bold',
        marginTop: '4px',
    }
    return (
        <>
            <div className="destination">
                <h1>The Wonders Of Nature</h1>
                <p>We seek to provide the authentic content for traveller around the world.</p>

                <div className="des-row">
                    <div className="des-col1">
                        <div className="des-colBox">
                            <h4>Nusa Penida</h4>
                            <p>
                                <span className="material-symbols-outlined">location_on</span>Indonesia
                            </p>
                            <p style={desColPStyle}>Nusa Penida is an island located near the southeastern Indonesian island of Bali and a district of Klungkung Regency that includes the neighbouring small island of Nusa Lembongan and twelve even smaller islands. </p>
                            <span className="material-symbols-outlined" style={starStyle}
                            >star star star star star</span>
                        </div>
                    </div>
                    <div className="des-col2">
                        <div className="des-colBox">
                            <h4>Masai Mara</h4>
                            <p>
                                <span className="material-symbols-outlined">location_on</span>Kenya
                            </p>
                            <p style={desColPStyle}>Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos.</p>
                            <span className="material-symbols-outlined" style={starStyle}
                            >star star star star </span>

                        </div>
                    </div>
                    <div className="des-col3">
                        <div className="des-colBox">
                            <h4>Andaman Nikobar</h4>
                            <p>
                                <span className="material-symbols-outlined">location_on</span>India
                            </p>
                            <p style={desColPStyle}>The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests</p>
                            <span className="material-symbols-rounded" style={starStyle}
                            >star star star star star</span>
                        </div>
                    </div>
                    <div className="des-col4">
                        <div className="des-colBox"><h4>Broken Beach</h4>
                            <p>
                                <span className="material-symbols-outlined">location_on</span>Indonesia
                            </p>
                            <p style={desColPStyle}>Broken Beach is so named because a portion of the cliff near the seashore has collapsed, creating a circular shape that measures approximately 100 meters</p>
                            <span className="material-symbols-rounded" style={starStyle}
                            >star star star star </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinations