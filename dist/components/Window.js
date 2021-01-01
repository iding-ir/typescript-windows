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

var _WindowsProvider = require("./WindowsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Window = function Window(props) {
  var _windowSizes$id, _windowSizes$id2;

  var _useContext = (0, _react.useContext)(_WindowsProvider.StateContext),
      state = _useContext.state;

  var id = props.id,
      children = props.children,
      grids = props.grids,
      title = props.title,
      bounds = props.bounds,
      minSize = props.minSize,
      maxSize = props.maxSize,
      draggable = props.draggable,
      resizable = props.resizable,
      minimizable = props.minimizable,
      maximizable = props.maximizable;
  var taskbar = state.taskbar,
      grid = state.grid,
      gridsGap = state.gridsGap,
      gridsWidth = state.gridsWidth,
      gridsHeight = state.gridsHeight,
      headerRef = state.headerRef,
      headerHeight = state.headerHeight,
      windowSizes = state.windowSizes,
      windowZIndexes = state.windowZIndexes,
      windowLocations = state.windowLocations,
      windowMaximizes = state.windowMaximizes,
      windowMinimizes = state.windowMinimizes,
      setWindowSizes = state.setWindowSizes,
      setWindowZIndexes = state.setWindowZIndexes,
      setWindowLocations = state.setWindowLocations,
      setWindowMaximizes = state.setWindowMaximizes,
      setWindowMinimizes = state.setWindowMinimizes;
  var size = {
    w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
    h: headerHeight ? gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight : 0
  };
  var location = {
    x: gridsWidth * grids.x + gridsGap * (grids.x + 1),
    y: gridsHeight * grids.y + gridsGap * (grids.y + 1)
  };
  var limits = bounds && {
    left: gridsWidth * bounds.left + gridsGap * (bounds.left + 1),
    top: gridsHeight * bounds.top + gridsGap * (bounds.top + 1),
    right: gridsWidth * bounds.right + gridsGap * bounds.right - (((_windowSizes$id = windowSizes[id]) === null || _windowSizes$id === void 0 ? void 0 : _windowSizes$id.w) || size.w),
    bottom: gridsHeight * bounds.bottom + gridsGap * bounds.bottom - (((_windowSizes$id2 = windowSizes[id]) === null || _windowSizes$id2 === void 0 ? void 0 : _windowSizes$id2.h) + headerHeight || size.h + headerHeight)
  };

  var handleResize = function handleResize(e, data) {
    setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, id, {
      w: data.size.width,
      h: data.size.height
    })));
  };

  var handleZIndex = function handleZIndex() {
    var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
    var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
    setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, id, zIndex)));
  };

  var handleDrag = function handleDrag(e, data) {
    if (windowMaximizes[id] || windowMinimizes[id]) {
      return;
    }

    setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, id, {
      x: data.x,
      y: data.y
    })));
  };

  var handleMaximize = function handleMaximize() {
    setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, id, false)));
    setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, id, !windowMaximizes[id])));
  };

  var handleMinimize = function handleMinimize() {
    setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, id, false)));
    setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, id, !windowMinimizes[id])));
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
        width: windowMinimizes[id] ? "auto" : windowSizes[id] ? windowSizes[id].w : "auto"
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
    var width = windowMaximizes[id] ? "100%" : windowSizes[id] ? windowSizes[id].w : Math.max(size.w, (minSize === null || minSize === void 0 ? void 0 : minSize.w) || 0);
    var height = windowMaximizes[id] ? "100%" : windowSizes[id] ? windowSizes[id].h : Math.max(size.h, (minSize === null || minSize === void 0 ? void 0 : minSize.h) || 0);
    var minWidth = windowMaximizes[id] ? "100%" : minSize === null || minSize === void 0 ? void 0 : minSize.w;
    var minHeight = windowMaximizes[id] ? "100%" : minSize === null || minSize === void 0 ? void 0 : minSize.h;
    var maxWidth = windowMaximizes[id] ? "100%" : maxSize === null || maxSize === void 0 ? void 0 : maxSize.w;
    var maxHeight = windowMaximizes[id] ? "100%" : maxSize === null || maxSize === void 0 ? void 0 : maxSize.h;
    return resizable && !windowMaximizes[id] ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
      width: width,
      height: height,
      resizeHandles: ["se"],
      draggableOpts: {
        grid: [grid, grid]
      },
      onResize: handleResize,
      minConstraints: minSize && [minSize === null || minSize === void 0 ? void 0 : minSize.w, minSize.h],
      maxConstraints: maxSize && [maxSize === null || maxSize === void 0 ? void 0 : maxSize.w, maxSize.h]
    }, children) : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight
      }
    }, children);
  };

  var classNames = (0, _clsx.default)("tw-window", {
    "tw-taskbar-on": taskbar,
    "tw-taskbar-off": !taskbar,
    "tw-minimize-on": windowMinimizes[id],
    "tw-minimize-off": !windowMinimizes[id],
    "tw-maximize-on": windowMaximizes[id],
    "tw-maximize-off": !windowMaximizes[id]
  });
  return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
    key: id,
    defaultPosition: windowLocations[id] || location,
    position: windowLocations[id] || location,
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
    id: id,
    style: {
      zIndex: windowZIndexes[id]
    }
  }, renderHeader(), renderBody()));
};

