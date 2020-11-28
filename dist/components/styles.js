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
            transform: "none !important",
            borderRadius: borderRadius,
            margin: "0.25rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJoZWFkZXIiLCJib2R5IiwiaWNvbnMiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiYm90dG9tIiwibGVmdCIsImJvcmRlciIsImJhY2tncm91bmQiLCJzaXplIiwibGluZUhlaWdodCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiY3Vyc29yIiwidXNlclNlbGVjdCIsImZsZXhHcm93IiwicGFkZGluZyIsImZsZXhTaHJpbmsiLCJ0cmFuc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsIm1pbmltaXplIiwibWF4aW1pemUiLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJ0b3AiLCJiYWNrZ3JvdW5kT3JpZ2luIiwiYm94U2l6aW5nIiwicmVzaXplIiwicmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRCxFQUFvQjtBQUFBLE1BQ25DQyxNQURtQyxHQUNjRCxNQURkLENBQ25DQyxNQURtQztBQUFBLE1BQzNCQyxJQUQyQixHQUNjRixNQURkLENBQzNCRSxJQUQyQjtBQUFBLE1BQ3JCQyxLQURxQixHQUNjSCxNQURkLENBQ3JCRyxLQURxQjtBQUFBLE1BQ2RDLFlBRGMsR0FDY0osTUFEZCxDQUNkSSxZQURjO0FBQUEsTUFDQUMsU0FEQSxHQUNjTCxNQURkLENBQ0FLLFNBREE7QUFHM0MsU0FBTywrQkFBZ0I7QUFDckIsa0JBQWM7QUFDWkMsTUFBQUEsUUFBUSxFQUFFLFVBREU7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLE1BRks7QUFHWkMsTUFBQUEsTUFBTSxFQUFFLE1BSEk7QUFJWkMsTUFBQUEsUUFBUSxFQUFFLFFBSkU7QUFNWix1QkFBaUI7QUFDZkMsUUFBQUEsT0FBTyxFQUFFLE1BRE07QUFFZkosUUFBQUEsUUFBUSxFQUFFLFVBRks7QUFHZkssUUFBQUEsTUFBTSxFQUFFLEdBSE87QUFJZkMsUUFBQUEsSUFBSSxFQUFFLEdBSlM7QUFLZkwsUUFBQUEsS0FBSyxFQUFFO0FBTFEsT0FOTDtBQWNaLHNCQUFnQjtBQUNkRCxRQUFBQSxRQUFRLEVBQUUsVUFESTtBQUVkRixRQUFBQSxZQUFZLFlBQUtBLFlBQUwsY0FBcUJBLFlBQXJCLGdCQUF1Q0EsWUFBdkMsQ0FGRTtBQUdkUyxRQUFBQSxNQUFNLHNCQUFlWixNQUFNLENBQUNhLFVBQXRCLENBSFE7QUFJZFQsUUFBQUEsU0FBUyxFQUFFQSxTQUpHO0FBS2RJLFFBQUFBLFFBQVEsRUFBRSxRQUxJO0FBT2Qsd0JBQWdCO0FBQ2RDLFVBQUFBLE9BQU8sRUFBRSxNQURLO0FBRWRKLFVBQUFBLFFBQVEsRUFBRSxVQUZJO0FBR2RDLFVBQUFBLEtBQUssRUFBRSxNQUhPO0FBSWRDLFVBQUFBLE1BQU0sRUFBRVAsTUFBTSxDQUFDYyxJQUpEO0FBS2RDLFVBQUFBLFVBQVUsRUFBRWYsTUFBTSxDQUFDYyxJQUxMO0FBTWRFLFVBQUFBLEtBQUssRUFBRWhCLE1BQU0sQ0FBQ2dCLEtBTkE7QUFPZEMsVUFBQUEsZUFBZSxFQUFFakIsTUFBTSxDQUFDYSxVQVBWO0FBUWRULFVBQUFBLFNBQVMsRUFBRUEsU0FSRztBQVNkYyxVQUFBQSxNQUFNLEVBQUUsTUFUTTtBQVVkQyxVQUFBQSxNQUFNLEVBQUUsU0FWTTtBQVdkQyxVQUFBQSxVQUFVLEVBQUUsTUFYRTtBQWFkLDRCQUFrQjtBQUNoQkQsWUFBQUEsTUFBTSxFQUFFO0FBRFEsV0FiSjtBQWlCZCx5QkFBZTtBQUNiRSxZQUFBQSxRQUFRLEVBQUUsSUFERztBQUViQyxZQUFBQSxPQUFPLEVBQUUsUUFGSTtBQUdiZCxZQUFBQSxRQUFRLEVBQUU7QUFIRyxXQWpCRDtBQXVCZCwyQkFBaUI7QUFDZkMsWUFBQUEsT0FBTyxFQUFFLE1BRE07QUFFZmMsWUFBQUEsVUFBVSxFQUFFLEdBRkc7QUFHZkQsWUFBQUEsT0FBTyxFQUFFLFVBSE07QUFLZiw0QkFBZ0I7QUFDZGhCLGNBQUFBLEtBQUssRUFBRU4sTUFBTSxDQUFDYyxJQURBO0FBRWRQLGNBQUFBLE1BQU0sRUFBRVAsTUFBTSxDQUFDYyxJQUZEO0FBR2RVLGNBQUFBLFVBQVUsRUFBRSxjQUhFO0FBSWRDLGNBQUFBLGNBQWMsRUFBRSxLQUpGO0FBS2RDLGNBQUFBLGtCQUFrQixFQUFFLFFBTE47QUFNZEMsY0FBQUEsZ0JBQWdCLEVBQUUsV0FOSjtBQU9kQyxjQUFBQSxPQUFPLEVBQUUsS0FQSztBQVFkVCxjQUFBQSxNQUFNLEVBQUUsU0FSTTtBQVVkLHlCQUFXO0FBQ1RTLGdCQUFBQSxPQUFPLEVBQUU7QUFEQSxlQVZHO0FBY2QsK0JBQWlCO0FBQ2ZDLGdCQUFBQSxlQUFlLEVBQUUzQixLQUFLLENBQUM0QjtBQURSLGVBZEg7QUFrQmQsK0JBQWlCO0FBQ2ZELGdCQUFBQSxlQUFlLEVBQUUzQixLQUFLLENBQUM2QjtBQURSO0FBbEJIO0FBTEQ7QUF2QkgsU0FQRjtBQTREZCxzQkFBYztBQUNadkIsVUFBQUEsUUFBUSxFQUFFLE1BREU7QUFFWlEsVUFBQUEsS0FBSyxFQUFFZixJQUFJLENBQUNlLEtBRkE7QUFHWkMsVUFBQUEsZUFBZSxFQUFFaEIsSUFBSSxDQUFDWTtBQUhWLFNBNURBO0FBa0VkLDRCQUFvQjtBQUNsQlYsVUFBQUEsWUFBWSxFQUFFQSxZQURJO0FBR2xCLDZCQUFtQjtBQUNqQkUsWUFBQUEsUUFBUSxFQUFFLFVBRE87QUFFakIyQixZQUFBQSxTQUFTLEVBQUUsaUJBRk07QUFHakI3QixZQUFBQSxZQUFZLEVBQUVBLFlBSEc7QUFJakI4QixZQUFBQSxNQUFNLEVBQUU7QUFKUyxXQUhEO0FBVWxCLHdCQUFjO0FBQ1p4QixZQUFBQSxPQUFPLEVBQUU7QUFERztBQVZJLFNBbEVOO0FBaUZkLDRCQUFvQjtBQUNsQnlCLFVBQUFBLEdBQUcsRUFBRSxjQURhO0FBRWxCdkIsVUFBQUEsSUFBSSxFQUFFLGNBRlk7QUFHbEJMLFVBQUFBLEtBQUssRUFBRSxpQkFIVztBQUlsQkMsVUFBQUEsTUFBTSxFQUFFLGlCQUpVO0FBS2xCeUIsVUFBQUEsU0FBUyxFQUFFLGlCQUxPO0FBTWxCN0IsVUFBQUEsWUFBWSxFQUFFLGNBTkk7QUFRbEIsMEJBQWdCO0FBQ2RHLFlBQUFBLEtBQUssRUFBRTtBQURPLFdBUkU7QUFZbEIsd0JBQWM7QUFDWkcsWUFBQUEsT0FBTyxFQUFFLGtCQURHO0FBRVpILFlBQUFBLEtBQUssRUFBRSxpQkFGSztBQUdaQyxZQUFBQSxNQUFNLEVBQUU7QUFISTtBQVpJO0FBakZOLE9BZEo7QUFtSFosNEJBQXNCO0FBQ3BCRixRQUFBQSxRQUFRLEVBQUU7QUFEVSxPQW5IVjtBQXVIWixtQ0FBNkI7QUFDM0JBLFFBQUFBLFFBQVEsRUFBRSxVQURpQjtBQUUzQkMsUUFBQUEsS0FBSyxFQUFFLE1BRm9CO0FBRzNCQyxRQUFBQSxNQUFNLEVBQUUsTUFIbUI7QUFJM0JvQixRQUFBQSxnQkFBZ0IsRUFBRSxXQUpTO0FBSzNCUSxRQUFBQSxnQkFBZ0IsRUFBRSxhQUxTO0FBTTNCQyxRQUFBQSxTQUFTLEVBQUUsWUFOZ0I7QUFPM0JQLFFBQUFBLGVBQWUsRUFBRTNCLEtBQUssQ0FBQ21DLE1BUEk7QUFRM0JYLFFBQUFBLGtCQUFrQixFQUFFLGNBUk87QUFTM0JELFFBQUFBLGNBQWMsRUFBRSxLQVRXO0FBVTNCRyxRQUFBQSxPQUFPLEVBQUUsS0FWa0I7QUFXM0JOLFFBQUFBLE9BQU8sRUFBRSxhQVhrQjtBQVkzQkUsUUFBQUEsVUFBVSxFQUFFLGNBWmU7QUFjM0IsbUJBQVc7QUFDVEksVUFBQUEsT0FBTyxFQUFFO0FBREE7QUFkZ0IsT0F2SGpCO0FBMElaLHNDQUFnQztBQUM5QmxCLFFBQUFBLE1BQU0sRUFBRSxHQURzQjtBQUU5QkMsUUFBQUEsSUFBSSxFQUFFLEdBRndCO0FBRzlCUSxRQUFBQSxNQUFNLEVBQUUsV0FIc0I7QUFJOUJhLFFBQUFBLFNBQVMsRUFBRTtBQUptQixPQTFJcEI7QUFpSlosc0NBQWdDO0FBQzlCdEIsUUFBQUEsTUFBTSxFQUFFLEdBRHNCO0FBRTlCNEIsUUFBQUEsS0FBSyxFQUFFLEdBRnVCO0FBRzlCbkIsUUFBQUEsTUFBTSxFQUFFO0FBSHNCLE9BakpwQjtBQXVKWixzQ0FBZ0M7QUFDOUJlLFFBQUFBLEdBQUcsRUFBRSxHQUR5QjtBQUU5QnZCLFFBQUFBLElBQUksRUFBRSxHQUZ3QjtBQUc5QlEsUUFBQUEsTUFBTSxFQUFFLFdBSHNCO0FBSTlCYSxRQUFBQSxTQUFTLEVBQUU7QUFKbUIsT0F2SnBCO0FBOEpaLHNDQUFnQztBQUM5QkUsUUFBQUEsR0FBRyxFQUFFLEdBRHlCO0FBRTlCSSxRQUFBQSxLQUFLLEVBQUUsR0FGdUI7QUFHOUJuQixRQUFBQSxNQUFNLEVBQUUsV0FIc0I7QUFJOUJhLFFBQUFBLFNBQVMsRUFBRTtBQUptQixPQTlKcEI7QUFxS1osa0VBQTREO0FBQzFERSxRQUFBQSxHQUFHLEVBQUUsS0FEcUQ7QUFFMURLLFFBQUFBLFNBQVMsRUFBRSxPQUYrQztBQUcxRHBCLFFBQUFBLE1BQU0sRUFBRTtBQUhrRCxPQXJLaEQ7QUEyS1oscUNBQStCO0FBQzdCUixRQUFBQSxJQUFJLEVBQUUsR0FEdUI7QUFFN0JxQixRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0EzS25CO0FBZ0xaLHFDQUErQjtBQUM3Qk0sUUFBQUEsS0FBSyxFQUFFLEdBRHNCO0FBRTdCTixRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0FoTG5CO0FBcUxaLGtFQUE0RDtBQUMxRHJCLFFBQUFBLElBQUksRUFBRSxLQURvRDtBQUUxRDZCLFFBQUFBLFVBQVUsRUFBRSxPQUY4QztBQUcxRHJCLFFBQUFBLE1BQU0sRUFBRTtBQUhrRCxPQXJMaEQ7QUEyTFoscUNBQStCO0FBQzdCZSxRQUFBQSxHQUFHLEVBQUUsR0FEd0I7QUFFN0JGLFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQTNMbkI7QUFnTVoscUNBQStCO0FBQzdCdEIsUUFBQUEsTUFBTSxFQUFFLEdBRHFCO0FBRTdCc0IsUUFBQUEsU0FBUyxFQUFFO0FBRmtCO0FBaE1uQjtBQURPLEdBQWhCLENBQVA7QUF1TUQsQ0ExTU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XHJcblxyXG5pbXBvcnQgeyBTdHlsZXMgfSBmcm9tIFwiLi9XaW5kb3dzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3R5bGVzID0gKHN0eWxlczogU3R5bGVzKSA9PiB7XHJcbiAgY29uc3QgeyBoZWFkZXIsIGJvZHksIGljb25zLCBib3JkZXJSYWRpdXMsIGJveFNoYWRvdyB9ID0gc3R5bGVzO1xyXG5cclxuICByZXR1cm4gY3JlYXRlVXNlU3R5bGVzKHtcclxuICAgIFwidHctd2luZG93c1wiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcblxyXG4gICAgICBcIiYgLnR3LXRhc2tiYXJcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnR3LXdpbmRvd1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c30gJHtib3JkZXJSYWRpdXN9IDAgJHtib3JkZXJSYWRpdXN9YCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtoZWFkZXIuYmFja2dyb3VuZH1gLFxyXG4gICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cclxuICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlYWRlci5zaXplLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogaGVhZGVyLnNpemUsXHJcbiAgICAgICAgICBjb2xvcjogaGVhZGVyLmNvbG9yLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBoZWFkZXIuYmFja2dyb3VuZCxcclxuICAgICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgICAgekluZGV4OiBcIjEwMDBcIixcclxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuXHJcbiAgICAgICAgICBcIiYudHctZHJhZ2dhYmxlXCI6IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBcIm1vdmVcIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy10aXRsZVwiOiB7XHJcbiAgICAgICAgICAgIGZsZXhHcm93OiBcIjEwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAxcmVtXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LWJ1dHRvbnNcIjoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgZmxleFNocmluazogXCIwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjVyZW1cIixcclxuXHJcbiAgICAgICAgICAgIFwiJiAudHctYnV0dG9uXCI6IHtcclxuICAgICAgICAgICAgICB3aWR0aDogaGVhZGVyLnNpemUsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBoZWFkZXIuc2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1taW5pbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25zLm1pbmltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1tYXhpbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25zLm1heGltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXHJcbiAgICAgICAgICBjb2xvcjogYm9keS5jb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYm9keS5iYWNrZ3JvdW5kLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1taW5pbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuXHJcbiAgICAgICAgICBcIiYudHctdGFza2Jhci1vblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWF4aW1pemUtb25cIjoge1xyXG4gICAgICAgICAgdG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25zLnJlc2l6ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tIHJpZ2h0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiNTAlXCIsXHJcbiAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAgM3B4IDNweCAwXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDAuM3NcIixcclxuXHJcbiAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc3dcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcInN3LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoOTBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2VcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzZS1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1ud1wiOiB7XHJcbiAgICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibnctcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmVcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJuZS1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDI3MGRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13LCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiLTEwcHhcIixcclxuICAgICAgICBjdXJzb3I6IFwiZXctcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtd1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxMzVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZVwiOiB7XHJcbiAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMzE1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4sICYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm5zLXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5cIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyMjVkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc1wiOiB7XHJcbiAgICAgICAgYm90dG9tOiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDQ1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIl19