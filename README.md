## Index

- [Intro](#intro)
- [Demo](#demo)
- [Installation](#installation)
- [Options](#options)
- [Example](#example)

## Intro

Typescript draggable and resizable windows.

## Demo

[Live demo](http://typescript-windows.iding.ir)

## Installation

npm:
```
npm install typescript-windows --save
```

## Options

Window:
```
Window {
  key: string;
  title: JSX.Element;
  content: JSX.Element;
  grids: { x: number; y: number; w: number; h: number };
  bounds?: { left: number; top: number; right: number; bottom: number };
  minSize?: { w: number; h: number };
  maxSize?: { w: number; h: number };
  draggable?: boolean;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  startMinimized?: boolean;
}
```

Windows:
```
Windows {
  windows: Window[];
  taskbar?: boolean;
  grid?: number;
  gridsGap?: number;
  gridsCount?: number;
  styles?: Styles;
}
```

## Example

windows.tsx:
```
import React from "react";
import { Window } from "typescript-windows";

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
```

App.tsx:
```
import React from "react";
import Windows from "typescript-windows/Windows";

import "./App.scss";
import { windows } from "./windows";
import iconMinimize from "./assets/images/icon-minimize.png";
import iconMaximize from "./assets/images/icon-maximize.png";
import iconResize from "./assets/images/icon-resize.png";

const App = () => {
  return (
    <div className="app">
      <Windows
        windows={windows}
        taskbar={true}
        grid={5}
        gridsGap={10}
        gridsCount={12}
        styles={{
          header: {
            size: "2.4rem",
            color: "#bdbdbd",
            background: "#424242",
          },
          body: {
            color: "#9e9e9e",
            background: "#212121",
          },
          icons: {
            maximize: `url(${iconMaximize})`,
            minimize: `url(${iconMinimize})`,
            resize: `url(${iconResize})`,
          },
          borderRadius: "1rem",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  );
};

export default App;
```
