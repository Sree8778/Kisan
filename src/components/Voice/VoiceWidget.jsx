import React, { useState } from 'react';
import { Mic, Volume2, VolumeX, Sparkles, X } from 'lucide-react';
import { translations } from '../../data/translations';
import { speakText, stopSpeech } from '../../utils/audioHelper';

export default function VoiceWidget({ currentLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const t = translations[currentLang] || translations.en;

  const handleMicClick = () => {
    setIsListening(true);
    speakText(t.voiceListening, currentLang);
    setTimeout(() => {
      setIsListening(false);
    }, 4000);
  };

  const handleListenOverview = () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const helpMsg = currentLang === 'hi'
        ? "किसान एआई वॉयस असिस्टेंट में आपका स्वागत है। आप बोलकर लाल निशान वाली नुकसानदायक फसल और हरे निशान वाली मुनाफे वाली फसल के बारे में जान सकते हैं।"
        : "Welcome to Kisan AI Voice Assistant. Ask or listen to crop choices, livestock prices, and animal doctor guidance.";
      speakText(helpMsg, currentLang);
      setTimeout(() => setIsPlayingAudio(false), 9000);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Orb Trigger Button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[var(--text-main)] text-white flex items-center justify-center shadow-lg voice-orb-active cursor-pointer transition-transform hover:scale-105"
          title="Open Kisan Voice AI"
        >
          <Sparkles size={22} />
        </button>
      ) : (
        /* Floating Widget Panel */
        <div className="w-80 bg-white border border-[var(--border-color)] rounded-xl p-5 shadow-lg space-y-4 animate-fade-in text-[var(--text-main)]">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div>
                <h4 className="text-sm font-black leading-none">Kisan AI Voice Orb</h4>
                <span className="text-[10px] text-[var(--accent)] font-bold">Multilingual AI Voice</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]"
            >
              <X size={18} />
            </button>
          </div>

          {/* Voice Mic Orb Center */}
          <div className="py-4 text-center space-y-3">
            <button
              onClick={handleMicClick}
              className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-red-500 text-white ring-8 ring-red-100'
                  : 'bg-[var(--text-main)] text-white hover:scale-105'
              }`}
            >
              <Mic size={32} />
            </button>
            <p className="text-xs text-[var(--text-muted)] font-medium">
              {isListening ? t.voiceListening : t.speakInstruction}
            </p>
          </div>

          {/* Read Aloud Button */}
          <button
            onClick={handleListenOverview}
            className="btn-primary w-full py-2.5 rounded-lg text-xs justify-center"
          >
            {isPlayingAudio ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isPlayingAudio ? t.stopAudio : t.listenAdvice}</span>
          </button>
        </div>
      )}
    </div>
  );
}
