import React, { useState } from 'react';
import { MapPin, Scale, ShieldCheck, Star, Phone } from 'lucide-react';
import WhatsAppOrderModal from './WhatsAppOrderModal';

export default function ListingCard({ item, onOpenDetailModal }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden flex flex-col group hover:border-[var(--text-muted)] transition-colors">
        {/* Image */}
        <button
          onClick={() => onOpenDetailModal && onOpenDetailModal(item)}
          className="relative h-44 w-full bg-[var(--bg-subtle)] overflow-hidden text-left"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          {item.verified && (
            <div className="absolute top-2.5 left-2.5 bg-white text-[var(--text-main)] text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-[var(--border-color)]">
              <ShieldCheck size={12} className="text-[var(--accent)]" />
              <span>Verified</span>
            </div>
          )}
        </button>

        {/* Content */}
        <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
          <div>
            <h3 className="text-sm font-bold text-[var(--text-main)] line-clamp-1">
              {item.title}
            </h3>

            <div className="flex items-center gap-1 mt-1">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span className="text-xs font-semibold text-[var(--text-muted)]">{item.rating}</span>
              <span className="text-[var(--border-color)] mx-1">·</span>
              <span className="text-xs text-[var(--text-muted)] flex items-center gap-0.5 truncate">
                <MapPin size={11} />
                {item.location}
              </span>
            </div>

            <div className="text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1">
              <Scale size={11} />
              {item.weight}
            </div>

            <p className="text-xs text-[var(--text-main)] font-semibold mt-1.5">{item.sellerName}</p>
          </div>

          <div className="pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
            <div>
              <span className="text-base font-black text-[var(--text-main)]">{item.price}</span>
              <span className="text-[10px] text-[var(--text-muted)] ml-1">{item.unit}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href={`tel:${item.sellerPhone}`}
                className="btn-secondary p-2 rounded-lg"
                title="Call Farmer"
              >
                <Phone size={14} />
              </a>
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="btn-primary text-xs py-2 px-3 rounded-lg"
              >
                <span>Order</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOrderModalOpen && (
        <WhatsAppOrderModal
          item={item}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}
    </>
  );
}
