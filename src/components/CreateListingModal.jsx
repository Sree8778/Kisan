import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const STEPS = ['Category', 'Pricing & Details', 'Location & Contact', 'Review & Publish'];

const initialFormData = {
  title: '',
  category: 'live-animals',
  subCategory: 'sheep-goat',
  price: '',
  unit: 'per head',
  weight: '',
  location: 'Guntur, Andhra Pradesh',
  sellerName: 'My Farm Produce',
  sellerPhone: '+91 98480 99999',
  image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?auto=format&fit=crop&w=600&q=80',
  description: '',
  tags: 'Vaccinated, Direct Farmer, Organic'
};

export default function CreateListingModal({ isOpen, onClose, onAddListing }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [published, setPublished] = useState(false);

  if (!isOpen) return null;

  const update = (patch) => setFormData(prev => ({ ...prev, ...patch }));

  const canAdvance = () => {
    if (step === 0) return !!formData.category && !!formData.subCategory;
    if (step === 1) return formData.title.trim() !== '' && formData.price.trim() !== '';
    if (step === 2) return formData.location.trim() !== '' && formData.sellerPhone.trim() !== '';
    return true;
  };

  const handleClose = () => {
    setStep(0);
    setFormData(initialFormData);
    setPublished(false);
    onClose();
  };

  const handlePublish = () => {
    const newListing = {
      id: 'm-' + Date.now(),
      title: formData.title || 'Organic Farm Product / Animal',
      category: formData.category,
      subCategory: formData.subCategory,
      price: formData.price.startsWith('₹') ? formData.price : `₹${formData.price}`,
      unit: formData.unit,
      weight: formData.weight || 'Available in bulk or single head',
      location: formData.location,
      sellerName: formData.sellerName,
      sellerPhone: formData.sellerPhone,
      verified: true,
      rating: 5.0,
      image: formData.image,
      description: formData.description || 'Freshly listed high quality livestock/produce direct from farmer.',
      tags: formData.tags.split(',').map(t => t.trim())
    };
    onAddListing(newListing);
    setPublished(true);
    setTimeout(handleClose, 2000);
  };

  const inputCls = "w-full bg-white border border-[var(--border-color)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-main)] font-medium outline-none focus:border-[var(--accent)]";
  const labelCls = "block text-xs font-bold text-[var(--text-muted)] mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-xl border border-[var(--border-color)] shadow-xl overflow-hidden max-h-[90vh] flex flex-col">

        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[var(--border-color)] shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={22} className="text-[var(--accent)]" />
            <div>
              <h3 className="text-lg font-extrabold leading-none text-[var(--text-main)]">Post a Farmer Selling Listing</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {published ? 'Listing published' : `Step ${step + 1} of ${STEPS.length}: ${STEPS[step]}`}
              </p>
            </div>
          </div>
          <button onClick={handleClose} className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
            <X size={20} />
          </button>
        </div>

        {!published && (
          <div className="flex items-center px-5 pt-4 shrink-0">
            {STEPS.map((s, idx) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-black shrink-0 ${
                  idx < step ? 'bg-[var(--text-main)] text-white' : idx === step ? 'border-2 border-[var(--text-main)] text-[var(--text-main)]' : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                }`}>
                  {idx < step ? <Check size={14} /> : idx + 1}
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-1 ${idx < step ? 'bg-[var(--text-main)]' : 'bg-[var(--border-color)]'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {published ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="text-2xl font-black text-[var(--text-main)]">Listing Published!</h4>
            <p className="text-xs text-[var(--text-muted)]">
              Your listing "{formData.title}" is now live on the Kisan marketplace.
            </p>
          </div>
        ) : (
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
            {step === 0 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className={labelCls}>What are you selling? *</label>
                  <select value={formData.category} onChange={(e) => update({ category: e.target.value })} className={inputCls}>
                    <option value="live-animals">Live Animals (Sheep/Cattle/Birds/Fish)</option>
                    <option value="meat-fish">Fresh Meat & Fish (By Weight)</option>
                    <option value="crops">Crops & Produce</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Sub-Category</label>
                  <select value={formData.subCategory} onChange={(e) => update({ subCategory: e.target.value })} className={inputCls}>
                    <option value="sheep-goat">Sheep & Goat</option>
                    <option value="cattle">Cows & Buffaloes</option>
                    <option value="poultry">Poultry / Chicken / Ducks</option>
                    <option value="fish">Fish Seed & Aquaculture</option>
                    <option value="meat">Mutton / Chicken Meat Cuts</option>
                    <option value="produce">Grains, Vegetables & Fruits</option>
                  </select>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className={labelCls}>Listing Title *</label>
                  <input type="text" placeholder="e.g. Nellore Sheep Flock (10 Head) OR Fresh Mutton Cuts" value={formData.title} onChange={(e) => update({ title: e.target.value })} className={inputCls} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelCls}>Price (₹) *</label>
                    <input type="text" placeholder="e.g. 750 or 12,000" value={formData.price} onChange={(e) => update({ price: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Pricing Unit</label>
                    <select value={formData.unit} onChange={(e) => update({ unit: e.target.value })} className={inputCls}>
                      <option value="per kg">per kg (For Meat/Crops)</option>
                      <option value="per head">per head (For Livestock)</option>
                      <option value="per Quintal">per Quintal</option>
                      <option value="fixed">Fixed Price</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Weight / Count</label>
                    <input type="text" placeholder="e.g. 30kg per animal" value={formData.weight} onChange={(e) => update({ weight: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Description & Health/Vaccination Status</label>
                  <textarea rows={3} placeholder="Describe breed, feeding, vaccination history, or delivery availability..." value={formData.description} onChange={(e) => update({ description: e.target.value })} className={inputCls}></textarea>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Farm Location *</label>
                    <input type="text" placeholder="District, State" value={formData.location} onChange={(e) => update({ location: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Contact Phone *</label>
                    <input type="text" placeholder="+91 98480 12345" value={formData.sellerPhone} onChange={(e) => update({ sellerPhone: e.target.value })} className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Farm / Seller Name</label>
                  <input type="text" value={formData.sellerName} onChange={(e) => update({ sellerName: e.target.value })} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Tags (comma separated)</label>
                  <input type="text" value={formData.tags} onChange={(e) => update({ tags: e.target.value })} className={inputCls} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-3 animate-fade-in">
                <div className="bg-[var(--bg-subtle)] rounded-xl border border-[var(--border-color)] overflow-hidden flex gap-3 p-3">
                  <img src={formData.image} alt="" className="w-20 h-20 rounded-lg object-cover shrink-0" />
                  <div className="min-w-0">
                    <h4 className="text-sm font-black text-[var(--text-main)] truncate">{formData.title || 'Untitled Listing'}</h4>
                    <div className="text-xs text-[var(--accent)] font-extrabold">₹{formData.price || '—'} {formData.unit}</div>
                    <div className="text-[11px] text-[var(--text-muted)]">{formData.location}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[var(--bg-subtle)] rounded-lg p-3 border border-[var(--border-color)]">
                    <span className="block text-[var(--text-muted)] font-bold">Category</span>
                    <span className="font-bold text-[var(--text-main)]">{formData.category} / {formData.subCategory}</span>
                  </div>
                  <div className="bg-[var(--bg-subtle)] rounded-lg p-3 border border-[var(--border-color)]">
                    <span className="block text-[var(--text-muted)] font-bold">Weight / Count</span>
                    <span className="font-bold text-[var(--text-main)]">{formData.weight || '—'}</span>
                  </div>
                  <div className="bg-[var(--bg-subtle)] rounded-lg p-3 border border-[var(--border-color)]">
                    <span className="block text-[var(--text-muted)] font-bold">Contact</span>
                    <span className="font-bold text-[var(--text-main)]">{formData.sellerPhone}</span>
                  </div>
                  <div className="bg-[var(--bg-subtle)] rounded-lg p-3 border border-[var(--border-color)]">
                    <span className="block text-[var(--text-muted)] font-bold">Seller</span>
                    <span className="font-bold text-[var(--text-main)]">{formData.sellerName}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {!published && (
          <div className="p-5 pt-3 flex items-center justify-between gap-3 border-t border-[var(--border-color)] shrink-0">
            <button
              onClick={() => step === 0 ? handleClose() : setStep(s => s - 1)}
              className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5 rounded-lg"
            >
              {step === 0 ? 'Cancel' : <><ChevronLeft size={15} /> Back</>}
            </button>

            {step < STEPS.length - 1 ? (
              <button
                onClick={() => canAdvance() && setStep(s => s + 1)}
                disabled={!canAdvance()}
                className="btn-primary text-xs py-2 px-5 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 rounded-lg"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button onClick={handlePublish} className="btn-primary text-xs py-2 px-5 flex items-center gap-1.5 rounded-lg">
                <CheckCircle2 size={16} />
                <span>Publish Listing Now</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
