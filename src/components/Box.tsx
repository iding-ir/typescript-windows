import React from "react";

interface BoxProps {
  text: string;
}

const Box = (props: BoxProps) => {
  const { text } = props;

  return <div>{text}</div>;
};

export default Box;
