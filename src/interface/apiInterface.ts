export interface ApiResponse {
  category?: string;
  description?: string;
  id?: number;
  title: string;
  image: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
  discountPercent?: number;
}
