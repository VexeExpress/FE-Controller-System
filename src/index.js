import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PartnerPage } from './pages/BMS/PartnerPage'
import MainLayout from './layouts/MainLayout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="company" element={<MainLayout><PartnerPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

