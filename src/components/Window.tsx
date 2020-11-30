import React, { useContext, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import clsx from "clsx";

import { StateContext } from "./WindowsProvider";

export interface Props {
  id: string;
  title: JSX.Element;
  content: JSX.Element;
  grids: { x: number; y: number; w: number; h: number };
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
    title,
    content,
    grids,
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

  const size = {
    w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
    h: gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight,
  };

  const location = {
    x: gridsWidth * grids.x + gridsGap * (grids.x + 1),
    y: gridsHeight * grids.y + gridsGap * (grids.y + 1),
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
    let width = windowMaximizes[id]
      ? "100%"
      : windowSizes[id]
      ? windowSizes[id].w
      : size.w;

    let height = windowMaximizes[id]
      ? "100%"
      : windowSizes[id]
      ? windowSizes[id].h
      : size.h;

    if (minSize?.w) {
      width = width > minSize.w ? width : minSize.w;
    }

    if (minSize?.h) {
      height = height > minSize.h ? height : minSize.h;
    }

    if (maxSize?.w) {
      width = width < maxSize.w ? width : maxSize.w;
    }

    if (maxSize?.h) {
      height = height < maxSize.h ? height : maxSize.h;
    }

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
        {content}
      </ResizableBox>
    ) : (
      <div style={{ width, height }}>{content}</div>
    );
  };

  const classNames = clsx("tw-window", id, {
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
      <div className={classNames} style={{ zIndex: windowZIndexes[id] }}>
        {renderHeader()}

        {renderBody()}
      </div>
    </Draggable>
  );
};

Window.defaultProps = {
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
