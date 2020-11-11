import React, { useEffect, useState, SyntheticEvent, useContext } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";

import { WindowContext, IWindow } from "./Windows";

const iWindowsLocations = localStorage.getItem("windowsLocations")
  ? JSON.parse(localStorage.getItem("windowsLocations") as string)
  : {};

const iWindowsSizes = localStorage.getItem("windowsSizes")
  ? JSON.parse(localStorage.getItem("windowsSizes") as string)
  : {};

const iWindowsDisplays = localStorage.getItem("windowsDisplays")
  ? JSON.parse(localStorage.getItem("windowsDisplays") as string)
  : {};

interface Size {
  w: number;
  h: number;
}

interface Location {
  x: number;
  y: number;
}

interface WindowProps {
  name: string;
  component: JSX.Element;
  size: Size;
  location: Location;
  draggable?: boolean;
  resizable?: boolean;
  collapsable?: boolean;
  title?: string;
}

const Window = (props: WindowProps) => {
  const { t } = useTranslation();

  const { grid } = useContext<IWindow>(WindowContext);

  const {
    name,
    component,
    size,
    location,
    draggable,
    resizable,
    collapsable,
    title,
  } = props;

  const [windowsLocations, setWindowsLocations] = useState(iWindowsLocations);
  const [windowsSizes, setWindowsSizes] = useState(iWindowsSizes);
  const [windowsDisplays, setWindowsDisplays] = useState(iWindowsDisplays);

  useEffect(() => {
    localStorage.setItem("windowsLocations", JSON.stringify(windowsLocations));
  }, [windowsLocations]);

  useEffect(() => {
    localStorage.setItem("windowsSizes", JSON.stringify(windowsSizes));
  }, [windowsSizes]);

  useEffect(() => {
    localStorage.setItem("windowsDisplays", JSON.stringify(windowsDisplays));
  }, [windowsDisplays]);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setWindowsLocations({
      ...windowsLocations,
      [name]: { x: data.x, y: data.y },
    });
  };

  const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
    setWindowsSizes({
      ...windowsSizes,
      [name]: { w: data.size.width, h: data.size.height },
    });
  };

  const handleCollapse = () => {
    if (!collapsable) {
      return;
    }

    setWindowsDisplays({
      ...windowsDisplays,
      [name]: !windowsDisplays[name],
    });
  };

  const renderHandler = () => {
    const classNames = "header " + (draggable && "draggable-header");

    return (
      <div className={classNames} onDoubleClick={handleCollapse}>
        {title ? t(title) : null}
      </div>
    );
  };

  const renderBody = () => {
    const display = windowsDisplays[name] === false ? "none" : "block";

    return (
      <div className="body" style={{ display }}>
        {renderBodyContents()}
      </div>
    );
  };

  const renderBodyContents = () => {
    const width = windowsSizes[name] ? windowsSizes[name].w : size.w;

    const height = windowsSizes[name] ? windowsSizes[name].h : size.h;

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

  return (
    <Draggable
      key={name}
      defaultPosition={windowsLocations[name] || location}
      grid={[grid, grid]}
      scale={1}
      handle=".draggable-header"
      bounds="parent"
      onStop={handleDrag}
    >
      <div className={`window ${name}`}>
        {renderHandler()}

        {renderBody()}
      </div>
    </Draggable>
  );
};

Window.defaultProps = {
  draggable: true,
  resizable: true,
  collapsable: true,
};

export default Window;
