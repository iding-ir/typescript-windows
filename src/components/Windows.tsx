import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

const iWindowSizes = localStorage.getItem("windowSizes")
  ? JSON.parse(localStorage.getItem("windowSizes") as string)
  : {};

const iWindowDisplays = localStorage.getItem("windowDisplays")
  ? JSON.parse(localStorage.getItem("windowDisplays") as string)
  : {};

const iWindowZIndexes = localStorage.getItem("windowZIndexes")
  ? JSON.parse(localStorage.getItem("windowZIndexes") as string)
  : {};

const iWindowLocations = localStorage.getItem("windowLocations")
  ? JSON.parse(localStorage.getItem("windowLocations") as string)
  : {};

const iWindowMaximized = localStorage.getItem("windowMaximized")
  ? JSON.parse(localStorage.getItem("windowMaximized") as string)
  : {};

export interface Window {
  key: string;
  component: JSX.Element;
  size: { w: number; h: number };
  location: { x: number; y: number };
  draggable?: boolean;
  resizable?: boolean;
  collapsable?: boolean;
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
  const [windowDisplays, setWindowDisplays] = useState(iWindowDisplays);
  const [windowZIndexes, setWindowZIndexes] = useState(iWindowZIndexes);
  const [windowLocations, setWindowLocations] = useState(iWindowLocations);
  const [windowMaximized, setWindowMaximized] = useState(iWindowMaximized);

  useEffect(() => {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);

  useEffect(() => {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);

  useEffect(() => {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);

  useEffect(() => {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);

  useEffect(() => {
    localStorage.setItem("windowMaximized", JSON.stringify(windowMaximized));
  }, [windowMaximized]);

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
        maximizable,
        title,
      } = window;

      const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
        setWindowSizes({
          ...windowSizes,
          [key]: { w: data.size.width, h: data.size.height },
        });
      };

      const handleDisplay = () => {
        setWindowMaximized(null);

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

      const handleDrag = (e: DraggableEvent, data: DraggableData) => {
        setWindowLocations({
          ...windowLocations,
          [key]: { x: data.x, y: data.y },
        });
      };

      const handleMaximize = () => {
        windowMaximized === key
          ? setWindowMaximized(null)
          : setWindowMaximized(key);
      };

      const renderCollapse = () => {
        return collapsable ? (
          <div className="tw-button tw-collapse" onClick={handleDisplay}></div>
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

      const classNames = clsx("tw-window", key, {
        "tw-display-on": !windowDisplays[key],
        "tw-display-off": windowDisplays[key],
        "tw-maximize-on": windowMaximized === key,
        "tw-maximize-off": windowMaximized !== key,
      });

      return (
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
    });
  };

  return <div className="tw-windows">{renderWindows()}</div>;
};

Windows.defaultProps = {
  grid: 5,
};

export default Windows;
