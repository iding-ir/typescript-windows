import React from "react";

import { Window } from "./components/Windows";
import Box from "./components/Box";

export const windows: Window[] = [
  {
    key: "box-1",
    title: "box.title",
    component: (
      <Box text="Box-1: draggable, resizable, minimizable and maximizable." />
    ),
    grids: { x: 0, y: 0, w: 4, h: 3 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: false,
  },
  {
    key: "box-2",
    title: "box.title",
    component: <Box text="Box-2: only draggable." />,
    grids: { x: 4, y: 0, w: 4, h: 3 },
    draggable: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    startMinimized: false,
  },
  {
    key: "box-3",
    title: "box.title",
    component: <Box text="Box-3: starting minimized." />,
    grids: { x: 8, y: 0, w: 4, h: 3 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: true,
  },
];
