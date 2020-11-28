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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJkV2luZG93TWluaW1pemVzIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwia2V5Iiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJncmlkcyIsImJvdW5kcyIsIm1pblNpemUiLCJtYXhTaXplIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInNpemUiLCJ3IiwiaCIsImxvY2F0aW9uIiwieCIsInkiLCJsaW1pdHMiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsIndpZHRoIiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJkZWZhdWx0UHJvcHMiLCJoZWFkZXIiLCJjb2xvciIsImJhY2tncm91bmQiLCJib2R5IiwiaWNvbnMiLCJtYXhpbWl6ZSIsImljb25NYXhpbWl6ZSIsIm1pbmltaXplIiwiaWNvbk1pbmltaXplIiwicmVzaXplIiwiaWNvblJlc2l6ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUF5QjtBQUFBLE1BQy9CQyxPQUQrQixHQUMwQkQsS0FEMUIsQ0FDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLE9BRHNCLEdBQzBCRixLQUQxQixDQUN0QkUsT0FEc0I7QUFBQSxNQUNiQyxJQURhLEdBQzBCSCxLQUQxQixDQUNiRyxJQURhO0FBQUEsTUFDUEMsVUFETyxHQUMwQkosS0FEMUIsQ0FDUEksVUFETztBQUFBLE1BQ0tDLFFBREwsR0FDMEJMLEtBRDFCLENBQ0tLLFFBREw7QUFBQSxNQUNlQyxNQURmLEdBQzBCTixLQUQxQixDQUNlTSxNQURmO0FBR3ZDLE1BQU1DLE9BQU8sR0FBRyx1QkFBVUQsTUFBVixHQUFoQjs7QUFIdUMsa0JBS0gseUJBQVNGLFVBQVQsRUFBcUJDLFFBQXJC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USxFQUFFLEVBSFc7QUFJckJELEVBQUFBLFVBQVUsRUFBRSxFQUpTO0FBS3JCRSxFQUFBQSxNQUFNLEVBQUU7QUFDTmtGLElBQUFBLE1BQU0sRUFBRTtBQUNObEMsTUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTm1DLE1BQUFBLEtBQUssRUFBRSxTQUZEO0FBR05DLE1BQUFBLFVBQVUsRUFBRTtBQUhOLEtBREY7QUFNTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLE1BQUFBLFVBQVUsRUFBRTtBQUZSLEtBTkE7QUFVTkUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BREg7QUFFTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFGSDtBQUdMQyxNQUFBQSxNQUFNLGdCQUFTQyxtQkFBVDtBQUhELEtBVkQ7QUFlTkMsSUFBQUEsWUFBWSxFQUFFLE1BZlI7QUFnQk5DLElBQUFBLFNBQVMsRUFBRTtBQWhCTDtBQUxhLENBQXZCO2VBeUJlckcsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBpY29uTWluaW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1taW5pbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25NYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICB0aXRsZTogSlNYLkVsZW1lbnQ7XHJcbiAgY29udGVudDogSlNYLkVsZW1lbnQ7XHJcbiAgZ3JpZHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgYm91bmRzPzogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9O1xyXG4gIG1pblNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgbWF4U2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XHJcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xyXG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcclxuICBzdGFydE1pbmltaXplZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzIHtcclxuICBoZWFkZXI6IHtcclxuICAgIHNpemU6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib2R5OiB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIH07XHJcbiAgaWNvbnM6IHtcclxuICAgIG1heGltaXplOiBzdHJpbmc7XHJcbiAgICBtaW5pbWl6ZTogc3RyaW5nO1xyXG4gICAgcmVzaXplOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuICBib3hTaGFkb3c6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIHRhc2tiYXI6IGJvb2xlYW47XHJcbiAgZ3JpZDogbnVtYmVyO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG4gIHN0eWxlczogU3R5bGVzO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBXaW5kb3dzUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHdpbmRvd3MsIHRhc2tiYXIsIGdyaWQsIGdyaWRzQ291bnQsIGdyaWRzR2FwLCBzdHlsZXMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHN0eWxlcykoKTtcclxuXHJcbiAgY29uc3QgeyBncmlkc1dpZHRoLCBncmlkc0hlaWdodCB9ID0gdXNlR3JpZHMoZ3JpZHNDb3VudCwgZ3JpZHNHYXApO1xyXG5cclxuICBjb25zdCBbaGVhZGVyUmVmLCB7IGhlaWdodDogaGVhZGVySGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucygpO1xyXG5cclxuICBjb25zdCBkV2luZG93TWluaW1pemVzID0gd2luZG93cy5yZWR1Y2UoKHRvdGFsOiBvYmplY3QsIGl0ZW06IFdpbmRvdykgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udG90YWwsIFtpdGVtLmtleV06IGl0ZW0uc3RhcnRNaW5pbWl6ZWQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1NpemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93WkluZGV4ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3daSW5kZXhlc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd0xvY2F0aW9uc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01heGltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01heGltaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01pbmltaXplc1wiLCBkV2luZG93TWluaW1pemVzKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgd2luZG93cy5mb3JFYWNoKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgZ3JpZHMsXHJcbiAgICAgICAgYm91bmRzLFxyXG4gICAgICAgIG1pblNpemUsXHJcbiAgICAgICAgbWF4U2l6ZSxcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIG1pbmltaXphYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcclxuICAgICAgICBoOiBncmlkc0hlaWdodCAqIGdyaWRzLmggKyBncmlkc0dhcCAqIChncmlkcy5oIC0gMSkgLSBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgICAgICB4OiBncmlkc1dpZHRoICogZ3JpZHMueCArIGdyaWRzR2FwICogKGdyaWRzLnggKyAxKSxcclxuICAgICAgICB5OiBncmlkc0hlaWdodCAqIGdyaWRzLnkgKyBncmlkc0dhcCAqIChncmlkcy55ICsgMSksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBsaW1pdHMgPSBib3VuZHMgJiYge1xyXG4gICAgICAgIGxlZnQ6IGdyaWRzV2lkdGggKiBib3VuZHMubGVmdCArIGdyaWRzR2FwICogKGJvdW5kcy5sZWZ0ICsgMSksXHJcbiAgICAgICAgdG9wOiBncmlkc0hlaWdodCAqIGJvdW5kcy50b3AgKyBncmlkc0dhcCAqIChib3VuZHMudG9wICsgMSksXHJcbiAgICAgICAgcmlnaHQ6XHJcbiAgICAgICAgICBncmlkc1dpZHRoICogYm91bmRzLnJpZ2h0ICtcclxuICAgICAgICAgIGdyaWRzR2FwICogYm91bmRzLnJpZ2h0IC1cclxuICAgICAgICAgICh3aW5kb3dTaXplc1trZXldPy53IHx8IHNpemUudyksXHJcbiAgICAgICAgYm90dG9tOlxyXG4gICAgICAgICAgZ3JpZHNIZWlnaHQgKiBib3VuZHMuYm90dG9tICtcclxuICAgICAgICAgIGdyaWRzR2FwICogYm91bmRzLmJvdHRvbSAtXHJcbiAgICAgICAgICAod2luZG93U2l6ZXNba2V5XT8uaCArIGhlYWRlckhlaWdodCB8fCBzaXplLmggKyBoZWFkZXJIZWlnaHQpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgICAgIFtrZXldOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgICAgICBpZiAod2luZG93TWF4aW1pemVzW2tleV0gfHwgd2luZG93TWluaW1pemVzW2tleV0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgICAgICBba2V5XTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XHJcbiAgICAgICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIGRlc2t0b3AgZGV2aWNlc1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiB3aW5kb3dNaW5pbWl6ZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgPyBcImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0ud1xyXG4gICAgICAgICAgICAgICAgOiBcImF1dG9cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiIG9uRG91YmxlQ2xpY2s9e2hhbmRsZU1heGltaXplfT5cclxuICAgICAgICAgICAgICB7dGl0bGUgfHwgbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cclxuXHJcbiAgICAgICAgICAgICAge3JlbmRlck1heGltaXplKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0ud1xyXG4gICAgICAgICAgOiBzaXplLnc7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS5oXHJcbiAgICAgICAgICA6IHNpemUuaDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2tleV0gPyAoXHJcbiAgICAgICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtncmlkLCBncmlkXSB9fVxyXG4gICAgICAgICAgICBvblJlc2l6ZT17aGFuZGxlUmVzaXplfVxyXG4gICAgICAgICAgICBtaW5Db25zdHJhaW50cz17bWluU2l6ZSAmJiBbbWluU2l6ZT8udywgbWluU2l6ZS5oXX1cclxuICAgICAgICAgICAgbWF4Q29uc3RyYWludHM9e21heFNpemUgJiYgW21heFNpemU/LncsIG1heFNpemUuaF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb250ZW50fVxyXG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT57Y29udGVudH08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwga2V5LCB7XHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcclxuICAgICAgICBcInR3LW1pbmltaXplLW9uXCI6IHdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb2ZmXCI6ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50OiBKU1guRWxlbWVudCA9IChcclxuICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2tleV0gfHwgbG9jYXRpb259XHJcbiAgICAgICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2tleV0gfHwgbG9jYXRpb259XHJcbiAgICAgICAgICBncmlkPXtbZ3JpZCwgZ3JpZF19XHJcbiAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxyXG4gICAgICAgICAgYm91bmRzPXtsaW1pdHMgfHwgXCJwYXJlbnRcIn1cclxuICAgICAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgICAgICBjYW5jZWw9XCIudHctYnV0dG9uc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cclxuICAgICAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG5cclxuICAgICAgICAgICAge3JlbmRlckJvZHkoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHdpbmRvd01pbmltaXplc1trZXldICYmIHRhc2tiYXIpIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNJbiA9IFsuLi50YXNrYmFySXRlbXNJbiwgZWxlbWVudF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgZWxlbWVudF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcclxuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17e30gYXMgRGVmYXVsdFRoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJ0dy13aW5kb3dzXCJdfT5cclxuICAgICAgICB7dGFza2Jhckl0ZW1zT3V0fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YXNrYmFyOiB0cnVlLFxyXG4gIGdyaWQ6IDEsXHJcbiAgZ3JpZHNHYXA6IDEwLFxyXG4gIGdyaWRzQ291bnQ6IDEyLFxyXG4gIHN0eWxlczoge1xyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIHNpemU6IFwiMi40cmVtXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjNDI0MjQyXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICBjb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgfSxcclxuICAgIGljb25zOiB7XHJcbiAgICAgIG1heGltaXplOiBgdXJsKCR7aWNvbk1heGltaXplfSlgLFxyXG4gICAgICBtaW5pbWl6ZTogYHVybCgke2ljb25NaW5pbWl6ZX0pYCxcclxuICAgICAgcmVzaXplOiBgdXJsKCR7aWNvblJlc2l6ZX0pYCxcclxuICAgIH0sXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==