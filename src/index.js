import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PartnerPage } from './pages/PartnerPage'
import MainLayout from './components/layouts/MainLayout';
import { Company } from './pages/Company'
import { CompanyDetails } from './pages/CompanyDetail'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><App /></MainLayout>} />
        <Route path="thanh" element={<MainLayout><PartnerPage /></MainLayout>} />
        <Route path="quang" element={<MainLayout><Company /></MainLayout>} />
        <Route path="/quang/details/:id" element={<MainLayout><CompanyDetails /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

