"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _reactResizable = require("react-resizable");

var _clsx = _interopRequireDefault(require("clsx"));

var _useGrids2 = require("../utils/useGrids");

var _getLocalStorage = require("../utils/getLocalStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Windows = function Windows(props) {
  var windows = props.windows,
      taskbar = props.taskbar,
      grid = props.grid,
      gridsCount = props.gridsCount,
      gridsGap = props.gridsGap;

  var _useGrids = (0, _useGrids2.useGrids)(gridsCount, gridsGap),
      gridsWidth = _useGrids.gridsWidth,
      gridsHeight = _useGrids.gridsHeight;

  var headerRef = (0, _react.useRef)(null);
  var dWindowMinimizes = windows.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item.key, item.startMinimized));
  }, {});
  var iWindowSizes = (0, _getLocalStorage.getLocalStorage)("windowSizes", {});
  var iWindowZIndexes = (0, _getLocalStorage.getLocalStorage)("windowZIndexes", {});
  var iWindowLocations = (0, _getLocalStorage.getLocalStorage)("windowLocations", {});
  var iWindowMaximizes = (0, _getLocalStorage.getLocalStorage)("windowMaximizes", {});
  var iWindowMinimizes = (0, _getLocalStorage.getLocalStorage)("windowMinimizes", dWindowMinimizes);

  var _useState = (0, _react.useState)(iWindowSizes),
      _useState2 = _slicedToArray(_useState, 2),
      windowSizes = _useState2[0],
      setWindowSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowZIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowZIndexes = _useState4[0],
      setWindowZIndexes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowLocations),
      _useState6 = _slicedToArray(_useState5, 2),
      windowLocations = _useState6[0],
      setWindowLocations = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowMaximizes),
      _useState8 = _slicedToArray(_useState7, 2),
      windowMaximizes = _useState8[0],
      setWindowMaximizes = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMinimizes),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMinimizes = _useState10[0],
      setWindowMinimizes = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      taskbarItemsIn = _useState12[0],
      setTaskbarItemsIn = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      taskbarItemsOut = _useState14[0],
      setTaskbarItemsOut = _useState14[1];

  var _useState15 = (0, _react.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      headerHeight = _useState16[0],
      setHeaderHeight = _useState16[1]; // eslint-disable-next-line react-hooks/exhaustive-deps


  (0, _react.useLayoutEffect)(function () {
    if (headerRef && headerRef.current) {
      // @ts-ignore
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  });
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMaximizes", JSON.stringify(windowMaximizes));
  }, [windowMaximizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMinimizes", JSON.stringify(windowMinimizes));
  }, [windowMinimizes]);
  (0, _react.useEffect)(function () {
    var taskbarItemsIn = [];
    var taskbarItemsOut = [];
    windows.forEach(function (window) {
      var key = window.key,
          title = window.title,
          component = window.component,
          grids = window.grids,
          draggable = window.draggable,
          resizable = window.resizable,
          minimizable = window.minimizable,
          maximizable = window.maximizable;
      var size = {
        w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
        h: gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight
      };
      var location = {
        x: gridsWidth * grids.x + gridsGap * (grids.x + 1),
        y: gridsHeight * grids.y + gridsGap * (grids.y + 1)
      };

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var handleDrag = function handleDrag(e, data) {
        if (windowMaximizes[key] || windowMinimizes[key]) {
          return;
        }

        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleMaximize = function handleMaximize() {
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, false)));
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, !windowMaximizes[key])));
      };

      var handleMinimize = function handleMinimize() {
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, false)));
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, !windowMinimizes[key])));
      };

      var renderMinimize = function renderMinimize() {
        return minimizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-minimize",
          onClick: handleMinimize
        }) : null;
      };

      var renderMaximize = function renderMaximize() {
        return maximizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-maximize",
          onClick: handleMaximize
        }) : null;
      };

      var renderHeader = function renderHeader() {
        var classNames = (0, _clsx.default)("tw-header", {
          "tw-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classNames,
          ref: headerRef
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title"
        }, title || null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons",
          onClick: handleZIndex
        }, renderMinimize(), renderMaximize()));
      };

      var renderBody = function renderBody() {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-body"
        }, renderBodyContents());
      };

      var renderBodyContents = function renderBodyContents() {
        var width = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].w : size.w;
        var height = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].h : size.h;
        return resizable && !windowMaximizes[key] ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
          width: width,
          height: height,
          resizeHandles: ["se"],
          draggableOpts: {
            grid: [grid, grid]
          },
          onResizeStop: handleResize
        }, component) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            width: width,
            height: height
          }
        }, component);
      };

      var classNames = (0, _clsx.default)("tw-window", key, {
        "tw-taskbar-on": taskbar,
        "tw-taskbar-off": !taskbar,
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key]
      });

      var element = /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        key: key,
        defaultPosition: windowLocations[key] || location,
        position: windowLocations[key] || location,
        grid: [grid, grid],
        scale: 1,
        handle: ".tw-draggable",
        bounds: "parent",
        onStart: handleZIndex,
        onStop: handleDrag,
        cancel: ".tw-buttons"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHeader(), renderBody()));

      if (windowMinimizes[key] && taskbar) {
        taskbarItemsIn = [].concat(_toConsumableArray(taskbarItemsIn), [element]);
      } else {
        taskbarItemsOut = [].concat(_toConsumableArray(taskbarItemsOut), [element]);
      }
    });
    setTaskbarItemsIn(taskbarItemsIn);
    setTaskbarItemsOut(taskbarItemsOut); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSizes, windowZIndexes, windowLocations, windowMaximizes, windowMinimizes, gridsWidth, gridsHeight, headerHeight]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-windows"
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImRXaW5kb3dNaW5pbWl6ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJrZXkiLCJzdGFydE1pbmltaXplZCIsImlXaW5kb3dTaXplcyIsImlXaW5kb3daSW5kZXhlcyIsImlXaW5kb3dMb2NhdGlvbnMiLCJpV2luZG93TWF4aW1pemVzIiwiaVdpbmRvd01pbmltaXplcyIsIndpbmRvd1NpemVzIiwic2V0V2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsInNldFdpbmRvd1pJbmRleGVzIiwid2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TG9jYXRpb25zIiwid2luZG93TWF4aW1pemVzIiwic2V0V2luZG93TWF4aW1pemVzIiwid2luZG93TWluaW1pemVzIiwic2V0V2luZG93TWluaW1pemVzIiwidGFza2Jhckl0ZW1zSW4iLCJzZXRUYXNrYmFySXRlbXNJbiIsInRhc2tiYXJJdGVtc091dCIsInNldFRhc2tiYXJJdGVtc091dCIsImhlYWRlckhlaWdodCIsInNldEhlYWRlckhlaWdodCIsImN1cnJlbnQiLCJvZmZzZXRIZWlnaHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbXBvbmVudCIsImdyaWRzIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInNpemUiLCJ3IiwiaCIsImxvY2F0aW9uIiwieCIsInkiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQU9BOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBeUI7QUFBQSxNQUMvQkMsT0FEK0IsR0FDa0JELEtBRGxCLENBQy9CQyxPQUQrQjtBQUFBLE1BQ3RCQyxPQURzQixHQUNrQkYsS0FEbEIsQ0FDdEJFLE9BRHNCO0FBQUEsTUFDYkMsSUFEYSxHQUNrQkgsS0FEbEIsQ0FDYkcsSUFEYTtBQUFBLE1BQ1BDLFVBRE8sR0FDa0JKLEtBRGxCLENBQ1BJLFVBRE87QUFBQSxNQUNLQyxRQURMLEdBQ2tCTCxLQURsQixDQUNLSyxRQURMOztBQUFBLGtCQUdILHlCQUFTRCxVQUFULEVBQXFCQyxRQUFyQixDQUhHO0FBQUEsTUFHL0JDLFVBSCtCLGFBRy9CQSxVQUgrQjtBQUFBLE1BR25CQyxXQUhtQixhQUduQkEsV0FIbUI7O0FBS3ZDLE1BQU1DLFNBQVMsR0FBRyxtQkFBTyxJQUFQLENBQWxCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUdSLE9BQU8sQ0FBQ1MsTUFBUixDQUFlLFVBQUNDLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ3ZFLDJDQUFZRCxLQUFaLDJCQUFvQkMsSUFBSSxDQUFDQyxHQUF6QixFQUErQkQsSUFBSSxDQUFDRSxjQUFwQztBQUNELEdBRndCLEVBRXRCLEVBRnNCLENBQXpCO0FBSUEsTUFBTUMsWUFBWSxHQUFHLHNDQUFn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Q0Q7QUFDRixLQTNLRDtBQTZLQWhELElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBbExjLENBbUxkO0FBQ0QsR0FwTEQsRUFvTEcsQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLEVBTUR0QixVQU5DLEVBT0RDLFdBUEMsRUFRRDJCLFlBUkMsQ0FwTEg7QUErTEEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dGLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERjtBQU9ELENBNVBEOztBQThQQS9CLE9BQU8sQ0FBQ2lGLFlBQVIsR0FBdUI7QUFDckI5RSxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLENBRmU7QUFHckJFLEVBQUFBLFFBQVEsRUFBRSxFQUhXO0FBSXJCRCxFQUFBQSxVQUFVLEVBQUU7QUFKUyxDQUF2QjtlQU9lTCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG4gIHVzZVJlZixcclxuICB1c2VMYXlvdXRFZmZlY3QsXHJcbiAgU3ludGhldGljRXZlbnQsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHRpdGxlOiBKU1guRWxlbWVudDtcclxuICBjb21wb25lbnQ6IEpTWC5FbGVtZW50O1xyXG4gIGdyaWRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcclxuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xyXG4gIHN0YXJ0TWluaW1pemVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpbmRvd3NQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBncmlkOiBudW1iZXI7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCwgZ3JpZHNDb3VudCwgZ3JpZHNHYXAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH0gPSB1c2VHcmlkcyhncmlkc0NvdW50LCBncmlkc0dhcCk7XHJcblxyXG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgZFdpbmRvd01pbmltaXplcyA9IHdpbmRvd3MucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBXaW5kb3cpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnRvdGFsLCBbaXRlbS5rZXldOiBpdGVtLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dTaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93WkluZGV4ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dMb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgZFdpbmRvd01pbmltaXplcyk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbaGVhZGVySGVpZ2h0LCBzZXRIZWFkZXJIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGhlYWRlclJlZiAmJiBoZWFkZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHNldEhlYWRlckhlaWdodChoZWFkZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgd2luZG93cy5mb3JFYWNoKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBncmlkcyxcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIG1pbmltaXphYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcclxuICAgICAgICBoOiBncmlkc0hlaWdodCAqIGdyaWRzLmggKyBncmlkc0dhcCAqIChncmlkcy5oIC0gMSkgLSBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgICAgICB4OiBncmlkc1dpZHRoICogZ3JpZHMueCArIGdyaWRzR2FwICogKGdyaWRzLnggKyAxKSxcclxuICAgICAgICB5OiBncmlkc0hlaWdodCAqIGdyaWRzLnkgKyBncmlkc0dhcCAqIChncmlkcy55ICsgMSksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XHJcbiAgICAgICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gcmVmPXtoZWFkZXJSZWZ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlIHx8IG51bGx9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIiBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICA6IHNpemUudztcclxuXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLmhcclxuICAgICAgICAgIDogc2l6ZS5oO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNba2V5XSA/IChcclxuICAgICAgICAgIDxSZXNpemFibGVCb3hcclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW2dyaWQsIGdyaWRdIH19XHJcbiAgICAgICAgICAgIG9uUmVzaXplU3RvcD17aGFuZGxlUmVzaXplfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tcG9uZW50fVxyXG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT57Y29tcG9uZW50fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcclxuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcclxuICAgICAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkLCBncmlkXX1cclxuICAgICAgICAgIHNjYWxlPXsxfVxyXG4gICAgICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fVxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0dy13aW5kb3dzXCI+XHJcbiAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiAxLFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==