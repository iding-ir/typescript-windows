import React from "react";

import { Window } from "./components/Windows";

export const windows: Window[] = [
  {
    key: "window1",
    title: <div>Window 1</div>,
    content: (
      <div style={{ padding: "1rem" }}>
        Draggable, resizable, minimizable and maximizable.
      </div>
    ),
    grids: { x: 0, y: 0, w: 4, h: 4 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
  },
  {
    key: "window2",
    title: <div>Window 2</div>,
    content: (
      <div style={{ padding: "1rem" }}>Bounded to the top of the screen.</div>
    ),
    grids: { x: 4, y: 0, w: 4, h: 4 },
    bounds: { left: 0, top: 0, right: 12, bottom: 6 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
  },
  {
    key: "window3",
    title: <div>Window 3</div>,
    content: <div style={{ padding: "1rem" }}>Only draggable.</div>,
    grids: { x: 8, y: 0, w: 4, h: 4 },
    draggable: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    startMinimized: false,
  },
  {
    key: "window4",
    title: <div>Window 4</div>,
    content: (
      <div style={{ padding: "1rem" }}>
        With minimum and maximum window size.
      </div>
    ),
    grids: { x: 0, y: 4, w: 4, h: 4 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 500, h: 300 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: false,
  },
  {
    key: "window5",
    title: <div>Window 5</div>,
    content: <div style={{ padding: "1rem" }}>Starting minimized.</div>,
    grids: { x: 4, y: 4, w: 4, h: 4 },
    draggable: true,
    resizable: true,
    minimizable: true,
    maximizable: true,
    startMinimized: true,
  },
];
