export type ProductionTier = 'craft' | 'scaling' | 'global';

export type TierInfo = {
  title: string;
  description: string;
  details: string;
  beans: number;
  image: string;
};

export type FormData = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
  productionTier: ProductionTier | null;
};