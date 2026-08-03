import React from 'react';
import { Globe, TrendingDown, TrendingUp } from 'lucide-react';

export default function GlobeRadar3D({ selectedDistrict }) {
  return (
    <div className="bento-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="space-y-2 flex-1">
        <span className="pill-badge">
          <Globe size={13} />
          <span>Regional Sowing Saturation</span>
        </span>
        <h3 className="text-xl font-black text-[var(--text-main)]">Live Regional Sowing Overview</h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium max-w-lg">
          Kisan tracks regional sowing density across agricultural hubs — flagging over-sown crops before harvest crashes the price, and surfacing undersupplied, high-profit alternatives.
        </p>
      </div>

      <div className="flex gap-3 shrink-0">
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-center">
          <TrendingDown size={16} className="text-red-600 mx-auto mb-1" />
          <span className="text-[10px] font-bold text-red-700 uppercase tracking-wide block">Over-Sown</span>
          <span className="text-xs text-red-600 font-medium">Price crash risk</span>
        </div>
        <div className="bg-[var(--accent-soft)] border border-[#b7e4dd] rounded-lg px-4 py-3 text-center">
          <TrendingUp size={16} className="text-[var(--accent)] mx-auto mb-1" />
          <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-wide block">Under-Sown</span>
          <span className="text-xs text-[var(--accent)] font-medium">High profit</span>
        </div>
      </div>
    </div>
  );
}
