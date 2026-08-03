import React, { useState } from 'react';
import { X, CheckCircle2, Sprout, ArrowRight } from 'lucide-react';

export default function SeedOrderModal({ crop, landAcres, onClose }) {
  const [ordered, setOrdered] = useState(false);

  if (!crop) return null;

  const totalProfit = parseInt(crop.projectedNetProfit.replace(/[^0-9]/g, '')) * landAcres;
  const seedBagsNeeded = Math.ceil(landAcres * 2.5);

  const handleConfirmSeedOrder = (e) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
      <div className="bg-white text-[var(--text-main)] w-full max-w-md rounded-xl border border-[var(--border-color)] shadow-xl overflow-hidden">
        <div className="p-5 flex items-center justify-between border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2">
            <Sprout size={22} className="text-[var(--accent)]" />
            <div>
              <h3 className="text-lg font-black leading-none">Order Certified Seed Package</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">High Yield • Lab Tested • Direct Express Delivery</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]">
            <X size={20} />
          </button>
        </div>

        {ordered ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="text-2xl font-black text-[var(--text-main)]">Seed Package Reserved!</h4>
            <p className="text-xs text-[var(--text-muted)]">
              Your order for {seedBagsNeeded} bags of certified {crop.name} seed has been submitted. Local agronomist will contact you for farm delivery.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConfirmSeedOrder} className="p-6 space-y-4">
            <div className="bg-[var(--bg-subtle)] p-4 rounded-lg border border-[var(--border-color)] space-y-2">
              <div className="flex justify-between text-xs font-bold text-[var(--text-muted)]">
                <span>Selected Crop:</span>
                <span className="text-[var(--text-main)]">{crop.name}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-[var(--text-muted)]">
                <span>Farm Land Area:</span>
                <span className="text-[var(--accent)]">{landAcres} Acres</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-[var(--text-muted)]">
                <span>Seed Quantity Needed:</span>
                <span className="text-amber-700">{seedBagsNeeded} Certified Bags</span>
              </div>
              <div className="flex justify-between text-xs font-extrabold text-[var(--text-main)] pt-2 border-t border-[var(--border-color)]">
                <span>Projected Net Profit:</span>
                <span className="text-[var(--accent)] text-sm">₹ {totalProfit.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-3.5 rounded-lg justify-center">
              <span>Confirm Seed Order ({seedBagsNeeded} Bags)</span>
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
