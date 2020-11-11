import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";

import "./App.css";
import "./css/resizable.css";
import Box from "./components/Box";

interface Size {
  w: number;
  h: number;
}

interface Location {
  x: number;
  y: number;
}

interface Window {
  key: string;
  component: JSX.Element;
  size: Size;
  location: Location;
  draggable: boolean;
  resizable: boolean;
  collapsable: boolean;
  title?: string;
}

const windows: Window[] = [
  {
    key: "box-1",
    component: <Box text="draggable, resizable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 0, y: 0 },
    draggable: true,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-2",
    component: <Box text="draggable, resizable" />,
    size: { w: 200, h: 200 },
    location: { x: 300, y: 0 },
    draggable: true,
    resizable: true,
    collapsable: false,
    title: "box.title",
  },
  {
    key: "box-3",
    component: <Box text="draggable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 600, y: 0 },
    draggable: true,
    resizable: false,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-4",
    component: <Box text="resizable, collapsable" />,
    size: { w: 200, h: 200 },
    location: { x: 900, y: 0 },
    draggable: false,
    resizable: true,
    collapsable: true,
    title: "box.title",
  },
  {
    key: "box-5",
    component: <Box text="draggable" />,
    size: { w: 200, h: 200 },
    location: { x: 0, y: 300 },
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

const iWindowLocations = localStorage.getItem("windowLocations")
  ? JSON.parse(localStorage.getItem("windowLocations") as string)
  : {};

const iWindowSizes = localStorage.getItem("windowSizes")
  ? JSON.parse(localStorage.getItem("windowSizes") as string)
  : {};

const iWindowDisplays = localStorage.getItem("windowDisplays")
  ? JSON.parse(localStorage.getItem("windowDisplays") as string)
  : {};

interface AppProps {
  grid: number;
}

const App = (props: AppProps) => {
  const { t } = useTranslation();

  const { grid } = props;

  const [windowLocations, setWindowsLocations] = useState(iWindowLocations);
  const [windowSizes, setWindowsSizes] = useState(iWindowSizes);
  const [windowDisplays, setWindowsDisplays] = useState(iWindowDisplays);

  useEffect(() => {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);

  useEffect(() => {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);

  useEffect(() => {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);

  const renderWindows = () => {
    return windows.map((window: Window) => {
      const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        setWindowsLocations({
          ...windowLocations,
          [window.key]: { x: data.x, y: data.y },
        });
      };

      const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
        setWindowsSizes({
          ...windowSizes,
          [window.key]: { w: data.size.width, h: data.size.height },
        });
      };

      const handleCollapse = () => {
        if (!window.collapsable) {
          return;
        }

        setWindowsDisplays({
          ...windowDisplays,
          [window.key]: !windowDisplays[window.key],
        });
      };

      const renderHandler = () => {
        const classNames = "header " + (window.draggable && "draggable-header");

        return (
          <div className={classNames} onDoubleClick={handleCollapse}>
            {window.title ? t(window.title) : null}
          </div>
        );
      };

      const renderBody = () => {
        const display = windowDisplays[window.key] === false ? "none" : "block";

        return (
          <div className="body" style={{ display }}>
            {renderBodyContents()}
          </div>
        );
      };

      const renderBodyContents = () => {
        const width = windowSizes[window.key]
          ? windowSizes[window.key].w
          : window.size.w;

        const height = windowSizes[window.key]
          ? windowSizes[window.key].h
          : window.size.h;

        return window.resizable ? (
          <ResizableBox
            width={width}
            height={height}
            resizeHandles={["se"]}
            draggableOpts={{ grid: [grid, grid] }}
            onResizeStop={handleResize}
          >
            {window.component}
          </ResizableBox>
        ) : (
          <div style={{ width, height }}>{window.component}</div>
        );
      };

      return (
        <Draggable
          key={window.key}
          defaultPosition={windowLocations[window.key] || window.location}
          grid={[grid, grid]}
          scale={1}
          handle=".draggable-header"
          bounds="parent"
          onStop={handleDrag}
        >
          <div className={`window ${window.key}`}>
            {renderHandler()}

            {renderBody()}
          </div>
        </Draggable>
      );
    });
  };

  return <div className="app">{renderWindows()}</div>;
};

App.defaultProps = {
  grid: 5,
};

export default App;
