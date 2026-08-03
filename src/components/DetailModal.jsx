import React from 'react';
import { X, ShieldCheck, MapPin, Phone, Scale, MessageSquare } from 'lucide-react';

export default function DetailModal({ item, onClose, onOpenWhatsApp }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-fade-in">
      <div className="bg-white w-full max-w-xl rounded-xl border border-[var(--border-color)] shadow-xl overflow-hidden max-h-[90vh] flex flex-col">

        {/* Image Header */}
        <div className="relative h-56 w-full bg-[var(--bg-subtle)] shrink-0">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-[var(--text-main)] p-2 rounded-full border border-[var(--border-color)] hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <X size={18} />
          </button>

          {item.verified && (
            <div className="absolute top-4 left-4 bg-white text-[var(--text-main)] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-[var(--border-color)]">
              <ShieldCheck size={16} className="text-[var(--accent)]" />
              <span>Verified Farmer Seller</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-[var(--text-main)] leading-tight">{item.title}</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1 font-medium">
                <MapPin size={14} className="text-[var(--accent)]" />
                {item.location}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-black text-[var(--text-main)]">{item.price}</div>
              <span className="text-xs text-[var(--text-muted)] font-medium">{item.unit}</span>
            </div>
          </div>

          <div className="bg-[var(--bg-subtle)] p-4 rounded-xl space-y-2 border border-[var(--border-color)]">
            <div className="flex justify-between text-xs font-semibold text-[var(--text-main)]">
              <span>Weight / Quantity Spec:</span>
              <span className="text-[var(--accent)] font-bold flex items-center gap-1">
                <Scale size={13} /> {item.weight}
              </span>
            </div>
            {item.totalPrice && (
              <div className="flex justify-between text-xs font-semibold text-[var(--text-main)]">
                <span>Total Lot Price:</span>
                <span className="text-[var(--accent)] font-bold">{item.totalPrice}</span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Description & Health Info</h4>
            <p className="text-xs text-[var(--text-main)] leading-relaxed font-medium">
              {item.description}
            </p>
          </div>

          {/* Seller Details & Contact CTA */}
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-[var(--text-muted)] block uppercase font-bold">Farmer / Seller</span>
              <span className="text-sm font-bold text-[var(--text-main)]">{item.sellerName}</span>
            </div>

            <div className="flex items-center gap-2">
              {onOpenWhatsApp && (
                <button
                  onClick={() => onOpenWhatsApp(item)}
                  className="btn-secondary text-xs py-2.5 px-4 rounded-lg"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp</span>
                </button>
              )}
              <a
                href={`tel:${item.sellerPhone}`}
                className="btn-primary text-xs py-2.5 px-4 rounded-lg"
              >
                <Phone size={16} />
                <span>Call Farmer</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
