import React, { useContext, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";
import useBreakpoint from "use-breakpoint";

import { StateContext } from "./WindowsProvider";

export interface Props {
  id: string;
  children: JSX.Element;
  grids: {
    [key: string]: { x: number; y: number; w: number; h: number };
  };
  title?: JSX.Element;
  bounds?: { left: number; top: number; right: number; bottom: number };
  minSize?: { w: number; h: number };
  maxSize?: { w: number; h: number };
  draggable?: boolean;
  resizable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  startMinimized?: boolean;
}

const Window = (props: Props) => {
  const { state } = useContext(StateContext);

  const {
    id,
    children,
    grids,
    title,
    bounds,
    minSize,
    maxSize,
    draggable,
    resizable,
    minimizable,
    maximizable,
  } = props;

  const {
    taskbar,
    grid,
    breakPoints,
    gridsGap,
    gridsWidth,
    gridsHeight,
    headerRef,
    headerHeight,
    windowSizes,
    windowZIndexes,
    windowLocations,
    windowMaximizes,
    windowMinimizes,
    setWindowSizes,
    setWindowZIndexes,
    setWindowLocations,
    setWindowMaximizes,
    setWindowMinimizes,
  } = state;

  const { breakpoint, maxWidth, minWidth } = useBreakpoint(
    breakPoints,
    "desktop"
  );

  const bp = breakpoint as string;

  const size = {
    w: gridsWidth * grids[bp].w + gridsGap * (grids[bp].w - 1),
    h: headerHeight
      ? gridsHeight * grids[bp].h + gridsGap * (grids[bp].h - 1) - headerHeight
      : 0,
  };

  const location = {
    x: gridsWidth * grids[bp].x + gridsGap * (grids[bp].x + 1),
    y: gridsHeight * grids[bp].y + gridsGap * (grids[bp].y + 1),
  };

  const limits = bounds && {
    left: gridsWidth * bounds.left + gridsGap * (bounds.left + 1),
    top: gridsHeight * bounds.top + gridsGap * (bounds.top + 1),
    right:
      gridsWidth * bounds.right +
      gridsGap * bounds.right -
      (windowSizes[id]?.w || size.w),
    bottom:
      gridsHeight * bounds.bottom +
      gridsGap * bounds.bottom -
      (windowSizes[id]?.h + headerHeight || size.h + headerHeight),
  };

  const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
    setWindowSizes({
      ...windowSizes,
      [id]: { w: data.size.width, h: data.size.height },
    });
  };

  const handleZIndex = () => {
    const nums = Object.values(windowZIndexes).length
      ? Object.values(windowZIndexes)
      : [0];

    const zIndex = Math.max(...(nums as number[])) + 1;

    setWindowZIndexes({ ...windowZIndexes, [id]: zIndex });
  };

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    if (windowMaximizes[id] || windowMinimizes[id]) {
      return;
    }

    setWindowLocations({
      ...windowLocations,
      [id]: { x: data.x, y: data.y },
    });
  };

  const handleMaximize = () => {
    setWindowMinimizes({
      ...windowMinimizes,
      [id]: false,
    });

    setWindowMaximizes({
      ...windowMaximizes,
      [id]: !windowMaximizes[id],
    });
  };

  const handleMinimize = () => {
    setWindowMaximizes({
      ...windowMaximizes,
      [id]: false,
    });

    setWindowMinimizes({
      ...windowMinimizes,
      [id]: !windowMinimizes[id],
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
        onMouseDown={handleZIndex} // Has to be here because of desktop devices
        style={{
          width: windowMinimizes[id]
            ? "auto"
            : windowSizes[id]
            ? windowSizes[id].w
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
    const width = windowMaximizes[id]
      ? "100%"
      : windowSizes[id]
      ? windowSizes[id].w
      : Math.max(size.w, minSize?.w || 0);

    const height = windowMaximizes[id]
      ? "100%"
      : windowSizes[id]
      ? windowSizes[id].h
      : Math.max(size.h, minSize?.h || 0);

    const minWidth = windowMaximizes[id] ? "100%" : minSize?.w;
    const minHeight = windowMaximizes[id] ? "100%" : minSize?.h;
    const maxWidth = windowMaximizes[id] ? "100%" : maxSize?.w;
    const maxHeight = windowMaximizes[id] ? "100%" : maxSize?.h;

    return resizable && !windowMaximizes[id] ? (
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["se"]}
        draggableOpts={{ grid: [grid, grid] }}
        onResize={handleResize}
        minConstraints={minSize && [minSize?.w, minSize.h]}
        maxConstraints={maxSize && [maxSize?.w, maxSize.h]}
      >
        {children}
      </ResizableBox>
    ) : (
      <div style={{ width, height, minWidth, minHeight, maxWidth, maxHeight }}>
        {children}
      </div>
    );
  };

  const classNames = clsx("tw-window", {
    "tw-taskbar-on": taskbar,
    "tw-taskbar-off": !taskbar,
    "tw-minimize-on": windowMinimizes[id],
    "tw-minimize-off": !windowMinimizes[id],
    "tw-maximize-on": windowMaximizes[id],
    "tw-maximize-off": !windowMaximizes[id],
  });

  return (
    <Draggable
      key={id}
      defaultPosition={windowLocations[id] || location}
      position={windowLocations[id] || location}
      grid={[grid, grid]}
      scale={1}
      handle=".tw-draggable"
      bounds={limits || "parent"}
      onStart={handleZIndex} // Has to be here because of touch devices
      onStop={handleDrag}
      cancel=".tw-buttons"
    >
      <div
        className={classNames}
        id={id}
        style={{ zIndex: windowZIndexes[id] }}
      >
        {renderHeader()}

        {renderBody()}
      </div>
    </Draggable>
  );
};

Window.defaultProps = {
  title: <div></div>,
  bounds: undefined,
  minSize: { w: 200, h: 100 },
  maxSize: undefined,
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: false,
} as Partial<Props>;

export default Window;
