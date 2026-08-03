import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { languages } from '../../data/translations';
import { useApp } from '../../context/AppContext';

export default function LanguageSwitcher() {
  const { currentLang, setCurrentLang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const active = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(o => !o)}
        className="flex items-center gap-1.5 border border-[var(--border-color)] hover:bg-[var(--bg-subtle)] px-3 py-1.5 rounded-full text-xs font-bold text-[var(--text-main)] transition-colors"
      >
        <Globe size={14} className="text-[var(--accent)]" />
        <span>{active.flag} {active.native}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-[var(--border-color)] rounded-xl shadow-lg overflow-hidden z-50 animate-fade-in">
            {languages.map(l => (
              <button
                key={l.code}
                onClick={() => { setCurrentLang(l.code); setIsOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-xs font-bold flex items-center gap-2 transition-colors ${
                  l.code === currentLang ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--text-muted)] hover:bg-[var(--bg-subtle)]'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.native}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
