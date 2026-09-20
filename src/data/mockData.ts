import {
  NavItem,
  StatItem,
  ProductItem,
  ServiceItem,
  MarketItem,
  ShipmentPattern,
  InsightArticle,
} from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#operations' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Markets', href: '#markets' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book a meeting', href: '#meeting' },
];

export const TRUST_BAR_ITEMS = [
  'Verified Quality Sourced',
  'Certified Facility Partners',
  'Global Standards Compliant',
  '49+ Export Markets',
  'Established Since 2005',
];

export const HERO_STATS: StatItem[] = [
  { value: '160,000+', label: 'Item portfolio across panel' },
  { value: '18', label: 'Specialty categories' },
  { value: '49+', label: 'Global markets served' },
  { value: '24h', label: 'Quote response speed' },
];

export const TRUST_BADGES = [
  'Authorized Export License',
  'Global GDP Verified',
  'Export Council Member',
  'Trade Federation Member',
  'Temperature Validated',
  'Dossier CTD / eCTD Ready',
];

export const PRODUCT_LIST: ProductItem[] = [
  {
    id: 'prod-01',
    category: 'Specialty Care',
    name: 'Product Name 01',
    description: 'Reference formulation with validated documentation and cold-chain compliance.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    code: 'REF-01',
  },
  {
    id: 'prod-02',
    category: 'Therapeutic Line',
    name: 'Product Name 02',
    description: 'Specialty injectable solution available across standard dosage configurations.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
    code: 'REF-02',
  },
  {
    id: 'prod-03',
    category: 'Therapeutic Line',
    name: 'Product Name 03',
    description: 'Prefilled pens and solid formulations with full regulatory batch trail.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
    code: 'REF-03',
  },
  {
    id: 'prod-04',
    category: 'Cardiovascular',
    name: 'Product Name 04',
    description: 'Film-coated oral formulations supplied with complete Certificate of Analysis.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80',
    code: 'REF-04',
  },
  {
    id: 'prod-05',
    category: 'Immunology',
    name: 'Product Name 05',
    description: 'Recombinant biological line maintained under verified 2°C to 8°C protocols.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&auto=format&fit=crop&q=80',
    code: 'REF-05',
  },
  {
    id: 'prod-06',
    category: 'Endocrine Care',
    name: 'Product Name 06',
    description: 'Long-acting delivery formulation with continuous temperature data logging.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=500&auto=format&fit=crop&q=80',
    code: 'REF-06',
  },
  {
    id: 'prod-07',
    category: 'Antivirals',
    name: 'Product Name 07',
    description: 'Standard institutional regimen supplied against confirmed purchase orders.',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=80',
    code: 'REF-07',
  },
  {
    id: 'prod-08',
    category: 'Hospital Care',
    name: 'Product Name 08',
    description: 'Essential hospital clinical workhorse packaged for institutional tenders.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
    code: 'REF-08',
  },
  {
    id: 'prod-09',
    category: 'Biologics',
    name: 'Product Name 09',
    description: 'Lyophilized infusion vial series supplied with export dossier documentation.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop&q=80',
    code: 'REF-09',
  },
  {
    id: 'prod-10',
    category: 'Specialty Line',
    name: 'Product Name 10',
    description: 'High-specification concentrate formulation handled with active thermal packout.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&auto=format&fit=crop&q=80',
    code: 'REF-10',
  },
];

export const MARQUEE_CATEGORIES = [
  'Specialty Care',
  'Anti-Infectives',
  'Cardiovascular',
  'Neurology & CNS',
  'Endocrine & Metabolic',
  'Antivirals',
  'Respiratory Care',
  'Critical Care & ICU',
  'Haematology & Biologics',
  'Immunizations',
  'Ophthalmology',
  'Dermatology',
  'Surgical Disposables',
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'serv-01',
    icon: '❄',
    title: 'Service Name 01',
    description: 'Validated 2°C–8°C and ultra-low lanes with continuous telemetry and pre-dispatch verification.',
    linkText: 'Protocol Details',
  },
  {
    id: 'serv-02',
    icon: 'Rx',
    title: 'Service Name 02',
    description: 'Specialty supply access for rare therapeutics and regulated compassionate usage programs.',
    linkText: 'Supply Route',
  },
  {
    id: 'serv-03',
    icon: '⚕',
    title: 'Service Name 03',
    description: 'Comprehensive response for institutional tenders, hospital authorities, and pooled procurement desks.',
    linkText: 'Institutional Framework',
  },
  {
    id: 'serv-04',
    icon: '◈',
    title: 'Service Name 04',
    description: 'Comparative sourcing for multi-center clinical trials with complete compliance dossiers.',
    linkText: 'Trial Specifications',
  },
];

