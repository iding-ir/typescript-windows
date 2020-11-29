"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _reactResizable = require("react-resizable");

var _reactUseDimensions = _interopRequireDefault(require("react-use-dimensions"));

var _clsx = _interopRequireDefault(require("clsx"));

var _reactJss = require("react-jss");

var _useGrids2 = require("../utils/useGrids");

var _getLocalStorage = require("../utils/getLocalStorage");

var _styles = require("./styles");

var _iconMinimize = _interopRequireDefault(require("../assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("../assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("../assets/images/icon-resize.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Windows = function Windows(props) {
  var windows = props.windows,
      taskbar = props.taskbar,
      grid = props.grid,
      gridsCount = props.gridsCount,
      gridsGap = props.gridsGap,
      styles = props.styles;
  var classes = (0, _styles.useStyles)(styles)();

  var _useGrids = (0, _useGrids2.useGrids)(gridsCount, gridsGap),
      gridsWidth = _useGrids.gridsWidth,
      gridsHeight = _useGrids.gridsHeight;

  var _useDimensions = (0, _reactUseDimensions.default)(),
      _useDimensions2 = _slicedToArray(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerHeight = _useDimensions2[1].height;

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
      var _windowSizes$key, _windowSizes$key2;

      var key = window.key,
          title = window.title,
          content = window.content,
          grids = window.grids,
          bounds = window.bounds,
          minSize = window.minSize,
          maxSize = window.maxSize,
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
      var limits = bounds && {
        left: gridsWidth * bounds.left + gridsGap * (bounds.left + 1),
        top: gridsHeight * bounds.top + gridsGap * (bounds.top + 1),
        right: gridsWidth * bounds.right + gridsGap * bounds.right - (((_windowSizes$key = windowSizes[key]) === null || _windowSizes$key === void 0 ? void 0 : _windowSizes$key.w) || size.w),
        bottom: gridsHeight * bounds.bottom + gridsGap * bounds.bottom - (((_windowSizes$key2 = windowSizes[key]) === null || _windowSizes$key2 === void 0 ? void 0 : _windowSizes$key2.h) + headerHeight || size.h + headerHeight)
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
          ref: headerRef,
          onMouseDown: handleZIndex // Has to be here because of desktop devices
          ,
          style: {
            width: windowMinimizes[key] ? "auto" : windowSizes[key] ? windowSizes[key].w : "auto"
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title",
          onDoubleClick: handleMaximize
        }, title || null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons"
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
          onResize: handleResize,
          minConstraints: minSize && [minSize === null || minSize === void 0 ? void 0 : minSize.w, minSize.h],
          maxConstraints: maxSize && [maxSize === null || maxSize === void 0 ? void 0 : maxSize.w, maxSize.h]
        }, content) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            width: width,
            height: height
          }
        }, content);
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
        bounds: limits || "parent",
        onStart: handleZIndex // Has to be here because of touch devices
        ,
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
  return /*#__PURE__*/_react.default.createElement(_reactJss.ThemeProvider, {
    theme: {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes["tw-windows"]
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn)));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12,
  styles: {
    header: {
      size: "2.4rem",
      color: "#bdbdbd",
      background: "#424242"
    },
    body: {
      color: "#9e9e9e",
      background: "#212121"
    },
    icons: {
      maximize: "url(".concat(_iconMaximize.default, ")"),
      minimize: "url(".concat(_iconMinimize.default, ")"),
      resize: "url(".concat(_iconResize.default, ")")
    },
    borderRadius: "1rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"
  }
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJkV2luZG93TWluaW1pemVzIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwia2V5Iiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJncmlkcyIsImJvdW5kcyIsIm1pblNpemUiLCJtYXhTaXplIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInNpemUiLCJ3IiwiaCIsImxvY2F0aW9uIiwieCIsInkiLCJsaW1pdHMiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsIndpZHRoIiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJoZWFkZXIiLCJjb2xvciIsImJhY2tncm91bmQiLCJib2R5IiwiaWNvbnMiLCJtYXhpbWl6ZSIsImljb25NYXhpbWl6ZSIsIm1pbmltaXplIiwiaWNvbk1pbmltaXplIiwicmVzaXplIiwiaWNvblJlc2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBLE1BQ3hCQyxPQUR3QixHQUNpQ0QsS0FEakMsQ0FDeEJDLE9BRHdCO0FBQUEsTUFDZkMsT0FEZSxHQUNpQ0YsS0FEakMsQ0FDZkUsT0FEZTtBQUFBLE1BQ05DLElBRE0sR0FDaUNILEtBRGpDLENBQ05HLElBRE07QUFBQSxNQUNBQyxVQURBLEdBQ2lDSixLQURqQyxDQUNBSSxVQURBO0FBQUEsTUFDWUMsUUFEWixHQUNpQ0wsS0FEakMsQ0FDWUssUUFEWjtBQUFBLE1BQ3NCQyxNQUR0QixHQUNpQ04sS0FEakMsQ0FDc0JNLE1BRHRCO0FBR2hDLE1BQU1DLE9BQU8sR0FBRyx1QkFBVUQsTUFBVixHQUFoQjs7QUFIZ0Msa0JBS0kseUJBQVNGLFVBQVQsRUFBcUJDLFFBQXJC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QUFJckJELEVBQUFBLFVBQVUsRUFBRSxFQUpTO0FBS3JCRSxFQUFBQSxNQUFNLEVBQUU7QUFDTmtGLElBQUFBLE1BQU0sRUFBRTtBQUNObEMsTUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTm1DLE1BQUFBLEtBQUssRUFBRSxTQUZEO0FBR05DLE1BQUFBLFVBQVUsRUFBRTtBQUhOLEtBREY7QUFNTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLE1BQUFBLFVBQVUsRUFBRTtBQUZSLEtBTkE7QUFVTkUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BREg7QUFFTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFGSDtBQUdMQyxNQUFBQSxNQUFNLGdCQUFTQyxtQkFBVDtBQUhELEtBVkQ7QUFlTkMsSUFBQUEsWUFBWSxFQUFFLE1BZlI7QUFnQk5DLElBQUFBLFNBQVMsRUFBRTtBQWhCTDtBQUxhLENBQXZCO2VBeUJlckcsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBpY29uTWluaW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1taW5pbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25NYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICB0aXRsZTogSlNYLkVsZW1lbnQ7XHJcbiAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgZ3JpZHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgYm91bmRzPzogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9O1xyXG4gIG1pblNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgbWF4U2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XHJcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xyXG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcclxuICBzdGFydE1pbmltaXplZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzIHtcclxuICBoZWFkZXI6IHtcclxuICAgIHNpemU6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib2R5OiB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIH07XHJcbiAgaWNvbnM6IHtcclxuICAgIG1heGltaXplOiBzdHJpbmc7XHJcbiAgICBtaW5pbWl6ZTogc3RyaW5nO1xyXG4gICAgcmVzaXplOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuICBib3hTaGFkb3c6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBncmlkOiBudW1iZXI7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzOiBTdHlsZXM7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB3aW5kb3dzLCB0YXNrYmFyLCBncmlkLCBncmlkc0NvdW50LCBncmlkc0dhcCwgc3R5bGVzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMpKCk7XHJcblxyXG4gIGNvbnN0IHsgZ3JpZHNXaWR0aCwgZ3JpZHNIZWlnaHQgfSA9IHVzZUdyaWRzKGdyaWRzQ291bnQsIGdyaWRzR2FwKTtcclxuXHJcbiAgY29uc3QgW2hlYWRlclJlZiwgeyBoZWlnaHQ6IGhlYWRlckhlaWdodCB9XSA9IHVzZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgY29uc3QgZFdpbmRvd01pbmltaXplcyA9IHdpbmRvd3MucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBXaW5kb3cpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnRvdGFsLCBbaXRlbS5rZXldOiBpdGVtLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dTaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93WkluZGV4ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dMb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgZFdpbmRvd01pbmltaXplcyk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIHdpbmRvd3MuZm9yRWFjaCgod2luZG93OiBXaW5kb3cpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIGdyaWRzLFxyXG4gICAgICAgIGJvdW5kcyxcclxuICAgICAgICBtaW5TaXplLFxyXG4gICAgICAgIG1heFNpemUsXHJcbiAgICAgICAgZHJhZ2dhYmxlLFxyXG4gICAgICAgIHJlc2l6YWJsZSxcclxuICAgICAgICBtaW5pbWl6YWJsZSxcclxuICAgICAgICBtYXhpbWl6YWJsZSxcclxuICAgICAgfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgdzogZ3JpZHNXaWR0aCAqIGdyaWRzLncgKyBncmlkc0dhcCAqIChncmlkcy53IC0gMSksXHJcbiAgICAgICAgaDogZ3JpZHNIZWlnaHQgKiBncmlkcy5oICsgZ3JpZHNHYXAgKiAoZ3JpZHMuaCAtIDEpIC0gaGVhZGVySGVpZ2h0LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgbG9jYXRpb24gPSB7XHJcbiAgICAgICAgeDogZ3JpZHNXaWR0aCAqIGdyaWRzLnggKyBncmlkc0dhcCAqIChncmlkcy54ICsgMSksXHJcbiAgICAgICAgeTogZ3JpZHNIZWlnaHQgKiBncmlkcy55ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueSArIDEpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgbGltaXRzID0gYm91bmRzICYmIHtcclxuICAgICAgICBsZWZ0OiBncmlkc1dpZHRoICogYm91bmRzLmxlZnQgKyBncmlkc0dhcCAqIChib3VuZHMubGVmdCArIDEpLFxyXG4gICAgICAgIHRvcDogZ3JpZHNIZWlnaHQgKiBib3VuZHMudG9wICsgZ3JpZHNHYXAgKiAoYm91bmRzLnRvcCArIDEpLFxyXG4gICAgICAgIHJpZ2h0OlxyXG4gICAgICAgICAgZ3JpZHNXaWR0aCAqIGJvdW5kcy5yaWdodCArXHJcbiAgICAgICAgICBncmlkc0dhcCAqIGJvdW5kcy5yaWdodCAtXHJcbiAgICAgICAgICAod2luZG93U2l6ZXNba2V5XT8udyB8fCBzaXplLncpLFxyXG4gICAgICAgIGJvdHRvbTpcclxuICAgICAgICAgIGdyaWRzSGVpZ2h0ICogYm91bmRzLmJvdHRvbSArXHJcbiAgICAgICAgICBncmlkc0dhcCAqIGJvdW5kcy5ib3R0b20gLVxyXG4gICAgICAgICAgKHdpbmRvd1NpemVzW2tleV0/LmggKyBoZWFkZXJIZWlnaHQgfHwgc2l6ZS5oICsgaGVhZGVySGVpZ2h0KSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93U2l6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93U2l6ZXMsXHJcbiAgICAgICAgICBba2V5XTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXHJcbiAgICAgICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXHJcbiAgICAgICAgICA6IFswXTtcclxuXHJcbiAgICAgICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtrZXldOiB6SW5kZXggfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvd01heGltaXplc1trZXldIHx8IHdpbmRvd01pbmltaXplc1trZXldKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxyXG4gICAgICAgICAgW2tleV06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1taW5pbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcclxuICAgICAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgICAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiBkZXNrdG9wIGRldmljZXNcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2tleV1cclxuICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgICAgICAgIDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGl0bGVcIiBvbkRvdWJsZUNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+XHJcbiAgICAgICAgICAgICAge3RpdGxlIHx8IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XHJcbiAgICAgICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xyXG4gICAgICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxyXG4gICAgICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudDogSlNYLkVsZW1lbnQgPSAoXHJcbiAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxyXG4gICAgICAgICAgcG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxyXG4gICAgICAgICAgZ3JpZD17W2dyaWQsIGdyaWRdfVxyXG4gICAgICAgICAgc2NhbGU9ezF9XHJcbiAgICAgICAgICBoYW5kbGU9XCIudHctZHJhZ2dhYmxlXCJcclxuICAgICAgICAgIGJvdW5kcz17bGltaXRzIHx8IFwicGFyZW50XCJ9XHJcbiAgICAgICAgICBvblN0YXJ0PXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgdG91Y2ggZGV2aWNlc1xyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3t9IGFzIERlZmF1bHRUaGVtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiAxLFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxuICBzdHlsZXM6IHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBzaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgICBjb2xvcjogXCIjYmRiZGJkXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzQyNDI0MlwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IHtcclxuICAgICAgY29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiMyMTIxMjFcIixcclxuICAgIH0sXHJcbiAgICBpY29uczoge1xyXG4gICAgICBtYXhpbWl6ZTogYHVybCgke2ljb25NYXhpbWl6ZX0pYCxcclxuICAgICAgbWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICAgIHJlc2l6ZTogYHVybCgke2ljb25SZXNpemV9KWAsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcclxuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gIH0sXHJcbn0gYXMgUGFydGlhbDxQcm9wcz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xyXG4iXX0=