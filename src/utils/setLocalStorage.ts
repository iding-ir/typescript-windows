export const setLocalStorage = (id: string, name: string, value: any) => {
  let storage = JSON.parse(localStorage.getItem("windows") as string) || {};

  storage = {
    ...storage,
    [id]: {
      ...storage[id],
      [name]: value,
    },
  };

  localStorage.setItem("windows", JSON.stringify(storage));
};
