import React from "react";

import { Window } from "./components/Windows";
import Box from "./components/Box";

export const windows: Window[] = [
  {
    key: "box-1",
    component: <Box text="Draggable, resizable, collapsable and maximizable" />,
    size: { w: 200, h: 200 },
    location: { x: 15, y: 15 },
    draggable: true,
    resizable: true,
    collapsable: true,
    maximizable: true,
    title: "box.title",
  },
  {
    key: "box-2",
    component: <Box text="Only draggable" />,
    size: { w: 200, h: 200 },
    location: { x: 315, y: 15 },
    draggable: true,
    resizable: false,
    collapsable: false,
    maximizable: false,
    title: "box.title",
  },
];
