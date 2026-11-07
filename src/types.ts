export type ProductType = 'end-to-end' | 'standalone';

export interface ProductItem {
  id: string;
  name: string;
  type: ProductType;
  tagline: string;
  description: string;
  features: string[];
  status: 'In Production' | 'In Active Deployment' | 'In Development';
  targetAudience: string[];
  metrics: string;
  iconName: string;
}

export interface TechCapability {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
  badge: string;
}

export interface SimulationStep {
  id: number;
  label: string;
  detail: string;
  status: 'pending' | 'processing' | 'completed' | 'flagged';
  durationMs: number;
}

export interface SimulationScenario {
  id: string;
  title: string;
  description: string;
  documentsCount: number;
  sampleDocument: string;
  extractedFields: { label: string; value: string; confidence: string }[];
  rulesApplied: { rule: string; passed: boolean; note?: string }[];
  resultSummary: string;
  requiresSignOff: boolean;
}

