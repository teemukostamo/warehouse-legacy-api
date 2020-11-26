import React from 'react';
import { ImHappy2, ImNeutral2, ImSad2, ImQuestion } from 'react-icons/im';

const AvailabilityExplanation: React.FC = () => (
  <>
    <ImHappy2 style={{ marginLeft: '18px' }} size={20} color='green' /> = Plenty
    of stock
    <br />
    <ImNeutral2 style={{ marginLeft: '18px' }} size={20} color='yellow' /> =
    Less than 10
    <br />
    <ImSad2 style={{ marginLeft: '18px' }} size={20} color='red' /> = Out of
    stock
    <br />
    <ImQuestion style={{ marginLeft: '18px' }} size={20} color='grey' /> =
    Availability unknown
  </>
);

export default AvailabilityExplanation;
