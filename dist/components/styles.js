"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _reactJss = require("react-jss");

var useStyles = function useStyles(styles) {
  var header = styles.header,
      body = styles.body,
      icons = styles.icons,
      borderRadius = styles.borderRadius,
      boxShadow = styles.boxShadow;
  return (0, _reactJss.createUseStyles)({
    "tw-windows": {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "& .tw-taskbar": {
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap",
        transform: "rotate(180deg)",
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%"
      },
      "& .tw-window": {
        position: "absolute",
        borderRadius: "".concat(borderRadius, " ").concat(borderRadius, " 0 ").concat(borderRadius),
        border: "1px solid ".concat(header.background),
        boxShadow: boxShadow,
        overflow: "hidden",
        "& .tw-header": {
          display: "flex",
          position: "relative",
          width: "100%",
          height: header.size,
          lineHeight: header.size,
          color: header.color,
          backgroundColor: header.background,
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
              width: header.size,
              height: header.size,
              transition: "opacity 0.3s",
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.5",
              cursor: "pointer",
              "&:hover": {
                opacity: "1"
              },
              "&.tw-minimize": {
                backgroundImage: icons.minimize
              },
              "&.tw-maximize": {
                backgroundImage: icons.maximize
              }
            }
          }
        },
        "& .tw-body": {
          overflow: "auto",
          color: body.color,
          backgroundColor: body.background
        },
        "&.tw-minimize-on": {
          borderRadius: borderRadius,
          "&.tw-taskbar-on": {
            position: "relative",
            transform: "rotate(180deg) !important",
            borderRadius: borderRadius,
            margin: "0.25rem",
            flexGrow: "10",
            width: "calc(50% - 0.5rem)",
            minWidth: "calc(160px - 0.5rem)",
            maxWidth: "calc(240px - 0.5rem)",
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
        backgroundImage: icons.resize,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJoZWFkZXIiLCJib2R5IiwiaWNvbnMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwidHJhbnNmb3JtIiwiYm90dG9tIiwibGVmdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJzaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiY3Vyc29yIiwidXNlclNlbGVjdCIsImZsZXhHcm93IiwicGFkZGluZyIsImZsZXhTaHJpbmsiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsIm1pbmltaXplIiwibWF4aW1pemUiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwidG9wIiwiYmFja2dyb3VuZE9yaWdpbiIsImJveFNpemluZyIsInJlc2l6ZSIsInJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBb0I7QUFBQSxNQUNuQ0MsTUFEbUMsR0FDY0QsTUFEZCxDQUNuQ0MsTUFEbUM7QUFBQSxNQUMzQkMsSUFEMkIsR0FDY0YsTUFEZCxDQUMzQkUsSUFEMkI7QUFBQSxNQUNyQkMsS0FEcUIsR0FDY0gsTUFEZCxDQUNyQkcsS0FEcUI7QUFBQSxNQUNkQyxZQURjLEdBQ2NKLE1BRGQsQ0FDZEksWUFEYztBQUFBLE1BQ0FDLFNBREEsR0FDY0wsTUFEZCxDQUNBSyxTQURBO0FBRzNDLFNBQU8sK0JBQWdC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QUM3QlIsUUFBQUEsSUFBSSxFQUFFLEdBRHVCO0FBRTdCRixRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0F4TG5CO0FBNkxaLHFDQUErQjtBQUM3QjhCLFFBQUFBLEtBQUssRUFBRSxHQURzQjtBQUU3QjlCLFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQTdMbkI7QUFrTVosa0VBQTREO0FBQzFERSxRQUFBQSxJQUFJLEVBQUUsS0FEb0Q7QUFFMUQ4QixRQUFBQSxVQUFVLEVBQUUsT0FGOEM7QUFHMUR0QixRQUFBQSxNQUFNLEVBQUU7QUFIa0QsT0FsTWhEO0FBd01aLHFDQUErQjtBQUM3QmdCLFFBQUFBLEdBQUcsRUFBRSxHQUR3QjtBQUU3QjFCLFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQXhNbkI7QUE2TVoscUNBQStCO0FBQzdCQyxRQUFBQSxNQUFNLEVBQUUsR0FEcUI7QUFFN0JELFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQTdNbkI7QUFETyxHQUFoQixDQUFQO0FBb05ELENBdk5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IChzdHlsZXM6IFN0eWxlcykgPT4ge1xyXG4gIGNvbnN0IHsgaGVhZGVyLCBib2R5LCBpY29ucywgYm9yZGVyUmFkaXVzLCBib3hTaGFkb3cgfSA9IHN0eWxlcztcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVVzZVN0eWxlcyh7XHJcbiAgICBcInR3LXdpbmRvd3NcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cclxuICAgICAgXCImIC50dy10YXNrYmFyXCI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvdy1yZXZlcnNlXCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnR3LXdpbmRvd1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c30gJHtib3JkZXJSYWRpdXN9IDAgJHtib3JkZXJSYWRpdXN9YCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtoZWFkZXIuYmFja2dyb3VuZH1gLFxyXG4gICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cclxuICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlYWRlci5zaXplLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogaGVhZGVyLnNpemUsXHJcbiAgICAgICAgICBjb2xvcjogaGVhZGVyLmNvbG9yLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBoZWFkZXIuYmFja2dyb3VuZCxcclxuICAgICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgICAgekluZGV4OiBcIjEwMDBcIixcclxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuXHJcbiAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBcIm1vdmVcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy10aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAxcmVtXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LWJ1dHRvbnNcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleFNocmluazogXCIwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW1cIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICB3aWR0aDogaGVhZGVyLnNpemUsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBoZWFkZXIuc2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1taW5pbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25zLm1pbmltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1tYXhpbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25zLm1heGltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICBjb2xvcjogYm9keS5jb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYm9keS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1taW5pbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuXHJcbiAgICAgICAgICBcIiYudHctdGFza2Jhci1vblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMC4yNXJlbVwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCJjYWxjKDUwJSAtIDAuNXJlbSlcIixcclxuICAgICAgICAgICAgbWluV2lkdGg6IFwiY2FsYygxNjBweCAtIDAuNXJlbSlcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiY2FsYygyNDBweCAtIDAuNXJlbSlcIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1tYXhpbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICB0b3A6IFwiMCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBsZWZ0OiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMCAhaW1wb3J0YW50XCIsXHJcblxyXG4gICAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9jayAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZVwiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRPcmlnaW46IFwiY29udGVudC1ib3hcIixcclxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogaWNvbnMucmVzaXplLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJib3R0b20gcmlnaHRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI1MCVcIixcclxuICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAzcHggM3B4IDBcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG5cclxuICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zd1wiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwic3ctcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg5MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zZVwiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInNlLXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW53XCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJudy1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDE4MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uZVwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm5lLXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMjcwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcsICYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZVwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogXCItMTBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJldy1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13XCI6IHtcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDEzNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lXCI6IHtcclxuICAgICAgICByaWdodDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzMTVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbiwgJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zXCI6IHtcclxuICAgICAgICBsZWZ0OiBcIjUwJVwiLFxyXG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiLTEwcHhcIixcclxuICAgICAgICBjdXJzb3I6IFwibnMtcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtblwiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDIyNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zXCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoNDVkZWcpXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG4iXX0=