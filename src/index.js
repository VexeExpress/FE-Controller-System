import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PartnerPage } from './pages/PartnerPage'
import MainLayout from './components/layouts/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><App /></MainLayout>} />
        <Route path="company" element={<MainLayout><PartnerPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

