import React from 'react';

const ListHeaders: React.FC = () => (
  <div className='flex-container'>
    <div className='flex-item'>Item#</div>
    <div className='flex-item fg-2'>Product Name</div>
    <div className='flex-item'>Manufacturer</div>
    <div className='flex-item'>Availability</div>
    <div className='flex-item'>Color(s)</div>
    <div className='flex-item'>Price</div>
  </div>
);

export default ListHeaders;
