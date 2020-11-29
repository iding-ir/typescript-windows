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

import Content from "./components/Content";
import Title from "./components/Title";

export const windows: Window[] = [
  {
    key: "window1",
    title: <Title i18n="window1.title" />,
    component: <Content i18n="window1.content" />,
    grids: { x: 0, y: 0, w: 4, h: 3 },
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
    title: <Title i18n="window2.title" />,
    component: <Content i18n="window2.content" />,
    grids: { x: 4, y: 9, w: 4, h: 3 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 600, h: 300 },
    draggable: true,
    resizable: false,
    minimizable: false,
    maximizable: false,
    startMinimized: false,
  },
  {
    key: "window3",
    title: <Title i18n="window3.title" />,
    component: <Content i18n="window3.content" />,
    grids: { x: 8, y: 0, w: 4, h: 3 },
    minSize: { w: 200, h: 100 },
    maxSize: { w: 600, h: 300 },
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
