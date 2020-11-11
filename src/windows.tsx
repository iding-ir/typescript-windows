import React from "react";

import { IWindow } from "./components/Windows";
import Box from "./components/Box";

export const windows: IWindow[] = [
  {
    key: "box-1",
    component: <Box text="Draggable, resizable and collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 15, y: 15 },
    draggable: true,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-2",
    component: <Box text="Draggable, resizable and collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 315, y: 15 },
    draggable: true,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
];