export const TOP_MARKETS: MarketItem[] = [
  { id: 'm-01', name: 'Market Region 01', regulator: 'Authority Alpha · Desk A', flagCode: 'QA' },
  { id: 'm-02', name: 'Market Region 02', regulator: 'Authority Beta · Desk B', flagCode: 'KW' },
  { id: 'm-03', name: 'Market Region 03', regulator: 'Authority Gamma · Desk C', flagCode: 'NG' },
  { id: 'm-04', name: 'Market Region 04', regulator: 'Authority Delta · Desk D', flagCode: 'KE' },
  { id: 'm-05', name: 'Market Region 05', regulator: 'Authority Epsilon · Desk E', flagCode: 'ZA' },
  { id: 'm-06', name: 'Market Region 06', regulator: 'Authority Zeta · Desk F', flagCode: 'GB' },
  { id: 'm-07', name: 'Market Region 07', regulator: 'Authority Eta · Desk G', flagCode: 'DE' },
  { id: 'm-08', name: 'Market Region 08', regulator: 'Authority Theta · Desk H', flagCode: 'AE' },
  { id: 'm-09', name: 'Market Region 09', regulator: 'Authority Iota · Desk I', flagCode: 'SA' },
];

export const SHIPMENT_PATTERNS: ShipmentPattern[] = [
  {
    id: 'ship-01',
    route: 'HUB A → HUB B · SPECIAL REGIME',
    title: 'Licensed Importer Shortage Window.',
    description: 'Emergency institutional order fulfilled in 11 days door-to-door with complete destination regulatory pack and validated transit.',
    entity: 'Licensed Institutional Buyer',
    meta: 'Verified Dispatch · 240 Units · Verified Log',
  },
  {
    id: 'ship-02',
    route: 'HUB A → HUB C · 2–8 °C BAND',
    title: 'Specialty Hospital Cold-Chain Corridor.',
    description: 'Active shipper consignment on 72-hour air lane. Continuous IoT temperature logging recorded zero thermal excursions outside tolerance.',
    entity: 'Regional Tertiary Hospital',
    meta: 'Active Shipper · Calibrated Sensors · Cleared',
  },
  {
    id: 'ship-03',
    route: 'HUB A → HUB D · GOV TENDER',
    title: 'Institutional Framework Consignment.',
    description: 'Multi-batch delivery for state health tender desks with pre-shipment inspection, legalized COA, and direct customs port handover.',
    entity: 'Public Health Procurement Board',
    meta: 'Tender Batch · Legalized Dossier · Signed',
  },
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'ins-01',
    tag: 'REGULATORY · IMPORT PROTOCOL',
    title: 'Understanding Destination Regulatory Requirements',
    summary: 'Navigating local agent mandates, batch analysis criteria, and required manufacturer documentation for import clearance.',
  },
  {
    id: 'ins-02',
    tag: 'BUYER’S GUIDE · BULK PROCUREMENT',
    title: 'Optimizing Bulk International Orders',
    summary: 'A practical review of MOQ thresholds, landed cost calculations, customs pack preparation, and trade incoterms.',
  },
  {
    id: 'ins-03',
    tag: 'LOGISTICS · COLD-CHAIN INTEGRITY',
    title: 'Active vs. Passive Thermal Packaging in Transit',
    summary: 'Thermal profiling, seasonal route adjustments, and data logger validation for sensitive biological cargo.',
  },
];
