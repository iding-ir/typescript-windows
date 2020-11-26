import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

import { useGrids } from "../utils/useGrids";

export interface Window {
  key: string;
  title?: string;
  component: JSX.Element;
  grids: { x: number; y: number; w: number; h: number };
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

  const { t } = useTranslation();

  const { gridsWidth, gridsHeight } = useGrids(gridsCount, gridsGap);

  const dWindowMinimizes = windows.reduce((total: object, item: Window) => {
    return { ...total, [item.key]: item.startMinimized };
  }, {});

  const iWindowSizes = localStorage.getItem("windowSizes")
    ? JSON.parse(localStorage.getItem("windowSizes") as string)
    : {};

  const iWindowZIndexes = localStorage.getItem("windowZIndexes")
    ? JSON.parse(localStorage.getItem("windowZIndexes") as string)
    : {};

  const iWindowLocations = localStorage.getItem("windowLocations")
    ? JSON.parse(localStorage.getItem("windowLocations") as string)
    : {};

  const iWindowMaximizes = localStorage.getItem("windowMaximizes")
    ? JSON.parse(localStorage.getItem("windowMaximizes") as string)
    : {};

  const iWindowMinimizes = localStorage.getItem("windowMinimizes")
    ? JSON.parse(localStorage.getItem("windowMinimizes") as string)
    : dWindowMinimizes;

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
        draggable,
        resizable,
        minimizable,
        maximizable,
      } = window;

      const size = {
        w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
        h: gridsHeight * grids.h + gridsGap * (grids.h - 1),
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
          <div className={classNames}>
            <div className="tw-title">{title ? t(title) : null}</div>

            <div className="tw-buttons" onClick={handleZIndex}>
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
            onResizeStop={handleResize}
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
          grid={[grid as number, grid as number]}
          scale={1}
          handle=".tw-draggable"
          bounds="parent"
          onStart={handleZIndex}
          onStop={handleDrag}
          cancel=".tw-buttons"
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
  ]);

  return (
    <div className="tw-windows">
      {taskbarItemsOut}

      <div className="tw-taskbar">{taskbarItemsIn}</div>
    </div>
  );
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12,
};

export default Windows;
