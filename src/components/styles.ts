import { createUseStyles } from "react-jss";

import { Styles } from "./index.d";
import icon_minimize from "../assets/images/icon-minimize.png";
import icon_maximize from "../assets/images/icon-maximize.png";
import icon_resize from "../assets/images/icon-resize.png";
import { TaskbarLocation } from "./index.d";

export const useStyles = (
  styles: Partial<Styles> | undefined,
  taskbarLocation: TaskbarLocation
) => {
  const iStyles: Styles = {
    headerSize: "2.4rem",
    headerColor: "#bdbdbd",
    headerBackgroundColor: "#424242",
    bodyColor: "#9e9e9e",
    bodyBackgroundColor: "#212121",
    iconMaximize: `url(${icon_maximize})`,
    iconMinimize: `url(${icon_minimize})`,
    iconResize: `url(${icon_resize})`,
    backgroundColor: "#263238",
    borderRadius: "1rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  };

  const {
    headerSize,
    headerColor,
    headerBackgroundColor,
    bodyColor,
    bodyBackgroundColor,
    iconMaximize,
    iconMinimize,
    iconResize,
    backgroundColor,
    borderRadius,
    boxShadow,
  } = Object.assign(iStyles, styles || {}) as Styles;

  return createUseStyles({
    "tw-windows": {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: backgroundColor,

      "& .tw-background": {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "0",
      },

      "& .tw-taskbar": {
        display: "flex",
        flexDirection:
          taskbarLocation === "bottom"
            ? "row-reverse"
            : taskbarLocation === "top"
            ? "row"
            : "column",
        flexWrap: "wrap",
        padding: "0.25rem",
        transform:
          taskbarLocation === "bottom"
            ? "rotate(180deg)"
            : taskbarLocation === "right"
            ? "scaleX(-1)"
            : "none",
        position: "absolute",
        top: taskbarLocation !== "bottom" ? "0" : "auto",
        left: taskbarLocation !== "right" ? "0" : "auto",
        right: taskbarLocation !== "left" ? "0" : "auto",
        bottom: taskbarLocation !== "top" ? "0" : "auto",
        width:
          taskbarLocation === "bottom" || taskbarLocation === "top"
            ? "100%"
            : "unset",
        zIndex: "0",
      },

      "& .tw-window": {
        position: "absolute",
        borderRadius: `${borderRadius} ${borderRadius} 0 ${borderRadius}`,
        border: `1px solid ${headerBackgroundColor}`,
        boxShadow: boxShadow,
        overflow: "hidden",

        "& .tw-header": {
          display: "flex",
          position: "relative",
          width: "100%",
          height: headerSize,
          lineHeight: headerSize,
          color: headerColor,
          backgroundColor: headerBackgroundColor,
          boxShadow: boxShadow,
          zIndex: "1000",
          cursor: "pointer",
          userSelect: "none",

          "&.tw-draggable": {
            cursor: "move",
          },

          "& .tw-title": {
            flexGrow: "10",
            padding: "0 1rem",
            overflow: "hidden",
          },

          "& .tw-buttons": {
            display: "flex",
            flexShrink: "0",
            padding: "0 0.5rem",

            "& .tw-button": {
              width: headerSize,
              height: headerSize,
              transition: "opacity 0.3s",
              maskSize: "50%",
              maskPosition: "center",
              maskRepeat: "no-repeat",
              backgroundColor: headerColor,
              opacity: "0.5",
              cursor: "pointer",

              "&:hover": {
                opacity: "1",
              },

              "&.tw-minimize": {
                maskImage: iconMinimize,
              },

              "&.tw-maximize": {
                maskImage: iconMaximize,
              },
            },
          },
        },

        "& .tw-body": {
          color: bodyColor,
          backgroundColor: bodyBackgroundColor,
        },

        "&.tw-minimize-on": {
          borderRadius: borderRadius,

          "&.tw-taskbar-on": {
            position: "relative",
            transform:
              taskbarLocation === "bottom"
                ? "rotate(180deg) !important"
                : taskbarLocation === "right"
                ? "scaleX(-1) !important"
                : "none !important",
            borderRadius: borderRadius,
            margin: "0.25rem",
            flexGrow: "10",
            width:
              taskbarLocation === "top" || taskbarLocation === "bottom"
                ? "calc(50% - 0.5rem)"
                : "calc(100% - 0.5rem)",
            minWidth:
              taskbarLocation === "top" || taskbarLocation === "bottom"
                ? "calc(160px - 0.5rem)"
                : "unset",
            maxWidth:
              taskbarLocation === "top" || taskbarLocation === "bottom"
                ? "calc(240px - 0.5rem)"
                : "unset",
            minHeight:
              taskbarLocation === "left" || taskbarLocation === "right"
                ? headerSize
                : "unset",
            maxHeight:
              taskbarLocation === "left" || taskbarLocation === "right"
                ? headerSize
                : "unset",

            "& .tw-header": {
              "&.tw-draggable": {
                cursor: "default",
              },
            },
          },

          "& .tw-body": {
            display: "none",
          },
        },

        "&.tw-maximize-on": {
          top: "0 !important",
          left: "0 !important",
          width: "100% !important",
          height: "100% !important",
          transform: "none !important",
          borderRadius: "0 !important",

          "& .tw-header": {
            width: "100% !important",
          },

          "& .tw-body": {
            display: "block !important",
            width: "100% !important",
            height: "100% !important",
          },
        },
      },

      "& .react-resizable": {
        position: "relative",
        overflow: "auto",
        scrollbarColor: "rgba(130, 130, 130, 0.2) rgba(130, 130, 130, 0.1)",
        scrollbarWidth: "thin",

        "&::-webkit-scrollbar": {
          width: "0.5rem",
        },

        "&::-webkit-scrollbar-track": {
          background: "rgba(130, 130, 130, 0.1)",
        },

        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          background: "rgba(130, 130, 130, 0.1)",
        },

        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(130, 130, 130, 0.2)",
        },
      },

      "& .react-resizable-handle": {
        position: "fixed",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        backgroundOrigin: "content-box",
        boxSizing: "border-box",
        backgroundImage: iconResize,
        backgroundPosition: "bottom right",
        backgroundSize: "50%",
        opacity: "0.5",
        padding: "0 3px 3px 0",
        transition: "opacity 0.3s",

        "&:hover": {
          opacity: "1",
        },
      },

      "& .react-resizable-handle-sw": {
        bottom: "0",
        left: "0",
        cursor: "sw-resize",
        transform: "rotate(90deg)",
      },

      "& .react-resizable-handle-se": {
        bottom: "0",
        right: "0",
        cursor: "se-resize",
      },

      "& .react-resizable-handle-nw": {
        top: "0",
        left: "0",
        cursor: "nw-resize",
        transform: "rotate(180deg)",
      },

      "& .react-resizable-handle-ne": {
        top: "0",
        right: "0",
        cursor: "ne-resize",
        transform: "rotate(270deg)",
      },

      "& .react-resizable-handle-w, & .react-resizable-handle-e": {
        top: "50%",
        marginTop: "-10px",
        cursor: "ew-resize",
      },

      "& .react-resizable-handle-w": {
        left: "0",
        transform: "rotate(135deg)",
      },

      "& .react-resizable-handle-e": {
        right: "0",
        transform: "rotate(315deg)",
      },

      "& .react-resizable-handle-n, & .react-resizable-handle-s": {
        left: "50%",
        marginLeft: "-10px",
        cursor: "ns-resize",
      },

      "& .react-resizable-handle-n": {
        top: "0",
        transform: "rotate(225deg)",
      },

      "& .react-resizable-handle-s": {
        bottom: "0",
        transform: "rotate(45deg)",
      },
    },
  });
};
