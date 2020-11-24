import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

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
  : {};

export interface Window {
  key: string;
  component: JSX.Element;
  size: { w: number; h: number };
  location: { x: number; y: number };
  draggable?: boolean;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  title?: string;
}

interface WindowsProps {
  windows: Window[];
  grid?: number;
}

const Windows = (props: WindowsProps) => {
  const { windows, grid } = props;

  const { t } = useTranslation();

  const [windowSizes, setWindowSizes] = useState(iWindowSizes);
  const [windowZIndexes, setWindowZIndexes] = useState(iWindowZIndexes);
  const [windowLocations, setWindowLocations] = useState(iWindowLocations);
  const [windowMaximizes, setWindowMaximizes] = useState(iWindowMaximizes);
  const [windowMinimizes, setWindowMinimizes] = useState(iWindowMinimizes);
  const [taskbarItemsMin, setTaskbarItemsMin] = useState<JSX.Element[]>([]);
  const [taskbarItemsMax, setTaskbarItemsMax] = useState<JSX.Element[]>([]);

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
    let taskbarItemsMin: JSX.Element[] = [];
    let taskbarItemsMax: JSX.Element[] = [];

    windows.forEach((window: Window) => {
      const {
        key,
        component,
        size,
        location,
        draggable,
        resizable,
        minimizable,
        maximizable,
        title,
      } = window;

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

      const renderCollapse = () => {
        return minimizable ? (
          <div className="tw-button tw-collapse" onClick={handleMinimize}></div>
        ) : null;
      };

      const renderMaximize = () => {
        return maximizable ? (
          <div className="tw-button tw-maximize" onClick={handleMaximize}></div>
        ) : null;
      };

      const renderHandler = () => {
        const classNames = clsx("tw-header", {
          "tw-header-draggable": draggable,
        });

        return (
          <div className={classNames} onClick={handleZIndex}>
            <div className="tw-title">{title ? t(title) : null}</div>

            <div className="tw-buttons">
              {renderCollapse()}

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
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key],
      });

      const element: JSX.Element = (
        <Draggable
          key={key}
          defaultPosition={windowLocations[key] || location}
          grid={[grid as number, grid as number]}
          scale={1}
          handle=".tw-header-draggable"
          bounds="parent"
          onStop={handleDrag}
        >
          <div className={classNames} style={{ zIndex: windowZIndexes[key] }}>
            {renderHandler()}

            {renderBody()}
          </div>
        </Draggable>
      );

      if (windowMinimizes[key]) {
        taskbarItemsMin = [...taskbarItemsMin, element];
      } else {
        taskbarItemsMax = [...taskbarItemsMax, element];
      }
    });

    setTaskbarItemsMin(taskbarItemsMin);
    setTaskbarItemsMax(taskbarItemsMax);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    windowSizes,
    windowZIndexes,
    windowLocations,
    windowMaximizes,
    windowMinimizes,
  ]);

  return (
    <div className="tw-windows">
      {taskbarItemsMax}

      <div className="tw-taskbar">{taskbarItemsMin}</div>
    </div>
  );
};

Windows.defaultProps = {
  grid: 5,
};

export default Windows;
