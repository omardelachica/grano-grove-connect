export type Lead = {
  id: string;
  created_at: string;
  type: 'roaster' | 'consumer';
  name: string;
  business_name?: string;
  phone?: string;
  email: string;
  address?: string;
  production_volume?: number;
  coffee_cups_per_week?: number;
};