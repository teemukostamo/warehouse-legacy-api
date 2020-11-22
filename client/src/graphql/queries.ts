import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  query getProducts($type: String!) {
    products(type: $type) {
      timestamp
      products {
        id
        type
        name
        color
        price
        manufacturer
        availability {
          DATAPAYLOAD
          id
        }
      }
    }
  }
`;

export default GET_PRODUCTS;
