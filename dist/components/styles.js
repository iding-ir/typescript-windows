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
        width: taskbarLocation === "bottom" || taskbarLocation === "top" ? "100%" : "unset"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJ0YXNrYmFyTG9jYXRpb24iLCJpU3R5bGVzIiwiaGVhZGVyU2l6ZSIsImhlYWRlckNvbG9yIiwiaGVhZGVyQmFja2dyb3VuZENvbG9yIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmRDb2xvciIsImljb25NYXhpbWl6ZSIsImljb25fbWF4aW1pemUiLCJpY29uTWluaW1pemUiLCJpY29uX21pbmltaXplIiwiaWNvblJlc2l6ZSIsImljb25fcmVzaXplIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiT2JqZWN0IiwiYXNzaWduIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsInBhZGRpbmciLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ6SW5kZXgiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwidHJhbnNpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmFja2dyb3VuZE9yaWdpbiIsImJveFNpemluZyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7QUFDQTs7OztBQUdPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQ3ZCQyxNQUR1QixFQUV2QkMsZUFGdUIsRUFHcEI7QUFDSCxNQUFNQyxPQUFlLEdBQUc7QUFDdEJDLElBQUFBLFVBQVUsRUFBRSxRQURVO0FBRXRCQyxJQUFBQSxXQUFXLEVBQUUsU0FGUztBQUd0QkMsSUFBQUEscUJBQXFCLEVBQUUsU0FIRDtBQUl0QkMsSUFBQUEsU0FBUyxFQUFFLFNBSlc7QUFLdEJDLElBQUFBLG1CQUFtQixFQUFFLFNBTEM7QUFNdEJDLElBQUFBLFlBQVksZ0JBQVNDLHFCQUFULE1BTlU7QUFPdEJDLElBQUFBLFlBQVksZ0JBQVNDLHFCQUFULE1BUFU7QUFRdEJDLElBQUFBLFVBQVUsZ0JBQVNDLG1CQUFULE1BUlk7QUFTdEJDLElBQUFBLGVBQWUsRUFBRSxTQVRLO0FBVXRCQyxJQUFBQSxZQUFZLEVBQUUsTUFWUTtBQVd0QkMsSUFBQUEsU0FBUyxFQUFFO0FBWFcsR0FBeEI7O0FBREcsYUEyQkNDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEIsT0FBZCxFQUF1QkYsTUFBTSxJQUFJLEVBQWpDLENBM0JEO0FBQUEsTUFnQkRHLFVBaEJDLFFBZ0JEQSxVQWhCQztBQUFBLE1BaUJEQyxXQWpCQyxRQWlCREEsV0FqQkM7QUFBQSxNQWtCREMscUJBbEJDLFFBa0JEQSxxQkFsQkM7QUFBQSxNQW1CREMsU0FuQkMsUUFtQkRBLFNBbkJDO0FBQUEsTUFvQkRDLG1CQXBCQyxRQW9CREEsbUJBcEJDO0FBQUEsTUFxQkRDLFlBckJDLFFBcUJEQSxZQXJCQztBQUFBLE1Bc0JERSxZQXRCQyxRQXNCREEsWUF0QkM7QUFBQSxNQXVCREUsVUF2QkMsUUF1QkRBLFVBdkJDO0FBQUEsTUF3QkRFLGVBeEJDLFFBd0JEQSxlQXhCQztBQUFBLE1BeUJEQyxZQXpCQyxRQXlCREEsWUF6QkM7QUFBQSxNQTBCREMsU0ExQkMsUUEwQkRBLFNBMUJDOztBQTZCSCxTQUFPLCtCQUFnQjtBQUNyQixrQkFBYztBQUNaRyxNQUFBQSxRQUFRLEVBQUUsVUFERTtBQUVaQyxNQUFBQSxLQUFLLEVBQUUsTUFGSztBQUdaQyxNQUFBQSxNQUFNLEVBQUUsTUFISTtBQUlaQyxNQUFBQSxRQUFRLEVBQUUsUUFKRTtBQUtaUixNQUFBQSxlQUFlLEVBQUVBLGVBTEw7QUFPWix1QkFBaUI7QUFDZlMsUUFBQUEsT0FBTyxFQUFFLE1BRE07QUFFZkMsUUFBQUEsYUFBYSxFQUNYdkIsZUFBZSxLQUFLLFFBQXBCLEdBQ0ksYUFESixHQUVJQSxlQUFlLEtBQUssS0FBcEIsR0FDQSxLQURBLEdBRUEsUUFQUztBQVFmd0IsUUFBQUEsUUFBUSxFQUFFLE1BUks7QUFTZkMsUUFBQUEsT0FBTyxFQUFFLFNBVE07QUFVZkMsUUFBQUEsU0FBUyxFQUNQMUIsZUFBZSxLQUFLLFFBQXBCLEdBQ0ksZ0JBREosR0FFSUEsZUFBZSxLQUFLLE9BQXBCLEdBQ0EsWUFEQSxHQUVBLE1BZlM7QUFnQmZrQixRQUFBQSxRQUFRLEVBQUUsVUFoQks7QUFpQmZTLFFBQUFBLEdBQUcsRUFBRTNCLGVBQWUsS0FBSyxRQUFwQixHQUErQixHQUEvQixHQUFxQyxNQWpCM0I7QUFrQmY0QixRQUFBQSxJQUFJLEVBQUU1QixlQUFlLEtBQUssT0FBcEIsR0FBOEIsR0FBOUIsR0FBb0MsTUFsQjNCO0FBbUJmNkIsUUFBQUEsS0FBSyxFQUFFN0IsZUFBZSxLQUFLLE1BQXBCLEdBQTZCLEdBQTdCLEdBQW1DLE1BbkIzQjtBQW9CZjhCLFFBQUFBLE1BQU0sRUFBRTlCLGVBQWUsS0FBSyxLQUFwQixHQUE0QixHQUE1QixHQUFrQyxNQXBCM0I7QUFxQmZtQixRQUFBQSxLQUFLLEVBQ0huQixlQUFlLEtBQUssUUFBcEIsSUFBZ0NBLGVBQWUsS0FBSyxLQUFwRCxHQUNJLE1BREosR0FFSTtBQXhCUyxPQVBMO0FBa0NaLHNCQUFnQjtBQUNka0IsUUFBQUEsUUFBUSxFQUFFLFVBREk7QUFFZEosUUFBQUEsWUFBWSxZQUFLQSxZQUFMLGNBQXFCQSxZQUFyQixnQkFBdUNBLFlBQXZDLENBRkU7QUFHZGlCLFFBQUFBLE1BQU0sc0JBQWUzQixxQkFBZixDQUhRO0FBSWRXLFFBQUFBLFNBQVMsRUFBRUEsU0FKRztBQUtkTSxRQUFBQSxRQUFRLEVBQUUsUUFMSTtBQU9kLHdCQUFnQjtBQUNkQyxVQUFBQSxPQUFPLEVBQUUsTUFESztBQUVkSixVQUFBQSxRQUFRLEVBQUUsVUFGSTtBQUdkQyxVQUFBQSxLQUFLLEVBQUUsTUFITztBQUlkQyxVQUFBQSxNQUFNLEVBQUVsQixVQUpNO0FBS2Q4QixVQUFBQSxVQUFVLEVBQUU5QixVQUxFO0FBTWQrQixVQUFBQSxLQUFLLEVBQUU5QixXQU5PO0FBT2RVLFVBQUFBLGVBQWUsRUFBRVQscUJBUEg7QUFRZFcsVUFBQUEsU0FBUyxFQUFFQSxTQVJHO0FBU2RtQixVQUFBQSxNQUFNLEVBQUUsTUFUTTtBQVVkQyxVQUFBQSxNQUFNLEVBQUUsU0FWTTtBQVdkQyxVQUFBQSxVQUFVLEVBQUUsTUFYRTtBQWFkLDRCQUFrQjtBQUNoQkQsWUFBQUEsTUFBTSxFQUFFO0FBRFEsV0FiSjtBQWlCZCx5QkFBZTtBQUNiRSxZQUFBQSxRQUFRLEVBQUUsSUFERztBQUViWixZQUFBQSxPQUFPLEVBQUUsUUFGSTtBQUdiSixZQUFBQSxRQUFRLEVBQUU7QUFIRyxXQWpCRDtBQXVCZCwyQkFBaUI7QUFDZkMsWUFBQUEsT0FBTyxFQUFFLE1BRE07QUFFZmdCLFlBQUFBLFVBQVUsRUFBRSxHQUZHO0FBR2ZiLFlBQUFBLE9BQU8sRUFBRSxVQUhNO0FBS2YsNEJBQWdCO0FBQ2ROLGNBQUFBLEtBQUssRUFBRWpCLFVBRE87QUFFZGtCLGNBQUFBLE1BQU0sRUFBRWxCLFVBRk07QUFHZHFDLGNBQUFBLFVBQVUsRUFBRSxjQUhFO0FBSWRDLGNBQUFBLGNBQWMsRUFBRSxLQUpGO0FBS2RDLGNBQUFBLGtCQUFrQixFQUFFLFFBTE47QUFNZEMsY0FBQUEsZ0JBQWdCLEVBQUUsV0FOSjtBQU9kQyxjQUFBQSxPQUFPLEVBQUUsS0FQSztBQVFkUixjQUFBQSxNQUFNLEVBQUUsU0FSTTtBQVVkLHlCQUFXO0FBQ1RRLGdCQUFBQSxPQUFPLEVBQUU7QUFEQSxlQVZHO0FBY2QsK0JBQWlCO0FBQ2ZDLGdCQUFBQSxlQUFlLEVBQUVuQztBQURGLGVBZEg7QUFrQmQsK0JBQWlCO0FBQ2ZtQyxnQkFBQUEsZUFBZSxFQUFFckM7QUFERjtBQWxCSDtBQUxEO0FBdkJILFNBUEY7QUE0RGQsc0JBQWM7QUFDWmMsVUFBQUEsUUFBUSxFQUFFLE1BREU7QUFFWlksVUFBQUEsS0FBSyxFQUFFNUIsU0FGSztBQUdaUSxVQUFBQSxlQUFlLEVBQUVQO0FBSEwsU0E1REE7QUFrRWQsNEJBQW9CO0FBQ2xCUSxVQUFBQSxZQUFZLEVBQUVBLFlBREk7QUFHbEIsNkJBQW1CO0FBQ2pCSSxZQUFBQSxRQUFRLEVBQUUsVUFETztBQUVqQlEsWUFBQUEsU0FBUyxFQUNQMUIsZUFBZSxLQUFLLFFBQXBCLEdBQ0ksMkJBREosR0FFSUEsZUFBZSxLQUFLLE9BQXBCLEdBQ0EsdUJBREEsR0FFQSxpQkFQVztBQVFqQmMsWUFBQUEsWUFBWSxFQUFFQSxZQVJHO0FBU2pCK0IsWUFBQUEsTUFBTSxFQUFFLFNBVFM7QUFVakJSLFlBQUFBLFFBQVEsRUFBRSxJQVZPO0FBV2pCbEIsWUFBQUEsS0FBSyxFQUNIbkIsZUFBZSxLQUFLLEtBQXBCLElBQTZCQSxlQUFlLEtBQUssUUFBakQsR0FDSSxvQkFESixHQUVJLHFCQWRXO0FBZWpCOEMsWUFBQUEsUUFBUSxFQUNOOUMsZUFBZSxLQUFLLEtBQXBCLElBQTZCQSxlQUFlLEtBQUssUUFBakQsR0FDSSxzQkFESixHQUVJLE9BbEJXO0FBbUJqQitDLFlBQUFBLFFBQVEsRUFDTi9DLGVBQWUsS0FBSyxLQUFwQixJQUE2QkEsZUFBZSxLQUFLLFFBQWpELEdBQ0ksc0JBREosR0FFSSxPQXRCVztBQXVCakJnRCxZQUFBQSxTQUFTLEVBQ1BoRCxlQUFlLEtBQUssTUFBcEIsSUFBOEJBLGVBQWUsS0FBSyxPQUFsRCxHQUNJRSxVQURKLEdBRUksT0ExQlc7QUEyQmpCK0MsWUFBQUEsU0FBUyxFQUNQakQsZUFBZSxLQUFLLE1BQXBCLElBQThCQSxlQUFlLEtBQUssT0FBbEQsR0FDSUUsVUFESixHQUVJLE9BOUJXO0FBZ0NqQiw0QkFBZ0I7QUFDZCxnQ0FBa0I7QUFDaEJpQyxnQkFBQUEsTUFBTSxFQUFFO0FBRFE7QUFESjtBQWhDQyxXQUhEO0FBMENsQix3QkFBYztBQUNaYixZQUFBQSxPQUFPLEVBQUU7QUFERztBQTFDSSxTQWxFTjtBQWlIZCw0QkFBb0I7QUFDbEJLLFVBQUFBLEdBQUcsRUFBRSxjQURhO0FBRWxCQyxVQUFBQSxJQUFJLEVBQUUsY0FGWTtBQUdsQlQsVUFBQUEsS0FBSyxFQUFFLGlCQUhXO0FBSWxCQyxVQUFBQSxNQUFNLEVBQUUsaUJBSlU7QUFLbEJNLFVBQUFBLFNBQVMsRUFBRSxpQkFMTztBQU1sQlosVUFBQUEsWUFBWSxFQUFFLGNBTkk7QUFRbEIsMEJBQWdCO0FBQ2RLLFlBQUFBLEtBQUssRUFBRTtBQURPLFdBUkU7QUFZbEIsd0JBQWM7QUFDWkcsWUFBQUEsT0FBTyxFQUFFLGtCQURHO0FBRVpILFlBQUFBLEtBQUssRUFBRSxpQkFGSztBQUdaQyxZQUFBQSxNQUFNLEVBQUU7QUFISTtBQVpJO0FBakhOLE9BbENKO0FBdUtaLDRCQUFzQjtBQUNwQkYsUUFBQUEsUUFBUSxFQUFFO0FBRFUsT0F2S1Y7QUEyS1osbUNBQTZCO0FBQzNCQSxRQUFBQSxRQUFRLEVBQUUsVUFEaUI7QUFFM0JDLFFBQUFBLEtBQUssRUFBRSxNQUZvQjtBQUczQkMsUUFBQUEsTUFBTSxFQUFFLE1BSG1CO0FBSTNCc0IsUUFBQUEsZ0JBQWdCLEVBQUUsV0FKUztBQUszQlEsUUFBQUEsZ0JBQWdCLEVBQUUsYUFMUztBQU0zQkMsUUFBQUEsU0FBUyxFQUFFLFlBTmdCO0FBTzNCUCxRQUFBQSxlQUFlLEVBQUVqQyxVQVBVO0FBUTNCOEIsUUFBQUEsa0JBQWtCLEVBQUUsY0FSTztBQVMzQkQsUUFBQUEsY0FBYyxFQUFFLEtBVFc7QUFVM0JHLFFBQUFBLE9BQU8sRUFBRSxLQVZrQjtBQVczQmxCLFFBQUFBLE9BQU8sRUFBRSxhQVhrQjtBQVkzQmMsUUFBQUEsVUFBVSxFQUFFLGNBWmU7QUFjM0IsbUJBQVc7QUFDVEksVUFBQUEsT0FBTyxFQUFFO0FBREE7QUFkZ0IsT0EzS2pCO0FBOExaLHNDQUFnQztBQUM5QmIsUUFBQUEsTUFBTSxFQUFFLEdBRHNCO0FBRTlCRixRQUFBQSxJQUFJLEVBQUUsR0FGd0I7QUFHOUJPLFFBQUFBLE1BQU0sRUFBRSxXQUhzQjtBQUk5QlQsUUFBQUEsU0FBUyxFQUFFO0FBSm1CLE9BOUxwQjtBQXFNWixzQ0FBZ0M7QUFDOUJJLFFBQUFBLE1BQU0sRUFBRSxHQURzQjtBQUU5QkQsUUFBQUEsS0FBSyxFQUFFLEdBRnVCO0FBRzlCTSxRQUFBQSxNQUFNLEVBQUU7QUFIc0IsT0FyTXBCO0FBMk1aLHNDQUFnQztBQUM5QlIsUUFBQUEsR0FBRyxFQUFFLEdBRHlCO0FBRTlCQyxRQUFBQSxJQUFJLEVBQUUsR0FGd0I7QUFHOUJPLFFBQUFBLE1BQU0sRUFBRSxXQUhzQjtBQUk5QlQsUUFBQUEsU0FBUyxFQUFFO0FBSm1CLE9BM01wQjtBQWtOWixzQ0FBZ0M7QUFDOUJDLFFBQUFBLEdBQUcsRUFBRSxHQUR5QjtBQUU5QkUsUUFBQUEsS0FBSyxFQUFFLEdBRnVCO0FBRzlCTSxRQUFBQSxNQUFNLEVBQUUsV0FIc0I7QUFJOUJULFFBQUFBLFNBQVMsRUFBRTtBQUptQixPQWxOcEI7QUF5Tlosa0VBQTREO0FBQzFEQyxRQUFBQSxHQUFHLEVBQUUsS0FEcUQ7QUFFMUR5QixRQUFBQSxTQUFTLEVBQUUsT0FGK0M7QUFHMURqQixRQUFBQSxNQUFNLEVBQUU7QUFIa0QsT0F6TmhEO0FBK05aLHFDQUErQjtBQUM3QlAsUUFBQUEsSUFBSSxFQUFFLEdBRHVCO0FBRTdCRixRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0EvTm5CO0FBb09aLHFDQUErQjtBQUM3QkcsUUFBQUEsS0FBSyxFQUFFLEdBRHNCO0FBRTdCSCxRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0FwT25CO0FBeU9aLGtFQUE0RDtBQUMxREUsUUFBQUEsSUFBSSxFQUFFLEtBRG9EO0FBRTFEeUIsUUFBQUEsVUFBVSxFQUFFLE9BRjhDO0FBRzFEbEIsUUFBQUEsTUFBTSxFQUFFO0FBSGtELE9Bek9oRDtBQStPWixxQ0FBK0I7QUFDN0JSLFFBQUFBLEdBQUcsRUFBRSxHQUR3QjtBQUU3QkQsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BL09uQjtBQW9QWixxQ0FBK0I7QUFDN0JJLFFBQUFBLE1BQU0sRUFBRSxHQURxQjtBQUU3QkosUUFBQUEsU0FBUyxFQUFFO0FBRmtCO0FBcFBuQjtBQURPLEdBQWhCLENBQVA7QUEyUEQsQ0EzUk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XHJcblxyXG5pbXBvcnQgeyBTdHlsZXMgfSBmcm9tIFwiLi9pbmRleC5kXCI7XHJcbmltcG9ydCBpY29uX21pbmltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWluaW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uX21heGltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWF4aW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uX3Jlc2l6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuaW1wb3J0IHsgVGFza2JhckxvY2F0aW9uIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IChcclxuICBzdHlsZXM6IFBhcnRpYWw8U3R5bGVzPiB8IHVuZGVmaW5lZCxcclxuICB0YXNrYmFyTG9jYXRpb246IFRhc2tiYXJMb2NhdGlvblxyXG4pID0+IHtcclxuICBjb25zdCBpU3R5bGVzOiBTdHlsZXMgPSB7XHJcbiAgICBoZWFkZXJTaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgaGVhZGVyQ29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZENvbG9yOiBcIiM0MjQyNDJcIixcclxuICAgIGJvZHlDb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICBib2R5QmFja2dyb3VuZENvbG9yOiBcIiMyMTIxMjFcIixcclxuICAgIGljb25NYXhpbWl6ZTogYHVybCgke2ljb25fbWF4aW1pemV9KWAsXHJcbiAgICBpY29uTWluaW1pemU6IGB1cmwoJHtpY29uX21pbmltaXplfSlgLFxyXG4gICAgaWNvblJlc2l6ZTogYHVybCgke2ljb25fcmVzaXplfSlgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyNjMyMzhcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICB9O1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBoZWFkZXJTaXplLFxyXG4gICAgaGVhZGVyQ29sb3IsXHJcbiAgICBoZWFkZXJCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICBib2R5Q29sb3IsXHJcbiAgICBib2R5QmFja2dyb3VuZENvbG9yLFxyXG4gICAgaWNvbk1heGltaXplLFxyXG4gICAgaWNvbk1pbmltaXplLFxyXG4gICAgaWNvblJlc2l6ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcixcclxuICAgIGJvcmRlclJhZGl1cyxcclxuICAgIGJveFNoYWRvdyxcclxuICB9ID0gT2JqZWN0LmFzc2lnbihpU3R5bGVzLCBzdHlsZXMgfHwge30pIGFzIFN0eWxlcztcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVVzZVN0eWxlcyh7XHJcbiAgICBcInR3LXdpbmRvd3NcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcclxuXHJcbiAgICAgIFwiJiAudHctdGFza2JhclwiOiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjpcclxuICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICA/IFwicm93LXJldmVyc2VcIlxyXG4gICAgICAgICAgICA6IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIlxyXG4gICAgICAgICAgICA/IFwicm93XCJcclxuICAgICAgICAgICAgOiBcImNvbHVtblwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjAuMjVyZW1cIixcclxuICAgICAgICB0cmFuc2Zvcm06XHJcbiAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgPyBcInJvdGF0ZSgxODBkZWcpXCJcclxuICAgICAgICAgICAgOiB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICA/IFwic2NhbGVYKC0xKVwiXHJcbiAgICAgICAgICAgIDogXCJub25lXCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IHRhc2tiYXJMb2NhdGlvbiAhPT0gXCJib3R0b21cIiA/IFwiMFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgbGVmdDogdGFza2JhckxvY2F0aW9uICE9PSBcInJpZ2h0XCIgPyBcIjBcIiA6IFwiYXV0b1wiLFxyXG4gICAgICAgIHJpZ2h0OiB0YXNrYmFyTG9jYXRpb24gIT09IFwibGVmdFwiID8gXCIwXCIgOiBcImF1dG9cIixcclxuICAgICAgICBib3R0b206IHRhc2tiYXJMb2NhdGlvbiAhPT0gXCJ0b3BcIiA/IFwiMFwiIDogXCJhdXRvXCIsXHJcbiAgICAgICAgd2lkdGg6XHJcbiAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiXHJcbiAgICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgICAgOiBcInVuc2V0XCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnR3LXdpbmRvd1wiOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke2JvcmRlclJhZGl1c30gJHtib3JkZXJSYWRpdXN9IDAgJHtib3JkZXJSYWRpdXN9YCxcclxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtoZWFkZXJCYWNrZ3JvdW5kQ29sb3J9YCxcclxuICAgICAgICBib3hTaGFkb3c6IGJveFNoYWRvdyxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuXHJcbiAgICAgICAgXCImIC50dy1oZWFkZXJcIjoge1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgIGNvbG9yOiBoZWFkZXJDb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaGVhZGVyQmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3csXHJcbiAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG5cclxuICAgICAgICAgIFwiJi50dy1kcmFnZ2FibGVcIjoge1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LXRpdGxlXCI6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiMTBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDFyZW1cIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbVwiLFxyXG5cclxuICAgICAgICAgICAgXCImIC50dy1idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1taW5pbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25NaW5pbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICBcIiYudHctbWF4aW1pemVcIjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBpY29uTWF4aW1pemUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJvZHlCYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImLnR3LW1pbmltaXplLW9uXCI6IHtcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG5cclxuICAgICAgICAgIFwiJi50dy10YXNrYmFyLW9uXCI6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICAgICAgdHJhbnNmb3JtOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcInJvdGF0ZSgxODBkZWcpICFpbXBvcnRhbnRcIlxyXG4gICAgICAgICAgICAgICAgOiB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBcInNjYWxlWCgtMSkgIWltcG9ydGFudFwiXHJcbiAgICAgICAgICAgICAgICA6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMC4yNXJlbVwiLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogXCIxMFwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcclxuICAgICAgICAgICAgICB0YXNrYmFyTG9jYXRpb24gPT09IFwidG9wXCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICA/IFwiY2FsYyg1MCUgLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJjYWxjKDEwMCUgLSAwLjVyZW0pXCIsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJ0b3BcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgID8gXCJjYWxjKDE2MHB4IC0gMC41cmVtKVwiXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcInRvcFwiIHx8IHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgPyBcImNhbGMoMjQwcHggLSAwLjVyZW0pXCJcclxuICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiLFxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ6XHJcbiAgICAgICAgICAgICAgdGFza2JhckxvY2F0aW9uID09PSBcImxlZnRcIiB8fCB0YXNrYmFyTG9jYXRpb24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgPyBoZWFkZXJTaXplXHJcbiAgICAgICAgICAgICAgICA6IFwidW5zZXRcIixcclxuICAgICAgICAgICAgbWF4SGVpZ2h0OlxyXG4gICAgICAgICAgICAgIHRhc2tiYXJMb2NhdGlvbiA9PT0gXCJsZWZ0XCIgfHwgdGFza2JhckxvY2F0aW9uID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgICAgID8gaGVhZGVyU2l6ZVxyXG4gICAgICAgICAgICAgICAgOiBcInVuc2V0XCIsXHJcblxyXG4gICAgICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICAgICAgXCImLnR3LWRyYWdnYWJsZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWF4aW1pemUtb25cIjoge1xyXG4gICAgICAgICAgdG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGljb25SZXNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwIDNweCAzcHggMFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjNzXCIsXHJcblxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3XCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzdy1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNlXCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwic2UtcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbndcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm53LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5lXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibmUtcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyNzBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtdywgJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lXCI6IHtcclxuICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcImV3LXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXdcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTM1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDMxNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJucy1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMjI1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==