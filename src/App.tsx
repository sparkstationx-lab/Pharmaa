/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrustBar } from './components/TrustBar';
import { HeroSection } from './components/HeroSection';
import { TrustBadgeRow } from './components/TrustBadgeRow';
import { OperationsCollageSection } from './components/OperationsCollageSection';
import { LeadershipSection } from './components/LeadershipSection';
import { StructureSection } from './components/StructureSection';
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
      {/* Main Sticky Header with Jadon Pharmaceuticals Brand */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Trust Bar with CDSCO License Wholesale-819-A & WHO-GDP Hub */}
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

        {/* 01 · Gwalior Central Depot & Operations Collage */}
        <OperationsCollageSection />

        {/* Executive Leadership: Aman Jadon, Achal Jadon, Radhe Shyam Jadon */}
        <LeadershipSection />

        {/* How We're Structured & Operational Roadmap */}
        <StructureSection />

        {/* 02 · Hospital-Grade Formulations & Critical-Care Portfolio */}
        <ProductCatalogSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          filteredQuery={searchQuery}
        />

        {/* 03 · Quality & Statutory Compliance (License Wholesale-819-A & Buyer KYC) */}
        <SupplyIntegritySection />

        {/* Institutional Pillars: Authorized Alliances, Gwalior Hub, Tenders */}
        <PillarsSection />

        {/* Continuous Therapeutic Categories Marquee */}
        <MarqueeTicker />

        {/* 04 · Operational Capabilities & Specialty Services */}
        <SpecialtyServicesSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 05 · PAN-India Supply Segments (Hospitals, Military, Clinics, Pharmacies) */}
        <TopMarketsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 06 · Operational Shipment Logs & Cold-Chain Excerpts */}
        <ShipmentPatternsDarkSection />

        {/* 07 · Regulatory Notes & Field Briefings */}
        <InsightsSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Institutional Inquiries Call to Action Band */}
        <CtaBand
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      </main>

      {/* 4-Column Footer with Corporate Governance & Gwalior Hub */}
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
