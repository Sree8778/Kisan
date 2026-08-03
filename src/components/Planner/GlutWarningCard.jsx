import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { translations } from '../../data/translations';
import { speakText, stopSpeech } from '../../utils/audioHelper';

export default function GlutWarningCard({ crop, currentLang, playingCropId, setPlayingCropId }) {
  const t = translations[currentLang] || translations.en;

  const handleSpeak = () => {
    if (playingCropId === crop.id) {
      stopSpeech();
      setPlayingCropId(null);
    } else {
      setPlayingCropId(crop.id);
      const text = currentLang === 'hi'
        ? `खतरा! ${crop.name} की फसल मत बोएं। ${crop.glutReason} इससे मंडी में भाव गिरेगा।`
        : `Danger! Avoid planting ${crop.name}. ${crop.glutReason}`;
      speakText(text, currentLang);
      setTimeout(() => setPlayingCropId(null), 8000);
    }
  };

  return (
    <div className="glass-card p-5 border-l-2 border-l-red-600">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <span className="badge badge-glut-danger mb-1">
            DO NOT PLANT ({crop.saturation}% Sown)
          </span>
          <h4 className="text-xl font-black text-[var(--text-main)]">{crop.name}</h4>
          <p className="text-xs font-medium text-[var(--text-muted)]">{crop.type} • {crop.durationDays} Days</p>
        </div>

        <button
          onClick={handleSpeak}
          className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
            playingCropId === crop.id
              ? 'bg-red-600 text-white'
              : 'bg-red-50 text-red-700 hover:bg-red-100'
          }`}
        >
          {playingCropId === crop.id ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{playingCropId === crop.id ? t.stopAudio : t.listenAdvice}</span>
        </button>
      </div>

      <div className="bg-red-50 p-3 rounded-lg border border-red-200 mb-3">
        <p className="text-xs text-red-800 leading-relaxed font-semibold">
          {crop.glutReason}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-[var(--border-color)] text-[var(--text-main)]">
        <span>Switch to: <strong className="text-[var(--accent)]">{crop.alternativeSuggestion}</strong></span>
        <span>Pred: {crop.predictedPrice}</span>
      </div>
    </div>
  );
}
