/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UtilityBar } from './components/UtilityBar';
import { Header } from './components/Header';
import { TrustBar } from './components/TrustBar';
import { HeroSection } from './components/HeroSection';
import { TrustBadgeRow } from './components/TrustBadgeRow';
import { OperationsCollageSection } from './components/OperationsCollageSection';
import { ProductCatalogSection } from './components/ProductCatalogSection';
import { SupplyIntegritySection } from './components/SupplyIntegritySection';
import { PillarsSection } from './components/PillarsSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { SpecialtyServicesSection } from './components/SpecialtyServicesSection';
import { TopMarketsSection } from './components/TopMarketsSection';
import { ShipmentPatternsDarkSection } from './components/ShipmentPatternsDarkSection';
import { InsightsSection } from './components/InsightsSection';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenQuoteModal = (query?: string) => {
    if (query) {
      setSearchQuery(query);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    // Smooth scroll down to products section
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="min-h-screen flex flex-col bg-[#FBFAF6] text-[#0F2118] selection:bg-[#C9A451]/30">
      {/* Top Utility Bar */}
      <UtilityBar />

      {/* Main Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Trust Bar with Key Accreditations */}
      <TrustBar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onSearch={handleHeroSearch}
        />

        {/* Quality and Compliance Trust Badge Row */}
        <TrustBadgeRow />

        {/* 01 · Operations Collage (Section Manifest) */}
        <OperationsCollageSection />

        {/* 02 · Featured Product Portfolio (5-column strip) */}
        <ProductCatalogSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          filteredQuery={searchQuery}
        />

        {/* 03 · Supply Integrity Promise (Source to signature) */}
        <SupplyIntegritySection />

        {/* Why Choose Us: 3 Numbered Pillars */}
        <PillarsSection />

        {/* Continuous Therapeutic Categories Marquee */}
        <MarqueeTicker />

        {/* 04 · Specialty Services */}
        <SpecialtyServicesSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 05 · Top Markets (Hexagonal Honeycomb Geometry) */}
        <TopMarketsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 06 · Recent Shipment Patterns (Dark Atmospheric Radial) */}
        <ShipmentPatternsDarkSection />

        {/* 07 · Regulatory Insights & Field Guides */}
        <InsightsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Final CTA Band */}
        <CtaBand
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* Comprehensive 4-Column Footer */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Interactive Quotation & Inquiries Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialQuery={searchQuery}
      />
    </div>
  );
}

