// src/App.jsx
import React from 'react';
import Navbar from './components/NavBar';
import Router from './router';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
