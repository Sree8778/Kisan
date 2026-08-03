import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BentoHero from '../components/Modern/BentoHero';
import ImpactStats from '../components/Landing/ImpactStats';
import ProblemSolution from '../components/Landing/ProblemSolution';
import ListingCard from '../components/Marketplace/ListingCard';
import { useApp } from '../context/AppContext';

const FEATURES = [
  { icon: '🌾', title: 'Anti-Glut Predictive Radar', desc: 'Real-time sowing saturation meter prevents price crash losses before you sow.', to: '/advisor' },
  { icon: '🐐', title: 'Livestock & Meat E-Commerce', desc: 'Sell Nellore sheep, cattle, poultry & fresh mutton cuts by weight direct to buyers.', to: '/marketplace' },
  { icon: '🩺', title: 'AI Doctor & Vet Clinic', desc: 'Photo scanner diagnoses crop leaf blast, cattle skin lesions & fish rot.', to: '/doctor' },
  { icon: '🧮', title: 'Multi-Species Feed Rations', desc: 'Precision FCR feed calculators for Cattle, Sheep, Broiler Poultry & Fish Ponds.', to: '/calculators' }
];

export default function HomePage() {
  const navigate = useNavigate();
  const { listings, setSelectedDetailItem } = useApp();

  return (
    <div className="space-y-12 animate-fade-in pb-8">
      <BentoHero
        onLaunchDashboard={() => navigate('/advisor')}
        onExploreMarketplace={() => navigate('/marketplace')}
      />

      <ImpactStats />

      <ProblemSolution />

      <div className="space-y-6 pt-2">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="pill-badge">CORE PILLARS</span>
          <h2 className="text-3xl font-black text-[var(--text-main)]">4 Technological Innovations</h2>
          <p className="text-xs text-[var(--text-muted)] font-medium">Built specifically for smallholder mixed farmers & commercial livestock producers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, idx) => (
            <div key={idx} className="bento-card p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-base font-black text-[var(--text-main)]">{f.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium mt-2">{f.desc}</p>
              </div>
              <button
                onClick={() => navigate(f.to)}
                className="text-xs font-bold text-[var(--text-main)] flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors pt-3 border-t border-[var(--border-color)]"
              >
                <span>Explore</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
          <h2 className="text-xl font-black tracking-tight text-[var(--text-main)]">Featured Marketplace Listings</h2>
          <button onClick={() => navigate('/marketplace')} className="text-xs font-bold text-[var(--accent)] hover:underline">
            View All ({listings.length}) →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {listings.slice(0, 3).map(item => (
            <ListingCard key={item.id} item={item} onOpenDetailModal={setSelectedDetailItem} />
          ))}
        </div>
      </div>
    </div>
  );
}
