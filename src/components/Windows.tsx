import React, { useEffect, useState, useContext } from "react";
import useDimensions from "react-use-dimensions";
import { ThemeProvider, DefaultTheme } from "react-jss";

import { useGrids } from "../utils/useGrids";
import { getLocalStorage } from "../utils/getLocalStorage";
import { useStyles } from "./styles";
import iconMinimize from "../assets/images/icon-minimize.png";
import iconMaximize from "../assets/images/icon-maximize.png";
import iconResize from "../assets/images/icon-resize.png";
import { StateContext } from "./WindowsProvider";

export interface Styles {
  header: {
    size: string;
    color: string;
    background: string;
  };
  body: {
    color: string;
    background: string;
  };
  icons: {
    maximize: string;
    minimize: string;
    resize: string;
  };
  borderRadius: string;
  boxShadow: string;
}

export interface Props {
  windows: JSX.Element[];
  taskbar: boolean;
  grid: number;
  gridsGap: number;
  gridsCount: number;
  styles: Styles;
}

const Windows = (props: Props) => {
  const { windows, taskbar, grid, gridsCount, gridsGap, styles } = props;
  const classes = useStyles(styles)();
  const { gridsWidth, gridsHeight } = useGrids(gridsCount, gridsGap);
  const [headerRef, { height: headerHeight }] = useDimensions();
  const { state, setState } = useContext(StateContext);

  const iWindowSizes = getLocalStorage("windowSizes", {});
  const iWindowZIndexes = getLocalStorage("windowZIndexes", {});
  const iWindowLocations = getLocalStorage("windowLocations", {});
  const iWindowMaximizes = getLocalStorage("windowMaximizes", {});
  const iWindowMinimizes = getLocalStorage("windowMinimizes", {});

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
    setState({
      ...state,
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
    });

    let taskbarItemsIn: JSX.Element[] = [];
    let taskbarItemsOut: JSX.Element[] = [];

    windows.forEach((window) => {
      if (windowMinimizes[window.props.id] && taskbar) {
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
  styles: {
    header: {
      size: "2.4rem",
      color: "#bdbdbd",
      background: "#424242",
    },
    body: {
      color: "#9e9e9e",
      background: "#212121",
    },
    icons: {
      maximize: `url(${iconMaximize})`,
      minimize: `url(${iconMinimize})`,
      resize: `url(${iconResize})`,
    },
    borderRadius: "1rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
} as Partial<Props>;

export default Windows;
