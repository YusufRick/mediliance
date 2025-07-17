import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const Service = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const AboutUs = lazy(() => import('./pages/About'));
const ShareHolders = lazy(() => import('./pages/ShareHolder'));
const Client = lazy(() => import('./pages/Client'));

export default function Router({ go }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage go={go} />} />
      <Route path="/services" element={<Service go={go} />} />
      <Route path="/about" element={<AboutUs go={go} />} />
      <Route path="/shareholder" element={<ShareHolders go={go} />} />
      <Route path="/contact" element={<Contact go={go} />} />
      <Route path="/client" element={<Client go={go} />} />
    </Routes>
  );
}
