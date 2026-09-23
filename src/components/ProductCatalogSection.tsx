import React from 'react';
import { PRODUCT_LIST } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

interface ProductCatalogSectionProps {
  onOpenQuoteModal: () => void;
  filteredQuery?: string;
}

export const ProductCatalogSection: React.FC<ProductCatalogSectionProps> = ({
  onOpenQuoteModal,
  filteredQuery = '',
}) => {
  const displayedProducts = filteredQuery
    ? PRODUCT_LIST.filter(
        (p) =>
          p.name.toLowerCase().includes(filteredQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(filteredQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(filteredQuery.toLowerCase())
      )
    : PRODUCT_LIST;

  return (
    <section id="products" className="py-14 sm:py-20 bg-[#FBFAF6]" aria-label="Product Portfolio">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Head */}
        <div className="border-l-[3px] border-[#C9A451] pl-5 sm:pl-6 max-w-[840px] mb-10">
          <span className="block font-mono-ui text-xs uppercase tracking-[0.14em] text-[#A38442] font-bold mb-2">
            02 · Regulated Formulations · PAN-India Supply
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#0A3F23] leading-[1.2] mb-3">
            Hospital-Grade &amp; Specialty Therapeutic Lines.
          </h2>
          <p className="text-[#55675D] text-base sm:text-lg leading-relaxed">
            Supplying intensive care units, oncology departments, and pharmacy networks with authorized
            lines from premier manufacturing partners including{' '}
            <strong className="text-[#0A3F23] font-semibold">Senores Pharmaceuticals</strong> and{' '}
            <strong className="text-[#0A3F23] font-semibold">Concord Biotech (INCA)</strong>. Every delivery includes
            genuine batch Certificates of Analysis (CoAs) and GST tax invoices.{' '}
            <button
              onClick={onOpenQuoteModal}
              className="text-[#0A3F23] font-semibold underline underline-offset-4 decoration-[#C9A451] hover:text-[#0F5B2E] cursor-pointer"
            >
              Submit an institutional supply requirement
            </button>
            .
          </p>
        </div>

        {/* 5-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              onClick={onOpenQuoteModal}
              className="group bg-white border border-[#D4DCD6] rounded-[12px] p-4 flex flex-col justify-between hover:border-[#C9A451] hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div>
                {/* Product Image Square Container */}
                <div className="aspect-square w-full rounded-[8px] overflow-hidden bg-[#F4F6F4] mb-3.5 border border-[#0A3F23]/8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Category Meta */}
                <span className="block font-mono-ui text-[10.5px] uppercase tracking-[0.12em] text-[#A38442] font-bold mb-1">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="font-editorial text-lg font-semibold text-[#0A3F23] leading-snug mb-1.5 group-hover:text-[#0F5B2E] transition-colors">
                  {product.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#55675D] leading-relaxed line-clamp-3">
                  {product.description}
                </p>
              </div>

              <div className="mt-3.5 pt-2 border-t border-[#D4DCD6]/60 flex items-center justify-between text-xs text-[#0A3F23] font-medium font-mono-ui">
                <span>{product.code}</span>
                <span className="text-[#C9A451] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Ghost CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#0A3F23] text-[#0A3F23] hover:text-white border border-[#0A3F23] font-medium text-sm sm:text-base px-7 py-3 rounded-[4px] transition-all cursor-pointer shadow-2xs"
          >
            <span>See the full portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
