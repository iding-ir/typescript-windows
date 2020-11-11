import React from "react";

import { IWindow } from "./components/Windows";
import Box from "./components/Box";

export const windows: IWindow[] = [
  {
    key: "box-1",
    component: <Box text="draggable, resizable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 15, y: 15 },
    draggable: true,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-2",
    component: <Box text="draggable, resizable" />,
    size: { w: 200, h: 200 },
    location: { x: 300, y: 15 },
    draggable: true,
    resizable: true,
    collapsable: false,
    title: "box.title",
  },
  {
    key: "box-3",
    component: <Box text="draggable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 600, y: 15 },
    draggable: true,
    resizable: false,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-4",
    component: <Box text="resizable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 900, y: 15 },
    draggable: false,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-5",
    component: <Box text="draggable" />,
    size: { w: 200, h: 200 },
    location: { x: 15, y: 300 },
    draggable: true,
    resizable: false,
    collapsable: false,
    title: "box.title",
  },
  {
    key: "box-6",
    component: <Box text="resizable" />,
    size: { w: 200, h: 200 },
    location: { x: 300, y: 300 },
    draggable: false,
    resizable: true,
    collapsable: false,
    title: "box.title",
  },
  {
    key: "box-7",
    component: <Box text="collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 600, y: 300 },
    draggable: false,
    resizable: false,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-8",
    component: <Box text="neither" />,
    size: { w: 200, h: 200 },
    location: { x: 900, y: 300 },
    draggable: false,
    resizable: false,
    collapsable: false,
    title: "box.title",
  },
];
