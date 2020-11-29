import React from "react";

import { Window } from "./components/Windows";

export const windows: Window[] = [
  {
    key: "window1",
    title: <div>Window 1</div>,
    content: (
      <div style={{ padding: "1rem" }}>
        Draggable, resizable, minimizable and maximizable. Bounded to the
        top-left of screen.
      </div>
    ),
    grids: { x: 0, y: 0, w: 4, h: 3 },
    bounds: { left: 0, top: 0, right: 6, bottom: 6 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 600, h: 300 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: false,
  },
  {
    key: "window2",
    title: <div>Window 2</div>,
    content: (
      <div style={{ padding: "1rem" }}>Only draggable. Has no bounds.</div>
    ),
    grids: { x: 4, y: 9, w: 4, h: 3 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 600, h: 300 },
    bounds: { left: 0, top: 0, right: 12, bottom: 12 },
    draggable: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    startMinimized: false,
  },
  {
    key: "window3",
    title: <div>Window 3</div>,
    content: (
      <div style={{ padding: "1rem" }}>
        Starting minimized. Bounded to the right side of screen
      </div>
    ),
    grids: { x: 8, y: 0, w: 4, h: 3 },
    bounds: { left: 6, top: 0, right: 12, bottom: 12 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 600, h: 300 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: true,
  },
];
