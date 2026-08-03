import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Store } from 'lucide-react';

export default function BentoHero({ onLaunchDashboard, onExploreMarketplace }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

      {/* Main Hero Card */}
      <div className="lg:col-span-8 bento-card p-8 sm:p-12 flex flex-col justify-between">
        <div className="space-y-5 max-w-2xl">
          <span className="pill-badge">Smart Agriculture & Livestock Platform</span>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)] leading-tight">
            Stop falling for last year's high prices
          </h1>

          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed font-medium">
            Kisan predicts crop price crashes before you sow, lets you sell live sheep, cattle & fresh mutton cuts by weight direct to buyers, and diagnoses plant and animal disease from a photo.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onLaunchDashboard}
              className="btn-primary text-sm px-6 py-3.5 rounded-full"
            >
              <TrendingUp size={18} />
              <span>Launch Crop Advisor</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onExploreMarketplace}
              className="btn-secondary text-sm px-6 py-3.5 rounded-full"
            >
              <Store size={18} />
              <span>Explore Marketplace</span>
            </button>
          </div>
        </div>
      </div>

      {/* Side Stats */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="bento-card p-6 border-l-2 border-l-[var(--accent)] flex flex-col justify-between flex-1">
          <div>
            <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] tracking-wider">Harvest Loss Prevention</span>
            <div className="text-2xl font-black text-[var(--text-main)] mt-1">₹14.2 Crore+</div>
            <p className="text-xs text-[var(--text-muted)] font-medium mt-1">Saved for Indian farmers using Anti-Glut AI</p>
          </div>
          <div className="pt-3 border-t border-[var(--border-color)] text-[11px] text-[var(--accent)] font-bold flex items-center gap-1">
            <ShieldCheck size={14} /> 98.4% Prediction Accuracy Rate
          </div>
        </div>

        <div className="bento-card p-6 border-l-2 border-l-amber-500 flex flex-col justify-between flex-1">
          <div>
            <span className="text-[10px] font-bold uppercase text-[var(--text-muted)] tracking-wider">Direct E-Commerce Volume</span>
            <div className="text-2xl font-black text-[var(--text-main)] mt-1">38,000+ Head</div>
            <p className="text-xs text-[var(--text-muted)] font-medium mt-1">Live Sheep, Dairy Cows & Fresh Mutton Sold</p>
          </div>
          <div className="pt-3 border-t border-[var(--border-color)] text-[11px] text-amber-700 font-bold">
            Zero Middlemen Commissions
          </div>
        </div>
      </div>
    </div>
  );
}
