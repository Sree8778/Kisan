import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import FloatingDock from '../components/Navigation/FloatingDock';
import VoiceWidget from '../components/Voice/VoiceWidget';
import CreateListingModal from '../components/CreateListingModal';
import DetailModal from '../components/DetailModal';
import WhatsAppOrderModal from '../components/Marketplace/WhatsAppOrderModal';
import PageBackground from '../components/UI/PageBackground';
import { categoryForPath } from '../data/pageTextures';
import { useApp } from '../context/AppContext';

export default function AppLayout() {
  const {
    currentLang,
    listings, addListing,
    isCreateModalOpen, setIsCreateModalOpen,
    selectedDetailItem, setSelectedDetailItem,
    whatsappOrderItem, setWhatsappOrderItem
  } = useApp();
  const location = useLocation();
  const category = categoryForPath(location.pathname);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-28 lg:pb-16">
        <PageBackground category={category} />
        <Outlet />
      </main>

      <FloatingDock />
      <VoiceWidget currentLang={currentLang} />

      <CreateListingModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onAddListing={addListing}
        currentLang={currentLang}
      />

      <DetailModal
        item={selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        onOpenWhatsApp={(item) => { setSelectedDetailItem(null); setWhatsappOrderItem(item); }}
      />

      {whatsappOrderItem && (
        <WhatsAppOrderModal
          item={whatsappOrderItem}
          onClose={() => setWhatsappOrderItem(null)}
        />
      )}
    </div>
  );
}
