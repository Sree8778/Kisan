import React from 'react';
import AIDoctorAdvisory from '../components/AIDoctorAdvisory';
import { useApp } from '../context/AppContext';

export default function DoctorPage() {
  const { currentLang } = useApp();
  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <AIDoctorAdvisory currentLang={currentLang} />
    </div>
  );
}
