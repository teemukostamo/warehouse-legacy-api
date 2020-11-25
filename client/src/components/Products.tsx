import React, { CSSProperties } from 'react';
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
}

interface RowProps {
  index: number;
  style: CSSProperties;
}

const Products: React.FC<Props> = ({ products, loading }) => {
  if (loading || !products?.products) {
    return <div>Loading products...</div>;
  }

  const Row: React.FC<RowProps> = ({ index, style }) => (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      <div className='product-index flex-item'>
        {index + 1} of {products.products.length}
      </div>
      <div className='product-name flex-item fg-2'>
        {products.products[index].name}
      </div>
      <div className='product-manufacturer flex-item'>
        {products.products[index].manufacturer}
      </div>
      <div className='product-availability flex-item'>
        <Availability
          availability={products.products[index].availability.DATAPAYLOAD}
        />
      </div>
      <div className='product-colors flex-item'>
        <Color colors={products.products[index].color} />
      </div>
      <div className='product-price flex-item'>
        {products.products[index].price},00€
      </div>
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
            height={400}
            width={width}
            itemCount={products.products.length}
            itemSize={35}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </>
  );
};

export default Products;
