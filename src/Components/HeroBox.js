import React from 'react'
import './HeroStyles.css'

function HeroBox() {
    const iconStyle = {
        fontSize: '18px',
        color: '#00c2c5',
        fontWeight: 1000,
        paddingRight: '4px'
    }
    return (
        <>
            <div className="heroBox">
                <div className="heroBox-row">
                    <div className="heroBox-col">
                        <p>
                            <span className="material-symbols-rounded" style={iconStyle}>location_on</span>
                            Destination
                        </p>
                        <input type='text' placeholder=' Dianmond Beach'></input>
                    </div>
                    <div className="heroBox-col">
                        <p><span className="material-symbols-rounded" style={iconStyle}>calendar_today</span>
                            Check In
                        </p>
                        <input type='date'></input>
                    </div>
                    <div className="heroBox-col">
                        <p><span className="material-symbols-rounded" style={iconStyle}>calendar_today</span>
                            Check Out
                        </p>
                        <input type='date'></input>
                    </div>
                    <div className="heroBox-col">
                        <p><span className="material-symbols-rounded" style={iconStyle}>group</span>
                            Guest?
                        </p>
                        <input type='number' style={{ width: '120px' }}></input>
                    </div>
                    <div className="heroBox-col">
                        <button className='heroBox-btn'>Search Place
                            <span class="material-symbols-outlined">
                                trending_flat
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBox