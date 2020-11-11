import React from "react";

import Window from "./components/Window";
import Box from "./components/Box";

export const windows: JSX.Element[] = [
  <Window
    key="box-1"
    component={<Box text="Draggable, resizable and collapsable" />}
    size={{ w: 200, h: 200 }}
    location={{ x: 15, y: 15 }}
    draggable={true}
    resizable={true}
    collapsable={true}
    title="box.title"
  />,
  <Window
    key="box-1"
    component={<Box text="Only draggable" />}
    size={{ w: 200, h: 200 }}
    location={{ x: 315, y: 15 }}
    draggable={true}
    resizable={false}
    collapsable={false}
    title="box.title"
  />,
];
