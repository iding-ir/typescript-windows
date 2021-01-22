"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _reactJss = require("react-jss");

var _iconMinimize = _interopRequireDefault(require("../assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("../assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("../assets/images/icon-resize.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = function useStyles(styles, taskbarLocation) {
  var iStyles = {
    headerSize: "2.4rem",
    headerColor: "#bdbdbd",
    headerBackgroundColor: "#424242",
    bodyColor: "#9e9e9e",
    bodyBackgroundColor: "#212121",
    iconMaximize: "url(".concat(_iconMaximize.default, ")"),
    iconMinimize: "url(".concat(_iconMinimize.default, ")"),
    iconResize: "url(".concat(_iconResize.default, ")"),
    backgroundColor: "#263238",
    borderRadius: "1rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"
  };

  var _ref = Object.assign(iStyles, styles || {}),
      headerSize = _ref.headerSize,
      headerColor = _ref.headerColor,
      headerBackgroundColor = _ref.headerBackgroundColor,
      bodyColor = _ref.bodyColor,
      bodyBackgroundColor = _ref.bodyBackgroundColor,
      iconMaximize = _ref.iconMaximize,
      iconMinimize = _ref.iconMinimize,
      iconResize = _ref.iconResize,
      backgroundColor = _ref.backgroundColor,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow;

  return (0, _reactJss.createUseStyles)({
    "tw-windows": {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      backgroundColor: backgroundColor,
      "& .tw-taskbar": {
        display: "flex",
        flexDirection: taskbarLocation === "bottom" ? "row-reverse" : taskbarLocation === "top" ? "row" : "column",
        flexWrap: "wrap",
        padding: "0.25rem",
        transform: taskbarLocation === "bottom" ? "rotate(180deg)" : taskbarLocation === "right" ? "scaleX(-1)" : "none",
        position: "absolute",
        top: taskbarLocation !== "bottom" ? "0" : "auto",
        left: taskbarLocation !== "right" ? "0" : "auto",
        right: taskbarLocation !== "left" ? "0" : "auto",
        bottom: taskbarLocation !== "top" ? "0" : "auto",
        width: taskbarLocation === "bottom" || taskbarLocation === "top" ? "100%" : "unset",
        zIndex: "0"
      },
      "& .tw-window": {
        position: "absolute",
        borderRadius: "".concat(borderRadius, " ").concat(borderRadius, " 0 ").concat(borderRadius),
        border: "1px solid ".concat(headerBackgroundColor),
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
            cursor: "move"
          },
          "& .tw-title": {
            flexGrow: "10",
            padding: "0 1rem",
            overflow: "hidden"
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
                opacity: "1"
              },
              "&.tw-minimize": {
                maskImage: iconMinimize
              },
              "&.tw-maximize": {
                maskImage: iconMaximize
              }
            }
          }
        },
        "& .tw-body": {
          overflow: "auto",
          color: bodyColor,
          backgroundColor: bodyBackgroundColor
        },
        "&.tw-minimize-on": {
          borderRadius: borderRadius,
          "&.tw-taskbar-on": {
            position: "relative",
            transform: taskbarLocation === "bottom" ? "rotate(180deg) !important" : taskbarLocation === "right" ? "scaleX(-1) !important" : "none !important",
            borderRadius: borderRadius,
            margin: "0.25rem",
            flexGrow: "10",
            width: taskbarLocation === "top" || taskbarLocation === "bottom" ? "calc(50% - 0.5rem)" : "calc(100% - 0.5rem)",
            minWidth: taskbarLocation === "top" || taskbarLocation === "bottom" ? "calc(160px - 0.5rem)" : "unset",
            maxWidth: taskbarLocation === "top" || taskbarLocation === "bottom" ? "calc(240px - 0.5rem)" : "unset",
            minHeight: taskbarLocation === "left" || taskbarLocation === "right" ? headerSize : "unset",
            maxHeight: taskbarLocation === "left" || taskbarLocation === "right" ? headerSize : "unset",
            "& .tw-header": {
              "&.tw-draggable": {
                cursor: "default"
              }
            }
          },
          "& .tw-body": {
            display: "none"
          }
        },
        "&.tw-maximize-on": {
          top: "0 !important",
          left: "0 !important",
          width: "100% !important",
          height: "100% !important",
          transform: "none !important",
          borderRadius: "0 !important",
          "& .tw-header": {
            width: "100% !important"
          },
          "& .tw-body": {
            display: "block !important",
            width: "100% !important",
            height: "100% !important"
          }
        }
      },
      "& .react-resizable": {
        position: "relative"
      },
      "& .react-resizable-handle": {
        position: "absolute",
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
          opacity: "1"
        }
      },
      "& .react-resizable-handle-sw": {
        bottom: "0",
        left: "0",
        cursor: "sw-resize",
        transform: "rotate(90deg)"
      },
      "& .react-resizable-handle-se": {
        bottom: "0",
        right: "0",
        cursor: "se-resize"
      },
      "& .react-resizable-handle-nw": {
        top: "0",
        left: "0",
        cursor: "nw-resize",
        transform: "rotate(180deg)"
      },
      "& .react-resizable-handle-ne": {
        top: "0",
        right: "0",
        cursor: "ne-resize",
        transform: "rotate(270deg)"
      },
      "& .react-resizable-handle-w, & .react-resizable-handle-e": {
        top: "50%",
        marginTop: "-10px",
        cursor: "ew-resize"
      },
      "& .react-resizable-handle-w": {
        left: "0",
        transform: "rotate(135deg)"
      },
      "& .react-resizable-handle-e": {
        right: "0",
        transform: "rotate(315deg)"
      },
      "& .react-resizable-handle-n, & .react-resizable-handle-s": {
        left: "50%",
        marginLeft: "-10px",
        cursor: "ns-resize"
      },
      "& .react-resizable-handle-n": {
        top: "0",
        transform: "rotate(225deg)"
      },
      "& .react-resizable-handle-s": {
        bottom: "0",
        transform: "rotate(45deg)"
      }
    }
  });
};

