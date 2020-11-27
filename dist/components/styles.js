"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;

var _reactJss = require("react-jss");

var useStyles = function useStyles(styles) {
  var borderRadius = styles.borderRadius,
      headerSize = styles.headerSize,
      headerColor = styles.headerColor,
      headerBackground = styles.headerBackground,
      bodyColor = styles.bodyColor,
      bodyBackground = styles.bodyBackground,
      boxShadow = styles.boxShadow,
      IconMaximize = styles.IconMaximize,
      IconMinimize = styles.IconMinimize,
      IconResize = styles.IconResize;
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
        overflow: "hidden",
        borderRadius: "".concat(borderRadius, " ").concat(borderRadius, " 0 ").concat(borderRadius),
        border: "1px solid ".concat(headerBackground),
        boxShadow: boxShadow,
        "& .tw-header": {
          display: "flex",
          position: "relative",
          width: "100%",
          height: headerSize,
          lineHeight: headerSize,
          color: headerColor,
          backgroundColor: headerBackground,
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
                backgroundImage: IconMinimize
              },
              "&.tw-maximize": {
                backgroundImage: IconMaximize
              }
            }
          }
        },
        "& .tw-body": {
          overflow: "auto",
          color: bodyColor,
          backgroundColor: bodyBackground
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
        backgroundImage: IconResize,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3N0eWxlcy50cyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJzdHlsZXMiLCJib3JkZXJSYWRpdXMiLCJoZWFkZXJTaXplIiwiaGVhZGVyQ29sb3IiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJJY29uTWF4aW1pemUiLCJJY29uTWluaW1pemUiLCJJY29uUmVzaXplIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImJvdHRvbSIsImxlZnQiLCJib3JkZXIiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJjdXJzb3IiLCJ1c2VyU2VsZWN0IiwiZmxleEdyb3ciLCJwYWRkaW5nIiwiZmxleFNocmluayIsInRyYW5zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJvcGFjaXR5IiwiYmFja2dyb3VuZEltYWdlIiwidHJhbnNmb3JtIiwibWFyZ2luIiwidG9wIiwiYmFja2dyb3VuZE9yaWdpbiIsImJveFNpemluZyIsInJpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBb0I7QUFBQSxNQUV6Q0MsWUFGeUMsR0FZdkNELE1BWnVDLENBRXpDQyxZQUZ5QztBQUFBLE1BR3pDQyxVQUh5QyxHQVl2Q0YsTUFadUMsQ0FHekNFLFVBSHlDO0FBQUEsTUFJekNDLFdBSnlDLEdBWXZDSCxNQVp1QyxDQUl6Q0csV0FKeUM7QUFBQSxNQUt6Q0MsZ0JBTHlDLEdBWXZDSixNQVp1QyxDQUt6Q0ksZ0JBTHlDO0FBQUEsTUFNekNDLFNBTnlDLEdBWXZDTCxNQVp1QyxDQU16Q0ssU0FOeUM7QUFBQSxNQU96Q0MsY0FQeUMsR0FZdkNOLE1BWnVDLENBT3pDTSxjQVB5QztBQUFBLE1BUXpDQyxTQVJ5QyxHQVl2Q1AsTUFadUMsQ0FRekNPLFNBUnlDO0FBQUEsTUFTekNDLFlBVHlDLEdBWXZDUixNQVp1QyxDQVN6Q1EsWUFUeUM7QUFBQSxNQVV6Q0MsWUFWeUMsR0FZdkNULE1BWnVDLENBVXpDUyxZQVZ5QztBQUFBLE1BV3pDQyxVQVh5QyxHQVl2Q1YsTUFadUMsQ0FXekNVLFVBWHlDO0FBYzNDLFNBQU8sK0JBQWdCO0FBQ3JCLGtCQUFjO0FBQ1pDLE1BQUFBLFFBQVEsRUFBRSxVQURFO0FBRVpDLE1BQUFBLEtBQUssRUFBRSxNQUZLO0FBR1pDLE1BQUFBLE1BQU0sRUFBRSxNQUhJO0FBSVpDLE1BQUFBLFFBQVEsRUFBRSxRQUpFO0FBTVosdUJBQWlCO0FBQ2ZDLFFBQUFBLE9BQU8sRUFBRSxNQURNO0FBRWZKLFFBQUFBLFFBQVEsRUFBRSxVQUZLO0FBR2ZLLFFBQUFBLE1BQU0sRUFBRSxHQUhPO0FBSWZDLFFBQUFBLElBQUksRUFBRSxHQUpTO0FBS2ZMLFFBQUFBLEtBQUssRUFBRTtBQUxRLE9BTkw7QUFjWixzQkFBZ0I7QUFDZEQsUUFBQUEsUUFBUSxFQUFFLFVBREk7QUFFZEcsUUFBQUEsUUFBUSxFQUFFLFFBRkk7QUFHZGIsUUFBQUEsWUFBWSxZQUFLQSxZQUFMLGNBQXFCQSxZQUFyQixnQkFBdUNBLFlBQXZDLENBSEU7QUFJZGlCLFFBQUFBLE1BQU0sc0JBQWVkLGdCQUFmLENBSlE7QUFLZEcsUUFBQUEsU0FBUyxFQUFFQSxTQUxHO0FBT2Qsd0JBQWdCO0FBQ2RRLFVBQUFBLE9BQU8sRUFBRSxNQURLO0FBRWRKLFVBQUFBLFFBQVEsRUFBRSxVQUZJO0FBR2RDLFVBQUFBLEtBQUssRUFBRSxNQUhPO0FBSWRDLFVBQUFBLE1BQU0sRUFBRVgsVUFKTTtBQUtkaUIsVUFBQUEsVUFBVSxFQUFFakIsVUFMRTtBQU1ka0IsVUFBQUEsS0FBSyxFQUFFakIsV0FOTztBQU9ka0IsVUFBQUEsZUFBZSxFQUFFakIsZ0JBUEg7QUFRZEcsVUFBQUEsU0FBUyxFQUFFQSxTQVJHO0FBU2RlLFVBQUFBLE1BQU0sRUFBRSxNQVRNO0FBVWRDLFVBQUFBLE1BQU0sRUFBRSxTQVZNO0FBV2RDLFVBQUFBLFVBQVUsRUFBRSxNQVhFO0FBYWQsNEJBQWtCO0FBQ2hCRCxZQUFBQSxNQUFNLEVBQUU7QUFEUSxXQWJKO0FBaUJkLHlCQUFlO0FBQ2JFLFlBQUFBLFFBQVEsRUFBRSxJQURHO0FBRWJDLFlBQUFBLE9BQU8sRUFBRSxRQUZJO0FBR2JaLFlBQUFBLFFBQVEsRUFBRTtBQUhHLFdBakJEO0FBdUJkLDJCQUFpQjtBQUNmQyxZQUFBQSxPQUFPLEVBQUUsTUFETTtBQUVmWSxZQUFBQSxVQUFVLEVBQUUsR0FGRztBQUdmRCxZQUFBQSxPQUFPLEVBQUUsVUFITTtBQUtmLDRCQUFnQjtBQUNkZCxjQUFBQSxLQUFLLEVBQUVWLFVBRE87QUFFZFcsY0FBQUEsTUFBTSxFQUFFWCxVQUZNO0FBR2QwQixjQUFBQSxVQUFVLEVBQUUsY0FIRTtBQUlkQyxjQUFBQSxjQUFjLEVBQUUsS0FKRjtBQUtkQyxjQUFBQSxrQkFBa0IsRUFBRSxRQUxOO0FBTWRDLGNBQUFBLGdCQUFnQixFQUFFLFdBTko7QUFPZEMsY0FBQUEsT0FBTyxFQUFFLEtBUEs7QUFRZFQsY0FBQUEsTUFBTSxFQUFFLFNBUk07QUFVZCx5QkFBVztBQUNUUyxnQkFBQUEsT0FBTyxFQUFFO0FBREEsZUFWRztBQWNkLCtCQUFpQjtBQUNmQyxnQkFBQUEsZUFBZSxFQUFFeEI7QUFERixlQWRIO0FBa0JkLCtCQUFpQjtBQUNmd0IsZ0JBQUFBLGVBQWUsRUFBRXpCO0FBREY7QUFsQkg7QUFMRDtBQXZCSCxTQVBGO0FBNERkLHNCQUFjO0FBQ1pNLFVBQUFBLFFBQVEsRUFBRSxNQURFO0FBRVpNLFVBQUFBLEtBQUssRUFBRWYsU0FGSztBQUdaZ0IsVUFBQUEsZUFBZSxFQUFFZjtBQUhMLFNBNURBO0FBa0VkLDRCQUFvQjtBQUNsQkwsVUFBQUEsWUFBWSxFQUFFQSxZQURJO0FBR2xCLDZCQUFtQjtBQUNqQlUsWUFBQUEsUUFBUSxFQUFFLFVBRE87QUFFakJ1QixZQUFBQSxTQUFTLEVBQUUsaUJBRk07QUFHakJqQyxZQUFBQSxZQUFZLEVBQUVBLFlBSEc7QUFJakJrQyxZQUFBQSxNQUFNLEVBQUU7QUFKUyxXQUhEO0FBVWxCLHdCQUFjO0FBQ1pwQixZQUFBQSxPQUFPLEVBQUU7QUFERztBQVZJLFNBbEVOO0FBaUZkLDRCQUFvQjtBQUNsQnFCLFVBQUFBLEdBQUcsRUFBRSxjQURhO0FBRWxCbkIsVUFBQUEsSUFBSSxFQUFFLGNBRlk7QUFHbEJMLFVBQUFBLEtBQUssRUFBRSxpQkFIVztBQUlsQkMsVUFBQUEsTUFBTSxFQUFFLGlCQUpVO0FBS2xCcUIsVUFBQUEsU0FBUyxFQUFFLGlCQUxPO0FBTWxCakMsVUFBQUEsWUFBWSxFQUFFLGNBTkk7QUFRbEIsMEJBQWdCO0FBQ2RXLFlBQUFBLEtBQUssRUFBRTtBQURPLFdBUkU7QUFZbEIsd0JBQWM7QUFDWkcsWUFBQUEsT0FBTyxFQUFFLGtCQURHO0FBRVpILFlBQUFBLEtBQUssRUFBRSxpQkFGSztBQUdaQyxZQUFBQSxNQUFNLEVBQUU7QUFISTtBQVpJO0FBakZOLE9BZEo7QUFtSFosNEJBQXNCO0FBQ3BCRixRQUFBQSxRQUFRLEVBQUU7QUFEVSxPQW5IVjtBQXVIWixtQ0FBNkI7QUFDM0JBLFFBQUFBLFFBQVEsRUFBRSxVQURpQjtBQUUzQkMsUUFBQUEsS0FBSyxFQUFFLE1BRm9CO0FBRzNCQyxRQUFBQSxNQUFNLEVBQUUsTUFIbUI7QUFJM0JrQixRQUFBQSxnQkFBZ0IsRUFBRSxXQUpTO0FBSzNCTSxRQUFBQSxnQkFBZ0IsRUFBRSxhQUxTO0FBTTNCQyxRQUFBQSxTQUFTLEVBQUUsWUFOZ0I7QUFPM0JMLFFBQUFBLGVBQWUsRUFBRXZCLFVBUFU7QUFRM0JvQixRQUFBQSxrQkFBa0IsRUFBRSxjQVJPO0FBUzNCRCxRQUFBQSxjQUFjLEVBQUUsS0FUVztBQVUzQkcsUUFBQUEsT0FBTyxFQUFFLEtBVmtCO0FBVzNCTixRQUFBQSxPQUFPLEVBQUUsYUFYa0I7QUFZM0JFLFFBQUFBLFVBQVUsRUFBRSxjQVplO0FBYzNCLG1CQUFXO0FBQ1RJLFVBQUFBLE9BQU8sRUFBRTtBQURBO0FBZGdCLE9BdkhqQjtBQTBJWixzQ0FBZ0M7QUFDOUJoQixRQUFBQSxNQUFNLEVBQUUsR0FEc0I7QUFFOUJDLFFBQUFBLElBQUksRUFBRSxHQUZ3QjtBQUc5Qk0sUUFBQUEsTUFBTSxFQUFFLFdBSHNCO0FBSTlCVyxRQUFBQSxTQUFTLEVBQUU7QUFKbUIsT0ExSXBCO0FBaUpaLHNDQUFnQztBQUM5QmxCLFFBQUFBLE1BQU0sRUFBRSxHQURzQjtBQUU5QnVCLFFBQUFBLEtBQUssRUFBRSxHQUZ1QjtBQUc5QmhCLFFBQUFBLE1BQU0sRUFBRTtBQUhzQixPQWpKcEI7QUF1Slosc0NBQWdDO0FBQzlCYSxRQUFBQSxHQUFHLEVBQUUsR0FEeUI7QUFFOUJuQixRQUFBQSxJQUFJLEVBQUUsR0FGd0I7QUFHOUJNLFFBQUFBLE1BQU0sRUFBRSxXQUhzQjtBQUk5QlcsUUFBQUEsU0FBUyxFQUFFO0FBSm1CLE9BdkpwQjtBQThKWixzQ0FBZ0M7QUFDOUJFLFFBQUFBLEdBQUcsRUFBRSxHQUR5QjtBQUU5QkcsUUFBQUEsS0FBSyxFQUFFLEdBRnVCO0FBRzlCaEIsUUFBQUEsTUFBTSxFQUFFLFdBSHNCO0FBSTlCVyxRQUFBQSxTQUFTLEVBQUU7QUFKbUIsT0E5SnBCO0FBcUtaLGtFQUE0RDtBQUMxREUsUUFBQUEsR0FBRyxFQUFFLEtBRHFEO0FBRTFESSxRQUFBQSxTQUFTLEVBQUUsT0FGK0M7QUFHMURqQixRQUFBQSxNQUFNLEVBQUU7QUFIa0QsT0FyS2hEO0FBMktaLHFDQUErQjtBQUM3Qk4sUUFBQUEsSUFBSSxFQUFFLEdBRHVCO0FBRTdCaUIsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BM0tuQjtBQWdMWixxQ0FBK0I7QUFDN0JLLFFBQUFBLEtBQUssRUFBRSxHQURzQjtBQUU3QkwsUUFBQUEsU0FBUyxFQUFFO0FBRmtCLE9BaExuQjtBQXFMWixrRUFBNEQ7QUFDMURqQixRQUFBQSxJQUFJLEVBQUUsS0FEb0Q7QUFFMUR3QixRQUFBQSxVQUFVLEVBQUUsT0FGOEM7QUFHMURsQixRQUFBQSxNQUFNLEVBQUU7QUFIa0QsT0FyTGhEO0FBMkxaLHFDQUErQjtBQUM3QmEsUUFBQUEsR0FBRyxFQUFFLEdBRHdCO0FBRTdCRixRQUFBQSxTQUFTLEVBQUU7QUFGa0IsT0EzTG5CO0FBZ01aLHFDQUErQjtBQUM3QmxCLFFBQUFBLE1BQU0sRUFBRSxHQURxQjtBQUU3QmtCLFFBQUFBLFNBQVMsRUFBRTtBQUZrQjtBQWhNbkI7QUFETyxHQUFoQixDQUFQO0FBdU1ELENBck5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgU3R5bGVzIH0gZnJvbSBcIi4vV2luZG93c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IChzdHlsZXM6IFN0eWxlcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGJvcmRlclJhZGl1cyxcclxuICAgIGhlYWRlclNpemUsXHJcbiAgICBoZWFkZXJDb2xvcixcclxuICAgIGhlYWRlckJhY2tncm91bmQsXHJcbiAgICBib2R5Q29sb3IsXHJcbiAgICBib2R5QmFja2dyb3VuZCxcclxuICAgIGJveFNoYWRvdyxcclxuICAgIEljb25NYXhpbWl6ZSxcclxuICAgIEljb25NaW5pbWl6ZSxcclxuICAgIEljb25SZXNpemUsXHJcbiAgfSA9IHN0eWxlcztcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVVzZVN0eWxlcyh7XHJcbiAgICBcInR3LXdpbmRvd3NcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG5cclxuICAgICAgXCImIC50dy10YXNrYmFyXCI6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC50dy13aW5kb3dcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBgJHtib3JkZXJSYWRpdXN9ICR7Ym9yZGVyUmFkaXVzfSAwICR7Ym9yZGVyUmFkaXVzfWAsXHJcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7aGVhZGVyQmFja2dyb3VuZH1gLFxyXG4gICAgICAgIGJveFNoYWRvdzogYm94U2hhZG93LFxyXG5cclxuICAgICAgICBcIiYgLnR3LWhlYWRlclwiOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlYWRlclNpemUsXHJcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgY29sb3I6IGhlYWRlckNvbG9yLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBoZWFkZXJCYWNrZ3JvdW5kLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBib3hTaGFkb3csXHJcbiAgICAgICAgICB6SW5kZXg6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxyXG5cclxuICAgICAgICAgIFwiJi50dy1kcmFnZ2FibGVcIjoge1xyXG4gICAgICAgICAgICBjdXJzb3I6IFwibW92ZVwiLFxyXG4gICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICBcIiYgLnR3LXRpdGxlXCI6IHtcclxuICAgICAgICAgICAgZmxleEdyb3c6IFwiMTBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDFyZW1cIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYnV0dG9uc1wiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4U2hyaW5rOiBcIjBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuNXJlbVwiLFxyXG5cclxuICAgICAgICAgICAgXCImIC50dy1idXR0b25cIjoge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBoZWFkZXJTaXplLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogaGVhZGVyU2l6ZSxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgMC4zc1wiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuXHJcbiAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IFwiMVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgIFwiJi50dy1taW5pbWl6ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IEljb25NaW5pbWl6ZSxcclxuICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICBcIiYudHctbWF4aW1pemVcIjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBJY29uTWF4aW1pemUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgXCImIC50dy1ib2R5XCI6IHtcclxuICAgICAgICAgIG92ZXJmbG93OiBcImF1dG9cIixcclxuICAgICAgICAgIGNvbG9yOiBib2R5Q29sb3IsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJvZHlCYWNrZ3JvdW5kLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIFwiJi50dy1taW5pbWl6ZS1vblwiOiB7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcclxuXHJcbiAgICAgICAgICBcIiYudHctdGFza2Jhci1vblwiOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgIG1hcmdpbjogXCIwLjI1cmVtXCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBcIiYudHctbWF4aW1pemUtb25cIjoge1xyXG4gICAgICAgICAgdG9wOiBcIjAgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbGVmdDogXCIwICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgIWltcG9ydGFudFwiLFxyXG5cclxuICAgICAgICAgIFwiJiAudHctaGVhZGVyXCI6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIFwiJiAudHctYm9keVwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2sgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGVcIjoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kT3JpZ2luOiBcImNvbnRlbnQtYm94XCIsXHJcbiAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IEljb25SZXNpemUsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJVwiLFxyXG4gICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwIDNweCAzcHggMFwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAwLjNzXCIsXHJcblxyXG4gICAgICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgICAgICBvcGFjaXR5OiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3XCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJzdy1yZXNpemVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDkwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNlXCI6IHtcclxuICAgICAgICBib3R0b206IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwic2UtcmVzaXplXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbndcIjoge1xyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgY3Vyc29yOiBcIm53LXJlc2l6ZVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTgwZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5lXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICBjdXJzb3I6IFwibmUtcmVzaXplXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgyNzBkZWcpXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBcIiYgLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtdywgJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lXCI6IHtcclxuICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0xMHB4XCIsXHJcbiAgICAgICAgY3Vyc29yOiBcImV3LXJlc2l6ZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXdcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMTM1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWVcIjoge1xyXG4gICAgICAgIHJpZ2h0OiBcIjBcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDMxNWRlZylcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLCAmIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTBweFwiLFxyXG4gICAgICAgIGN1cnNvcjogXCJucy1yZXNpemVcIixcclxuICAgICAgfSxcclxuXHJcbiAgICAgIFwiJiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uXCI6IHtcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJyb3RhdGUoMjI1ZGVnKVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgXCImIC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNcIjoge1xyXG4gICAgICAgIGJvdHRvbTogXCIwXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSg0NWRlZylcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==