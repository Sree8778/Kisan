import React, { createContext, useContext, useState } from 'react';
import { marketplaceListings } from '../data/marketplace';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('en');
  const [selectedDistrict, setSelectedDistrict] = useState('guntur');
  const [listings, setListings] = useState(marketplaceListings);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState(null);
  const [whatsappOrderItem, setWhatsappOrderItem] = useState(null);

  const addListing = (newListing) => {
    setListings(prev => [newListing, ...prev]);
  };

  const value = {
    currentLang, setCurrentLang,
    selectedDistrict, setSelectedDistrict,
    listings, addListing,
    isCreateModalOpen, setIsCreateModalOpen,
    selectedDetailItem, setSelectedDetailItem,
    whatsappOrderItem, setWhatsappOrderItem
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
