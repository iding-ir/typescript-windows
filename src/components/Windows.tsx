import React, { createContext } from "react";

import "./Windows.scss";

export interface IWindow {
  grid: number;
}

export const WindowContext = createContext<IWindow>({
  grid: 5,
});

interface WindowsProps {
  items: JSX.Element[];
  grid?: number;
}

const Windows = (props: WindowsProps) => {
  const { items, grid } = props;

  const value = {
    grid: grid as number,
  };

  return (
    <WindowContext.Provider value={value}>
      <div className="ts-windows">{items}</div>
    </WindowContext.Provider>
  );
};

Windows.defaultProps = {
  grid: 5,
};

export default Windows;
