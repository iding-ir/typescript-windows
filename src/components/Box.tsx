import React from "react";

import "./Box.scss";

interface BoxProps {
  text: string;
}

const Box = (props: BoxProps) => {
  const { text } = props;

  return <div className="box">{text}</div>;
};

export default Box;
