import React, { useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { translations } from '../../data/translations';
import { speakText, stopSpeech } from '../../utils/audioHelper';
import SeedOrderModal from './SeedOrderModal';

export default function ContrarianCropCard({ crop, landAcres, currentLang, playingCropId, setPlayingCropId }) {
  const [isSeedModalOpen, setIsSeedModalOpen] = useState(false);
  const t = translations[currentLang] || translations.en;
  const calculatedTotalProfit = parseInt(crop.projectedNetProfit.replace(/[^0-9]/g, '')) * landAcres;

  const handleSpeak = () => {
    if (playingCropId === crop.id) {
      stopSpeech();
      setPlayingCropId(null);
    } else {
      setPlayingCropId(crop.id);
      const text = currentLang === 'hi'
        ? `उत्तम! ${crop.name} बोने के लिए सबसे बढ़िया फसल है। ${crop.glutReason}`
        : `Great choice! Plant ${crop.name}. ${crop.glutReason}`;
      speakText(text, currentLang);
      setTimeout(() => setPlayingCropId(null), 8000);
    }
  };

  return (
    <>
      <div className="glass-card p-5 border-l-2 border-l-[var(--accent)]">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="badge badge-profit-safe mb-1">
              HIGHLY RECOMMENDED ({crop.saturation}% Sown)
            </span>
            <h4 className="text-xl font-black text-[var(--text-main)]">{crop.name}</h4>
            <p className="text-xs font-medium text-[var(--text-muted)]">{crop.type} • Water Need: {crop.waterNeed}</p>
          </div>

          <button
            onClick={handleSpeak}
            className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
              playingCropId === crop.id
                ? 'bg-[var(--text-main)] text-white'
                : 'bg-[var(--bg-subtle)] text-[var(--text-main)] hover:bg-[var(--border-color)]'
            }`}
          >
            {playingCropId === crop.id ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{playingCropId === crop.id ? t.stopAudio : t.listenAdvice}</span>
          </button>
        </div>

        <div className="bg-[var(--accent-soft)] p-3 rounded-lg border border-[#b7e4dd] mb-3">
          <p className="text-xs text-[var(--text-main)] leading-relaxed font-semibold">
            {crop.glutReason}
          </p>
        </div>

        {/* Net Profit Projections */}
        <div className="bg-[var(--bg-subtle)] border border-[var(--border-color)] p-3 rounded-lg flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[var(--text-muted)] font-medium block">Total Projected Profit ({landAcres} Acres)</span>
            <span className="text-lg font-black text-[var(--accent)]">
              ₹ {calculatedTotalProfit.toLocaleString('en-IN')}
            </span>
          </div>
          <button
            onClick={() => setIsSeedModalOpen(true)}
            className="btn-primary text-xs px-3.5 py-2 rounded-lg"
          >
            <span>Order Seed</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {isSeedModalOpen && (
        <SeedOrderModal
          crop={crop}
          landAcres={landAcres}
          onClose={() => setIsSeedModalOpen(false)}
        />
      )}
    </>
  );
}
