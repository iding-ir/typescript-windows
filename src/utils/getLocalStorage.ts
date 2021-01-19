export const getLocalStorage = (
  id: string,
  name: string,
  defaultValue: any
) => {
  const stprage = localStorage.getItem("windows");

  const windows = stprage ? JSON.parse(stprage as string) : {};

  return windows[id] && windows[id][name] ? windows[id][name] : defaultValue;
};
