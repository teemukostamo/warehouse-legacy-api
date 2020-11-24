import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ImDroplet } from 'react-icons/im';

interface Props {
  colors: string[];
}

const Color: React.FC<Props> = ({ colors }) => {
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <>
      {colors.map((color) => (
        <ImDroplet
          key={uuidv4()}
          style={{ marginLeft: '6px' }}
          size={15}
          color={`${color}`}
        />
      ))}
    </>
  );
};

export default Color;
