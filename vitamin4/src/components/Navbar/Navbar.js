import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>My Website</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/nothome">NotHome</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
