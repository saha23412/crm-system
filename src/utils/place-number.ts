const placeNumber = (num: number): string => {
  return num >= 10 ? `${num}` : `0${num}`;
};

export default placeNumber