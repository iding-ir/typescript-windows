import React, { createContext } from "react";

import "./Windows.css";
import "../css/resizable.css";

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

  return (
    <WindowContext.Provider value={{ grid: grid as number }}>
      <div className="windows">{items}</div>
    </WindowContext.Provider>
  );
};

Windows.defaultProps = {
  grid: 5,
};

export default Windows;
