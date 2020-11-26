import { ApiResponse, Context } from './types';

interface Args {
  type: string;
}

const resolvers = {
  Query: {
    products: (_: unknown, args: Args, { dataSources }: Context): ApiResponse =>
      dataSources.ProductAPI.getProducts(args.type),
  },
};

export default resolvers;
