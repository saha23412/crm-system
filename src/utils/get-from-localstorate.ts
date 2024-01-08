const getFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    const valueParse = (value ? JSON.parse(value) : null) as T | null;
    return valueParse;
  }
  return null;
};

export default getFromLocalStorage;
