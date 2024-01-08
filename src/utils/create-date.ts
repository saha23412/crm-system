import placeNumber from "./place-number";

const createFormatDate = (): string => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${placeNumber(day)}.${placeNumber((month + 1))}.${year}`;
};

export default createFormatDate;