exports.useStyles = useStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJ0YXNrYmFyTG9jYXRpb24iLCJpU3R5bGVzIiwiaGVhZGVyU2l6ZSIsImhlYWRlckNvbG9yIiwiaGVhZGVyQmFja2dyb3VuZENvbG9yIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImljb25NYXhpbWl6ZSIsImljb25fbWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJpY29uX21pbmltaXplIiwiaWNvblJlc2l6ZSIsImljb25fcmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0IiwiYXNzaWduIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidHJhbnNpdGlvbiIsIm1hc2tTaXplIiwibWFza1Bvc2l0aW9uIiwibWFza1JlcGVhdCIsIm9wYWNpdHkiLCJtYXNrSW1hZ2UiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRPcmlnaW4iLCJib3hTaXppbmciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztBQUdPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxT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RSxLQURvRDtBQUUxRDZCLFFBQUFBLFVBQVUsRUFBRSxPQUY4QztBQUcxRHRCLFFBQUFBLE1BQU0sRUFBRTtBQUhrRCxPQTNPaEQ7QUFpUFoscUNBQStCO0FBQzdCUixRQUFBQSxHQUFHLEVBQUUsR0FEd0I7QUFFN0JELFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQWpQbkI7QUFzUFoscUNBQStCO0FBQzdCSSxRQUFBQSxNQUFNLEVBQUUsR0FEcUI7QUFFN0JKLFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQXRQbkI7QUFETyxHQUFoQixDQUFQO0FBNlBELENBN1JNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5pbXBvcnQgaWNvbl9taW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9tYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9yZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcbmltcG9ydCB7IFRhc2tiYXJMb2NhdGlvbiB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSAoXHJcbiAgc3R5bGVzOiBQYXJ0aWFsPFN0eWxlcz4gfCB1bmRlZmluZWQsXHJcbiAgdGFza2JhckxvY2F0aW9uOiBUYXNrYmFyTG9jYXRpb25cclxuKSA9PiB7XHJcbiAgY29uc3QgaVN0eWxlczogU3R5bGVzID0ge1xyXG4gICAgaGVhZGVyU2l6ZTogXCIyLjRyZW1cIixcclxuICAgIGhlYWRlckNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgIGhlYWRlckJhY2tncm91bmRDb2xvcjogXCIjNDI0MjQyXCIsXHJcbiAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICBpY29uTWF4aW1pemU6IGB1cmwoJHtpY29uX21heGltaXplfSlgLFxyXG4gICAgaWNvbk1pbmltaXplOiBgdXJsKCR7aWNvbl9taW5pbWl6ZX0pYCxcclxuICAgIGljb25SZXNpemU6IGB1cmwoJHtpY29uX3Jlc2l6ZX0pYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjYzMjM4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaGVhZGVyU2l6ZSxcclxuICAgIGhlYWRlckNvbG9yLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9keUNvbG9yLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgIGljb25NYXhpbWl6ZSxcclxuICAgIGljb25NaW5pbWl6ZSxcclxuICAgIGljb25SZXNpemUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXMsXHJcbiAgICBib3hTaGFkb3csXHJcbiAgfSA9IE9iamVjdC5hc3NpZ24oaVN0eWxlcywgc3R5bGVzIHx8IHt9KSBhcyBTdHlsZXM7XHJcblxyXG4gIHJldHVybiBjcmVhdGVVc2VTdHlsZXMoe1xyXG4gICAgXCJ0dy13aW5kb3dzXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcblxyXG4gICAgICBcIiYgLnR3LXRhc2tiYXJcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246XHJcbiAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgPyBcInJvdy1yZXZlcnNlXCJcclxuICAgICAgICAgICAgOiB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCJcclxuICAgICAgICAgICAgPyBcInJvd1wiXHJcbiAgICAgICAgICAgIDogXCJjb2x1bW5cIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgID8gXCJyb3RhdGUoMTgwZGVnKVwiXHJcbiAgICAgICAgICAgIDogdGFza2JhckxvY2F0aW9uID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgPyBcInNjYWxlWCgtMSlcIlxyXG4gICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiB0YXNrYmFyTG9jYXRpb24gIT09IFwiYm90dG9tXCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIGxlZnQ6IHRhc2tiYXJMb2NhdGlvbiAhPT0gXCJyaWdodFwiID8gXCIwXCIgOiBcImF1dG9cIixcclxuICAgICAgICByaWdodDogdGFza2JhckxvY2F0aW9uICE9PSBcImxlZnRcIiA/IFwiMFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgYm90dG9tOiB0YXNrYmFyTG9jYXRpb24gIT09IFwidG9wXCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIlxyXG4gICAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgIHpJbmRleDogXCIwXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnR3LXdpbmRvd1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c30gJHtib3JkZXJSYWRpdXN9IDAgJHtib3JkZXJSYWRpdXN9YCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtoZWFkZXJCYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuXHJcbiAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgIGNvbG9yOiBoZWFkZXJDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3csXHJcbiAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG5cclxuICAgICAgICAgIFwiJi50dy1kcmFnZ2FibGVcIjoge1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LXRpdGxlXCI6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiMTBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDFyZW1cIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbVwiLFxyXG5cclxuICAgICAgICAgICAgXCImIC50dy1idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIG1hc2tTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIG1hc2tQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXNrUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGVhZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG5cclxuICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgXCImLnR3LW1pbmltaXplXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2tJbWFnZTogaWNvbk1pbmltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1tYXhpbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrSW1hZ2U6IGljb25NYXhpbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYgLnR3LWJvZHlcIjoge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWluaW1pemUtb25cIjoge1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcblxyXG4gICAgICAgICAgXCImLnR3LXRhc2tiYXItb25cIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwicm90YXRlKDE4MGRlZykgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICA6IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/IFwic2NhbGVYKC0xKSAhaW1wb3J0YW50XCJcclxuICAgICAgICAgICAgICAgIDogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgID8gXCJjYWxjKDUwJSAtIDAuNXJlbSlcIlxyXG4gICAgICAgICAgICAgICAgOiBcImNhbGMoMTAwJSAtIDAuNXJlbSlcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcImNhbGMoMTYwcHggLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwiY2FsYygyNDBweCAtIDAuNXJlbSlcIlxyXG4gICAgICAgICAgICAgICAgOiBcInVuc2V0XCIsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwibGVmdFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/IGhlYWRlclNpemVcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImxlZnRcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBoZWFkZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1tYXhpbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICB0b3A6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBsZWZ0OiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMCAhaW1wb3J0YW50XCIsXHJcblxyXG4gICAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9jayAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogaWNvblJlc2l6ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiNTAlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAgM3B4IDNweCAwXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuM3NcIixcclxuXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc3dcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInN3LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2VcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzZS1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1ud1wiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibnctcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmVcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJuZS1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDI3MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13LCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgICAgICBjdXJzb3I6IFwiZXctcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtd1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxMzVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZVwiOiB7XHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzE1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4sICYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm5zLXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5cIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyMjVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIl19