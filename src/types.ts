export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProductItem {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  code: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

export interface MarketItem {
  id: string;
  name: string;
  regulator: string;
  flagCode: string;
}

export interface ShipmentPattern {
  id: string;
  route: string;
  title: string;
  description: string;
  entity: string;
  meta: string;
}

export interface InsightArticle {
  id: string;
  tag: string;
  title: string;
  summary: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  focus: string[];
  bio: string;
}

export interface StructureStep {
  step: string;
  title: string;
  subtitle: string;
  details: string;
}

