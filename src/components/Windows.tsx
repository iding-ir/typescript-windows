import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

import "./Windows.scss";
import "../css/resizable.css";

const iWindowLocations = localStorage.getItem("windowLocations")
  ? JSON.parse(localStorage.getItem("windowLocations") as string)
  : {};

const iWindowSizes = localStorage.getItem("windowSizes")
  ? JSON.parse(localStorage.getItem("windowSizes") as string)
  : {};

const iWindowDisplays = localStorage.getItem("windowDisplays")
  ? JSON.parse(localStorage.getItem("windowDisplays") as string)
  : {};

const iWindowZIndexes = localStorage.getItem("windowZIndexes")
  ? JSON.parse(localStorage.getItem("windowZIndexes") as string)
  : {};

export interface Window {
  key: string;
  component: JSX.Element;
  size: { w: number; h: number };
  location: { x: number; y: number };
  draggable?: boolean;
  resizable?: boolean;
  collapsable?: boolean;
  title?: string;
}

interface WindowsProps {
  windows: Window[];
  grid?: number;
}

const Windows = (props: WindowsProps) => {
  const { windows, grid } = props;

  const { t } = useTranslation();

  const [windowLocations, setWindowLocations] = useState(iWindowLocations);
  const [windowSizes, setWindowSizes] = useState(iWindowSizes);
  const [windowDisplays, setWindowDisplays] = useState(iWindowDisplays);
  const [windowZIndexes, setWindowZIndexes] = useState(iWindowZIndexes);

  useEffect(() => {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);

  useEffect(() => {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);

  useEffect(() => {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);

  useEffect(() => {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);

  const renderWindows = () => {
    return windows.map((window: Window) => {
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
        setWindowLocations({
          ...windowLocations,
          [key]: { x: data.x, y: data.y },
        });
      };

      const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
        setWindowSizes({
          ...windowSizes,
          [key]: { w: data.size.width, h: data.size.height },
        });
      };

      const handleDisplay = () => {
        setWindowDisplays({
          ...windowDisplays,
          [key]: !windowDisplays[key],
        });
      };

      const handleZIndex = () => {
        const nums = Object.values(windowZIndexes).length
          ? Object.values(windowZIndexes)
          : [0];

        const zIndex = Math.max(...(nums as number[])) + 1;

        setWindowZIndexes({ ...windowZIndexes, [key]: zIndex });
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
        const width = windowSizes[key] ? windowSizes[key].w : size.w;
        const height = windowSizes[key] ? windowSizes[key].h : size.h;

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
        "ts-display-on": !windowDisplays[key],
        "ts-display-off": windowDisplays[key],
      });

      return (
        <Draggable
          key={key}
          defaultPosition={windowLocations[key] || location}
          grid={[grid as number, grid as number]}
          scale={1}
          handle=".ts-header-draggable"
          bounds="parent"
          onStop={handleDrag}
        >
          <div className={classNames} style={{ zIndex: windowZIndexes[key] }}>
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
