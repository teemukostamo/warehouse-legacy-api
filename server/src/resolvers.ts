import { ApiResponse } from './types';

interface Args {
  type: string;
}

interface Context {
  dataSources: {
    ProductAPI: {
      getProducts: (type: string) => ApiResponse;
    };
  };
}

const resolvers = {
  Query: {
    products: (_: unknown, args: Args, { dataSources }: Context): ApiResponse =>
      dataSources.ProductAPI.getProducts(args.type),
  },
};

export default resolvers;
