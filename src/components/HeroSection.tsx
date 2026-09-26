import React, { useState } from 'react';
import { HERO_STATS } from '../data/mockData';
import { ArrowRight, Search } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onSearch: (query: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0EA5E9] text-white py-16 sm:py-24 lg:py-28"
      aria-labelledby="hero-title"
    >
      {/* Radial lighting ambient effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 75% 20%, rgba(56, 189, 248, 0.28), transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(186, 230, 253, 0.18), transparent 50%)',
        }}
      />

      {/* Geometric Molecular Network SVG Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden" aria-hidden="true">
        <svg
          viewBox="0 0 1200 780"
          className="w-full h-full object-cover animate-pulse-subtle"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#BAE6FD" strokeWidth="1" fill="none" opacity="0.6">
            <circle cx="180" cy="120" r="36" />
            <circle cx="1020" cy="200" r="52" />
            <circle cx="920" cy="620" r="44" />
            <circle cx="260" cy="600" r="60" />
            <path d="M180,120 L420,260 L260,600" />
            <path d="M420,260 L700,180 L1020,200" />
            <path d="M700,180 L860,420 L920,620" />
            <path d="M260,600 L540,500 L920,620" />
            <path d="M540,500 L700,180" />
          </g>
          <g fill="#BAE6FD" opacity="0.8">
            <circle cx="180" cy="120" r="3.5" />
            <circle cx="420" cy="260" r="3.5" />
            <circle cx="260" cy="600" r="3.5" />
            <circle cx="540" cy="500" r="3.5" />
            <circle cx="700" cy="180" r="3.5" />
            <circle cx="860" cy="420" r="3.5" />
            <circle cx="920" cy="620" r="3.5" />
            <circle cx="1020" cy="200" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Origin & License Pill */}
        <div
          id="hero-origin-pill"
          className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/30 text-[#E0F2FE] font-mono-ui text-xs tracking-wider uppercase mb-6 shadow-xs backdrop-blur-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
          <span>Gwalior Hub (M.P.) · CDSCO Lic. Wholesale-819-A · WHO-GDP Cold-Chain</span>
        </div>

        {/* Hero Title */}
        <h1
          id="hero-title"
          className="font-editorial text-4xl sm:text-5xl lg:text-[62px] font-semibold tracking-tight leading-[1.12] text-white max-w-[22ch] mb-6"
        >
          Hospital-Grade Formulations &amp; <em className="italic text-[#BAE6FD] font-medium font-editorial">Critical-Care Supply</em> Across India.
        </h1>

        {/* Hero Lede / Description */}
        <p className="font-editorial text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.55] text-white/90 max-w-[62ch] mb-7">
          <strong className="text-white font-semibold">Jadon Pharmaceuticals India Private Limited</strong> is
          a regulated pharmaceutical wholesale and distribution company. We supply hospital-grade formulations,
          critical-care therapeutics, plasma derivatives, and specialty medicine to hospitals, clinics, and pharmacies
          with unbroken <strong className="text-white font-semibold">2°C–8°C cold-chain telemetry</strong> and full
          batch traceability from our WHO-GDP compliant hub in <strong className="text-white font-semibold">Gwalior, Madhya Pradesh</strong>.
        </p>

        {/* Partner Distribution Relationships Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[6px] bg-white/15 border border-white/25 text-xs font-mono-ui text-white/95 mb-7">
          <span className="text-[#BAE6FD] font-semibold">Authorized Distribution:</span>
          <span>Senores Pharmaceuticals</span>
          <span className="text-white/40">·</span>
          <span>Concord Biotech (INCA)</span>
        </div>

        {/* Search Bar Form */}
        <form
          id="hero-search-form"
          onSubmit={handleSearchSubmit}
          className="max-w-[620px] flex flex-col sm:flex-row gap-2.5 mb-7"
          role="search"
          aria-label="Search the product portfolio"
        >
          <div className="relative flex-1">
            <input
              id="hero-search-input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search critical-care, plasma, oncology, injectables, or CoA..."
              className="w-full bg-white text-[#082F49] px-4 py-3.5 rounded-[8px] border-2 border-[#BAE6FD] placeholder:text-[#475569]/75 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#38BDF8] shadow-md"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#082F49] hover:bg-[#0C4A6E] text-white font-semibold px-6 py-3.5 rounded-[4px] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* CTA Buttons Row */}
        <div id="hero-cta-group" className="flex flex-wrap items-center gap-3.5 mb-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F9FF] text-[#0284C7] font-bold text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-colors shadow-sm cursor-pointer"
          >
            <span>Request Institutional Quote</span>
            <ArrowRight className="w-4 h-4 text-[#0284C7]" />
          </button>

          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0284C7] border border-white/50 text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>Therapeutic Formulations</span>
          </a>

          <a
            href="#compliance"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-white hover:text-[#0284C7] border border-white/50 text-sm sm:text-base px-6 py-3.5 rounded-[4px] transition-all cursor-pointer"
          >
            <span>License Wholesale-819-A</span>
          </a>
        </div>

        {/* Statistics Meta Grid */}
        <div
          id="hero-stats-row"
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-white/15 max-w-[760px]"
        >
          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="border-t-2 border-[#C9A451] pt-3">
              <div className="font-editorial text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none mb-1">
                {stat.value}
              </div>
              <div className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.1em] text-white/70 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
