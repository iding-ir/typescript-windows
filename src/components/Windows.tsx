import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

import "./Windows.scss";
import "../css/resizable.css";

const iWindowsLocations = localStorage.getItem("windowsLocations")
  ? JSON.parse(localStorage.getItem("windowsLocations") as string)
  : {};

const iWindowsSizes = localStorage.getItem("windowsSizes")
  ? JSON.parse(localStorage.getItem("windowsSizes") as string)
  : {};

const iWindowsDisplays = localStorage.getItem("windowsDisplays")
  ? JSON.parse(localStorage.getItem("windowsDisplays") as string)
  : {};

const iWindowsZIndexes = localStorage.getItem("windowsZIndexes")
  ? JSON.parse(localStorage.getItem("windowsZIndexes") as string)
  : {};

interface Size {
  w: number;
  h: number;
}

interface Location {
  x: number;
  y: number;
}

export interface IWindow {
  key: string;
  component: JSX.Element;
  size: Size;
  location: Location;
  draggable?: boolean;
  resizable?: boolean;
  collapsable?: boolean;
  title?: string;
}

interface WindowsProps {
  windows: IWindow[];
  grid?: number;
}

const Windows = (props: WindowsProps) => {
  const { windows, grid } = props;

  const { t } = useTranslation();

  const [windowsLocations, setWindowsLocations] = useState(iWindowsLocations);
  const [windowsSizes, setWindowsSizes] = useState(iWindowsSizes);
  const [windowsDisplays, setWindowsDisplays] = useState(iWindowsDisplays);
  const [windowsZIndexes, setWindowsZIndexes] = useState(iWindowsZIndexes);

  useEffect(() => {
    localStorage.setItem("windowsLocations", JSON.stringify(windowsLocations));
  }, [windowsLocations]);

  useEffect(() => {
    localStorage.setItem("windowsSizes", JSON.stringify(windowsSizes));
  }, [windowsSizes]);

  useEffect(() => {
    localStorage.setItem("windowsDisplays", JSON.stringify(windowsDisplays));
  }, [windowsDisplays]);

  useEffect(() => {
    localStorage.setItem("windowsZIndexes", JSON.stringify(windowsZIndexes));
  }, [windowsZIndexes]);

  const renderWindows = () => {
    return windows.map((window: IWindow) => {
      const {
        key,
        component,
        size,
        location,
        draggable,
        resizable,
        collapsable,
        title,
      } = window;

      const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        setWindowsLocations({
          ...windowsLocations,
          [key]: { x: data.x, y: data.y },
        });
      };

      const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
        setWindowsSizes({
          ...windowsSizes,
          [key]: { w: data.size.width, h: data.size.height },
        });
      };

      const handleDisplay = () => {
        setWindowsDisplays({
          ...windowsDisplays,
          [key]: !windowsDisplays[key],
        });
      };

      const handleZIndex = () => {
        const nums = Object.values(windowsZIndexes).length
          ? Object.values(windowsZIndexes)
          : [0];

        const zIndex = Math.max(...(nums as number[])) + 1;

        setWindowsZIndexes({ ...windowsZIndexes, [key]: zIndex });
      };

      const renderCollapse = () => {
        return collapsable ? (
          <div className="ts-button ts-collapse" onClick={handleDisplay}></div>
        ) : null;
      };

      const renderHandler = () => {
        const classNames = clsx("ts-header", {
          "ts-header-draggable": draggable,
        });

        return (
          <div className={classNames} onClick={handleZIndex}>
            <div className="ts-title">{title ? t(title) : null}</div>

            <div className="ts-buttons">{renderCollapse()}</div>
          </div>
        );
      };

      const renderBody = () => {
        return <div className="ts-body">{renderBodyContents()}</div>;
      };

      const renderBodyContents = () => {
        const width = windowsSizes[key] ? windowsSizes[key].w : size.w;

        const height = windowsSizes[key] ? windowsSizes[key].h : size.h;

        return resizable ? (
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

      const classNames = clsx("ts-window", key, {
        "ts-display-on": !windowsDisplays[key],
        "ts-display-off": windowsDisplays[key],
      });

      return (
        <Draggable
          key={key}
          defaultPosition={windowsLocations[key] || location}
          grid={[grid as number, grid as number]}
          scale={1}
          handle=".ts-header-draggable"
          bounds="parent"
          onStop={handleDrag}
        >
          <div className={classNames} style={{ zIndex: windowsZIndexes[key] }}>
            {renderHandler()}

            {renderBody()}
          </div>
        </Draggable>
      );
    });
  };

  return <div className="ts-windows">{renderWindows()}</div>;
};

Windows.defaultProps = {
  grid: 5,
};

export default Windows;
