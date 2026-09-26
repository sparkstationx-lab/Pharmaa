import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Building2,
  ThermometerSnowflake,
  FileCheck2,
  CheckCircle2,
  XCircle,
  ArrowRight,
  MapPin,
  Mail,
  FileText,
  BadgeCheck,
  AlertTriangle,
  Award,
  ChevronRight,
  Sparkles,
  Layers,
  Activity,
  PhoneCall,
  Clock,
  Check,
} from 'lucide-react';
import logoImg from '../assets/logo1.jpg';

interface AboutProps {
  onOpenQuoteModal?: (query?: string) => void;
  onOpenMeetingModal?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal, onOpenMeetingModal }) => {
  useEffect(() => {
    document.title = 'About Us · Jadon Pharmaceuticals India Private Limited';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 bg-[#FBFAF6] text-[#082F49]">
      {/* 1. Page Header Hero with Clean Typography & Depot Imagery */}
      <section className="relative pt-8 pb-16 sm:pb-24 border-b border-[#BAE6FD]/60 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#FBFAF6] to-[#FBFAF6]">
        {/* Subtle Ambient Backdrops */}
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#38BDF8]/12 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-28 -left-32 w-96 h-96 rounded-full bg-[#BAE6FD]/20 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono-ui text-[#475569]">
            <Link to="/" className="hover:text-[#0284C7] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-[#0284C7] font-semibold" aria-current="page">
              About
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Typography Block */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] font-mono-ui text-xs tracking-wider uppercase mb-5 font-semibold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                CDSCO Licensed Wholesale-819-A · Gwalior Hub
              </span>

              <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#082F49] leading-[1.12] mb-6">
                From Gwalior Central Depot to the institutions that{' '}
                <span className="text-[#0284C7] italic">cannot afford a stock-out.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed mb-8 max-w-2xl">
                Jadon Pharmaceuticals India Private Limited is a specialized wholesale distributor supplying tertiary hospitals,
                clinics, and pharmacies nationwide with critical care formulations, cold-chain therapeutics, and 100% batch-verified documentation.
              </p>

              {/* Impactful Trust Chips */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono-ui text-[#0369A1]">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold">CDSCO Form 20B &amp; 21B Licensed</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                  <ThermometerSnowflake className="w-4 h-4 text-[#0284C7]" />
                  <span className="font-semibold">Active 2°C–8°C Cold-Chain</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#BAE6FD] shadow-xs">
                  <FileCheck2 className="w-4 h-4 text-[#0284C7]" />
                  <span className="font-semibold">Direct Manufacturer COA</span>
                </div>
              </div>
            </div>

            {/* Right Hero Feature Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#BAE6FD] shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern WHO-GDP pharmaceutical cold-chain distribution warehouse"
                  className="w-full h-[340px] sm:h-[400px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/85 via-[#082F49]/30 to-transparent" />

                {/* Floating Glassmorphic Telemetry Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg text-xs font-mono-ui text-[#082F49]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <strong className="text-[#0369A1] font-bold text-xs uppercase tracking-wider">
                        Depot Environmental Control
                      </strong>
                    </div>
                    <span className="text-[#0284C7] font-bold text-sm bg-[#E0F2FE] px-2 py-0.5 rounded">
                      4.2°C Normal
                    </span>
                  </div>
                  <p className="text-[#475569] text-[11px] leading-snug">
                    Dual-redundant cooling chambers with automated multi-probe continuous telemetry in Gwalior (M.P.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Accreditation & Standards Ribbon */}
      <section className="bg-white border-b border-[#BAE6FD]/70 py-4 sm:py-5 overflow-x-auto">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 text-xs font-mono-ui text-[#475569]">
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>CDSCO Licensed Wholesaler</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>WHO-GDP Compliant Depot</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Direct Manufacturer Alliances</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>Form 20B &amp; 21B Authorized</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>2°C–8°C Validated Lanes</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
              <span>100% Batch COA Release</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are: Split Media with Impactful Scannable Pillars */}
      <section className="py-18 sm:py-24 border-b border-[#BAE6FD]/50">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column with Quality Inspection Photo & Brand Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#BAE6FD] shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
                    alt="Pharmaceutical analytical laboratory and batch inspection"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                </div>

                {/* Overlaid Corporate Credential Badge */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white p-5 rounded-2xl border border-[#BAE6FD] shadow-xl max-w-xs text-xs font-mono-ui">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={logoImg}
                      alt="Jadon Pharmaceuticals"
                      className="w-10 h-10 rounded-lg object-contain bg-white border border-[#BAE6FD]"
                    />
                    <div>
                      <strong className="block text-[#0369A1] font-editorial text-sm">
                        Jadon Pharmaceuticals
                      </strong>
                      <span className="text-[#475569] text-[10px]">India Pvt. Ltd. · Central Hub</span>
                    </div>
                  </div>
                  <p className="text-[#475569] text-[11px] leading-tight border-t border-[#BAE6FD]/60 pt-2">
                    Direct distribution partnerships with Senores Pharmaceuticals and Concord Biotech (INCA).
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative & High-Impact Typography Column */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-3">
                Who we are
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-6">
                An authorized distribution house with zero tolerance for compromised supply.
              </h2>

              <p className="text-base text-[#334155] leading-relaxed mb-8">
                Operating under CDSCO Wholesale License Wholesale-819-A, we manage the procurement, climate-controlled
                storage, and expedited dispatch of critical-care formulations. We are not speculative brokers: every box
                originates directly from verified manufacturer production lines.
              </p>

              {/* Three Clean Pillars Instead of Dense Text */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#BAE6FD] shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#082F49] mb-1">
                      100% Direct Manufacturer Procurements
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Zero secondary-market or distress inventory. Every line is sourced straight from our authorized manufacturer alliances.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#BAE6FD] shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#082F49] mb-1">
                      Complete Batch Dossiers &amp; Verified COAs
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Shipments include laboratory analytical releases verifying potency, dissolution, and sterility for hospital formulary compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#BAE6FD] shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 font-bold">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#082F49] mb-1">
                      Continuous 2°C–8°C Temperature Adherence
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      Validated PCM shippers and calibrated in-transit data loggers ensure strict cold-chain integrity from depot to dock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Performance Metrics Banner (Clean Impactful Typography) */}
      <section className="py-14 sm:py-16 bg-[#0369A1] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-6 sm:pb-0 sm:pr-6">
              <span className="font-mono-ui text-3xl sm:text-5xl font-bold tracking-tight text-white block mb-1">
                819-A
              </span>
              <span className="font-editorial text-sm sm:text-base text-[#BAE6FD] block font-semibold">
                Wholesale Drug License
              </span>
              <span className="text-[11px] text-white/70 font-mono-ui mt-1 block">
                CDSCO Authorized · Gwalior Hub
              </span>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-6 sm:pb-0 sm:pr-6">
              <span className="font-mono-ui text-3xl sm:text-5xl font-bold tracking-tight text-[#38BDF8] block mb-1">
                2°C–8°C
              </span>
              <span className="font-editorial text-sm sm:text-base text-[#BAE6FD] block font-semibold">
                Active Cold-Chain Storage
              </span>
              <span className="text-[11px] text-white/70 font-mono-ui mt-1 block">
                Calibrated multi-probe telemetry
              </span>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-white/20 pb-6 sm:pb-0 sm:pr-6">
              <span className="font-mono-ui text-3xl sm:text-5xl font-bold tracking-tight text-white block mb-1">
                100%
              </span>
              <span className="font-editorial text-sm sm:text-base text-[#BAE6FD] block font-semibold">
                Batch Traceability
              </span>
              <span className="text-[11px] text-white/70 font-mono-ui mt-1 block">
                Manufacturer COA on every lot
              </span>
            </div>

            <div>
              <span className="font-mono-ui text-3xl sm:text-5xl font-bold tracking-tight text-[#38BDF8] block mb-1">
                24–48h
              </span>
              <span className="font-editorial text-sm sm:text-base text-[#BAE6FD] block font-semibold">
                Hospital Dispatch SLA
              </span>
              <span className="text-[11px] text-white/70 font-mono-ui mt-1 block">
                Dedicated thermal freight corridors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership: "The desk you're actually talking to" with Professional Portraits */}
      <section className="py-18 sm:py-24 bg-[#F0F9FF]/40 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-2">
              Leadership
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              The desk you're actually talking to.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Family-run, professionally staffed. Every institutional contract and quotation is signed off by a named principal director, not a rotating call-centre queue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aman Jadon */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#0284C7] transition-all flex flex-col group">
              <div className="h-64 sm:h-72 overflow-hidden relative bg-[#E0F2FE]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Aman Jadon, Director · Commercial & Institutional Supply"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono-ui uppercase tracking-widest text-[#BAE6FD] block">
                    Commercial Desk Head
                  </span>
                  <h3 className="font-editorial text-xl font-bold">Aman Jadon</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono-ui text-xs text-[#0284C7] uppercase tracking-wider font-semibold mb-3">
                    Director · Commercial &amp; Institutional Supply
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    Leads commercial strategy, rate contracts, and key manufacturer alliances with Senores and Concord Biotech.
                    Authorizes institutional supply tenders with transparent pricing continuity.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#BAE6FD]/60 flex items-center justify-between text-[11px] font-mono-ui text-[#0369A1]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Tender &amp; Rate Sign-off
                  </span>
                  <span className="text-[#64748B]">Gwalior / Delhi Desk</span>
                </div>
              </div>
            </div>

            {/* Achal Jadon */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#0284C7] transition-all flex flex-col group">
              <div className="h-64 sm:h-72 overflow-hidden relative bg-[#E0F2FE]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                  alt="Achal Jadon, Director · Logistics & Cold-Chain Operations"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono-ui uppercase tracking-widest text-[#BAE6FD] block">
                    Operations Desk Head
                  </span>
                  <h3 className="font-editorial text-xl font-bold">Achal Jadon</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono-ui text-xs text-[#0284C7] uppercase tracking-wider font-semibold mb-3">
                    Director · Logistics &amp; Cold-Chain Operations
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    Directs Central Depot operations, active 2°C–8°C chambers, transit data logging,
                    and nationwide express corridors, enforcing zero-excursion delivery protocols.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#BAE6FD]/60 flex items-center justify-between text-[11px] font-mono-ui text-[#0369A1]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ThermometerSnowflake className="w-3.5 h-3.5 text-[#0284C7]" />
                    Cold-Chain &amp; Depot
                  </span>
                  <span className="text-[#64748B]">Central Logistics</span>
                </div>
              </div>
            </div>

            {/* Radhe Shyam Jadon */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#0284C7] transition-all flex flex-col group">
              <div className="h-64 sm:h-72 overflow-hidden relative bg-[#E0F2FE]">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
                  alt="Radhe Shyam Jadon, Founder & Chairman"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono-ui uppercase tracking-widest text-[#BAE6FD] block">
                    Board Chair
                  </span>
                  <h3 className="font-editorial text-xl font-bold">Radhe Shyam Jadon</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-mono-ui text-xs text-[#0284C7] uppercase tracking-wider font-semibold mb-3">
                    Founder &amp; Chairman
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    Founded the enterprise with a core commitment to pharmaceutical integrity, ethical distribution,
                    and direct healthcare supply under CDSCO statutory governance.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#BAE6FD]/60 flex items-center justify-between text-[11px] font-mono-ui text-[#0369A1]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-[#0369A1]" />
                    Corporate Governance
                  </span>
                  <span className="text-[#64748B]">Board Oversight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How We're Structured (Three Coordinated Divisions) */}
      <section className="py-18 sm:py-24 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-2">
              How we're structured
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              Three divisions, one unified standard.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Every hospital dispatch is managed end-to-end by dedicated professionals with clear lines of accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Division 1 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-[#0284C7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-1">
                Gwalior Central Depot
              </h3>
              <p className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold mb-4">
                Storage · Packing · Dispatch
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WHO-GDP compliant 2°C–8°C chambers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dual-redundant automated generator backup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>PCM insulated shippers for air &amp; road freight</span>
                </li>
              </ul>
            </div>

            {/* Division 2 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-[#0284C7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-1">
                Institutional Desk
              </h3>
              <p className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold mb-4">
                Rate Contracts · Onboarding
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official quotation response inside 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Formulary tender submissions and rate locks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapid B2B buyer onboarding &amp; Form 20B/21B check</span>
                </li>
              </ul>
            </div>

            {/* Division 3 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-[#0284C7] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-5">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-1">
                QA &amp; Compliance
              </h3>
              <p className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold mb-4">
                COA Release · Audits · SOPs
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Original manufacturer COA attached to every invoice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calibrated electronic data logger trace archival</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>CDSCO statutory inspection compliance adherence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality & Compliance: Split Layout with Cold-Chain Storage Photo */}
      <section className="py-18 sm:py-24 bg-[#FBFAF6] border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Block */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-2">
                Quality &amp; compliance
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-6">
                The documentation defines the delivery.
              </h2>
              <p className="text-base text-[#334155] leading-relaxed mb-6">
                Our distribution model is grounded in audit-proof compliance. Every manufacturer in our network
                is qualified against rigorous national and international benchmarks—WHO-GMP as baseline,
                with US-FDA and EU-GMP certifications across primary sterile manufacturing partner sites.
              </p>

              {/* 4 Clean Quality Safeguards */}
              <div className="space-y-3 font-mono-ui text-xs">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#BAE6FD] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[#082F49] font-medium">Direct sourcing from authorized manufacturers only</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#BAE6FD] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[#082F49] font-medium">Batch Certificate of Analysis (COA) with every dispatch</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#BAE6FD] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[#082F49] font-medium">Cold-room continuous temperature telemetry &amp; excursion insurance</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#BAE6FD] shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[#082F49] font-medium">Licensed B2B buyers onboarding only (Form 20B/21B &amp; GSTIN)</span>
                </div>
              </div>
            </div>

            {/* Right Photo Block with Temperature Telemetry Overlay */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#BAE6FD] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Sterile pharmaceutical vials in active cold-chain storage"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082F49]/80 via-[#082F49]/20 to-transparent" />

                {/* Overlaid Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-lg text-xs font-mono-ui">
                  <div className="flex items-center justify-between text-[#082F49] font-bold mb-1">
                    <span className="flex items-center gap-1.5 text-[#0369A1]">
                      <ThermometerSnowflake className="w-4 h-4 text-[#0284C7]" />
                      Cold-Room Sensor Suite
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Within Target (2°C–8°C)
                    </span>
                  </div>
                  <p className="text-[#475569] text-[11px]">
                    Validated packaging using phase-change materials for multi-day uninterrupted transit across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "What We Don't Do" Section (Clear High-Impact Rules) */}
      <section className="py-18 sm:py-24 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-2">
              What we don't do
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              A business defined as much by what we turn down.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Pharmaceutical supply is a domain where compromises endanger lives. We uphold unambiguous boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rule 1 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-2">
                No Grey-Market Stock
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every batch is traceable to a single authorized manufacturing partner. We never buy parallel imports, secondary-market lots, or auction liquidations.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-2">
                No Cold-Chain Shortcuts
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                If an in-transit logger reveals a temperature excursion exceeding manufacturer limits, the parcel is quarantined immediately. We never negotiate on drug potency.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-7 shadow-xs hover:border-red-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-editorial text-2xl font-bold text-[#082F49] mb-2">
                No Unlicensed Sales
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                We supply strictly to registered hospitals, institutions, and pharmacies with validated Form 20B/21B licenses and active GSTIN numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Authorized Partner Portfolio */}
      <section className="py-18 sm:py-24 bg-[#F0F9FF]/50 border-b border-[#BAE6FD]/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono-ui uppercase tracking-wider text-[#0284C7] font-semibold block mb-2">
              Authorized Alliances
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082F49] tracking-tight leading-tight mb-4">
              Strategic distribution relationships.
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Direct wholesale relationships providing hospitals with certified access to critical therapeutic portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-8 shadow-xs flex flex-col justify-between hover:border-[#0284C7] transition-all">
              <div>
                <span className="inline-block bg-[#E0F2FE] text-[#0369A1] font-mono-ui text-xs font-semibold px-3 py-1 rounded-md mb-4">
                  Direct Authorized Partner
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#082F49] mb-3">
                  Senores Pharmaceuticals
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  Comprehensive critical care portfolio covering systemic anti-infectives, cardiology formulations,
                  and hospital injectables sourced directly from US-FDA and WHO-GMP approved production lines.
                </p>
              </div>
              <div className="pt-4 border-t border-[#BAE6FD]/60 text-xs font-mono-ui text-[#0284C7] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                <span>Injectables · Solid Orals · Specialized Formulations</span>
              </div>
            </div>

            <div className="bg-white border border-[#BAE6FD] rounded-2xl p-8 shadow-xs flex flex-col justify-between hover:border-[#0284C7] transition-all">
              <div>
                <span className="inline-block bg-[#E0F2FE] text-[#0369A1] font-mono-ui text-xs font-semibold px-3 py-1 rounded-md mb-4">
                  Direct Authorized Partner
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#082F49] mb-3">
                  Concord Biotech (INCA)
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                  Specialized immunosuppressants, oncology injectables, nephrology products, and complex fermentation-derived
                  medicines maintained under strict continuous 2°C–8°C cold-chain standards.
                </p>
              </div>
              <div className="pt-4 border-t border-[#BAE6FD]/60 text-xs font-mono-ui text-[#0284C7] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                <span>Immunosuppressants · Oncology · Nephrology · Cold-Chain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Work With Us / Bottom CTA Band */}
      <section className="py-18 sm:py-24 bg-gradient-to-r from-[#0369A1] via-[#0284C7] to-[#0369A1] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#E0F2FE] font-mono-ui text-xs tracking-wider uppercase mb-5 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Institutional Procurement Inquiries
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              If you supply hospitals, clinics, or tender desks, we should talk.
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8">
              Send us the molecule, required volume, and delivery institution.
              Our commercial desk will reply with an authorized quote, batch release timeline, and compliance documentation pack inside one business day.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {onOpenQuoteModal ? (
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="inline-flex items-center gap-2 bg-white text-[#0369A1] hover:bg-[#F0F9FF] font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md font-mono-ui text-sm"
                >
                  <span>Request Wholesale Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0369A1] hover:bg-[#F0F9FF] font-semibold px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-md font-mono-ui text-sm"
                >
                  <span>Request Wholesale Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}

              {onOpenMeetingModal ? (
                <button
                  type="button"
                  onClick={onOpenMeetingModal}
                  className="inline-flex items-center gap-2 bg-[#0284C7]/40 hover:bg-[#0284C7]/60 text-white font-medium px-5 py-3.5 rounded-xl border border-white/30 transition-all cursor-pointer font-mono-ui text-sm"
                >
                  <span>Book a Consultation</span>
                </button>
              ) : (
                <Link
                  to="/book-a-meeting"
                  className="inline-flex items-center gap-2 bg-[#0284C7]/40 hover:bg-[#0284C7]/60 text-white font-medium px-5 py-3.5 rounded-xl border border-white/30 transition-all cursor-pointer font-mono-ui text-sm"
                >
                  <span>Book a Consultation</span>
                </Link>
              )}
            </div>

            <div className="mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/80 font-mono-ui">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#BAE6FD]" />
                <span>Central Distribution Hub · Gwalior (M.P.)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#BAE6FD]" />
                <a href="mailto:inquiry@jadonpharma.com" className="hover:underline">
                  inquiry@jadonpharma.com
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#BAE6FD]" />
                <span>Lic. Wholesale-819-A</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
