import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { multiSpeciesFeedRatios } from '../data/feed';

const TABS = [
  { id: 'cattle', label: 'Dairy Cattle Feed', accent: 'text-[var(--accent)]' },
  { id: 'sheep', label: 'Sheep & Goat Meat Feed', accent: 'text-amber-700' },
  { id: 'poultry', label: 'Broiler FCR Calculator', accent: 'text-teal-700' },
  { id: 'fish', label: 'Fish Pond Biomass Feed', accent: 'text-blue-700' }
];

export default function FarmCalculators() {
  const [activeCalc, setActiveCalc] = useState('cattle');

  const [cattleWeight, setCattleWeight] = useState(400);
  const [milkYield, setMilkYield] = useState(12);

  const [sheepFlockSize, setSheepFlockSize] = useState(15);
  const [sheepWeight, setSheepWeight] = useState(25);

  const [poultryCount, setPoultryCount] = useState(500);

  const [fishCount, setFishCount] = useState(5000);
  const [fishAvgWeight, setFishAvgWeight] = useState(200);

  const cattleResults = multiSpeciesFeedRatios.cattle.calculate(cattleWeight, milkYield);
  const sheepResults = multiSpeciesFeedRatios.sheep.calculate(sheepFlockSize, sheepWeight);
  const poultryResults = multiSpeciesFeedRatios.poultry.calculate(poultryCount);
  const fishResults = multiSpeciesFeedRatios.fish.calculate(1, fishCount, fishAvgWeight);

  const labelCls = "block text-xs font-bold text-[var(--text-muted)] mb-1";
  const resultsPanelCls = "bg-[var(--bg-subtle)] p-5 rounded-lg border border-[var(--border-color)] space-y-3";
  const resultRowCls = "flex justify-between p-2 bg-white rounded-lg";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bento-card p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-[var(--bg-subtle)] flex items-center justify-center text-[var(--text-main)]">
            <Calculator size={22} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[var(--text-main)]">Multi-Species Smart Feed & FCR Calculators</h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Precision feeding ratios for Cattle, Sheep & Goats, Broiler Poultry, and Fish Ponds to maximize profit per rupee spent.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveCalc(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-colors ${
              activeCalc === tab.id
                ? 'bg-[var(--text-main)] text-white border-[var(--text-main)]'
                : 'bg-white text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--text-muted)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="glass-card p-6">
        {activeCalc === 'cattle' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[var(--text-main)]">Dairy Cow Daily Diet Parameters</h3>
              <div>
                <label className={labelCls}>Cow Body Weight (kg): <strong className="text-[var(--text-main)]">{cattleWeight} kg</strong></label>
                <input type="range" min="250" max="600" value={cattleWeight} onChange={(e) => setCattleWeight(Number(e.target.value))} className="w-full accent-[var(--accent)]" />
              </div>
              <div>
                <label className={labelCls}>Daily Milk Yield (Litre/day): <strong className="text-[var(--text-main)]">{milkYield} Litres</strong></label>
                <input type="range" min="2" max="35" value={milkYield} onChange={(e) => setMilkYield(Number(e.target.value))} className="w-full accent-[var(--accent)]" />
              </div>
            </div>

            <div className={resultsPanelCls}>
              <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Optimal Daily Diet Breakdown</h4>
              <div className="space-y-2 text-sm font-semibold text-[var(--text-main)]">
                <div className={resultRowCls}><span>Dry Matter Requirement:</span><span className="text-[var(--accent)] font-extrabold">{cattleResults.dryMatter}</span></div>
                <div className={resultRowCls}><span>Balanced Concentrate Mix:</span><span className="text-[var(--accent)] font-extrabold">{cattleResults.concentrate}</span></div>
                <div className={resultRowCls}><span>Green Fodder (Napier/Maize):</span><span className="text-[var(--accent)] font-extrabold">{cattleResults.greenFodder}</span></div>
                <div className={resultRowCls}><span>Dry Straw / Hay:</span><span className="text-[var(--accent)] font-extrabold">{cattleResults.dryStraw}</span></div>
              </div>
              <div className="pt-2 text-xs font-bold text-amber-700">Est Feed Cost: {cattleResults.estDailyCost}</div>
            </div>
          </div>
        )}

        {activeCalc === 'sheep' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[var(--text-main)]">Sheep & Goat Intensive Feed Parameters</h3>
              <div>
                <label className={labelCls}>Flock Size (Animals): <strong className="text-[var(--text-main)]">{sheepFlockSize} Head</strong></label>
                <input type="range" min="5" max="100" value={sheepFlockSize} onChange={(e) => setSheepFlockSize(Number(e.target.value))} className="w-full accent-amber-600" />
              </div>
              <div>
                <label className={labelCls}>Avg Weight per Animal (kg): <strong className="text-[var(--text-main)]">{sheepWeight} kg</strong></label>
                <input type="range" min="12" max="50" value={sheepWeight} onChange={(e) => setSheepWeight(Number(e.target.value))} className="w-full accent-amber-600" />
              </div>
            </div>

            <div className={resultsPanelCls}>
              <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Flock Daily Feed Rations</h4>
              <div className="space-y-2 text-sm font-semibold text-[var(--text-main)]">
                <div className={resultRowCls}><span>Daily Concentrate Mix (Flock):</span><span className="text-amber-700 font-extrabold">{sheepResults.dailyConcentrateFlock}</span></div>
                <div className={resultRowCls}><span>Green Legume Grass:</span><span className="text-amber-700 font-extrabold">{sheepResults.dailyLegumeFodder}</span></div>
                <div className={resultRowCls}><span>Est Monthly Weight Gain:</span><span className="text-[var(--accent)] font-extrabold">{sheepResults.expectedMonthlyWeightGain}</span></div>
              </div>
              <div className="pt-2 text-xs font-bold text-[var(--accent)]">Est Monthly Profit Margin: {sheepResults.estMonthlyProfitMargin}</div>
            </div>
          </div>
        )}

        {activeCalc === 'poultry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[var(--text-main)]">Broiler FCR & Feed Quantity Calculator</h3>
              <div>
                <label className={labelCls}>Flock Bird Count: <strong className="text-[var(--text-main)]">{poultryCount} Broilers</strong></label>
                <input type="range" min="50" max="5000" step="50" value={poultryCount} onChange={(e) => setPoultryCount(Number(e.target.value))} className="w-full accent-teal-600" />
              </div>
            </div>

            <div className={resultsPanelCls}>
              <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Feed Budget (Day 1 to Harvest)</h4>
              <div className="space-y-2 text-sm font-semibold text-[var(--text-main)]">
                <div className={resultRowCls}><span>Total Feed Bag Requirement:</span><span className="text-teal-700 font-extrabold">{poultryResults.totalFeedKg}</span></div>
                <div className={resultRowCls}><span>Starter Feed (Day 1-14):</span><span className="text-teal-700 font-extrabold">{poultryResults.starterFeed}</span></div>
                <div className={resultRowCls}><span>Finisher Feed (Day 15-38):</span><span className="text-teal-700 font-extrabold">{poultryResults.finisherFeed}</span></div>
              </div>
            </div>
          </div>
        )}

        {activeCalc === 'fish' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-[var(--text-main)]">Fish Pond Biomass & Floating Pellet Calculation</h3>
              <div>
                <label className={labelCls}>Fish Fingerling Count: <strong className="text-[var(--text-main)]">{fishCount} Count</strong></label>
                <input type="range" min="1000" max="20000" step="500" value={fishCount} onChange={(e) => setFishCount(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>
              <div>
                <label className={labelCls}>Avg Fish Body Weight (Grams): <strong className="text-[var(--text-main)]">{fishAvgWeight} g</strong></label>
                <input type="range" min="20" max="1000" step="10" value={fishAvgWeight} onChange={(e) => setFishAvgWeight(Number(e.target.value))} className="w-full accent-blue-600" />
              </div>
            </div>

            <div className={resultsPanelCls}>
              <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Pond Daily Feed Schedule</h4>
              <div className="space-y-2 text-sm font-semibold text-[var(--text-main)]">
                <div className={resultRowCls}><span>Total Pond Biomass:</span><span className="text-blue-700 font-extrabold">{fishResults.totalBiomass}</span></div>
                <div className={resultRowCls}><span>Daily Pellet Feed:</span><span className="text-blue-700 font-extrabold">{fishResults.dailyFeedKg}</span></div>
                <div className={resultRowCls}><span>Protein Level:</span><span className="text-[var(--accent)] font-extrabold">{fishResults.proteinRequirement}</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
