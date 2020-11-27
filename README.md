## Index

- [Intro](#intro)
- [Demo](#demo)
- [Example](#example)

## Intro

Typescript Floating Windows.

## Demo

[Live demo](http://typescript-windows.iding.ir)

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
          borderRadius: "1rem",
          headerSize: "2.4rem",
          headerColor: "#bdbdbd",
          headerBackground: "#424242",
          bodyColor: "#9e9e9e",
          bodyBackground: "#212121",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          IconMaximize: `url(${iconMaximize})`,
          IconMinimize: `url(${iconMinimize})`,
          IconResize: `url(${iconResize})`,
        }}
      />
    </div>
  );
};

export default App;

```