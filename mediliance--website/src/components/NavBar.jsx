// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">[Logo]</div>

        {/* Burger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 relative z-50"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-1`} />
            <span className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" className="text-gray-800 hover:text-blue-600">Services</Link></li>
          <li><Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link></li>
          <li><Link to="/shareholder" className="text-gray-800 hover:text-blue-600">Shareholders</Link></li>
          <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-white shadow-md px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <ul
          className={`flex flex-col gap-4 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <li><Link to="/" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600">Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600">Services</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600">About</Link></li>
          <li><Link to="/shareholder" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600">Shareholders</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
