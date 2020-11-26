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
    grids: { x: 9, y: 0, w: 3, h: 2 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: false,
  },
];
