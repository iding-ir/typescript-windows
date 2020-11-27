import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import useDimensions from "react-use-dimensions";
import clsx from "clsx";
import { ThemeProvider, DefaultTheme } from "react-jss";

import { useGrids } from "../utils/useGrids";
import { getLocalStorage } from "../utils/getLocalStorage";
import { useStyles } from "./styles";
import iconMinimize from "../assets/images/icon-minimize.png";
import iconMaximize from "../assets/images/icon-maximize.png";
import iconResize from "../assets/images/icon-resize.png";

export interface Window {
  key: string;
  title: JSX.Element;
  component: JSX.Element;
  grids: { x: number; y: number; w: number; h: number };
  minSize?: { w: number; h: number };
  maxSize?: { w: number; h: number };
  draggable?: boolean;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  startMinimized?: boolean;
}

export interface Styles {
  borderRadius: string;
  headerSize: string;
  headerColor: string;
  headerBackground: string;
  bodyColor: string;
  bodyBackground: string;
  boxShadow: string;
  IconMaximize: string;
  IconMinimize: string;
  IconResize: string;
}

export interface WindowsProps {
  windows: Window[];
  taskbar: boolean;
  grid: number;
  gridsGap: number;
  gridsCount: number;
  styles: Styles;
}

const Windows = (props: WindowsProps) => {
  const { windows, taskbar, grid, gridsCount, gridsGap, styles } = props;

  const classes = useStyles(styles)();

  const { gridsWidth, gridsHeight } = useGrids(gridsCount, gridsGap);

  const [headerRef, { height: headerHeight }] = useDimensions();

  const dWindowMinimizes = windows.reduce((total: object, item: Window) => {
    return { ...total, [item.key]: item.startMinimized };
  }, {});

  const iWindowSizes = getLocalStorage("windowSizes", {});
  const iWindowZIndexes = getLocalStorage("windowZIndexes", {});
  const iWindowLocations = getLocalStorage("windowLocations", {});
  const iWindowMaximizes = getLocalStorage("windowMaximizes", {});
  const iWindowMinimizes = getLocalStorage("windowMinimizes", dWindowMinimizes);

  const [windowSizes, setWindowSizes] = useState(iWindowSizes);
  const [windowZIndexes, setWindowZIndexes] = useState(iWindowZIndexes);
  const [windowLocations, setWindowLocations] = useState(iWindowLocations);
  const [windowMaximizes, setWindowMaximizes] = useState(iWindowMaximizes);
  const [windowMinimizes, setWindowMinimizes] = useState(iWindowMinimizes);
  const [taskbarItemsIn, setTaskbarItemsIn] = useState<JSX.Element[]>([]);
  const [taskbarItemsOut, setTaskbarItemsOut] = useState<JSX.Element[]>([]);

  useEffect(() => {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);

  useEffect(() => {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);

  useEffect(() => {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);

  useEffect(() => {
    localStorage.setItem("windowMaximizes", JSON.stringify(windowMaximizes));
  }, [windowMaximizes]);

  useEffect(() => {
    localStorage.setItem("windowMinimizes", JSON.stringify(windowMinimizes));
  }, [windowMinimizes]);

  useEffect(() => {
    let taskbarItemsIn: JSX.Element[] = [];
    let taskbarItemsOut: JSX.Element[] = [];

    windows.forEach((window: Window) => {
      const {
        key,
        title,
        component,
        grids,
        minSize,
        maxSize,
        draggable,
        resizable,
        minimizable,
        maximizable,
      } = window;

      const size = {
        w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
        h: gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight,
      };

      const location = {
        x: gridsWidth * grids.x + gridsGap * (grids.x + 1),
        y: gridsHeight * grids.y + gridsGap * (grids.y + 1),
      };

      const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
        setWindowSizes({
          ...windowSizes,
          [key]: { w: data.size.width, h: data.size.height },
        });
      };

      const handleZIndex = () => {
        const nums = Object.values(windowZIndexes).length
          ? Object.values(windowZIndexes)
          : [0];

        const zIndex = Math.max(...(nums as number[])) + 1;

        setWindowZIndexes({ ...windowZIndexes, [key]: zIndex });
      };

      const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        if (windowMaximizes[key] || windowMinimizes[key]) {
          return;
        }

        setWindowLocations({
          ...windowLocations,
          [key]: { x: data.x, y: data.y },
        });
      };

      const handleMaximize = () => {
        setWindowMinimizes({
          ...windowMinimizes,
          [key]: false,
        });

        setWindowMaximizes({
          ...windowMaximizes,
          [key]: !windowMaximizes[key],
        });
      };

      const handleMinimize = () => {
        setWindowMaximizes({
          ...windowMaximizes,
          [key]: false,
        });

        setWindowMinimizes({
          ...windowMinimizes,
          [key]: !windowMinimizes[key],
        });
      };

      const renderMinimize = () => {
        return minimizable ? (
          <div className="tw-button tw-minimize" onClick={handleMinimize}></div>
        ) : null;
      };

      const renderMaximize = () => {
        return maximizable ? (
          <div className="tw-button tw-maximize" onClick={handleMaximize}></div>
        ) : null;
      };

      const renderHeader = () => {
        const classNames = clsx("tw-header", {
          "tw-draggable": draggable,
        });

        return (
          <div
            className={classNames}
            ref={headerRef}
            onClick={handleZIndex}
            style={{
              width: windowMinimizes[key]
                ? "auto"
                : windowSizes[key]
                ? windowSizes[key].w
                : "auto",
            }}
          >
            <div className="tw-title" onDoubleClick={handleMaximize}>
              {title || null}
            </div>

            <div className="tw-buttons">
              {renderMinimize()}

              {renderMaximize()}
            </div>
          </div>
        );
      };

      const renderBody = () => {
        return <div className="tw-body">{renderBodyContents()}</div>;
      };

      const renderBodyContents = () => {
        const width = windowMaximizes[key]
          ? "100%"
          : windowSizes[key]
          ? windowSizes[key].w
          : size.w;

        const height = windowMaximizes[key]
          ? "100%"
          : windowSizes[key]
          ? windowSizes[key].h
          : size.h;

        return resizable && !windowMaximizes[key] ? (
          <ResizableBox
            width={width}
            height={height}
            resizeHandles={["se"]}
            draggableOpts={{ grid: [grid, grid] }}
            onResize={handleResize}
            minConstraints={minSize && [minSize?.w, minSize.h]}
            maxConstraints={maxSize && [maxSize?.w, maxSize.h]}
          >
            {component}
          </ResizableBox>
        ) : (
          <div style={{ width, height }}>{component}</div>
        );
      };

      const classNames = clsx("tw-window", key, {
        "tw-taskbar-on": taskbar,
        "tw-taskbar-off": !taskbar,
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key],
      });

      const element: JSX.Element = (
        <Draggable
          key={key}
          defaultPosition={windowLocations[key] || location}
          position={windowLocations[key] || location}
          grid={[grid, grid]}
          scale={1}
          handle=".tw-draggable"
          bounds="parent"
          onStop={handleDrag}
          cancel="tw-buttons, tw-title"
        >
          <div className={classNames} style={{ zIndex: windowZIndexes[key] }}>
            {renderHeader()}

            {renderBody()}
          </div>
        </Draggable>
      );

      if (windowMinimizes[key] && taskbar) {
        taskbarItemsIn = [...taskbarItemsIn, element];
      } else {
        taskbarItemsOut = [...taskbarItemsOut, element];
      }
    });

    setTaskbarItemsIn(taskbarItemsIn);
    setTaskbarItemsOut(taskbarItemsOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    windowSizes,
    windowZIndexes,
    windowLocations,
    windowMaximizes,
    windowMinimizes,
    gridsWidth,
    gridsHeight,
    headerHeight,
  ]);

  return (
    <ThemeProvider theme={{} as DefaultTheme}>
      <div className={classes["tw-windows"]}>
        {taskbarItemsOut}

        <div className="tw-taskbar">{taskbarItemsIn}</div>
      </div>
    </ThemeProvider>
  );
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12,
  styles: {
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
  },
};

export default Windows;
