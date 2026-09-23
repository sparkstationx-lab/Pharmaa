import React from 'react';
import { STRUCTURE_STEPS } from '../data/mockData';
import { Network, Warehouse, ThermometerSnowflake, Hospital, Check, Calendar, ArrowRight } from 'lucide-react';

export const StructureSection: React.FC = () => {
  const operations = [
    { label: 'Wholesale Distribution', desc: 'CDSCO-authorized wholesale under License Wholesale-819-A.' },
    { label: 'WHO-GDP Warehousing', desc: 'Centralized facility in Gwalior (M.P.) with validated storage zones.' },
    { label: 'Cold-Chain Logistics', desc: 'Unbroken 2°C–8°C active temperature telemetry monitoring.' },
    { label: 'Inventory Management', desc: 'Real-time batch traceability and manufacturer Certificate of Analysis (CoA).' },
    { label: 'Institutional Procurement', desc: 'Direct supply to Government, Military, and Corporate Healthcare tenders.' },
    { label: 'PAN-India Delivery Network', desc: 'Fast, secure dispatch corridors to hospitals, clinics, and pharmacies.' },
  ];

  const milestones = [
    {
      year: '2024',
      badge: 'Completed Expansion',
      title: 'Regional Logistics Depots Expansion',
      desc: 'Expanded regional distribution satellite hubs to accelerate delivery speed and localized stock availability across key healthcare zones.',
    },
    {
      year: '2026',
      badge: 'Active Deployment',
      title: 'Institutional Client Portal Integration',
      desc: 'Seamless digital platform enabling hospital procurement teams to view live stock, track temperature-controlled consignments, and download batch CoAs instantly.',
    },
  ];

  return (
    <section
      id="structure"
      className="py-14 sm:py-20 bg-[#FBFAF6] border-b border-[#D4DCD6]"
      aria-labelledby="structure-title"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-12">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            Operational Architecture &amp; Value Chain
          </span>
          <h2
            id="structure-title"
            className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3"
          >
            How We're Structured: Source to Bedside.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Our operational model bridges authorized pharmaceutical manufacturers with clinical institutions
            through a regulated, cold-chain compliant distribution infrastructure.
          </p>
        </div>

        {/* Visual Value-Chain Flow Pipeline */}
        <div className="mb-14">
          <div className="text-xs font-mono-ui uppercase tracking-[0.14em] text-[#0A3F23] font-bold mb-4 flex items-center gap-2">
            <Network className="w-4 h-4 text-[#C9A451]" />
            End-to-End Regulated Distribution Model:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {STRUCTURE_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white border border-[#D4DCD6] rounded-[12px] p-5 shadow-xs flex flex-col justify-between relative group hover:border-[#C9A451] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-ui text-xs font-bold text-[#A38442] bg-[#F5EBD2] px-2 py-0.5 rounded-[4px]">
                      STAGE {step.step}
                    </span>
                    {idx < 3 && (
                      <span className="hidden md:inline-block text-[#C9A451] font-bold text-sm">
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#0A3F23] mb-1">
                    {step.title}
                  </h3>
                  <span className="block text-xs font-mono-ui text-[#A38442] mb-2 font-medium">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-[#55675D] leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Pillars Grid & Strategic Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 6 Operational Capabilities */}
          <div className="lg:col-span-7 bg-white border border-[#D4DCD6] rounded-[12px] p-6 sm:p-7 shadow-xs">
            <h3 className="font-editorial text-2xl font-bold text-[#0A3F23] mb-2">
              Core Operational Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-[#55675D] mb-6">
              CDSCO wholesale compliance meets active temperature preservation and automated inventory tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {operations.map((op, idx) => (
                <div
                  key={idx}
                  className="bg-[#FBFAF6] border border-[#D4DCD6]/80 rounded-[8px] p-3.5 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#E4F1E8] flex items-center justify-center text-[#1B7A3C] shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0A3F23]">
                      {op.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#55675D] leading-snug pl-7">
                    {op.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Timeline & Digital Roadmap */}
          <div className="lg:col-span-5 bg-[#0A3F23] text-white rounded-[12px] p-6 sm:p-7 shadow-md border border-[#C9A451]/30 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-ui text-[#D9B870] uppercase tracking-[0.14em] font-semibold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                Strategic Growth &amp; Technology Roadmap
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white mb-6">
                Continuous Infrastructure Scaling
              </h3>

              <div className="space-y-6">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#C9A451]/50">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C9A451] border-2 border-[#0A3F23]" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-editorial text-2xl font-bold text-[#D9B870]">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-mono-ui uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded text-white/90">
                        {m.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-white/75 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between text-xs font-mono-ui text-[#D9B870]">
              <span>Verified Institutional Infrastructure</span>
              <span>Gwalior Central Hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
