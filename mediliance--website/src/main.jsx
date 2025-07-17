import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import Router from './router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
