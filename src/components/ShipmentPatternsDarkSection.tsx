import React from 'react';
import { SHIPMENT_PATTERNS } from '../data/mockData';

export const ShipmentPatternsDarkSection: React.FC = () => {
  return (
    <section
      id="shipments"
      className="py-16 sm:py-24 text-white relative overflow-hidden"
      style={{
        background:
          'radial-gradient(1100px 520px at 82% -8%, rgba(56,189,248,0.25), transparent 62%), radial-gradient(900px 480px at 8% 108%, rgba(186,230,253,0.15), transparent 60%), linear-gradient(120deg, #0369A1 0%, #0284C7 50%, #0EA5E9 100%)',
      }}
      aria-label="Recent Shipment Patterns"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#38BDF8] pl-5 sm:pl-6 max-w-[800px] mb-12">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#BAE6FD] font-bold mb-2">
            06 · From the Field · Log Excerpts
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-[1.2]">
            Three Recent Operational Shipments.
          </h2>
        </div>

        {/* 3 Shipment Pattern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {SHIPMENT_PATTERNS.map((shipment) => (
            <div
              key={shipment.id}
              className="bg-[#082F49]/40 border border-white/20 border-l-[3px] border-l-[#38BDF8] rounded-[12px] p-6 sm:p-7 shadow-xl flex flex-col justify-between backdrop-blur-xs"
            >
              <div>
                {/* Route Chip */}
                <span className="inline-block font-mono-ui text-[11px] tracking-[0.1em] text-[#0369A1] bg-[#E0F2FE] border border-[#BAE6FD] rounded-[4px] px-2.5 py-1 mb-4 font-semibold">
                  {shipment.route}
                </span>

                {/* Main Text */}
                <p className="text-sm sm:text-[15px] text-white/90 leading-relaxed mb-6">
                  <strong className="text-white font-semibold block mb-1">
                    {shipment.title}
                  </strong>
                  {shipment.description}
                </p>
              </div>

              {/* Verified Attribution Meta */}
              <div className="pt-4 border-t border-white/15 flex flex-col gap-0.5">
                <strong className="text-xs sm:text-sm font-semibold text-white">
                  {shipment.entity}
                </strong>
                <span className="font-mono-ui text-[11px] text-[#BAE6FD] tracking-wider">
                  {shipment.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
