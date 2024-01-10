const paramsCheck = (nameParams: string, valueParams: string): string => {
  return valueParams ? `${nameParams}=${valueParams}` : "";
};

export default paramsCheck;
