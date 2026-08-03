import React, { useEffect, useState } from 'react';
import { LineChart, Sun, CloudRain, Wind, Droplets, MapPin, RefreshCw, AlertTriangle, Store } from 'lucide-react';
import { regionalDistricts } from '../data/districts';
import { fetchDistrictWeather, actionableTip } from '../utils/weatherHelper';
import { fetchMandiPrices } from '../utils/mandiHelper';

export default function MandiRatesWeather({ selectedDistrict = 'guntur' }) {
  const district = regionalDistricts.find(d => d.id === selectedDistrict) || regionalDistricts[0];

  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  const [mandi, setMandi] = useState([]);
  const [mandiLoading, setMandiLoading] = useState(true);
  const [mandiError, setMandiError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setWeatherLoading(true);
    setWeatherError(null);

    fetchDistrictWeather(district.lat, district.lon)
      .then(data => { if (!cancelled) setWeather(data); })
      .catch(err => { if (!cancelled) setWeatherError(err.message || 'Could not load live weather'); })
      .finally(() => { if (!cancelled) setWeatherLoading(false); });

    return () => { cancelled = true; };
  }, [district.id]);

  useEffect(() => {
    let cancelled = false;
    setMandiLoading(true);
    setMandiError(null);

    fetchMandiPrices(district.apiDistrict, 8)
      .then(data => { if (!cancelled) setMandi(data); })
      .catch(err => { if (!cancelled) setMandiError(err.message || 'Could not load mandi prices'); })
      .finally(() => { if (!cancelled) setMandiLoading(false); });

    return () => { cancelled = true; };
  }, [district.id]);

  const districtShortName = district.name.split('(')[0].trim();

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bento-card p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-main)] flex items-center justify-center">
            <LineChart size={24} />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-[var(--text-main)]">Live Mandi Rates & Weather Advisory</h2>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Real government market prices (data.gov.in Agmarknet) and live weather for {districtShortName}.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mandi Rates List — live government data */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-base font-bold text-[var(--text-main)] flex items-center gap-2">
            <Store size={17} className="text-[var(--accent)]" />
            <span>Live Market Prices — {districtShortName} District</span>
          </h3>

          {mandiLoading && (
            <div className="glass-card p-8 flex flex-col items-center justify-center gap-2 text-[var(--text-muted)]">
              <RefreshCw size={22} className="animate-spin" />
              <span className="text-xs font-bold">Fetching live mandi prices for {districtShortName}...</span>
            </div>
          )}

          {!mandiLoading && mandiError && (
            <div className="glass-card p-6 bg-red-50 border border-red-200 flex flex-col items-center gap-2 text-center">
              <AlertTriangle size={22} className="text-red-600" />
              <span className="text-xs font-bold text-red-700">{mandiError}</span>
            </div>
          )}

          {!mandiLoading && !mandiError && mandi.length === 0 && (
            <div className="glass-card p-6 text-center text-xs text-[var(--text-muted)] font-medium">
              No mandi arrivals reported for {districtShortName} today.
            </div>
          )}

          {!mandiLoading && !mandiError && mandi.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mandi.map((item, idx) => (
                <div key={idx} className="glass-card p-4 flex items-center justify-between border-l-4 border-l-[var(--accent)]">
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[var(--text-muted)] block truncate">{item.market}</span>
                    <h4 className="text-base font-extrabold text-[var(--text-main)] truncate">{item.commodity}</h4>
                    <span className="text-[10px] text-[var(--text-muted)] font-medium">{item.variety}</span>
                    <div className="text-lg font-black text-[var(--accent)] mt-1">₹{item.modalPrice.toLocaleString('en-IN')}<span className="text-[10px] text-[var(--text-muted)] font-bold"> /Qtl</span></div>
                  </div>
                  <div className="text-right shrink-0 pl-2">
                    <span className="text-[10px] text-[var(--text-muted)] font-bold block">Range</span>
                    <span className="text-xs font-extrabold text-[var(--text-main)]">₹{item.minPrice.toLocaleString('en-IN')}–{item.maxPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-[11px] text-[var(--text-muted)] font-medium px-1">
            Source: Ministry of Agriculture & Farmers Welfare, via data.gov.in Agmarknet — modal price per quintal, updated daily.
          </p>
        </div>

        {/* Weather Forecast Widget — live data */}
        <div className="glass-card p-5 space-y-4">
          <h3 className="text-base font-bold text-[var(--text-main)] flex items-center gap-2">
            <Sun className="text-amber-600" size={18} />
            <span>Live Farm Weather & Irrigation Alert</span>
          </h3>

          {weatherLoading && (
            <div className="bg-[var(--bg-subtle)] p-8 rounded-lg border border-[var(--border-color)] flex flex-col items-center justify-center gap-2 text-[var(--text-muted)]">
              <RefreshCw size={22} className="animate-spin" />
              <span className="text-xs font-bold">Fetching live weather for {districtShortName}...</span>
            </div>
          )}

          {!weatherLoading && weatherError && (
            <div className="bg-red-50 p-5 rounded-lg border border-red-200 flex flex-col items-center gap-2 text-center">
              <AlertTriangle size={22} className="text-red-600" />
              <span className="text-xs font-bold text-red-700">{weatherError}</span>
            </div>
          )}

          {!weatherLoading && !weatherError && weather && (
            <>
              <div className="bg-[var(--bg-subtle)] border border-[var(--border-color)] text-[var(--text-main)] p-5 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <MapPin size={12} /> {districtShortName}
                    </span>
                    <div className="text-3xl font-black mt-1">{weather.tempC}°C</div>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{weather.conditions} • Humidity {weather.humidity}%</p>
                  </div>
                  <CloudRain size={44} className="text-[var(--accent)]" />
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] flex justify-between">
                  <span className="flex items-center gap-1"><Wind size={13} /> {weather.windKmh} km/h</span>
                  <span className="flex items-center gap-1"><Droplets size={13} /> Rain Chance: {weather.rainChanceToday}%</span>
                </div>

                <div className="mt-2 text-[10px] text-[var(--text-muted)]">
                  Today's range: {weather.tempMinToday}°C – {weather.tempMaxToday}°C · Live via Open-Meteo
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <h4 className="text-xs font-bold text-amber-800 mb-1">
                  Actionable Weather Tip
                </h4>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  {actionableTip(weather)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
