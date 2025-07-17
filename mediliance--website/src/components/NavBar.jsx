// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">Mediliance</div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#shareholders">Shareholders</a></li>
        <li><a href="#client">Client</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
