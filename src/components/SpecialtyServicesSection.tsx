import React from 'react';
import { SERVICE_ITEMS } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface SpecialtyServicesSectionProps {
  onOpenQuoteModal: () => void;
}

export const SpecialtyServicesSection: React.FC<SpecialtyServicesSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section id="services" className="py-14 sm:py-20 bg-[#FBFAF6]" aria-label="Specialty Services">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            04 · Operational Capabilities
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3">
            Regulated Wholesale, Cold-Chain &amp; Institutional Supply.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Operating from our centralized Gwalior distribution depot, Jadon Pharmaceuticals integrates
            WHO-GDP certified warehousing, unbroken 2°C–8°C cold-chain logistics, and dedicated account
            management for hospitals, clinics, and government healthcare procurement.
          </p>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_ITEMS.map((service) => (
            <div
              key={service.id}
              onClick={onOpenQuoteModal}
              className="group bg-white border border-[#D4DCD6] rounded-[12px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#C9A451] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Circular Icon Badge */}
                <div className="w-11 h-11 rounded-full bg-[#F5EBD2] text-[#0A3F23] font-bold flex items-center justify-center text-lg mb-5 group-hover:bg-[#C9A451] transition-colors">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-editorial text-2xl font-semibold text-[#0A3F23] mb-2.5 leading-snug group-hover:text-[#0F5B2E] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#55675D] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-[#D4DCD6]/60 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A38442] group-hover:text-[#0A3F23] transition-colors">
                <span>{service.linkText}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Ghost Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0A3F23] text-[#0A3F23] hover:text-white border border-[#0A3F23] font-medium text-sm sm:text-base px-7 py-3 rounded-[4px] transition-all cursor-pointer shadow-2xs"
          >
            <span>See all 18 services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
