import React, { useState, createContext } from "react";

import "./Windows.css";
import "../css/resizable.css";

export interface IWindow {
  grid: number;
  zIndex: number;
  setZIndex: (zIndex: number) => void;
}

export const WindowContext = createContext<IWindow>({
  grid: 5,
  zIndex: 1000,
  setZIndex: () => {},
});

interface WindowsProps {
  items: JSX.Element[];
  grid?: number;
}

const Windows = (props: WindowsProps) => {
  const { items, grid } = props;

  const [zIndex, setZIndex] = useState(items.length);

  const value = {
    grid: grid as number,
    zIndex,
    setZIndex,
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
