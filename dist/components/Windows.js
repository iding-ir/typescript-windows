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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJkV2luZG93TWluaW1pemVzIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwia2V5Iiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJncmlkcyIsImJvdW5kcyIsIm1pblNpemUiLCJtYXhTaXplIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInNpemUiLCJ3IiwiaCIsImxvY2F0aW9uIiwieCIsInkiLCJsaW1pdHMiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsIndpZHRoIiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJoZWFkZXIiLCJjb2xvciIsImJhY2tncm91bmQiLCJib2R5IiwiaWNvbnMiLCJtYXhpbWl6ZSIsImljb25NYXhpbWl6ZSIsIm1pbmltaXplIiwiaWNvbk1pbmltaXplIiwicmVzaXplIiwiaWNvblJlc2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUF5QjtBQUFBLE1BQy9CQyxPQUQrQixHQUMwQkQsS0FEMUIsQ0FDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLE9BRHNCLEdBQzBCRixLQUQxQixDQUN0QkUsT0FEc0I7QUFBQSxNQUNiQyxJQURhLEdBQzBCSCxLQUQxQixDQUNiRyxJQURhO0FBQUEsTUFDUEMsVUFETyxHQUMwQkosS0FEMUIsQ0FDUEksVUFETztBQUFBLE1BQ0tDLFFBREwsR0FDMEJMLEtBRDFCLENBQ0tLLFFBREw7QUFBQSxNQUNlQyxNQURmLEdBQzBCTixLQUQxQixDQUNlTSxNQURmO0FBR3ZDLE1BQU1DLE9BQU8sR0FBRyx1QkFBVUQsTUFBVixHQUFoQjs7QUFIdUMsa0JBS0gseUJBQVNGLFVBQVQsRUFBcUJDLFFBQXJC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LE1BQU0sRUFBRTtBQUNOa0YsSUFBQUEsTUFBTSxFQUFFO0FBQ05sQyxNQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVObUMsTUFBQUEsS0FBSyxFQUFFLFNBRkQ7QUFHTkMsTUFBQUEsVUFBVSxFQUFFO0FBSE4sS0FERjtBQU1OQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkYsTUFBQUEsS0FBSyxFQUFFLFNBREg7QUFFSkMsTUFBQUEsVUFBVSxFQUFFO0FBRlIsS0FOQTtBQVVORSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFESDtBQUVMQyxNQUFBQSxRQUFRLGdCQUFTQyxxQkFBVCxNQUZIO0FBR0xDLE1BQUFBLE1BQU0sZ0JBQVNDLG1CQUFUO0FBSEQsS0FWRDtBQWVOQyxJQUFBQSxZQUFZLEVBQUUsTUFmUjtBQWdCTkMsSUFBQUEsU0FBUyxFQUFFO0FBaEJMO0FBTGEsQ0FBdkI7ZUF5QmVyRyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IGljb25NaW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbk1heGltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWF4aW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uUmVzaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tcmVzaXplLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHRpdGxlOiBKU1guRWxlbWVudDtcclxuICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICBncmlkczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBib3VuZHM/OiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH07XHJcbiAgbWluU2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBtYXhTaXplPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcclxuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xyXG4gIHN0YXJ0TWluaW1pemVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgc2l6ZTogc3RyaW5nO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZztcclxuICB9O1xyXG4gIGJvZHk6IHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgfTtcclxuICBpY29uczoge1xyXG4gICAgbWF4aW1pemU6IHN0cmluZztcclxuICAgIG1pbmltaXplOiBzdHJpbmc7XHJcbiAgICByZXNpemU6IHN0cmluZztcclxuICB9O1xyXG4gIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG4gIGJveFNoYWRvdzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd3NQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBncmlkOiBudW1iZXI7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzOiBTdHlsZXM7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCwgZ3JpZHNDb3VudCwgZ3JpZHNHYXAsIHN0eWxlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoc3R5bGVzKSgpO1xyXG5cclxuICBjb25zdCB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH0gPSB1c2VHcmlkcyhncmlkc0NvdW50LCBncmlkc0dhcCk7XHJcblxyXG4gIGNvbnN0IFtoZWFkZXJSZWYsIHsgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKCk7XHJcblxyXG4gIGNvbnN0IGRXaW5kb3dNaW5pbWl6ZXMgPSB3aW5kb3dzLnJlZHVjZSgodG90YWw6IG9iamVjdCwgaXRlbTogV2luZG93KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2l0ZW0ua2V5XTogaXRlbS5zdGFydE1pbmltaXplZCB9O1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgaVdpbmRvd1NpemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93U2l6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1pJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TG9jYXRpb25zXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWF4aW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWF4aW1pemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWluaW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWluaW1pemVzXCIsIGRXaW5kb3dNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XHJcbiAgfSwgW3dpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1pJbmRleGVzKSk7XHJcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcclxuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNaW5pbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWluaW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zSW46IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGxldCB0YXNrYmFySXRlbXNPdXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICB3aW5kb3dzLmZvckVhY2goKHdpbmRvdzogV2luZG93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgY29udGVudCxcclxuICAgICAgICBncmlkcyxcclxuICAgICAgICBib3VuZHMsXHJcbiAgICAgICAgbWluU2l6ZSxcclxuICAgICAgICBtYXhTaXplLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgbWluaW1pemFibGUsXHJcbiAgICAgICAgbWF4aW1pemFibGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICAgIHc6IGdyaWRzV2lkdGggKiBncmlkcy53ICsgZ3JpZHNHYXAgKiAoZ3JpZHMudyAtIDEpLFxyXG4gICAgICAgIGg6IGdyaWRzSGVpZ2h0ICogZ3JpZHMuaCArIGdyaWRzR2FwICogKGdyaWRzLmggLSAxKSAtIGhlYWRlckhlaWdodCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xyXG4gICAgICAgIHg6IGdyaWRzV2lkdGggKiBncmlkcy54ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueCArIDEpLFxyXG4gICAgICAgIHk6IGdyaWRzSGVpZ2h0ICogZ3JpZHMueSArIGdyaWRzR2FwICogKGdyaWRzLnkgKyAxKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGxpbWl0cyA9IGJvdW5kcyAmJiB7XHJcbiAgICAgICAgbGVmdDogZ3JpZHNXaWR0aCAqIGJvdW5kcy5sZWZ0ICsgZ3JpZHNHYXAgKiAoYm91bmRzLmxlZnQgKyAxKSxcclxuICAgICAgICB0b3A6IGdyaWRzSGVpZ2h0ICogYm91bmRzLnRvcCArIGdyaWRzR2FwICogKGJvdW5kcy50b3AgKyAxKSxcclxuICAgICAgICByaWdodDpcclxuICAgICAgICAgIGdyaWRzV2lkdGggKiBib3VuZHMucmlnaHQgK1xyXG4gICAgICAgICAgZ3JpZHNHYXAgKiBib3VuZHMucmlnaHQgLVxyXG4gICAgICAgICAgKHdpbmRvd1NpemVzW2tleV0/LncgfHwgc2l6ZS53KSxcclxuICAgICAgICBib3R0b206XHJcbiAgICAgICAgICBncmlkc0hlaWdodCAqIGJvdW5kcy5ib3R0b20gK1xyXG4gICAgICAgICAgZ3JpZHNHYXAgKiBib3VuZHMuYm90dG9tIC1cclxuICAgICAgICAgICh3aW5kb3dTaXplc1trZXldPy5oICsgaGVhZGVySGVpZ2h0IHx8IHNpemUuaCArIGhlYWRlckhlaWdodCksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XHJcbiAgICAgICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cclxuICAgICAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvd01pbmltaXplc1trZXldXHJcbiAgICAgICAgICAgICAgICA/IFwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICAgICAgICA6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxyXG4gICAgICAgICAgICAgIHt0aXRsZSB8fCBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICA6IHNpemUudztcclxuXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLmhcclxuICAgICAgICAgIDogc2l6ZS5oO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNba2V5XSA/IChcclxuICAgICAgICAgIDxSZXNpemFibGVCb3hcclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW2dyaWQsIGdyaWRdIH19XHJcbiAgICAgICAgICAgIG9uUmVzaXplPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICAgIG1pbkNvbnN0cmFpbnRzPXttaW5TaXplICYmIFttaW5TaXplPy53LCBtaW5TaXplLmhdfVxyXG4gICAgICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb250ZW50fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcclxuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcclxuICAgICAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkLCBncmlkXX1cclxuICAgICAgICAgIHNjYWxlPXsxfVxyXG4gICAgICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9e2xpbWl0cyB8fCBcInBhcmVudFwifVxyXG4gICAgICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fVxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3t9IGFzIERlZmF1bHRUaGVtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiAxLFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxuICBzdHlsZXM6IHtcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICBzaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgICBjb2xvcjogXCIjYmRiZGJkXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzQyNDI0MlwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IHtcclxuICAgICAgY29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiMyMTIxMjFcIixcclxuICAgIH0sXHJcbiAgICBpY29uczoge1xyXG4gICAgICBtYXhpbWl6ZTogYHVybCgke2ljb25NYXhpbWl6ZX0pYCxcclxuICAgICAgbWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICAgIHJlc2l6ZTogYHVybCgke2ljb25SZXNpemV9KWAsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcclxuICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xyXG4iXX0=