import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <h1>LUXURIOUS MOTO</h1>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/review'> Review</Link>
            </nav>
        </div>
    );
};

export default Header;