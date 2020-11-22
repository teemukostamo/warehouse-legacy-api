/* eslint-disable react/no-array-index-key */
import React from 'react';
import { ImDroplet } from 'react-icons/im';

interface Props {
  colors: string[];
}

const Color: React.FC<Props> = ({ colors }) => {
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div>
      {colors.map((color, index) => (
        <>
          <ImDroplet
            key={index}
            style={{ marginLeft: '6px' }}
            size={15}
            color={`${color}`}
          />
        </>
      ))}
    </div>
  );
};

export default Color;
