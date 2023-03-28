import { Nav, NavButton, NavContainer, Navlink, NavTitle } from './StyledComp.styles'
import '../App.css'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const handleMenuClick = () => {
        setClicked(prevState => !prevState)
    }
    return (
        <NavContainer>
            <NavTitle>
                <Link to='/'>Xplore</Link>
            </NavTitle>
            <div className='menu-icon'>
                <span className="material-symbols-outlined"
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={handleMenuClick}
                >{!clicked ? 'Menu' : 'close'}
                </span>
            </div>
            <Nav>
                <Navlink className={clicked ? 'navlink-active' : 'navlink'}>
                    <NavLink to='/'>Home</NavLink>
                </Navlink>
                <Navlink className={clicked ? 'navlink-active' : 'navlink'}>
                    <NavLink to='/about'>About us</NavLink>
                </Navlink>
                <Navlink className={clicked ? 'navlink-active' : 'navlink'}>
                    <NavLink to='/packages'>Packages</NavLink>
                </Navlink>
                <Navlink className={clicked ? 'navlink-active' : 'navlink'}>
                <NavLink to='/contact'>Contact</NavLink>
                </Navlink>
            </Nav>
            <NavButton>Register</NavButton>
        </NavContainer>
    )
}

export default Navbar