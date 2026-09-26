import React from 'react';

export const OperationsCollageSection: React.FC = () => {
  return (
    <section
      id="about"
      className="border-y border-[#BAE6FD] py-14 sm:py-20 scroll-mt-20 relative"
      style={{
        background: 'linear-gradient(165deg, #f0f9ff 0%, #e0f2fe 100%)',
      }}
      aria-label="About Central Depot and Operational Standards"
    >
      <span id="operations" className="absolute -top-24" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head - Ledger Style */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            01 · Central Depot · Gwalior (M.P.)
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0369A1] leading-[1.2] mb-3">
            WHO-GDP Compliant Warehousing &amp; Distribution Operations.
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            Operating under CDSCO Wholesale Drug License <strong className="text-[#0369A1] font-semibold">Wholesale-819-A</strong>,
            our central warehousing facility in Gwalior, Madhya Pradesh maintains active 2°C–8°C cold-room infrastructure,
            systematic batch quarantine, and verified chain-of-custody protocols for critical-care therapeutics.
          </p>
        </div>

        {/* Asymmetrical Operations Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Main Large Card (Left) */}
          <div className="md:col-span-7 relative group rounded-[12px] overflow-hidden border border-[#0284C7]/20 shadow-md aspect-[4/3] md:aspect-auto md:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80"
              alt="Central Gwalior depot and pharmaceutical dispatch"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 pt-16 pb-3.5 px-4 bg-gradient-to-t from-[#082F49]/90 via-[#082F49]/40 to-transparent">
              <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#BAE6FD] font-semibold">
                PLATE 01 · GWALIOR CENTRAL DEPOT · WHO-GDP VERIFIED
              </span>
            </div>
          </div>

          {/* Right Column with Two Stacked Cards */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Top Card */}
            <div className="relative group rounded-[12px] overflow-hidden border border-[#0284C7]/20 shadow-md aspect-[3/2] flex-1">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
                alt="2°C to 8°C cold-chain pharmaceutical storage chamber"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 pt-14 pb-3.5 px-4 bg-gradient-to-t from-[#082F49]/90 via-[#082F49]/40 to-transparent">
                <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#BAE6FD] font-semibold">
                  PLATE 02 · COLD-ROOM CHAMBERS · 2–8 °C ACTIVE TELEMETRY
                </span>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative group rounded-[12px] overflow-hidden border border-[#0284C7]/20 shadow-md aspect-[3/2] flex-1">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80"
                alt="Validated insulated packout for hospital dispatch"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 pt-14 pb-3.5 px-4 bg-gradient-to-t from-[#082F49]/90 via-[#082F49]/40 to-transparent">
                <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#BAE6FD] font-semibold">
                  PLATE 03 · CALIBRATED PACKOUT · BATCH COA &amp; GST INVOICE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
