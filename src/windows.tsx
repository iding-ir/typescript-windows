import React from "react";

import { Window } from "./components/Windows.d";
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
