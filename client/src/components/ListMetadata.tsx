import React from 'react';
import AvailabilityExplanation from './AvailabilityExplanation';

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
    <h4 style={{ textAlign: 'center' }}>
      Showing {productCount} {productType}.
    </h4>
    <br />
    <br />
    <span className='general-info-left'>
      Data fetched on
      <br />
      {timestamp}
    </span>
    <span className='general-info-right'>
      <AvailabilityExplanation />
    </span>
  </div>
);

export default ListMetaData;
