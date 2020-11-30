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
  />,
  <Window
    id="window2"
    key="window2"
    title={<div>Window 2</div>}
    content={
      <div style={{ padding: "1rem" }}>
        With minimum and maximum size.
      </div>
    }
    grids={{ x: 4, y: 0, w: 4, h: 4 }}
    minSize= {{ w: 200, h: 100 }}
    maxSize= {{ w: 500, h: 300 }}
  />,
  <Window
    id="window3"
    key="window3"
    title={<div>Window 3</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Bounded to the upper half of the screen.
      </div>
    }
    grids={{ x: 8, y: 0, w: 4, h: 4 }}
    bounds={{ top: 0, left: 0, right: 12, bottom: 6 }}
  />,
  <Window
    id="window4"
    key="window4"
    title={<div>Window 4</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Not draggable.
      </div>
    }
    grids={{ x: 0, y: 4, w: 4, h: 4 }}
    draggable={false}
  />,
  <Window
    id="window5"
    key="window5"
    title={<div>Window 5</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Not resizable.
      </div>
    }
    grids={{ x: 4, y: 4, w: 4, h: 4 }}
    resizable={false}
  />,
  <Window
    id="window6"
    key="window6"
    title={<div>Window 6</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Not minimizable.
      </div>
    }
    grids={{ x: 8, y: 4, w: 4, h: 4 }}
    minimizable={false}
  />,
  <Window
    id="window7"
    key="window7"
    title={<div>Window 7</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Not maximizable.
      </div>
    }
    grids={{ x: 0, y: 8, w: 4, h: 4 }}
    maximizable={false}
  />,
  <Window
    id="window8"
    key="window8"
    title={<div>Window 8</div>}
    content={
      <div style={{ padding: "1rem" }}>
        Starting minimized.
      </div>
    }
    grids={{ x: 4, y: 8, w: 4, h: 4 }}
    startMinimized={true}
  />,
];
