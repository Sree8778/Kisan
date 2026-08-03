import React, { useState } from 'react';
import {
  Upload,
  AlertOctagon,
  CheckCircle2,
  PhoneCall,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { diseaseDiagnosticDB } from '../data/diseases';
import HolographicScanner3D from './3D/HolographicScanner3D';

export default function AIDoctorAdvisory() {
  const [selectedCase, setSelectedCase] = useState(diseaseDiagnosticDB[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSelectDemoCase = (item) => {
    setIsAnalyzing(true);
    setUploadedImage(null);
    setTimeout(() => {
      setSelectedCase(item);
      setIsAnalyzing(false);
    }, 1200);
  };

  const handleSimulatedUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="bento-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="pill-badge mb-2">AI Scanner Clinic</span>
            <h1 className="text-2xl font-extrabold text-[var(--text-main)]">Kisan AI Vet & Plant Doctor</h1>
            <p className="text-xs text-[var(--text-muted)] mt-1 max-w-2xl leading-relaxed">
              Upload a photo of damaged crop leaves, cattle skin lesions, sheep symptoms, or fish fins. Kisan's vision AI scans for pathogens and recommends immediate cure protocols.
            </p>
          </div>
          <div className="bg-[var(--bg-subtle)] p-3 rounded-lg border border-[var(--border-color)] text-right">
            <span className="text-xs text-[var(--text-muted)] block">Emergency Helpline</span>
            <span className="text-base font-extrabold text-[var(--text-main)] flex items-center justify-end gap-1">
              <PhoneCall size={16} /> 1800-VET-CARE
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Scanner Box & Demo Selector */}
        <div className="space-y-5">
          <div className="glass-card p-5 text-center border-dashed border-2 relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleSimulatedUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-30"
            />

            <HolographicScanner3D
              image={uploadedImage}
              isScanning={isAnalyzing}
            />

            <button className="btn-primary text-xs w-full justify-center py-2.5 mt-3">
              <Upload size={15} />
              <span>Tap to Scan Crop / Animal Photo</span>
            </button>
          </div>

          <div className="glass-card p-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
              Or Try Quick Demo Cases:
            </h4>

            <div className="space-y-2">
              {diseaseDiagnosticDB.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleSelectDemoCase(item)}
                  className={`w-full text-left p-3 rounded-lg border text-xs font-medium transition-colors ${
                    selectedCase.id === item.id
                      ? 'bg-[var(--accent-soft)] border-[var(--accent)] text-[var(--text-main)] font-bold'
                      : 'bg-white border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-[var(--accent)]">
                      {item.category} • {item.cropOrAnimal}
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      item.severity === 'CRITICAL' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                  <div className="font-bold text-[var(--text-main)]">{item.diseaseName}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis Results */}
        <div className="lg:col-span-2 space-y-5">
          {isAnalyzing ? (
            <div className="glass-card p-16 text-center space-y-4">
              <div className="w-12 h-12 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <h3 className="text-lg font-black text-[var(--text-main)]">Vision AI Scanner Active...</h3>
              <p className="text-xs text-[var(--text-muted)]">Sweeping cellular patterns, leaf lesions, and pathogen indicators</p>
            </div>
          ) : (
            <div className="glass-card p-6 space-y-5">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge badge-emerald">
                      <ShieldCheck size={13} /> AI Confidence: 96.4%
                    </span>
                    <span className="badge badge-amber">{selectedCase.category}</span>
                  </div>
                  <h3 className="text-xl font-black text-[var(--text-main)]">
                    {selectedCase.diseaseName}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--text-muted)] mt-1">
                    Affecting: <strong className="text-[var(--accent)]">{selectedCase.cropOrAnimal}</strong>
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] block">Threat Severity</span>
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full inline-block mt-1 ${
                    selectedCase.severity === 'CRITICAL' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {selectedCase.severity} LEVEL
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--bg-subtle)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Activity size={14} className="text-[var(--accent)]" />
                    <span>Identified Symptoms</span>
                  </h4>
                  <p className="text-xs text-[var(--text-main)] leading-relaxed font-medium">
                    {selectedCase.symptoms}
                  </p>
                </div>

                <div className="bg-[var(--bg-subtle)] p-4 rounded-lg border border-[var(--border-color)]">
                  <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertOctagon size={14} className="text-amber-600" />
                    <span>Root Cause / Trigger</span>
                  </h4>
                  <p className="text-xs text-[var(--text-main)] leading-relaxed font-medium">
                    {selectedCase.cause}
                  </p>
                </div>
              </div>

              <div className="bg-[var(--accent-soft)] p-5 rounded-lg border border-[#b7e4dd]">
                <h4 className="text-sm font-extrabold text-[var(--text-main)] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-[var(--accent)]" size={18} />
                  <span>Immediate Cure Protocol & Remedy</span>
                </h4>
                <p className="text-xs text-[var(--text-main)] font-medium leading-relaxed mb-3">
                  {selectedCase.treatment}
                </p>
                <div className="text-xs text-[var(--accent)] pt-2 border-t border-[#b7e4dd] font-semibold">
                  <strong>Preventive Measure:</strong> {selectedCase.preventive}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
