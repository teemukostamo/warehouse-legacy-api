import React from 'react';
import { ImHappy2, ImNeutral2, ImSad2, ImQuestion } from 'react-icons/im';

interface Props {
  availability: string;
}

const Availability: React.FC<Props> = ({ availability }) => {
  switch (availability) {
    case 'INSTOCK':
      return <ImHappy2 style={{ marginLeft: '5px' }} size={20} color='green' />;
    case 'LESSTHAN10':
      return (
        <ImNeutral2 style={{ marginLeft: '5px' }} size={20} color='yellow' />
      );
    case 'OUTOFSTOCK':
      return <ImSad2 style={{ marginLeft: '5px' }} size={20} color='red' />;
    default:
      return (
        <ImQuestion style={{ marginLeft: '5px' }} size={20} color='grey' />
      );
  }
};

export default Availability;
