import React, { useEffect, useState, useContext } from "react";
import useDimensions from "react-use-dimensions";
import { ThemeProvider, DefaultTheme } from "react-jss";
import useBreakpoint from "use-breakpoint";

import { useGrids } from "../utils/useGrids";
import { getLocalStorage } from "../utils/getLocalStorage";
import { setLocalStorage } from "../utils/setLocalStorage";
import { useStyles } from "./styles";
import { StateContext } from "./WindowsProvider";
import { Styles, BreakPoints, TaskbarLocation } from "./index.d";

export interface Props {
  id: string;
  background: JSX.Element | null;
  children: JSX.Element[];
  taskbar: boolean;
  taskbarLocation: TaskbarLocation;
  step: number;
  breakPoints: BreakPoints;
  gridsGap: number;
  gridsCount: number;
  styles?: Partial<Styles>;
}

const Windows = (props: Props) => {
  const {
    id,
    background,
    children,
    taskbar,
    taskbarLocation,
    step,
    breakPoints,
    gridsCount,
    gridsGap,
    styles,
  } = props;

  const classes = useStyles(styles, taskbarLocation)();
  const { gridsWidth, gridsHeight } = useGrids(gridsCount, gridsGap);
  const [headerRef, { height: headerHeight }] = useDimensions();
  const { state, setState } = useContext(StateContext);
  const { breakpoint } = useBreakpoint(breakPoints, "desktop");

  const dBoxMinimizes = children.reduce((total: object, item: JSX.Element) => {
    const { id, startMinimized } = item.props;

    startMinimized.tablet =
      startMinimized.tablet === undefined
        ? startMinimized.mobile
        : startMinimized.tablet;

    startMinimized.desktop =
      startMinimized.desktop === undefined
        ? startMinimized.tablet
        : startMinimized.desktop;

    return { ...total, [id]: startMinimized };
  }, {});

  const iWindowSizes = getLocalStorage(id, "sizes", {});
  const iWindowZIndexes = getLocalStorage(id, "zIndexes", {});
  const iWindowLocations = getLocalStorage(id, "locations", {});
  const iWindowMaximizes = getLocalStorage(id, "maximizes", {});
  const iWindowMinimizes = getLocalStorage(id, "minimizes", dBoxMinimizes);

  const [windowSizes, setWindowSizes] = useState(iWindowSizes);
  const [windowZIndexes, setWindowZIndexes] = useState(iWindowZIndexes);
  const [windowLocations, setWindowLocations] = useState(iWindowLocations);
  const [windowMaximizes, setWindowMaximizes] = useState(iWindowMaximizes);
  const [windowMinimizes, setWindowMinimizes] = useState(iWindowMinimizes);
  const [taskbarItemsIn, setTaskbarItemsIn] = useState<JSX.Element[]>([]);
  const [taskbarItemsOut, setTaskbarItemsOut] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setLocalStorage(id, "sizes", windowSizes);
  }, [id, windowSizes]);

  useEffect(() => {
    setLocalStorage(id, "zIndexes", windowZIndexes);
  }, [id, windowZIndexes]);

  useEffect(() => {
    setLocalStorage(id, "locations", windowLocations);
  }, [id, windowLocations]);

  useEffect(() => {
    setLocalStorage(id, "maximizes", windowMaximizes);
  }, [id, windowMaximizes]);

  useEffect(() => {
    setLocalStorage(id, "minimizes", windowMinimizes);
  }, [id, windowMinimizes]);

  useEffect(() => {
    setState({
      ...state,
      taskbar,
      step,
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
    });

    let taskbarItemsIn: JSX.Element[] = [];
    let taskbarItemsOut: JSX.Element[] = [];

    children.forEach((window) => {
      if (windowMinimizes[window.props.id][breakpoint] && taskbar) {
        taskbarItemsIn = [...taskbarItemsIn, window];
      } else {
        taskbarItemsOut = [...taskbarItemsOut, window];
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
      <div id={id} className={classes["tw-windows"]}>
        <div className="tw-background">{background}</div>

        {taskbarItemsOut}

        <div className="tw-taskbar">{taskbarItemsIn}</div>
      </div>
    </ThemeProvider>
  );
};

Windows.defaultProps = {
  background: null,
  taskbar: true,
  taskbarLocation: "bottom",
  step: 1,
  breakPoints: { mobile: 0, tablet: 600, desktop: 1280 },
  gridsGap: 10,
  gridsCount: 12,
} as Partial<Props>;

export default Windows;
