import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const HomePage          = lazy(() => import('./pages/HomePage'));
const Service        = lazy(() => import('./pages/Services'));
const Contact           = lazy(() => import('./pages/Contact'));
const AboutUs           = lazy(() => import('./pages/About'));
const ShareHolders           = lazy(() => import('./pages/ShareHolder'));

export default function Router({ go }) {
  return (
    <Routes>
      <Route path="/HomePage"   element={<HomePage go={go} />} />
      <Route path="/contact" element={<Contact go={go} />} />
      <Route path="/About" element={<AboutUs go={go} />} />
      <Route path="/ShareHolder" element={<ShareHolders go={go} />} />
      <Route path="/Services" element={<Service go={go} />} />


    </Routes>
  );
}
