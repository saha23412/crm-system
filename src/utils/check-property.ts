export const checkAllProperty = (obj: Record<string, unknown>): boolean => {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const currentProperty = keys[i];
    if (!obj[currentProperty]) {
      return false;
    }
  }
  return true;
};

export const getFiledValues = (
  obj: Record<string, unknown>
): Record<string, unknown> => {
  const keys = Object.keys(obj);
  const objFiled = {} as Record<string, unknown>;
  for (let i = 0; i < keys.length; i++) {
    const currentProperty = keys[i];
    if (obj[currentProperty]) {
      objFiled[currentProperty] = obj[currentProperty];
    }
  }
  return objFiled;
};
