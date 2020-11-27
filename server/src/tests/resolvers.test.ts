/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import gql from 'graphql-tag';

import testServer from './testServer';
import ProductAPI from '../datasource';

describe('resolvers', () => {
  const { query } = testServer(() => ({
    ProductAPI: new ProductAPI(),
  }));

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

  it('fetches accessories from api', async () => {
    const res = await query({
      query: GET_PRODUCTS,
      variables: { type: 'accessories' },
    });

    // there are no errors
    expect(res.errors).toBe(undefined);

    // timestamp is correct length
    expect(res.data.products.timestamp.length).toBe(19);

    // there's more than one product
    expect(res.data.products.products.length).toBeGreaterThan(0);

    // type of product is accessories
    res.data.products.products.forEach((product: { type: string }) => {
      expect(product.type).toEqual('accessories');
    });

    // product ids match availability ids
    res.data.products.products.forEach(
      (product: { id: string; availability: { id: string } }) => {
        expect(product.id.toUpperCase()).toEqual(
          product.availability.id.toUpperCase()
        );
      }
    );
  });

  it('fetches jackets from api', async () => {
    const res = await query({
      query: GET_PRODUCTS,
      variables: { type: 'jackets' },
    });

    // there are no errors
    expect(res.errors).toBe(undefined);
    // timestamp is correct length
    expect(res.data.products.timestamp.length).toBe(19);

    // there's more than one product
    expect(res.data.products.products.length).toBeGreaterThan(0);

    // type of product is jackets
    res.data.products.products.forEach((product: { type: string }) => {
      expect(product.type).toEqual('jackets');
    });

    // product ids match availability ids
    res.data.products.products.forEach(
      (product: { id: string; availability: { id: string } }) => {
        expect(product.id.toUpperCase()).toEqual(
          product.availability.id.toUpperCase()
        );
      }
    );
  });

  it('fetches shirts from api', async () => {
    const res = await query({
      query: GET_PRODUCTS,
      variables: { type: 'shirts' },
    });

    // there are no errors
    expect(res.errors).toBe(undefined);

    // timestamp is correct length
    expect(res.data.products.timestamp.length).toBe(19);

    // there's more than one product
    expect(res.data.products.products.length).toBeGreaterThan(0);

    // type of product is shirts
    res.data.products.products.forEach((product: { type: string }) => {
      expect(product.type).toEqual('shirts');
    });

    // product ids match availability ids
    res.data.products.products.forEach(
      (product: { id: string; availability: { id: string } }) => {
        expect(product.id.toUpperCase()).toEqual(
          product.availability.id.toUpperCase()
        );
      }
    );
  });
});
