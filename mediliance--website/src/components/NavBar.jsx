// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 mb-2 md:mb-0">
          [Logo]
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
          {[
            { path: '/', label: 'Home' },
            { path: '/services', label: 'Services' },
            { path: '/about', label: 'About' },
            { path: '/shareholder', label: 'Shareholders' },
            { path: '/contact', label: 'Contact' },
          ].map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="relative text-gray-800 hover:text-blue-600 transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
