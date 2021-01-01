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

#### npm

```
npm install typescript-windows --save
```

## Options

#### Windows

```
Windows {
  taskbar?: boolean;
  step?: number;
  breakPoints: { [key: string]: number };
  gridsGap?: number;
  gridsCount?: number;
  styles?: Styles;
}
```

| Option      | Type    | Default | Description                                   |
| ----------- | ------- | ------- | --------------------------------------------- |
| taskbar     | boolean | true    | Whether of not windows minimize to a taskbar. |
| step        | number  | 1       | Step size when dragging and resizing.         |
| breakPoints | object  | \*      | View breakpoints.                             |
| gridsGap    | number  | 10      | Gap size between grids.                       |
| gridsCount  | number  | 12      | Number of grids.                              |
| styles      | Styles  | \*\*    | JSS style for components.                     |

##### \*

```
{ mobile: 0, tablet: 600, desktop: 1280 }
```

##### \*\*

```
{
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
}
```

#### Example

```
<Windows
taskbar={true}
step={5}
breakPoints: { mobile: 0, tablet: 600, desktop: 1280 },
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

></Windows>
```

#### Window

```
Window {
id: string;
grids: {
  [key: string]: { x: number; y: number; w: number; h: number };
};
title?: JSX.Element;
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

| Option         | Type          | Default | Description                                     |
| -------------- | ------------- | ------- | ----------------------------------------------- |
| id             | Unique string |         | HTML id attribute set for a window.             |
| grids          | object        |         | Position of a window between grids.             |
| title          | JSX.Element   |         | JSX title of a window.                          |
| bounds         | object        |         | Bounds of a window between grids.               |
| minSize        | object        |         | Minimum resizable size of a window.             |
| maxSize        | object        |         | Maximum resizable size of a window.             |
| draggable      | boolean       | true    | Whether a window is draggable or not.           |
| resizable      | boolean       | true    | Whether a window is resizable or not.           |
| minimizable    | boolean       | true    | Whether a window is minimizable or not.         |
| maximizable    | boolean       | true    | Whether a window is maximizable or not.         |
| startMinimized | boolean       | false   | Whether a window should start minimized or not. |

#### Example

```
<Window
id="window"
grids={{
  mobile: { x: 0, y: 0, w: 12, h: 1 },
  tablet: { x: 0, y: 0, w: 6, h: 3 },
  desktop: { x: 0, y: 0, w: 4, h: 4 },
}}
title={<div>Title</div>}
bounds={{ top: 0, left: 0, right: 12, bottom: 6 }}
minSize={{ w: 200, h: 100 }}
maxSize={{ w: 500, h: 300 }}
draggable={true}
resizable={true}
minimizable={true}
maximizable={true}
startMinimized={true}

>
  <div style={{ padding: "1rem" }}>Content</div>
</Window>
```

Note: in "grids" option, "desktop" is mandatory and the other two are optional.

## Example

#### App.tsx

```
import React from "react";
import { WindowsProvider, Windows, Window } from "typescript-windows";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <WindowsProvider>
        <Windows taskbar={true} step={5}>
          <Window
            id="window1"
            grids={{
              mobile: { x: 0, y: 0, w: 12, h: 1 },
              tablet: { x: 0, y: 0, w: 6, h: 3 },
              desktop: { x: 0, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 1</div>}
          >
            <div style={{ padding: "1rem" }}>
              Draggable, resizable, minimizable and maximizable.
            </div>
          </Window>

          <Window
            id="window2"
            grids={{
              mobile: { x: 0, y: 1, w: 12, h: 1 },
              tablet: { x: 6, y: 0, w: 6, h: 3 },
              desktop: { x: 4, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 2</div>}
            minSize={{ w: 200, h: 100 }}
            maxSize={{ w: 500, h: 300 }}
          >
            <div style={{ padding: "1rem" }}>
              With minimum and maximum size.
            </div>
          </Window>

          <Window
            id="window3"
            grids={{
              mobile: { x: 0, y: 2, w: 12, h: 1 },
              tablet: { x: 0, y: 3, w: 6, h: 3 },
              desktop: { x: 8, y: 0, w: 4, h: 4 },
            }}
            title={<div>Window 3</div>}
            bounds={{ top: 0, left: 0, right: 12, bottom: 6 }}
          >
            <div style={{ padding: "1rem" }}>
              Bounded to the upper half of the screen.
            </div>
          </Window>

          <Window
            id="window4"
            grids={{
              mobile: { x: 0, y: 3, w: 12, h: 1 },
              tablet: { x: 6, y: 3, w: 6, h: 3 },
              desktop: { x: 0, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 4</div>}
            draggable={false}
          >
            <div style={{ padding: "1rem" }}>Not draggable.</div>
          </Window>

          <Window
            id="window5"
            grids={{
              mobile: { x: 0, y: 4, w: 12, h: 1 },
              tablet: { x: 0, y: 6, w: 6, h: 3 },
              desktop: { x: 4, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 5</div>}
            resizable={false}
          >
            <div style={{ padding: "1rem" }}>Not resizable.</div>
          </Window>

          <Window
            id="window6"
            grids={{
              mobile: { x: 0, y: 5, w: 12, h: 1 },
              tablet: { x: 6, y: 6, w: 6, h: 3 },
              desktop: { x: 8, y: 4, w: 4, h: 4 },
            }}
            title={<div>Window 6</div>}
            minimizable={false}
          >
            <div style={{ padding: "1rem" }}>Not minimizable.</div>
          </Window>

          <Window
            id="window7"
            grids={{
              mobile: { x: 0, y: 6, w: 12, h: 1 },
              tablet: { x: 0, y: 9, w: 6, h: 3 },
              desktop: { x: 0, y: 8, w: 4, h: 4 },
            }}
            title={<div>Window 7</div>}
            maximizable={false}
          >
            <div style={{ padding: "1rem" }}>Not maximizable.</div>
          </Window>

          <Window
            id="window8"
            grids={{
              mobile: { x: 0, y: 7, w: 12, h: 1 },
              tablet: { x: 6, y: 9, w: 6, h: 3 },
              desktop: { x: 4, y: 8, w: 4, h: 4 },
            }}
          >
            <div style={{ padding: "1rem" }}>Without a title.</div>
          </Window>

          <Window
            id="window9"
            grids={{
              mobile: { x: 0, y: 8, w: 12, h: 1 },
              tablet: { x: 2, y: 2, w: 8, h: 8 },
              desktop: { x: 8, y: 8, w: 4, h: 4 },
            }}
            title={<div>Window 9</div>}
            startMinimized={true}
          >
            <div style={{ padding: "1rem" }}>Starting minimized.</div>
          </Window>
        </Windows>
      </WindowsProvider>
    </div>
  );
};

export default App;
```

#### App.scss

```
.app {
  width: 100%;
  height: 100%;
  background-color: #263238;
}
```
