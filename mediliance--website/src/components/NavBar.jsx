import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">[Logo]</div>
      <ul className="flex gap-6">
        <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
        <li><Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
        <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
        <li><Link to="/shareholder" className="text-gray-700 hover:text-blue-600">Shareholders</Link></li>
        <li><Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
