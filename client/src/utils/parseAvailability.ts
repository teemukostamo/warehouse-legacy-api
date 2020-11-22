const parseAvailability = (string: string): string => {
  const availability = string.substring(31).slice(0, -31);

  return availability;
};

export default parseAvailability;
