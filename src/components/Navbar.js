import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className='header'>
            <img className='logo' src={logo} alt="logo here" />
    
        <nav className='navbar'>
            <ul className="navbar-list">
                <li><Link className='navbar-link home-link' to="/">Home</Link></li>
                <li><Link className='navbar-link about-link' to="/about">About</Link></li>
                <li><Link className='navbar-link services-link' to="/services">Services</Link></li>
                <li><Link className='navbar-link protfolio-link' to="/protfolio">Portfolio</Link></li>
                <li><Link className='navbar-link contact-link' to="/contact">Contact</Link></li>
            </ul>
        </nav>
    
        </header>
    </>
  )
}

export default Navbar
