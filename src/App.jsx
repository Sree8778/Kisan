import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import AdvisorPage from './pages/AdvisorPage';
import MarketplacePage from './pages/MarketplacePage';
import DoctorPage from './pages/DoctorPage';
import CalculatorsPage from './pages/CalculatorsPage';
import MandiPage from './pages/MandiPage';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/advisor" element={<AdvisorPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/mandi" element={<MandiPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
