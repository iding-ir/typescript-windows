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
      "& .tw-background": {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        zIndex: "0"
      },
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
        position: "relative",
        overflow: "auto",
        scrollbarColor: "rgba(130, 130, 130, 0.2) rgba(130, 130, 130, 0.1)",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.5rem"
        },
        "&::-webkit-scrollbar-track": {
          background: "rgba(130, 130, 130, 0.1)"
        },
        "&::-webkit-scrollbar-thumb": {
          borderRadius: "3px",
          background: "rgba(130, 130, 130, 0.1)"
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "rgba(130, 130, 130, 0.2)"
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJ0YXNrYmFyTG9jYXRpb24iLCJpU3R5bGVzIiwiaGVhZGVyU2l6ZSIsImhlYWRlckNvbG9yIiwiaGVhZGVyQmFja2dyb3VuZENvbG9yIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImljb25NYXhpbWl6ZSIsImljb25fbWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJpY29uX21pbmltaXplIiwiaWNvblJlc2l6ZSIsImljb25fcmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0IiwiYXNzaWduIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiekluZGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidHJhbnNpdGlvbiIsIm1hc2tTaXplIiwibWFza1Bvc2l0aW9uIiwibWFza1JlcGVhdCIsIm9wYWNpdHkiLCJtYXNrSW1hZ2UiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Iiwic2Nyb2xsYmFyQ29sb3IiLCJzY3JvbGxiYXJXaWR0aCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZE9yaWdpbiIsImJveFNpemluZyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztB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SUFBSSxFQUFFLEdBRndCO0FBRzlCWSxRQUFBQSxNQUFNLEVBQUUsV0FIc0I7QUFJOUJKLFFBQUFBLFNBQVMsRUFBRTtBQUptQixPQXpPcEI7QUFnUFosc0NBQWdDO0FBQzlCVCxRQUFBQSxHQUFHLEVBQUUsR0FEeUI7QUFFOUJFLFFBQUFBLEtBQUssRUFBRSxHQUZ1QjtBQUc5QlcsUUFBQUEsTUFBTSxFQUFFLFdBSHNCO0FBSTlCSixRQUFBQSxTQUFTLEVBQUU7QUFKbUIsT0FoUHBCO0FBdVBaLGtFQUE0RDtBQUMxRFQsUUFBQUEsR0FBRyxFQUFFLEtBRHFEO0FBRTFEcUMsUUFBQUEsU0FBUyxFQUFFLE9BRitDO0FBRzFEeEIsUUFBQUEsTUFBTSxFQUFFO0FBSGtELE9BdlBoRDtBQTZQWixxQ0FBK0I7QUFDN0JaLFFBQUFBLElBQUksRUFBRSxHQUR1QjtBQUU3QlEsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BN1BuQjtBQWtRWixxQ0FBK0I7QUFDN0JQLFFBQUFBLEtBQUssRUFBRSxHQURzQjtBQUU3Qk8sUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BbFFuQjtBQXVRWixrRUFBNEQ7QUFDMURSLFFBQUFBLElBQUksRUFBRSxLQURvRDtBQUUxRHFDLFFBQUFBLFVBQVUsRUFBRSxPQUY4QztBQUcxRHpCLFFBQUFBLE1BQU0sRUFBRTtBQUhrRCxPQXZRaEQ7QUE2UVoscUNBQStCO0FBQzdCYixRQUFBQSxHQUFHLEVBQUUsR0FEd0I7QUFFN0JTLFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQTdRbkI7QUFrUloscUNBQStCO0FBQzdCTixRQUFBQSxNQUFNLEVBQUUsR0FEcUI7QUFFN0JNLFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQWxSbkI7QUFETyxHQUFoQixDQUFQO0FBeVJELENBelRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5pbXBvcnQgaWNvbl9taW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9tYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9yZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcbmltcG9ydCB7IFRhc2tiYXJMb2NhdGlvbiB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSAoXHJcbiAgc3R5bGVzOiBQYXJ0aWFsPFN0eWxlcz4gfCB1bmRlZmluZWQsXHJcbiAgdGFza2JhckxvY2F0aW9uOiBUYXNrYmFyTG9jYXRpb25cclxuKSA9PiB7XHJcbiAgY29uc3QgaVN0eWxlczogU3R5bGVzID0ge1xyXG4gICAgaGVhZGVyU2l6ZTogXCIyLjRyZW1cIixcclxuICAgIGhlYWRlckNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgIGhlYWRlckJhY2tncm91bmRDb2xvcjogXCIjNDI0MjQyXCIsXHJcbiAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICBpY29uTWF4aW1pemU6IGB1cmwoJHtpY29uX21heGltaXplfSlgLFxyXG4gICAgaWNvbk1pbmltaXplOiBgdXJsKCR7aWNvbl9taW5pbWl6ZX0pYCxcclxuICAgIGljb25SZXNpemU6IGB1cmwoJHtpY29uX3Jlc2l6ZX0pYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjYzMjM4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaGVhZGVyU2l6ZSxcclxuICAgIGhlYWRlckNvbG9yLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9keUNvbG9yLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgIGljb25NYXhpbWl6ZSxcclxuICAgIGljb25NaW5pbWl6ZSxcclxuICAgIGljb25SZXNpemUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXMsXHJcbiAgICBib3hTaGFkb3csXHJcbiAgfSA9IE9iamVjdC5hc3NpZ24oaVN0eWxlcywgc3R5bGVzIHx8IHt9KSBhcyBTdHlsZXM7XHJcblxyXG4gIHJldHVybiBjcmVhdGVVc2VTdHlsZXMoe1xyXG4gICAgXCJ0dy13aW5kb3dzXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcblxyXG4gICAgICBcIiYgLnR3LWJhY2tncm91bmRcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICB6SW5kZXg6IFwiMFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC50dy10YXNrYmFyXCI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOlxyXG4gICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgID8gXCJyb3ctcmV2ZXJzZVwiXHJcbiAgICAgICAgICAgIDogdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiXHJcbiAgICAgICAgICAgID8gXCJyb3dcIlxyXG4gICAgICAgICAgICA6IFwiY29sdW1uXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMC4yNXJlbVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTpcclxuICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICA/IFwicm90YXRlKDE4MGRlZylcIlxyXG4gICAgICAgICAgICA6IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgID8gXCJzY2FsZVgoLTEpXCJcclxuICAgICAgICAgICAgOiBcIm5vbmVcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogdGFza2JhckxvY2F0aW9uICE9PSBcImJvdHRvbVwiID8gXCIwXCIgOiBcImF1dG9cIixcclxuICAgICAgICBsZWZ0OiB0YXNrYmFyTG9jYXRpb24gIT09IFwicmlnaHRcIiA/IFwiMFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgcmlnaHQ6IHRhc2tiYXJMb2NhdGlvbiAhPT0gXCJsZWZ0XCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIGJvdHRvbTogdGFza2JhckxvY2F0aW9uICE9PSBcInRvcFwiID8gXCIwXCIgOiBcImF1dG9cIixcclxuICAgICAgICB3aWR0aDpcclxuICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCJcclxuICAgICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgICA6IFwidW5zZXRcIixcclxuICAgICAgICB6SW5kZXg6IFwiMFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC50dy13aW5kb3dcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtib3JkZXJSYWRpdXN9ICR7Ym9yZGVyUmFkaXVzfSAwICR7Ym9yZGVyUmFkaXVzfWAsXHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7aGVhZGVyQmFja2dyb3VuZENvbG9yfWAsXHJcbiAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3csXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblxyXG4gICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6IGhlYWRlclNpemUsXHJcbiAgICAgICAgICBjb2xvcjogaGVhZGVyQ29sb3IsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhlYWRlckJhY2tncm91bmRDb2xvcixcclxuICAgICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgICAgekluZGV4OiBcIjEwMDBcIixcclxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuXHJcbiAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBcIm1vdmVcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy10aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAxcmVtXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LWJ1dHRvbnNcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleFNocmluazogXCIwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW1cIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICB3aWR0aDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGhlYWRlclNpemUsXHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuM3NcIixcclxuICAgICAgICAgICAgICBtYXNrU2l6ZTogXCI1MCVcIixcclxuICAgICAgICAgICAgICBtYXNrUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFza1JlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhlYWRlckNvbG9yLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1taW5pbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrSW1hZ2U6IGljb25NaW5pbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICBcIiYudHctbWF4aW1pemVcIjoge1xyXG4gICAgICAgICAgICAgICAgbWFza0ltYWdlOiBpY29uTWF4aW1pemUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJvZHlCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImLnR3LW1pbmltaXplLW9uXCI6IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG5cclxuICAgICAgICAgIFwiJi50dy10YXNrYmFyLW9uXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcInJvdGF0ZSgxODBkZWcpICFpbXBvcnRhbnRcIlxyXG4gICAgICAgICAgICAgICAgOiB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBcInNjYWxlWCgtMSkgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICA6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMC4yNXJlbVwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwiY2FsYyg1MCUgLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJjYWxjKDEwMCUgLSAwLjVyZW0pXCIsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgID8gXCJjYWxjKDE2MHB4IC0gMC41cmVtKVwiXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcImNhbGMoMjQwcHggLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImxlZnRcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBoZWFkZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJsZWZ0XCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID8gaGVhZGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgOiBcInVuc2V0XCIsXHJcblxyXG4gICAgICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICAgICAgXCImLnR3LWRyYWdnYWJsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWF4aW1pemUtb25cIjoge1xyXG4gICAgICAgICAgdG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgIHNjcm9sbGJhckNvbG9yOiBcInJnYmEoMTMwLCAxMzAsIDEzMCwgMC4yKSByZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMSlcIixcclxuICAgICAgICBzY3JvbGxiYXJXaWR0aDogXCJ0aGluXCIsXHJcblxyXG4gICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICAgICAgd2lkdGg6IFwiMC41cmVtXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMTMwLCAxMzAsIDEzMCwgMC4xKVwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMSlcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyXCI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzAsIDEzMCwgMTMwLCAwLjIpXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogaWNvblJlc2l6ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiNTAlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAgM3B4IDNweCAwXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuM3NcIixcclxuXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc3dcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInN3LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2VcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzZS1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1ud1wiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibnctcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmVcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJuZS1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDI3MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13LCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgICAgICBjdXJzb3I6IFwiZXctcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtd1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxMzVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZVwiOiB7XHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzE1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4sICYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm5zLXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5cIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyMjVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIl19