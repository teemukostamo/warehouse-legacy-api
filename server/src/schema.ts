import { gql } from 'apollo-server-express';

const typeDefs = gql`
  enum Type {
    shirts
    jackets
    accessories
  }

  type Availability {
    id: String
    DATAPAYLOAD: String
  }

  type Product {
    id: String!
    index: Int!
    type: Type!
    name: String!
    color: [String]
    price: Int!
    manufacturer: String!
    availability: Availability
  }

  type ProductsAndTimestamp {
    products: [Product!]!
    timestamp: String!
  }

  type Query {
    products(type: String!): ProductsAndTimestamp!
  }
`;

export default typeDefs;
