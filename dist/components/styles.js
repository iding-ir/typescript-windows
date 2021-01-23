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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJ0YXNrYmFyTG9jYXRpb24iLCJpU3R5bGVzIiwiaGVhZGVyU2l6ZSIsImhlYWRlckNvbG9yIiwiaGVhZGVyQmFja2dyb3VuZENvbG9yIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImljb25NYXhpbWl6ZSIsImljb25fbWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJpY29uX21pbmltaXplIiwiaWNvblJlc2l6ZSIsImljb25fcmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0IiwiYXNzaWduIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidHJhbnNpdGlvbiIsIm1hc2tTaXplIiwibWFza1Bvc2l0aW9uIiwibWFza1JlcGVhdCIsIm9wYWNpdHkiLCJtYXNrSW1hZ2UiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0Iiwic2Nyb2xsYmFyQ29sb3IiLCJzY3JvbGxiYXJXaWR0aCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZE9yaWdpbiIsImJveFNpemluZyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztB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VCxRQUFBQSxTQUFTLEVBQUU7QUFKbUIsT0F2T3BCO0FBOE9aLGtFQUE0RDtBQUMxREMsUUFBQUEsR0FBRyxFQUFFLEtBRHFEO0FBRTFEZ0MsUUFBQUEsU0FBUyxFQUFFLE9BRitDO0FBRzFEeEIsUUFBQUEsTUFBTSxFQUFFO0FBSGtELE9BOU9oRDtBQW9QWixxQ0FBK0I7QUFDN0JQLFFBQUFBLElBQUksRUFBRSxHQUR1QjtBQUU3QkYsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BcFBuQjtBQXlQWixxQ0FBK0I7QUFDN0JHLFFBQUFBLEtBQUssRUFBRSxHQURzQjtBQUU3QkgsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BelBuQjtBQThQWixrRUFBNEQ7QUFDMURFLFFBQUFBLElBQUksRUFBRSxLQURvRDtBQUUxRGdDLFFBQUFBLFVBQVUsRUFBRSxPQUY4QztBQUcxRHpCLFFBQUFBLE1BQU0sRUFBRTtBQUhrRCxPQTlQaEQ7QUFvUVoscUNBQStCO0FBQzdCUixRQUFBQSxHQUFHLEVBQUUsR0FEd0I7QUFFN0JELFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQXBRbkI7QUF5UVoscUNBQStCO0FBQzdCSSxRQUFBQSxNQUFNLEVBQUUsR0FEcUI7QUFFN0JKLFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQXpRbkI7QUFETyxHQUFoQixDQUFQO0FBZ1JELENBaFRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5pbXBvcnQgaWNvbl9taW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9tYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9yZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcbmltcG9ydCB7IFRhc2tiYXJMb2NhdGlvbiB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSAoXHJcbiAgc3R5bGVzOiBQYXJ0aWFsPFN0eWxlcz4gfCB1bmRlZmluZWQsXHJcbiAgdGFza2JhckxvY2F0aW9uOiBUYXNrYmFyTG9jYXRpb25cclxuKSA9PiB7XHJcbiAgY29uc3QgaVN0eWxlczogU3R5bGVzID0ge1xyXG4gICAgaGVhZGVyU2l6ZTogXCIyLjRyZW1cIixcclxuICAgIGhlYWRlckNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgIGhlYWRlckJhY2tncm91bmRDb2xvcjogXCIjNDI0MjQyXCIsXHJcbiAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICBpY29uTWF4aW1pemU6IGB1cmwoJHtpY29uX21heGltaXplfSlgLFxyXG4gICAgaWNvbk1pbmltaXplOiBgdXJsKCR7aWNvbl9taW5pbWl6ZX0pYCxcclxuICAgIGljb25SZXNpemU6IGB1cmwoJHtpY29uX3Jlc2l6ZX0pYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjYzMjM4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaGVhZGVyU2l6ZSxcclxuICAgIGhlYWRlckNvbG9yLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9keUNvbG9yLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgIGljb25NYXhpbWl6ZSxcclxuICAgIGljb25NaW5pbWl6ZSxcclxuICAgIGljb25SZXNpemUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXMsXHJcbiAgICBib3hTaGFkb3csXHJcbiAgfSA9IE9iamVjdC5hc3NpZ24oaVN0eWxlcywgc3R5bGVzIHx8IHt9KSBhcyBTdHlsZXM7XHJcblxyXG4gIHJldHVybiBjcmVhdGVVc2VTdHlsZXMoe1xyXG4gICAgXCJ0dy13aW5kb3dzXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcblxyXG4gICAgICBcIiYgLnR3LXRhc2tiYXJcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246XHJcbiAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgPyBcInJvdy1yZXZlcnNlXCJcclxuICAgICAgICAgICAgOiB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCJcclxuICAgICAgICAgICAgPyBcInJvd1wiXHJcbiAgICAgICAgICAgIDogXCJjb2x1bW5cIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgID8gXCJyb3RhdGUoMTgwZGVnKVwiXHJcbiAgICAgICAgICAgIDogdGFza2JhckxvY2F0aW9uID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgPyBcInNjYWxlWCgtMSlcIlxyXG4gICAgICAgICAgICA6IFwibm9uZVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgdG9wOiB0YXNrYmFyTG9jYXRpb24gIT09IFwiYm90dG9tXCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIGxlZnQ6IHRhc2tiYXJMb2NhdGlvbiAhPT0gXCJyaWdodFwiID8gXCIwXCIgOiBcImF1dG9cIixcclxuICAgICAgICByaWdodDogdGFza2JhckxvY2F0aW9uICE9PSBcImxlZnRcIiA/IFwiMFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgYm90dG9tOiB0YXNrYmFyTG9jYXRpb24gIT09IFwidG9wXCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIlxyXG4gICAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgIHpJbmRleDogXCIwXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnR3LXdpbmRvd1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c30gJHtib3JkZXJSYWRpdXN9IDAgJHtib3JkZXJSYWRpdXN9YCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtoZWFkZXJCYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuXHJcbiAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgIGNvbG9yOiBoZWFkZXJDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3csXHJcbiAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG5cclxuICAgICAgICAgIFwiJi50dy1kcmFnZ2FibGVcIjoge1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LXRpdGxlXCI6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiMTBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDFyZW1cIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbVwiLFxyXG5cclxuICAgICAgICAgICAgXCImIC50dy1idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIG1hc2tTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIG1hc2tQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBtYXNrUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGVhZGVyQ29sb3IsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG5cclxuICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgXCImLnR3LW1pbmltaXplXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hc2tJbWFnZTogaWNvbk1pbmltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1tYXhpbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXNrSW1hZ2U6IGljb25NYXhpbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYgLnR3LWJvZHlcIjoge1xyXG4gICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWluaW1pemUtb25cIjoge1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcblxyXG4gICAgICAgICAgXCImLnR3LXRhc2tiYXItb25cIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwicm90YXRlKDE4MGRlZykgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICA6IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/IFwic2NhbGVYKC0xKSAhaW1wb3J0YW50XCJcclxuICAgICAgICAgICAgICAgIDogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgID8gXCJjYWxjKDUwJSAtIDAuNXJlbSlcIlxyXG4gICAgICAgICAgICAgICAgOiBcImNhbGMoMTAwJSAtIDAuNXJlbSlcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcImNhbGMoMTYwcHggLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwiY2FsYygyNDBweCAtIDAuNXJlbSlcIlxyXG4gICAgICAgICAgICAgICAgOiBcInVuc2V0XCIsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwibGVmdFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICA/IGhlYWRlclNpemVcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImxlZnRcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBoZWFkZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1tYXhpbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICB0b3A6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBsZWZ0OiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMCAhaW1wb3J0YW50XCIsXHJcblxyXG4gICAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9jayAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwicmdiYSgxMzAsIDEzMCwgMTMwLCAwLjIpIHJnYmEoMTMwLCAxMzAsIDEzMCwgMC4xKVwiLFxyXG4gICAgICAgIHNjcm9sbGJhcldpZHRoOiBcInRoaW5cIixcclxuXHJcbiAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhclwiOiB7XHJcbiAgICAgICAgICB3aWR0aDogXCIwLjVyZW1cIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzAsIDEzMCwgMTMwLCAwLjEpXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlwiOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMTMwLCAxMzAsIDEzMCwgMC4xKVwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJcIjoge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzMCwgMTMwLCAxMzAsIDAuMilcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlXCI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZE9yaWdpbjogXCJjb250ZW50LWJveFwiLFxyXG4gICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBpY29uUmVzaXplLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI1MCVcIixcclxuICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAzcHggM3B4IDBcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG5cclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zd1wiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwic3ctcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zZVwiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInNlLXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW53XCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJudy1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDE4MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uZVwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm5lLXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMjcwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcsICYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZVwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMTBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJldy1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13XCI6IHtcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDEzNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lXCI6IHtcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMTVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbiwgJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zXCI6IHtcclxuICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTEwcHhcIixcclxuICAgICAgICBjdXJzb3I6IFwibnMtcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtblwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDIyNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zXCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG4iXX0=