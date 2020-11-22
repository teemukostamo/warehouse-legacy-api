import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_PRODUCTS from '../graphql/queries';
import { UseProductsReturnType } from '../types';

const useProducts = (type: string): UseProductsReturnType => {
  const [products, setProducts] = useState();

  const { error, loading } = useQuery(GET_PRODUCTS, {
    variables: { type },
    fetchPolicy: 'cache-and-network',
    pollInterval: 300000,
    onCompleted: (data) => {
      setProducts(data.products);
    },
  });

  return { products, loading, error };
};

export default useProducts;