Window.defaultProps = {
  title: /*#__PURE__*/_react.default.createElement("div", null),
  bounds: undefined,
  minSize: {
    w: 200,
    h: 100
  },
  maxSize: undefined,
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: false
};
var _default = Window;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsImdyaWQiLCJncmlkc0dhcCIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImhlYWRlckhlaWdodCIsIndpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dTaXplcyIsInNldFdpbmRvd1pJbmRleGVzIiwic2V0V2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TWF4aW1pemVzIiwic2V0V2luZG93TWluaW1pemVzIiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImxpbWl0cyIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyTWluaW1pemUiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhlYWRlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInN0YXJ0TWlu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WCxDQVF5QjtBQVJ6QjtBQVNFLElBQUEsTUFBTSxFQUFFUSxVQVRWO0FBVUUsSUFBQSxNQUFNLEVBQUM7QUFWVCxrQkFZRTtBQUNFLElBQUEsU0FBUyxFQUFFTSxVQURiO0FBRUUsSUFBQSxFQUFFLEVBQUUxRCxFQUZOO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFBRWlELE1BQUFBLE1BQU0sRUFBRTlCLGNBQWMsQ0FBQ25CLEVBQUQ7QUFBeEI7QUFIVCxLQUtHeUQsWUFBWSxFQUxmLEVBT0dFLFVBQVUsRUFQYixDQVpGLENBREY7QUF3QkQsQ0F2T0Q7O0FBeU9BL0QsTUFBTSxDQUFDcUUsWUFBUCxHQUFzQjtBQUNwQjlELEVBQUFBLEtBQUssZUFBRSx5Q0FEYTtBQUVwQkMsRUFBQUEsTUFBTSxFQUFFOEQsU0FGWTtBQUdwQjdELEVBQUFBLE9BQU8sRUFBRTtBQUFFd0IsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIVztBQUlwQnhCLEVBQUFBLE9BQU8sRUFBRTRELFNBSlc7QUFLcEIzRCxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsU0FBUyxFQUFFLElBTlM7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVBPO0FBUXBCQyxFQUFBQSxXQUFXLEVBQUUsSUFSTztBQVNwQnlELEVBQUFBLGNBQWMsRUFBRTtBQVRJLENBQXRCO2VBWWV2RSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9XaW5kb3dzUHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgZ3JpZHM6IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQ7XG4gIGJvdW5kcz86IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfTtcbiAgbWluU2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgbWF4U2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XG4gIHN0YXJ0TWluaW1pemVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgV2luZG93ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5cbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNoaWxkcmVuLFxuICAgIGdyaWRzLFxuICAgIHRpdGxlLFxuICAgIGJvdW5kcyxcbiAgICBtaW5TaXplLFxuICAgIG1heFNpemUsXG4gICAgZHJhZ2dhYmxlLFxuICAgIHJlc2l6YWJsZSxcbiAgICBtaW5pbWl6YWJsZSxcbiAgICBtYXhpbWl6YWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICB0YXNrYmFyLFxuICAgIGdyaWQsXG4gICAgZ3JpZHNHYXAsXG4gICAgZ3JpZHNXaWR0aCxcbiAgICBncmlkc0hlaWdodCxcbiAgICBoZWFkZXJSZWYsXG4gICAgaGVhZGVySGVpZ2h0LFxuICAgIHdpbmRvd1NpemVzLFxuICAgIHdpbmRvd1pJbmRleGVzLFxuICAgIHdpbmRvd0xvY2F0aW9ucyxcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXG4gICAgd2luZG93TWluaW1pemVzLFxuICAgIHNldFdpbmRvd1NpemVzLFxuICAgIHNldFdpbmRvd1pJbmRleGVzLFxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXG4gICAgc2V0V2luZG93TWluaW1pemVzLFxuICB9ID0gc3RhdGU7XG5cbiAgY29uc3Qgc2l6ZSA9IHtcbiAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcbiAgICBoOiBoZWFkZXJIZWlnaHRcbiAgICAgID8gZ3JpZHNIZWlnaHQgKiBncmlkcy5oICsgZ3JpZHNHYXAgKiAoZ3JpZHMuaCAtIDEpIC0gaGVhZGVySGVpZ2h0XG4gICAgICA6IDAsXG4gIH07XG5cbiAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgeDogZ3JpZHNXaWR0aCAqIGdyaWRzLnggKyBncmlkc0dhcCAqIChncmlkcy54ICsgMSksXG4gICAgeTogZ3JpZHNIZWlnaHQgKiBncmlkcy55ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueSArIDEpLFxuICB9O1xuXG4gIGNvbnN0IGxpbWl0cyA9IGJvdW5kcyAmJiB7XG4gICAgbGVmdDogZ3JpZHNXaWR0aCAqIGJvdW5kcy5sZWZ0ICsgZ3JpZHNHYXAgKiAoYm91bmRzLmxlZnQgKyAxKSxcbiAgICB0b3A6IGdyaWRzSGVpZ2h0ICogYm91bmRzLnRvcCArIGdyaWRzR2FwICogKGJvdW5kcy50b3AgKyAxKSxcbiAgICByaWdodDpcbiAgICAgIGdyaWRzV2lkdGggKiBib3VuZHMucmlnaHQgK1xuICAgICAgZ3JpZHNHYXAgKiBib3VuZHMucmlnaHQgLVxuICAgICAgKHdpbmRvd1NpemVzW2lkXT8udyB8fCBzaXplLncpLFxuICAgIGJvdHRvbTpcbiAgICAgIGdyaWRzSGVpZ2h0ICogYm91bmRzLmJvdHRvbSArXG4gICAgICBncmlkc0dhcCAqIGJvdW5kcy5ib3R0b20gLVxuICAgICAgKHdpbmRvd1NpemVzW2lkXT8uaCArIGhlYWRlckhlaWdodCB8fCBzaXplLmggKyBoZWFkZXJIZWlnaHQpLFxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XG4gICAgc2V0V2luZG93U2l6ZXMoe1xuICAgICAgLi4ud2luZG93U2l6ZXMsXG4gICAgICBbaWRdOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXG4gICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXG4gICAgICA6IFswXTtcblxuICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xuXG4gICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2lkXTogekluZGV4IH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcbiAgICBpZiAod2luZG93TWF4aW1pemVzW2lkXSB8fCB3aW5kb3dNaW5pbWl6ZXNbaWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0V2luZG93TG9jYXRpb25zKHtcbiAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcbiAgICAgIFtpZF06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgW2lkXTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxuICAgICAgW2lkXTogIXdpbmRvd01heGltaXplc1tpZF0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWluaW1pemUgPSAoKSA9PiB7XG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgIFtpZF06IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgc2V0V2luZG93TWluaW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcbiAgICAgIFtpZF06ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XG4gICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIGRlc2t0b3AgZGV2aWNlc1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiB3aW5kb3dNaW5pbWl6ZXNbaWRdXG4gICAgICAgICAgICA/IFwiYXV0b1wiXG4gICAgICAgICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xuICAgICAgICAgICAgOiBcImF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiIG9uRG91YmxlQ2xpY2s9e2hhbmRsZU1heGltaXplfT5cbiAgICAgICAgICB7dGl0bGUgfHwgbnVsbH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XG4gICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XG5cbiAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXVxuICAgICAgPyBcIjEwMCVcIlxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcbiAgICAgIDogTWF0aC5tYXgoc2l6ZS53LCBtaW5TaXplPy53IHx8IDApO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXVxuICAgICAgPyBcIjEwMCVcIlxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLmhcbiAgICAgIDogTWF0aC5tYXgoc2l6ZS5oLCBtaW5TaXplPy5oIHx8IDApO1xuXG4gICAgY29uc3QgbWluV2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy53O1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lmg7XG4gICAgY29uc3QgbWF4V2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy53O1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lmg7XG5cbiAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNbaWRdID8gKFxuICAgICAgPFJlc2l6YWJsZUJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cbiAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cbiAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cbiAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XG4gICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1Jlc2l6YWJsZUJveD5cbiAgICApIDogKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0IH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIHtcbiAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcbiAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxuICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2lkXSxcbiAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2lkXSxcbiAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1tpZF0sXG4gICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1tpZF0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cbiAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxuICAgICAgZ3JpZD17W2dyaWQsIGdyaWRdfVxuICAgICAgc2NhbGU9ezF9XG4gICAgICBoYW5kbGU9XCIudHctZHJhZ2dhYmxlXCJcbiAgICAgIGJvdW5kcz17bGltaXRzIHx8IFwicGFyZW50XCJ9XG4gICAgICBvblN0YXJ0PXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgdG91Y2ggZGV2aWNlc1xuICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxuICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNbaWRdIH19XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cblxuICAgICAgICB7cmVuZGVyQm9keSgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59O1xuXG5XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogPGRpdj48L2Rpdj4sXG4gIGJvdW5kczogdW5kZWZpbmVkLFxuICBtaW5TaXplOiB7IHc6IDIwMCwgaDogMTAwIH0sXG4gIG1heFNpemU6IHVuZGVmaW5lZCxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIG1pbmltaXphYmxlOiB0cnVlLFxuICBtYXhpbWl6YWJsZTogdHJ1ZSxcbiAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxufSBhcyBQYXJ0aWFsPFByb3BzPjtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIl19