import React from 'react';
import { Scan, Activity } from 'lucide-react';

export default function HolographicScanner3D({ image, isScanning }) {
  return (
    <div className="relative w-full h-52 rounded-lg overflow-hidden bg-[var(--bg-subtle)] border border-[var(--border-color)]">
      {/* Target Image */}
      {image ? (
        <img src={image} alt="Diagnostic Scan Target" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)]">
          <Scan size={40} className="text-[var(--accent)] mb-2" />
          <span className="text-xs font-bold">Photo Target Ready</span>
        </div>
      )}

      {/* Scan Sweep (kept — signals "AI is analyzing") */}
      {isScanning && (
        <>
          <div className="laser-scanner-grid"></div>

          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[var(--accent)]"></div>
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[var(--accent)]"></div>
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[var(--accent)]"></div>
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[var(--accent)]"></div>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white text-[var(--accent)] border border-[var(--accent)] text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1.5">
            <Activity size={12} />
            <span>ANALYZING...</span>
          </div>
        </>
      )}
    </div>
  );
}
