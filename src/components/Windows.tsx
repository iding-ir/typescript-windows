import React from "react";

import "./Windows.css";
import "../css/resizable.css";

interface WindowsProps {
  items: JSX.Element[];
}

const Windows = (props: WindowsProps) => {
  const { items } = props;

  return <div className="windows">{items}</div>;
};

export default Windows;
