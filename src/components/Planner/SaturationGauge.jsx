import React from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';

export default function SaturationGauge({ percentage, cropName, riskLevel, glutReason, lastYearPrice, predictedPrice }) {
  const isHighRisk = riskLevel === 'HIGH_RISK_GLUT';
  const riskColor = isHighRisk ? '#dc2626' : '#0f766e';

  const circumference = 220;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`kisan-glass-card p-6 border-l-2 ${isHighRisk ? 'border-l-red-500' : 'border-l-[var(--accent)]'}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Crop Info & Price Comparison */}
        <div className="space-y-3 flex-1">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
            isHighRisk ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-[var(--accent-soft)] text-[var(--accent)] border border-[#b7e4dd]'
          }`}>
            {isHighRisk ? 'High Risk — Over-Sown' : 'Contrarian Golden Choice'}
          </span>

          <h3 className="text-2xl font-black text-[var(--text-main)] tracking-tight">{cropName}</h3>

          <div className="flex items-center gap-4 bg-[var(--bg-subtle)] p-3 rounded-lg border border-[var(--border-color)]">
            <div>
              <span className="text-[10px] text-[var(--text-muted)] font-bold block uppercase">Last Year's Peak Price</span>
              <span className="text-sm font-extrabold text-[var(--text-muted)] line-through">{lastYearPrice}</span>
            </div>
            <div className="text-[var(--border-color)]">→</div>
            <div>
              <span className="text-[10px] text-[var(--text-muted)] font-bold block uppercase">Predicted Harvest Price</span>
              <span className={`text-base font-black flex items-center gap-1 ${isHighRisk ? 'text-red-600' : 'text-[var(--accent)]'}`}>
                {isHighRisk ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
                {predictedPrice}
              </span>
            </div>
          </div>

          <p className="text-xs text-[var(--text-main)] leading-relaxed font-medium bg-[var(--bg-subtle)] p-3 rounded-lg border border-[var(--border-color)]">
            {glutReason}
          </p>
        </div>

        {/* Right: SVG Radial Gauge */}
        <div className="relative flex flex-col items-center justify-center shrink-0">
          <svg className="w-36 h-36 transform -rotate-90">
            <circle cx="72" cy="72" r="35" stroke="#e5e5e0" strokeWidth="9" fill="transparent" />
            <circle
              cx="72" cy="72" r="35"
              stroke={riskColor}
              strokeWidth="9"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000"
              fill="transparent"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={`text-xl font-black ${isHighRisk ? 'text-red-600' : 'text-[var(--accent)]'}`}>
              {percentage}%
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--text-muted)]">
              Sowing Density
            </span>
          </div>

          <span className="text-[11px] font-bold text-[var(--text-muted)] mt-2">
            {isHighRisk ? 'High Crash Probability' : 'Low Local Competition'}
          </span>
        </div>
      </div>
    </div>
  );
}
