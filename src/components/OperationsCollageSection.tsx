import React from 'react';

export const OperationsCollageSection: React.FC = () => {
  return (
    <section
      id="operations"
      className="border-y border-[#E5CD93] py-14 sm:py-20"
      style={{
        background: 'linear-gradient(165deg, #fbf8f0 0%, #f1ead8 100%)',
      }}
      aria-label="Operations and Facility Standards"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head - Ledger Style */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[800px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            01 · Behind the Quote
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3">
            Your Operational Standards.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Your description explaining disciplined warehouse handling, validated cold-chain protocols,
            and complete export documentation verification.
          </p>
        </div>

        {/* Asymmetrical Operations Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5">
          {/* Main Large Card (Left) */}
          <div className="md:col-span-7 relative group rounded-[12px] overflow-hidden border border-[#0A3F23]/15 shadow-md aspect-[4/3] md:aspect-auto md:min-h-[460px]">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80"
              alt="Operational depot and facility dispatch"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 pt-16 pb-3.5 px-4 bg-gradient-to-t from-[#04180d]/90 via-[#04180d]/40 to-transparent">
              <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#E5CD93] font-semibold">
                PLATE 01 · DEPOT &amp; DISPATCH · VERIFIED STANDARDS
              </span>
            </div>
          </div>

          {/* Right Column with Two Stacked Cards */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Top Card */}
            <div className="relative group rounded-[12px] overflow-hidden border border-[#0A3F23]/15 shadow-md aspect-[3/2] flex-1">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80"
                alt="Controlled temperature storage facility"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 pt-14 pb-3.5 px-4 bg-gradient-to-t from-[#04180d]/90 via-[#04180d]/40 to-transparent">
                <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#E5CD93] font-semibold">
                  PLATE 02 · STORAGE FACILITY · 2–8 °C LOGGED
                </span>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="relative group rounded-[12px] overflow-hidden border border-[#0A3F23]/15 shadow-md aspect-[3/2] flex-1">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80"
                alt="Insulated shipping box export packout"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 pt-14 pb-3.5 px-4 bg-gradient-to-t from-[#04180d]/90 via-[#04180d]/40 to-transparent">
                <span className="font-mono-ui text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#E5CD93] font-semibold">
                  PLATE 03 · EXPORT PACKOUT · MONITORED TRANSIT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
