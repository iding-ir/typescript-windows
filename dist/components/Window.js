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

var _useBreakpoint2 = _interopRequireDefault(require("use-breakpoint"));

var _WindowsProvider = require("./WindowsProvider");

var _useSize2 = require("../utils/useSize");

var _useLocation2 = require("../utils/useLocation");

var _useLimits2 = require("../utils/useLimits");

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
  var _useContext = (0, _react.useContext)(_WindowsProvider.StateContext),
      state = _useContext.state;

  var grids = props.grids;
  var id = props.id,
      children = props.children,
      title = props.title,
      bounds = props.bounds,
      minSize = props.minSize,
      maxSize = props.maxSize,
      draggable = props.draggable,
      resizable = props.resizable,
      minimizable = props.minimizable,
      maximizable = props.maximizable;
  var taskbar = state.taskbar,
      step = state.step,
      breakPoints = state.breakPoints,
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
  grids = _objectSpread(_objectSpread({}, grids), {}, {
    mobile: grids.mobile || grids.desktop,
    tablet: grids.tablet || grids.desktop
  });

  var _useBreakpoint = (0, _useBreakpoint2.default)(breakPoints, "desktop"),
      breakpoint = _useBreakpoint.breakpoint;

  var _useSize = (0, _useSize2.useSize)(headerHeight, gridsHeight, gridsWidth, gridsGap, grids, breakpoint),
      size = _useSize.size;

  var _useLocation = (0, _useLocation2.useLocation)(gridsHeight, gridsWidth, gridsGap, grids, breakpoint),
      location = _useLocation.location;

  var _useLimits = (0, _useLimits2.useLimits)(headerHeight, windowSizes, gridsHeight, gridsWidth, gridsGap, bounds, size, id),
      limits = _useLimits.limits;

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
        grid: [step, step]
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
    grid: [step, step],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImdyaWRzIiwiaWQiLCJjaGlsZHJlbiIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJtb2JpbGUiLCJkZXNrdG9wIiwidGFibGV0IiwiYnJlYWtwb2ludCIsInNpemUiLCJsb2NhdGlvbiIsImxpbWl0cyIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVm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QUdwQi9ELEVBQUFBLE9BQU8sRUFBRTtBQUFFa0MsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUUsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIVztBQUlwQm5DLEVBQUFBLE9BQU8sRUFBRThELFNBSlc7QUFLcEI3RCxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsU0FBUyxFQUFFLElBTlM7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVBPO0FBUXBCQyxFQUFBQSxXQUFXLEVBQUUsSUFSTztBQVNwQjJELEVBQUFBLGNBQWMsRUFBRTtBQVRJLENBQXRCO2VBWWV6RSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHVzZUJyZWFrcG9pbnQgZnJvbSBcInVzZS1icmVha3BvaW50XCI7XG5cbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xuaW1wb3J0IHsgdXNlU2l6ZSB9IGZyb20gXCIuLi91dGlscy91c2VTaXplXCI7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCIuLi91dGlscy91c2VMb2NhdGlvblwiO1xuaW1wb3J0IHsgdXNlTGltaXRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUxpbWl0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyaWQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdzogbnVtYmVyO1xuICBoOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdyaWRzIHtcbiAgW2tleTogc3RyaW5nXTogR3JpZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb3VuZHMge1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaXplIHtcbiAgdzogbnVtYmVyO1xuICBoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2l6ZXMge1xuICBba2V5OiBzdHJpbmddOiBTaXplO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICBncmlkczogR3JpZHM7XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQ7XG4gIGJvdW5kcz86IEJvdW5kcztcbiAgbWluU2l6ZT86IFNpemU7XG4gIG1heFNpemU/OiBTaXplO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICByZXNpemFibGU/OiBib29sZWFuO1xuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBXaW5kb3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICBsZXQgeyBncmlkcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNoaWxkcmVuLFxuICAgIHRpdGxlLFxuICAgIGJvdW5kcyxcbiAgICBtaW5TaXplLFxuICAgIG1heFNpemUsXG4gICAgZHJhZ2dhYmxlLFxuICAgIHJlc2l6YWJsZSxcbiAgICBtaW5pbWl6YWJsZSxcbiAgICBtYXhpbWl6YWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICB0YXNrYmFyLFxuICAgIHN0ZXAsXG4gICAgYnJlYWtQb2ludHMsXG4gICAgZ3JpZHNHYXAsXG4gICAgZ3JpZHNXaWR0aCxcbiAgICBncmlkc0hlaWdodCxcbiAgICBoZWFkZXJSZWYsXG4gICAgaGVhZGVySGVpZ2h0LFxuICAgIHdpbmRvd1NpemVzLFxuICAgIHdpbmRvd1pJbmRleGVzLFxuICAgIHdpbmRvd0xvY2F0aW9ucyxcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXG4gICAgd2luZG93TWluaW1pemVzLFxuICAgIHNldFdpbmRvd1NpemVzLFxuICAgIHNldFdpbmRvd1pJbmRleGVzLFxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXG4gICAgc2V0V2luZG93TWluaW1pemVzLFxuICB9ID0gc3RhdGU7XG5cbiAgZ3JpZHMgPSB7XG4gICAgLi4uZ3JpZHMsXG4gICAgbW9iaWxlOiBncmlkcy5tb2JpbGUgfHwgZ3JpZHMuZGVza3RvcCxcbiAgICB0YWJsZXQ6IGdyaWRzLnRhYmxldCB8fCBncmlkcy5kZXNrdG9wLFxuICB9O1xuXG4gIGNvbnN0IHsgYnJlYWtwb2ludCB9ID0gdXNlQnJlYWtwb2ludChicmVha1BvaW50cywgXCJkZXNrdG9wXCIpO1xuXG4gIGNvbnN0IHsgc2l6ZSB9ID0gdXNlU2l6ZShcbiAgICBoZWFkZXJIZWlnaHQsXG4gICAgZ3JpZHNIZWlnaHQsXG4gICAgZ3JpZHNXaWR0aCxcbiAgICBncmlkc0dhcCxcbiAgICBncmlkcyxcbiAgICBicmVha3BvaW50IGFzIHN0cmluZ1xuICApO1xuXG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHVzZUxvY2F0aW9uKFxuICAgIGdyaWRzSGVpZ2h0LFxuICAgIGdyaWRzV2lkdGgsXG4gICAgZ3JpZHNHYXAsXG4gICAgZ3JpZHMsXG4gICAgYnJlYWtwb2ludCBhcyBzdHJpbmdcbiAgKTtcblxuICBjb25zdCB7IGxpbWl0cyB9ID0gdXNlTGltaXRzKFxuICAgIGhlYWRlckhlaWdodCxcbiAgICB3aW5kb3dTaXplcyxcbiAgICBncmlkc0hlaWdodCxcbiAgICBncmlkc1dpZHRoLFxuICAgIGdyaWRzR2FwLFxuICAgIGJvdW5kcyxcbiAgICBzaXplLFxuICAgIGlkXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplcyh7XG4gICAgICAuLi53aW5kb3dTaXplcyxcbiAgICAgIFtpZF06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcbiAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcbiAgICAgIDogWzBdO1xuXG4gICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XG5cbiAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBbaWRdOiB6SW5kZXggfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xuICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNbaWRdIHx8IHdpbmRvd01pbmltaXplc1tpZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xuICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxuICAgICAgW2lkXTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xuICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXG4gICAgICBbaWRdOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHNldFdpbmRvd01heGltaXplcyh7XG4gICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICBbaWRdOiAhd2luZG93TWF4aW1pemVzW2lkXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxuICAgICAgW2lkXTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgW2lkXTogIXdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcbiAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgZGVza3RvcCBkZXZpY2VzXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvd01pbmltaXplc1tpZF1cbiAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICAgICAgICA/IHdpbmRvd1NpemVzW2lkXS53XG4gICAgICAgICAgICA6IFwiYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxuICAgICAgICAgIHt0aXRsZSB8fCBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIj5cbiAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cblxuICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXG4gICAgICA/IFwiMTAwJVwiXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xuICAgICAgOiBNYXRoLm1heChzaXplLncsIG1pblNpemU/LncgfHwgMCk7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXG4gICAgICA/IFwiMTAwJVwiXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0uaFxuICAgICAgOiBNYXRoLm1heChzaXplLmgsIG1pblNpemU/LmggfHwgMCk7XG5cbiAgICBjb25zdCBtaW5XaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lnc7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8uaDtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lnc7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8uaDtcblxuICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1tpZF0gPyAoXG4gICAgICA8UmVzaXphYmxlQm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxuICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtzdGVwLCBzdGVwXSB9fVxuICAgICAgICBvblJlc2l6ZT17aGFuZGxlUmVzaXplfVxuICAgICAgICBtaW5Db25zdHJhaW50cz17bWluU2l6ZSAmJiBbbWluU2l6ZT8udywgbWluU2l6ZS5oXX1cbiAgICAgICAgbWF4Q29uc3RyYWludHM9e21heFNpemUgJiYgW21heFNpemU/LncsIG1heFNpemUuaF19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUmVzaXphYmxlQm94PlxuICAgICkgOiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwge1xuICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxuICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXG4gICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2lkXSxcbiAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2lkXSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlXG4gICAgICBrZXk9e2lkfVxuICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxuICAgICAgcG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XG4gICAgICBncmlkPXtbc3RlcCwgc3RlcF19XG4gICAgICBzY2FsZT17MX1cbiAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxuICAgICAgYm91bmRzPXtsaW1pdHMgfHwgXCJwYXJlbnRcIn1cbiAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiB0b3VjaCBkZXZpY2VzXG4gICAgICBvblN0b3A9e2hhbmRsZURyYWd9XG4gICAgICBjYW5jZWw9XCIudHctYnV0dG9uc1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1tpZF0gfX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlckhlYWRlcigpfVxuXG4gICAgICAgIHtyZW5kZXJCb2R5KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKTtcbn07XG5cbldpbmRvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiA8ZGl2PjwvZGl2PixcbiAgYm91bmRzOiB1bmRlZmluZWQsXG4gIG1pblNpemU6IHsgdzogMjAwLCBoOiAxMDAgfSxcbiAgbWF4U2l6ZTogdW5kZWZpbmVkLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgbWluaW1pemFibGU6IHRydWUsXG4gIG1heGltaXphYmxlOiB0cnVlLFxuICBzdGFydE1pbmltaXplZDogZmFsc2UsXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XG4iXX0=