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

var useStyles = function useStyles(styles) {
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
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "0.5",
              cursor: "pointer",
              "&:hover": {
                opacity: "1"
              },
              "&.tw-minimize": {
                backgroundImage: iconMinimize
              },
              "&.tw-maximize": {
                backgroundImage: iconMaximize
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJpU3R5bGVzIiwiaGVhZGVyU2l6ZSIsImhlYWRlckNvbG9yIiwiaGVhZGVyQmFja2dyb3VuZENvbG9yIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImljb25NYXhpbWl6ZSIsImljb25fbWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJpY29uX21pbmltaXplIiwiaWNvblJlc2l6ZSIsImljb25fcmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0IiwiYXNzaWduIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInRyYW5zZm9ybSIsImJvdHRvbSIsImxlZnQiLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ6SW5kZXgiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJwYWRkaW5nIiwiZmxleFNocmluayIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJvcGFjaXR5IiwiYmFja2dyb3VuZEltYWdlIiwibWFyZ2luIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsInRvcCIsImJhY2tncm91bmRPcmlnaW4iLCJib3hTaXppbmciLCJyaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBeUM7QUFDaEUsTUFBTUMsT0FBZSxHQUFHO0FBQ3RCQyxJQUFBQSxVQUFVLEVBQUUsUUFEVTtBQUV0QkMsSUFBQUEsV0FBVyxFQUFF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O0FBSGtELE9Bbk1oRDtBQXlNWixxQ0FBK0I7QUFDN0JjLFFBQUFBLEdBQUcsRUFBRSxHQUR3QjtBQUU3QnJCLFFBQUFBLFNBQVMsRUFBRTtBQUZrQixPQXpNbkI7QUE4TVoscUNBQStCO0FBQzdCQyxRQUFBQSxNQUFNLEVBQUUsR0FEcUI7QUFFN0JELFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQTlNbkI7QUFETyxHQUFoQixDQUFQO0FBcU5ELENBbFBNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5pbXBvcnQgaWNvbl9taW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9tYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbl9yZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3R5bGVzID0gKHN0eWxlczogUGFydGlhbDxTdHlsZXM+IHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgY29uc3QgaVN0eWxlczogU3R5bGVzID0ge1xyXG4gICAgaGVhZGVyU2l6ZTogXCIyLjRyZW1cIixcclxuICAgIGhlYWRlckNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgIGhlYWRlckJhY2tncm91bmRDb2xvcjogXCIjNDI0MjQyXCIsXHJcbiAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcjogXCIjMjEyMTIxXCIsXHJcbiAgICBpY29uTWF4aW1pemU6IGB1cmwoJHtpY29uX21heGltaXplfSlgLFxyXG4gICAgaWNvbk1pbmltaXplOiBgdXJsKCR7aWNvbl9taW5pbWl6ZX0pYCxcclxuICAgIGljb25SZXNpemU6IGB1cmwoJHtpY29uX3Jlc2l6ZX0pYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjYzMjM4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaGVhZGVyU2l6ZSxcclxuICAgIGhlYWRlckNvbG9yLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgYm9keUNvbG9yLFxyXG4gICAgYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgIGljb25NYXhpbWl6ZSxcclxuICAgIGljb25NaW5pbWl6ZSxcclxuICAgIGljb25SZXNpemUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib3JkZXJSYWRpdXMsXHJcbiAgICBib3hTaGFkb3csXHJcbiAgfSA9IE9iamVjdC5hc3NpZ24oaVN0eWxlcywgc3R5bGVzIHx8IHt9KSBhcyBTdHlsZXM7XHJcblxyXG4gIHJldHVybiBjcmVhdGVVc2VTdHlsZXMoe1xyXG4gICAgXCJ0dy13aW5kb3dzXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcblxyXG4gICAgICBcIiYgLnR3LXRhc2tiYXJcIjoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93LXJldmVyc2VcIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgxODBkZWcpXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAudHctd2luZG93XCI6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogYCR7Ym9yZGVyUmFkaXVzfSAke2JvcmRlclJhZGl1c30gMCAke2JvcmRlclJhZGl1c31gLFxyXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2hlYWRlckJhY2tncm91bmRDb2xvcn1gLFxyXG4gICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cclxuICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlYWRlclNpemUsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgY29sb3I6IGhlYWRlckNvbG9yLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBoZWFkZXJCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcclxuICAgICAgICAgIHpJbmRleDogXCIxMDAwXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcblxyXG4gICAgICAgICAgXCImLnR3LWRyYWdnYWJsZVwiOiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogXCJtb3ZlXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctdGl0bGVcIjoge1xyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCIxMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAgMXJlbVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgXCImIC50dy1idXR0b25zXCI6IHtcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhTaHJpbms6IFwiMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAgMC41cmVtXCIsXHJcblxyXG4gICAgICAgICAgICBcIiYgLnR3LWJ1dHRvblwiOiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGhlYWRlclNpemUsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjNzXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcclxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG5cclxuICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogXCIxXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgXCImLnR3LW1pbmltaXplXCI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogaWNvbk1pbmltaXplLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1tYXhpbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25NYXhpbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYgLnR3LWJvZHlcIjoge1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgY29sb3I6IGJvZHlDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYm9keUJhY2tncm91bmRDb2xvcixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWluaW1pemUtb25cIjoge1xyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcblxyXG4gICAgICAgICAgXCImLnR3LXRhc2tiYXItb25cIjoge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDE4MGRlZykgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAuMjVyZW1cIixcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiMTBcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiY2FsYyg1MCUgLSAwLjVyZW0pXCIsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiBcImNhbGMoMTYwcHggLSAwLjVyZW0pXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiBcImNhbGMoMjQwcHggLSAwLjVyZW0pXCIsXHJcblxyXG4gICAgICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICAgICAgXCImLnR3LWRyYWdnYWJsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWF4aW1pemUtb25cIjoge1xyXG4gICAgICAgICAgdG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25SZXNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwIDNweCAzcHggMFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjNzXCIsXHJcblxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3XCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzdy1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNlXCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwic2UtcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbndcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm53LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5lXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibmUtcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyNzBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtdywgJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lXCI6IHtcclxuICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcImV3LXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXdcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTM1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDMxNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJucy1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMjI1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==