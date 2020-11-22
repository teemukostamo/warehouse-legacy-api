import { RESTDataSource } from 'apollo-datasource-rest';
import { Product } from './types';

interface ApiResponse {
  products: Product[];
  timestamp: string;
}

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    // this.baseURL = 'https://bad-api-assignment.reaktor.com/';
    this.baseURL = 'https://bad-api-parser.herokuapp.com';
  }

  async getProducts(type: string): Promise<ApiResponse> {
    const response: ApiResponse = await this.get(`/${type}`);
    return this.productReducer(response);
  }

  productReducer(response: ApiResponse): ApiResponse {
    return {
      timestamp: response.timestamp,
      products: response.products,
    };
  }
}

export default ProductAPI;
