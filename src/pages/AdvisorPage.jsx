import React from 'react';
import GlobeRadar3D from '../components/3D/GlobeRadar3D';
import SmartCropPlanner from '../components/SmartCropPlanner';
import { useApp } from '../context/AppContext';

export default function AdvisorPage() {
  const { selectedDistrict, setSelectedDistrict, currentLang } = useApp();

  return (
    <div className="space-y-8 animate-fade-in pb-8">
      <GlobeRadar3D selectedDistrict={selectedDistrict} />
      <SmartCropPlanner
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        currentLang={currentLang}
      />
    </div>
  );
}
