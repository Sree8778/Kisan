import React from 'react';
import { pageTextures } from '../../data/pageTextures';

// Minimal catalog aesthetic: a contained, rounded banner strip rather than
// a full-bleed dark photo background. Keeps the real per-category
// photography without fighting the white, whitespace-driven layout.
export default function PageBackground({ category }) {
  const texture = pageTextures[category] || pageTextures.home;

  return (
    <div
      key={category}
      className="w-full h-28 sm:h-36 rounded-xl overflow-hidden border border-[var(--border-color)] mb-6 animate-fade-in"
    >
      <img
        src={texture.image}
        alt={texture.label}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
