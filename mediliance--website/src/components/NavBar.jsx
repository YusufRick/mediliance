// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">Mediliance</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/client">Clients</Link></li>
        <li><Link to="/contact">Email</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
