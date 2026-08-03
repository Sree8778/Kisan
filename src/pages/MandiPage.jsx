import React from 'react';
import MandiRatesWeather from '../components/MandiRatesWeather';
import { useApp } from '../context/AppContext';

export default function MandiPage() {
  const { currentLang, selectedDistrict } = useApp();
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <MandiRatesWeather currentLang={currentLang} selectedDistrict={selectedDistrict} />
    </div>
  );
}
