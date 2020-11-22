import React, { CSSProperties } from 'react';
import { ApolloError } from '@apollo/react-hooks';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import ListMetaData from './ListMetadata';
import ListHeaders from './ListHeaders';
import Color from './Color';
import Availability from './Availability';

import { ProductsWithTimestamp } from '../types';

interface Props {
  products: ProductsWithTimestamp | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

interface RowProps {
  index: number;
  style: CSSProperties;
}

const Products: React.FC<Props> = ({ products, loading, error }) => {
  if (loading || !products?.products) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const Row: React.FC<RowProps> = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <div className='flex-item'>
        {index + 1} of {products.products.length}
      </div>
      <div className='flex-item fg-2'>{products.products[index].name}</div>
      <div className='flex-item'>{products.products[index].manufacturer}</div>
      <div className='flex-item'>
        <Availability
          availability={products.products[index].availability.DATAPAYLOAD}
        />
      </div>
      <div className='flex-item'>
        <Color colors={products.products[index].color} />
      </div>
      <div className='flex-item'>{products.products[index].price},00€</div>
    </div>
  );

  return (
    <>
      <ListMetaData
        productCount={products.products.length}
        productType={products.products[0].type}
        timestamp={products.timestamp}
      />
      <ListHeaders />
      <AutoSizer>
        {({ width }) => (
          <List
            height={410}
            itemCount={products.products.length}
            itemSize={35}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </>
  );
};

export default Products;
