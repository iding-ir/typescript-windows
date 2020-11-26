export const getLocalStorage = (name: string, defaultValue: any) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) as string)
    : defaultValue;
};
