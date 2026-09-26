import React, { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustBadgeRow } from '../components/TrustBadgeRow';
import { OperationsCollageSection } from '../components/OperationsCollageSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { StructureSection } from '../components/StructureSection';
import { ProductCatalogSection } from '../components/ProductCatalogSection';
import { SupplyIntegritySection } from '../components/SupplyIntegritySection';
import { PillarsSection } from '../components/PillarsSection';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { SpecialtyServicesSection } from '../components/SpecialtyServicesSection';
import { TopMarketsSection } from '../components/TopMarketsSection';
import { ShipmentPatternsDarkSection } from '../components/ShipmentPatternsDarkSection';
import { InsightsSection } from '../components/InsightsSection';
import { CtaBand } from '../components/CtaBand';

interface HomeProps {
  onOpenQuoteModal: (query?: string) => void;
  onOpenMeetingModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuoteModal, onOpenMeetingModal }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Jadon Pharmaceuticals India Private Limited · Wholesale Distribution & Cold-Chain Supply';
    window.scrollTo(0, 0);
  }, []);

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main id="main-content" className="flex-1">
      {/* Hero Section */}
      <HeroSection
        onOpenQuoteModal={() => onOpenQuoteModal()}
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
        onOpenQuoteModal={() => onOpenQuoteModal()}
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
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* 05 · PAN-India Supply Segments (Hospitals, Military, Clinics, Pharmacies) */}
      <TopMarketsSection
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* 06 · Operational Shipment Logs & Cold-Chain Excerpts */}
      <ShipmentPatternsDarkSection />

      {/* 07 · Regulatory Notes & Field Briefings */}
      <InsightsSection
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Institutional Inquiries Call to Action Band */}
      <CtaBand
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />
    </main>
  );
};
