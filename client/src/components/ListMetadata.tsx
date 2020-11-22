import React from 'react';

interface Props {
  productCount: number;
  productType: string;
  timestamp: string;
}

const ListMetaData: React.FC<Props> = ({
  productCount,
  productType,
  timestamp,
}) => (
  <div className='general-info'>
    <span className='general-info-left'>
      Showing {productCount} {productType}.
    </span>
    <br />
    <br />
    <span className=''>
      Data fetched on
      <br />
      {timestamp}
    </span>
  </div>
);

export default ListMetaData;
