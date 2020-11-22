import { ApolloError } from '@apollo/react-hooks';

export interface Availability {
  id: string;
  DATAPAYLOAD: string;
}

export interface Product {
  id: string;
  name: string;
  manufacturer: string;
  price: number;
  availability: Availability;
  color: string[];
  type: string;
}

export interface ProductsWithTimestamp {
  products: Product[];
  timestamp: string;
}

export interface UseProductsReturnType {
  error: undefined | ApolloError;
  products: ProductsWithTimestamp | undefined;
  loading: boolean;
}
