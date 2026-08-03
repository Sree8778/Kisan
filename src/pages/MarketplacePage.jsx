import React, { useState } from 'react';
import { Store, ShoppingBag, PlusCircle } from 'lucide-react';
import ListingCard from '../components/Marketplace/ListingCard';
import { useApp } from '../context/AppContext';

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'live-animals', label: 'Live Animals' },
  { id: 'meat-fish', label: 'Fresh Meat & Fish' },
  { id: 'crops', label: 'Crops & Produce' }
];

export default function MarketplacePage() {
  const { listings, setSelectedDetailItem, setIsCreateModalOpen } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredListings = listings.filter(item => {
    const matchesSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in pb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black flex items-center gap-2 text-[var(--text-main)]">
            <Store className="text-[var(--accent)]" size={24} />
            <span>Livestock & Harvest Marketplace</span>
          </h1>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            Buy & sell live sheep, cattle, poultry, fish fry, fresh mutton cuts by weight, dairy, and crops.
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="btn-primary text-xs px-4 py-2.5 rounded-lg shrink-0"
        >
          <PlusCircle size={16} />
          <span>Post a Selling Listing</span>
        </button>
      </div>

      <input
        type="text"
        placeholder="Search listings by title, location or description..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-white border border-[var(--border-color)] rounded-lg px-4 py-3 text-sm text-[var(--text-main)] font-medium outline-none focus:border-[var(--accent)]"
      />

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {CATEGORIES.map(c => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
              selectedCategory === c.id ? 'bg-[var(--text-main)] text-white border-[var(--text-main)]' : 'bg-white text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--text-muted)]'
            }`}
          >
            {c.id === 'all' ? `${c.label} (${listings.length})` : c.label}
          </button>
        ))}
      </div>

      {filteredListings.length === 0 ? (
        <div className="kisan-glass-card p-12 text-center">
          <ShoppingBag size={40} className="mx-auto text-[var(--text-muted)] mb-3" />
          <h3 className="text-base font-bold text-[var(--text-main)]">No listings found</h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">Try adjusting your filter or search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredListings.map(item => (
            <ListingCard key={item.id} item={item} onOpenDetailModal={setSelectedDetailItem} />
          ))}
        </div>
      )}
    </div>
  );
}
