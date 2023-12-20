import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from './../assets/contact.png'
import menu from '../assets/menu.png'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='navbar'>
            <img src={logo} alt='Logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={60} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='contactsPage' spy={true} offset={60} duration={500} className='desktopMenuListItem'>Tech Stack</Link>

            </div>
            <button className='desktopBtn' onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>
                <img src={contactImg} alt='Contact' className='desktopBtnImg' />Contact me
            </button>
            <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{ display: showMenu ? 'flex' : "none" }}>
                <Link activeClass='active' to='intro' spy={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} offset={100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='contactsPage' spy={true} offset={50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Tech Stack</Link>
                <Link activeClass='active' to='contact' spy={true} offset={50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav >
    )
}

export default Navbar