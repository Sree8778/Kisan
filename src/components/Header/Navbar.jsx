import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sprout, PlusCircle, MapPin, Menu, X } from 'lucide-react';
import { regionalDistricts } from '../../data/districts';
import { translations } from '../../data/translations';
import { useApp } from '../../context/AppContext';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
  { to: '/', key: 'navHome', end: true },
  { to: '/advisor', key: 'navAdvisor' },
  { to: '/marketplace', key: 'navMarketplace' },
  { to: '/doctor', key: 'navDoctor' },
  { to: '/calculators', key: 'navCalculators' },
  { to: '/mandi', key: 'navMandi' }
];

export default function Navbar() {
  const { selectedDistrict, setSelectedDistrict, currentLang, setIsCreateModalOpen } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[currentLang] || translations.en;

  const linkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
      isActive ? 'bg-[var(--text-main)] text-white' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
    }`;

  return (
    <div className="sticky top-0 z-40 header-capsule">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[var(--text-main)] flex items-center justify-center text-white">
            <Sprout size={18} strokeWidth={2.5} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base font-black tracking-tight text-[var(--text-main)] leading-none">{t.appTitle}</h1>
            <p className="text-[9px] font-medium text-[var(--text-muted)] leading-tight mt-0.5">{t.appSubtitle}</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {t[item.key]}
            </NavLink>
          ))}
        </nav>

        {/* District Selector */}
        <div className="hidden xl:flex items-center gap-1.5 border border-[var(--border-color)] rounded-full px-3 py-1.5 shrink-0">
          <MapPin size={13} className="text-[var(--accent)] shrink-0" />
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-transparent text-xs font-bold text-[var(--text-main)] outline-none cursor-pointer max-w-[140px]"
          >
            {regionalDistricts.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="btn-primary text-xs py-2 px-3 sm:px-4 rounded-full"
          >
            <PlusCircle size={15} />
            <span className="hidden sm:inline">{t.postListingBtn}</span>
          </button>
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="lg:hidden p-2 rounded-full border border-[var(--border-color)] text-[var(--text-main)]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border-color)] px-4 py-3 flex flex-col gap-1 animate-fade-in">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm font-bold ${isActive ? 'bg-[var(--bg-subtle)] text-[var(--text-main)]' : 'text-[var(--text-muted)] hover:bg-[var(--bg-subtle)]'}`
              }
            >
              {t[item.key]}
            </NavLink>
          ))}
          <div className="pt-2 mt-1 border-t border-[var(--border-color)] flex items-center justify-between px-2">
            <span className="text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5"><MapPin size={13} className="text-[var(--accent)]" /> {regionalDistricts.find(d => d.id === selectedDistrict)?.name}</span>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </div>
  );
}
