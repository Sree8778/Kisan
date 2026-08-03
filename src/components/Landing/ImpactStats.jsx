import React from 'react';
import { Coins, ShieldCheck, Award, Users } from 'lucide-react';

export default function ImpactStats() {
  const stats = [
    { icon: Coins, value: '₹14.2 Crore+', label: 'Saved from Crop Price Slumps' },
    { icon: ShieldCheck, value: '38,000+', label: 'Live Sheep, Cows & Poultry Sold' },
    { icon: Award, value: '98.4%', label: 'Anti-Glut Prediction Accuracy' },
    { icon: Users, value: '45,000+', label: 'Verified Indian Farmers Onboarded' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, idx) => {
        const Icon = s.icon;
        return (
          <div key={idx} className="kisan-glass-card p-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[var(--bg-subtle)] flex items-center justify-center shrink-0 text-[var(--text-main)]">
              <Icon size={22} />
            </div>
            <div>
              <div className="text-xl font-black text-[var(--text-main)]">{s.value}</div>
              <p className="text-xs text-[var(--text-muted)] font-semibold">{s.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
