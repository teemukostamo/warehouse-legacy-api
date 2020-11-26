import React from 'react';

const ListHeaders: React.FC = () => (
  <div className='flex-container list-header-container'>
    <div className='flex-item list-header-item'>Item#</div>
    <div className='flex-item fg-2 list-header-item'>Product Name</div>
    <div className='flex-item list-header-item'>Manufacturer</div>
    <div className='flex-item list-header-item'>Color(s)</div>
    <div className='flex-item list-header-item'>Price</div>
    <div className='flex-item list-header-item'>Availability</div>
  </div>
);

export default ListHeaders;
