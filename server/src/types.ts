interface Availability {
  id: string;
  DATAPAYLOAD: string;
}

export interface Product {
  id: string;
  type: string;
  name: string;
  color: Array<string>;
  price: number;
  manufacturer: string;
  availability: Availability;
}

export interface ApiResponse {
  products: Product[];
  timestamp: string;
}
