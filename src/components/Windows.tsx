import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import useDimensions from "react-use-dimensions";
import clsx from "clsx";
import {
  createUseStyles,
  ThemeProvider,
  useTheme,
  DefaultTheme,
} from "react-jss";

import { useGrids } from "../utils/useGrids";
import { getLocalStorage } from "../utils/getLocalStorage";

const borderRadius = "1rem";
const headerSize = "2.4rem";
const headerColor = "#bdbdbd";
const headerBackground = "#424242";
const bodyColor = "#9e9e9e";
const bodyBackground = "#212121";
const boxShadow = "0 0 5px rgba(0, 0, 0, 0.2)";

const useStyles = createUseStyles({
  "tw-windows": {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",

    "& .tw-taskbar": {
      display: "flex",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
    },

    "& .tw-window": {
      position: "absolute",
      overflow: "hidden",
      borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
      border: `1px solid ${headerBackground}`,
      boxShadow: boxShadow,

      "& .tw-header": {
        display: "flex",
        position: "relative",
        width: "100%",
        height: headerSize,
        lineHeight: headerSize,
        color: headerColor,
        backgroundColor: headerBackground,
        boxShadow: boxShadow,
        zIndex: "1000",
        cursor: "pointer",
        userSelect: "none",

        "&.tw-draggable": {
          cursor: "move",
        },

        "& .tw-title": {
          flexGrow: 10,
          padding: "0 1rem",
          overflow: "hidden",
        },

        "& .tw-buttons": {
          display: "flex",
          flexShrink: 0,
          padding: "0 0.5rem",

          "& .tw-button": {
            width: headerSize,
            height: headerSize,
            transition: "opacity 0.3s",
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
            cursor: "pointer",

            "&:hover": {
              opacity: 1,
            },

            "&.tw-minimize": {
              backgroundImage:
                "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAACEhISIiIiGhoaJiYmGhoaHh4eHh4eIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIjiyFMgAAAAEHRSTlMAHR43ODl1d4mLjeju+fr9acPXgwAAAFFJREFUeNrt0zUCgDAQRNHBffLvf1pKHCpS7asjqxrNCw8yryxI86MEgkmPph8OxIGm7Xba+nygNAcuvw4U5y/q4xdV9jTjwPfqmVeLhtcT7leKCRaLLITEhwAAAABJRU5ErkJggg==)",
            },

            "&.tw-maximize": {
              backgroundImage:
                "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAAD///+JiYmIiIiPj4+Hh4eOjo6GhoaFhYWEhISGhoaIiIiHh4eJiYmGhoaHh4eHh4eHh4eIiIiJiYmJiYmIiIiHh4eIiIiHh4eIiIiIiIiJiYmIiIiJiYmHh4eIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgiuQX5AAAAJ3RSTlMAAQ0PEBESExkbKCs1ODlAREhJVGxtd4OEh4uMqarAyMrMzdjd+P5IcrmSAAAA2UlEQVR42rWTA4IEMQAEe62xbfz/haeoz+7FoCpOUE86/QVPuQzmXYWV4gvB53fPBFsIzmuh8R5jQcZ6emy4hhKvkpkaxodf/pLnT0AI15bqoPLDTQrnHRnEj2clgAziMAIZxEkgg7gQ5nU5AcC+E2MR/e/2AHBa1hlBEgLacAFXcyBMxOxro98C217zl9lHBwA4RHv8V/axaCLmJj7t5GfDDD6fKJ7qAk9JeaqFQJwMEpiToQXmbCjhypyN21c3LZfnOl4fnI1AGz44nx+9Tw9v9cbx7+n43wOGjkWM6lWC8gAAAABJRU5ErkJggg==)",
            },
          },
        },
      },

      "& .tw-body": {
        overflow: "auto",
        color: bodyColor,
        backgroundColor: bodyBackground,
      },

      "&.tw-minimize-on": {
        borderRadius: borderRadius,

        "&.tw-taskbar-on": {
          position: "relative",
          transform: "none !important",
          borderRadius: borderRadius,
          margin: "0.25rem",
        },

        "& .tw-body": {
          display: "none",
        },
      },

      "&.tw-maximize-on": {
        top: "0 !important",
        left: "0 !important",
        width: "100% !important",
        height: "100% !important",
        transform: "none !important",
        borderRadius: "0 !important",

        "& .tw-header": {
          width: "100% !important",
        },

        "& .tw-body": {
          display: "block !important",
          width: "100% !important",
          height: "100% !important",
        },
      },
    },
  },
});

const theme = {};

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

interface WindowsProps {
  windows: Window[];
  taskbar: boolean;
  grid: number;
  gridsGap: number;
  gridsCount: number;
}

const Windows = (props: WindowsProps) => {
  const { windows, taskbar, grid, gridsCount, gridsGap } = props;

  const theme = useTheme();
  const classes = useStyles({ theme });

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
    <ThemeProvider theme={theme as DefaultTheme}>
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
};

export default Windows;
