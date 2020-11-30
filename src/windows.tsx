import React from "react";

import Window from "./components/Window";

export const windows: any[] = [
  <Window
    id="window1"
    key="window1"
    title={<div>Window 1</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Draggable, resizable, minimizable and maximizable.
      </div>
    }
    grids={{ x: 0, y: 0, w: 4, h: 4 }}
    draggable={true}
    resizable={true}
    minimizable={true}
    maximizable={true}
  />,
];
