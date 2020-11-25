import React from "react";

import { Window } from "./components/Windows";
import Box from "./components/Box";

export const windows: Window[] = [
  {
    key: "box-1",
    title: "box.title",
    component: (
      <Box text="Box-1: draggable, resizable, minimizable and maximizable" />
    ),
    size: { w: 200, h: 200 },
    location: { x: 15, y: 15 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
  },
  {
    key: "box-2",
    title: "box.title",
    component: <Box text="Box-2: only draggable" />,
    size: { w: 200, h: 200 },
    location: { x: 315, y: 15 },
    draggable: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
  },
  {
    key: "box-3",
    title: "box.title",
    component: (
      <Box text="Box-3: draggable, resizable, minimizable and maximizable" />
    ),
    size: { w: 200, h: 200 },
    location: { x: 15, y: 315 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
  },
];
