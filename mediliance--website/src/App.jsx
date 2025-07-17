// src/App.jsx
import React from 'react';
import Navbar from './components/NavBar';
import Router from './router.jsx';

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
