import React from 'react';
import FarmCalculators from '../components/FarmCalculators';
import { useApp } from '../context/AppContext';

export default function CalculatorsPage() {
  const { currentLang } = useApp();
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <FarmCalculators currentLang={currentLang} />
    </div>
  );
}
