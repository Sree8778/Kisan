import React from 'react';
import { AlertTriangle, CheckCircle2, TrendingDown, TrendingUp } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <div className="space-y-4">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl font-black text-[var(--text-main)]">The Cobweb Trap vs. The Kisan Solution</h2>
        <p className="text-xs text-[var(--text-muted)] font-medium">
          Understanding why Indian farmers lose millions every harvest season, and how Kisan reverses the cycle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        {/* Traditional Problem Card */}
        <div className="kisan-glass-card p-6 border-l-2 border-l-red-500 space-y-4">
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase">
            <AlertTriangle size={18} />
            <span>The Traditional Farmer Trap</span>
          </div>

          <ul className="space-y-3 text-xs text-[var(--text-muted)] font-medium">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">1.</span>
              <span>Year 1: Crop X has a high price of ₹60/kg due to shortage.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">2.</span>
              <span>Year 2: Every farmer in the district plants Crop X expecting high profits.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold">3.</span>
              <span>Harvest Time: Over-supply floods the mandi, price crashes to ₹8/kg, causing heavy losses.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-[var(--border-color)] text-xs font-bold text-red-600 flex items-center justify-between">
            <span>Result: Harvest Losses & Debt</span>
            <TrendingDown size={18} />
          </div>
        </div>

        {/* Kisan Solution Card */}
        <div className="kisan-glass-card p-6 border-l-2 border-l-[var(--accent)] space-y-4">
          <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-sm uppercase">
            <CheckCircle2 size={18} />
            <span>The Kisan Anti-Glut AI Solution</span>
          </div>

          <ul className="space-y-3 text-xs text-[var(--text-muted)] font-medium">
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">1.</span>
              <span>Regional data measures real-time district sowing density.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">2.</span>
              <span>Warns farmer in advance if a crop is over-sown (Red Saturation Alert).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--accent)] font-bold">3.</span>
              <span>Recommends undersupplied high-profit crops (Green Golden Alert) to ensure peak harvest income.</span>
            </li>
          </ul>

          <div className="pt-2 border-t border-[var(--border-color)] text-xs font-bold text-[var(--accent)] flex items-center justify-between">
            <span>Result: Max Profits & Direct Sales</span>
            <TrendingUp size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
