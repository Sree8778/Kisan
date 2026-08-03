import React, { useState } from 'react';
import { AlertTriangle, Zap, Sparkles, ShieldAlert } from 'lucide-react';
import { regionalDistricts, soilTypes } from '../data/districts';
import { cropPredictorDatabase } from '../data/crops';
import { translations } from '../data/translations';
import SaturationGauge from './Planner/SaturationGauge';
import ContrarianCropCard from './Planner/ContrarianCropCard';
import GlutWarningCard from './Planner/GlutWarningCard';

export default function SmartCropPlanner({ selectedDistrict, setSelectedDistrict, currentLang = 'en' }) {
  const [soilType, setSoilType] = useState('alluvial');
  const [landAcres, setLandAcres] = useState(3);
  const [waterAvailability, setWaterAvailability] = useState('Borewell / Irrigated');
  const [playingCropId, setPlayingCropId] = useState(null);

  const t = translations[currentLang] || translations.en;

  const crops = cropPredictorDatabase[selectedDistrict] || cropPredictorDatabase.guntur;
  const glutCrops = crops.filter(c => c.riskLevel === 'HIGH_RISK_GLUT');
  const contrarianCrops = crops.filter(c => c.riskLevel === 'HIGH_PROFIT_CONTRARIAN');

  const selectCls = "w-full bg-white border border-[var(--border-color)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-main)] font-medium outline-none focus:border-[var(--accent)]";
  const labelCls = "block text-xs font-semibold text-[var(--text-muted)] mb-1.5";

  return (
    <div className="space-y-8 animate-fade-in pb-8">
      {/* Banner */}
      <div className="bento-card p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="pill-badge mb-3">
            <ShieldAlert size={14} />
            <span>Anti-Glut Predictive Algorithm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[var(--text-main)] mb-2 leading-tight">
            Stop falling for last year's high prices
          </h2>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">
            When last year's crop price was high, thousands of nearby farmers plant it together.
            <strong className="text-[var(--text-main)] font-bold"> At harvest, over-supply crashes the price.</strong>
            {' '}Kisan tracks regional sowing density to steer you toward undersupplied, high-profit crops.
          </p>
        </div>
      </div>

      {/* Farm Parameters Configurator */}
      <div className="kisan-glass-card p-6">
        <h3 className="text-sm font-bold text-[var(--text-main)] mb-4 flex items-center gap-2">
          <Zap className="text-[var(--accent)]" size={18} />
          <span>Configure Your Farm Parameters</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelCls}>Target District / Region</label>
            <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)} className={selectCls}>
              {regionalDistricts.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Soil Classification</label>
            <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className={selectCls}>
              {soilTypes.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Farm Area (Acres): <strong className="text-[var(--accent)]">{landAcres} Acres</strong></label>
            <input
              type="range"
              min="1"
              max="50"
              value={landAcres}
              onChange={(e) => setLandAcres(Number(e.target.value))}
              className="w-full accent-[var(--accent)] mt-2 cursor-pointer"
            />
          </div>

          <div>
            <label className={labelCls}>Water Source Level</label>
            <select value={waterAvailability} onChange={(e) => setWaterAvailability(e.target.value)} className={selectCls}>
              <option value="Borewell / Irrigated">Borewell / Canal Irrigated</option>
              <option value="Rainfed (Monsoon Only)">Rainfed (Monsoon Only)</option>
              <option value="Drip Irrigation Setup">Drip Irrigation Setup</option>
            </select>
          </div>
        </div>
      </div>

      {/* Red Alert Glut Section */}
      {glutCrops.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-black text-red-600 flex items-center gap-2">
            <AlertTriangle size={20} />
            <span>{t.dangerGlut}</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {glutCrops.map(crop => (
              <div key={crop.id} className="space-y-4">
                <SaturationGauge
                  percentage={crop.saturation}
                  cropName={crop.name}
                  riskLevel={crop.riskLevel}
                  glutReason={crop.glutReason}
                  lastYearPrice={crop.lastYearPrice}
                  predictedPrice={crop.predictedPrice}
                />
                <GlutWarningCard
                  crop={crop}
                  currentLang={currentLang}
                  playingCropId={playingCropId}
                  setPlayingCropId={setPlayingCropId}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Green Alert Contrarian Section */}
      <div className="space-y-4 pt-2">
        <h3 className="text-lg font-black text-[var(--accent)] flex items-center gap-2">
          <Sparkles size={20} />
          <span>{t.safeContrarian}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contrarianCrops.map(crop => (
            <ContrarianCropCard
              key={crop.id}
              crop={crop}
              landAcres={landAcres}
              currentLang={currentLang}
              playingCropId={playingCropId}
              setPlayingCropId={setPlayingCropId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
