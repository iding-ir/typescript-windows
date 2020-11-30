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
  id: string;
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

export const windows: JSX.Element[] = [
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
```

App.tsx:
```
import React from "react";
import { Windows, WindowsProvider } from "typescript-windows";

import "./App.scss";
import { windows } from "./windows";
import iconMinimize from "./assets/images/icon-minimize.png";
import iconMaximize from "./assets/images/icon-maximize.png";
import iconResize from "./assets/images/icon-resize.png";

const App = () => {
  return (
    <div className="app">
      <WindowsProvider>
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
      </WindowsProvider>
    </div>
  );
};

export default App;
```

App.scss:
```
.app {
  width: 100%;
  height: 100%;
  background-color: #263238;
}
```
