import React, { Context, useState, createContext } from "react";

export const StateContext: Context<any> = createContext({
  state: {},
  setState: () => {},
});

interface Props {
  children: JSX.Element;
}

export const StateProvider = (props: Props) => {
  const { children } = props;

  const [state, setState] = useState({});

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
