// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold">[Logo]</div>
      <ul className="flex gap-6">
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Services</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
        <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
