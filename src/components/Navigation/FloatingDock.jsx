import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sprout, Store, Stethoscope, Calculator } from 'lucide-react';
import { translations } from '../../data/translations';
import { useApp } from '../../context/AppContext';

const DOCK_ITEMS = [
  { to: '/', key: 'navHome', icon: Home, end: true },
  { to: '/advisor', key: 'navAdvisor', icon: Sprout },
  { to: '/marketplace', key: 'navMarketplace', icon: Store },
  { to: '/doctor', key: 'navDoctor', icon: Stethoscope },
  { to: '/calculators', key: 'navCalculators', icon: Calculator }
];

export default function FloatingDock() {
  const { currentLang } = useApp();
  const t = translations[currentLang] || translations.en;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden">
      <div className="floating-dock flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl">
        {DOCK_ITEMS.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center w-14 h-12 rounded-full transition-colors ${
                  isActive ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={18} />
                  <span className="text-[8px] font-extrabold mt-0.5 leading-none text-center px-0.5">{t[item.key]}</span>
                  {isActive && <div className="absolute -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></div>}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
