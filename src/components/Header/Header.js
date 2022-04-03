import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-div'>
            <div className='text-logo'>
                <h1>LUXURIOUS MOTO</h1>
            </div>
            <nav className='nav-section'>
                <Link className='nav-link' to='/'>HOME</Link>
                <Link className='nav-link' to='/review'> REVIEW</Link>
                <Link className='nav-link' to='/dashboard'>DASHBOARD</Link>
                <Link className='nav-link' to='/blogs'> BLOGS</Link>
                <Link className='nav-link' to='/about'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;