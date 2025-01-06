export type ProductionTier = 'craft' | 'scaling' | 'global';
export type ConsumptionTier = 'casual' | 'daily' | 'connoisseur';

export type TierInfo = {
  title: string;
  description: string;
  details: string;
  beans: number;
  image: string;
};

export type ConsumerTierInfo = {
  title: string;
  description: string;
  details: string;
  cups: number;
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

export type ConsumerFormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  consumptionTier: ConsumptionTier | null;
  consumptionDetails: string;
};