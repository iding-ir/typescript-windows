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

var _useWindow2 = require("../utils/useWindow");

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
  grids.tablet = grids.tablet || grids.mobile;
  grids.desktop = grids.desktop || grids.tablet;

  if (bounds) {
    bounds.tablet = bounds.tablet || bounds.mobile;
    bounds.desktop = bounds.desktop || bounds.tablet;
  }

  var _useBreakpoint = (0, _useBreakpoint2.default)(breakPoints, "desktop"),
      breakpoint = _useBreakpoint.breakpoint;

  var _useWindow = (0, _useWindow2.useWindow)(headerHeight, windowSizes, gridsHeight, gridsWidth, gridsGap, bounds, grids, id, breakpoint),
      size = _useWindow.size,
      location = _useWindow.location,
      limits = _useWindow.limits;

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
    if (windowMaximizes[id] || windowMinimizes[id][breakpoint]) {
      return;
    }

    setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, id, {
      x: data.x,
      y: data.y
    })));
  };

  var handleMaximize = function handleMaximize() {
    setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, id, {
      mobile: false,
      tablet: false,
      desktop: false
    })));
    setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, id, !windowMaximizes[id])));
  };

  var handleMinimize = function handleMinimize() {
    setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, id, false)));
    setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, id, {
      mobile: !windowMinimizes[id].mobile,
      tablet: !windowMinimizes[id].tablet,
      desktop: !windowMinimizes[id].desktop
    })));
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
        width: windowMinimizes[id][breakpoint] ? "auto" : windowSizes[id] ? windowSizes[id].w : "auto"
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
    "tw-minimize-on": windowMinimizes[id][breakpoint],
    "tw-minimize-off": !windowMinimizes[id][breakpoint],
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
  startMinimized: {
    mobile: false,
    tablet: false,
    desktop: false
  }
};
var _default = Window;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YWJsZXQiLCJtb2JpbGUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsInNpemUiLCJsb2NhdGlvbiIsImxpbWl0cyIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVm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LElBQUEsTUFBTSxFQUFDO0FBVlQsa0JBWUU7QUFDRSxJQUFBLFNBQVMsRUFBRVEsVUFEYjtBQUVFLElBQUEsRUFBRSxFQUFFM0QsRUFGTjtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQUVnRCxNQUFBQSxNQUFNLEVBQUU1QixjQUFjLENBQUNwQixFQUFEO0FBQXhCO0FBSFQsS0FLRzBELFlBQVksRUFMZixFQU9HRSxVQUFVLEVBUGIsQ0FaRixDQURGO0FBd0JELENBN09EOztBQStPQWhFLE1BQU0sQ0FBQ3VFLFlBQVAsR0FBc0I7QUFDcEJoRSxFQUFBQSxLQUFLLGVBQUUseUNBRGE7QUFFcEJDLEVBQUFBLE1BQU0sRUFBRWdFLFNBRlk7QUFHcEIvRCxFQUFBQSxPQUFPLEVBQUU7QUFBRWtDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVFLElBQUFBLENBQUMsRUFBRTtBQUFiLEdBSFc7QUFJcEJuQyxFQUFBQSxPQUFPLEVBQUU4RCxTQUpXO0FBS3BCN0QsRUFBQUEsU0FBUyxFQUFFLElBTFM7QUFNcEJDLEVBQUFBLFNBQVMsRUFBRSxJQU5TO0FBT3BCQyxFQUFBQSxXQUFXLEVBQUUsSUFQTztBQVFwQkMsRUFBQUEsV0FBVyxFQUFFLElBUk87QUFTcEIyRCxFQUFBQSxjQUFjLEVBQUU7QUFBRXZDLElBQUFBLE1BQU0sRUFBRSxLQUFWO0FBQWlCRCxJQUFBQSxNQUFNLEVBQUUsS0FBekI7QUFBZ0NFLElBQUFBLE9BQU8sRUFBRTtBQUF6QztBQVRJLENBQXRCO2VBWWVuQyxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tIFwidXNlLWJyZWFrcG9pbnRcIjtcclxuXHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xyXG5pbXBvcnQgeyB1c2VXaW5kb3cgfSBmcm9tIFwiLi4vdXRpbHMvdXNlV2luZG93XCI7XHJcbmltcG9ydCB7IFNpemUsIEdyaWRzLCBNaW5pbWl6ZXMsIEJvdW5kcyB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBncmlkczogR3JpZHM7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudDtcclxuICBib3VuZHM/OiBCb3VuZHM7XHJcbiAgbWluU2l6ZT86IFNpemU7XHJcbiAgbWF4U2l6ZT86IFNpemU7XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBNaW5pbWl6ZXM7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvdyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBncmlkcyxcclxuICAgIHRpdGxlLFxyXG4gICAgYm91bmRzLFxyXG4gICAgbWluU2l6ZSxcclxuICAgIG1heFNpemUsXHJcbiAgICBkcmFnZ2FibGUsXHJcbiAgICByZXNpemFibGUsXHJcbiAgICBtaW5pbWl6YWJsZSxcclxuICAgIG1heGltaXphYmxlLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGFza2JhcixcclxuICAgIHN0ZXAsXHJcbiAgICBicmVha1BvaW50cyxcclxuICAgIGdyaWRzR2FwLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVyUmVmLFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIHNldFdpbmRvd1NpemVzLFxyXG4gICAgc2V0V2luZG93WkluZGV4ZXMsXHJcbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXHJcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXHJcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMsXHJcbiAgfSA9IHN0YXRlO1xyXG5cclxuICBncmlkcy50YWJsZXQgPSBncmlkcy50YWJsZXQgfHwgZ3JpZHMubW9iaWxlO1xyXG4gIGdyaWRzLmRlc2t0b3AgPSBncmlkcy5kZXNrdG9wIHx8IGdyaWRzLnRhYmxldDtcclxuXHJcbiAgaWYgKGJvdW5kcykge1xyXG4gICAgYm91bmRzLnRhYmxldCA9IGJvdW5kcy50YWJsZXQgfHwgYm91bmRzLm1vYmlsZTtcclxuICAgIGJvdW5kcy5kZXNrdG9wID0gYm91bmRzLmRlc2t0b3AgfHwgYm91bmRzLnRhYmxldDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgYnJlYWtwb2ludCB9ID0gdXNlQnJlYWtwb2ludChicmVha1BvaW50cywgXCJkZXNrdG9wXCIpO1xyXG5cclxuICBjb25zdCB7IHNpemUsIGxvY2F0aW9uLCBsaW1pdHMgfSA9IHVzZVdpbmRvdyhcclxuICAgIGhlYWRlckhlaWdodCxcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNHYXAsXHJcbiAgICBib3VuZHMsXHJcbiAgICBncmlkcyxcclxuICAgIGlkLFxyXG4gICAgYnJlYWtwb2ludCBhcyBzdHJpbmdcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgc2V0V2luZG93U2l6ZXMoe1xyXG4gICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgW2lkXTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICA6IFswXTtcclxuXHJcbiAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBbaWRdOiB6SW5kZXggfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgaWYgKHdpbmRvd01heGltaXplc1tpZF0gfHwgd2luZG93TWluaW1pemVzW2lkXVticmVha3BvaW50XSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxyXG4gICAgICBbaWRdOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgW2lkXToge1xyXG4gICAgICAgIG1vYmlsZTogZmFsc2UsXHJcbiAgICAgICAgdGFibGV0OiBmYWxzZSxcclxuICAgICAgICBkZXNrdG9wOiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgW2lkXTogIXdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgW2lkXTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIFtpZF06IHtcclxuICAgICAgICBtb2JpbGU6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLm1vYmlsZSxcclxuICAgICAgICB0YWJsZXQ6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLnRhYmxldCxcclxuICAgICAgICBkZXNrdG9wOiAhd2luZG93TWluaW1pemVzW2lkXS5kZXNrdG9wLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9IC8+XHJcbiAgICApIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0gLz5cclxuICAgICkgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcclxuICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cclxuICAgICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIGRlc2t0b3AgZGV2aWNlc1xyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2lkXVticmVha3BvaW50XVxyXG4gICAgICAgICAgICA/IFwiYXV0b1wiXHJcbiAgICAgICAgICAgIDogd2luZG93U2l6ZXNbaWRdXHJcbiAgICAgICAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcclxuICAgICAgICAgICAgOiBcImF1dG9cIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiIG9uRG91YmxlQ2xpY2s9e2hhbmRsZU1heGltaXplfT5cclxuICAgICAgICAgIHt0aXRsZSB8fCBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIj5cclxuICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxyXG5cclxuICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXVxyXG4gICAgICA/IFwiMTAwJVwiXHJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXHJcbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcclxuICAgICAgOiBNYXRoLm1heChzaXplLncsIG1pblNpemU/LncgfHwgMCk7XHJcblxyXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXVxyXG4gICAgICA/IFwiMTAwJVwiXHJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXHJcbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLmhcclxuICAgICAgOiBNYXRoLm1heChzaXplLmgsIG1pblNpemU/LmggfHwgMCk7XHJcblxyXG4gICAgY29uc3QgbWluV2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy53O1xyXG4gICAgY29uc3QgbWluSGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8uaDtcclxuICAgIGNvbnN0IG1heFdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8udztcclxuICAgIGNvbnN0IG1heEhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lmg7XHJcblxyXG4gICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2lkXSA/IChcclxuICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtzdGVwLCBzdGVwXSB9fVxyXG4gICAgICAgIG9uUmVzaXplPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XHJcbiAgICAgICAgbWF4Q29uc3RyYWludHM9e21heFNpemUgJiYgW21heFNpemU/LncsIG1heFNpemUuaF19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgKSA6IChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0IH19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIHtcclxuICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxyXG4gICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcclxuICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2lkXVticmVha3BvaW50XSxcclxuICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdW2JyZWFrcG9pbnRdLFxyXG4gICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNbaWRdLFxyXG4gICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ2dhYmxlXHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cclxuICAgICAgcG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XHJcbiAgICAgIGdyaWQ9e1tzdGVwLCBzdGVwXX1cclxuICAgICAgc2NhbGU9ezF9XHJcbiAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxyXG4gICAgICBib3VuZHM9e2xpbWl0cyB8fCBcInBhcmVudFwifVxyXG4gICAgICBvblN0YXJ0PXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgdG91Y2ggZGV2aWNlc1xyXG4gICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgIGNhbmNlbD1cIi50dy1idXR0b25zXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cclxuICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1tpZF0gfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAge3JlbmRlckJvZHkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdnYWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZTogPGRpdj48L2Rpdj4sXHJcbiAgYm91bmRzOiB1bmRlZmluZWQsXHJcbiAgbWluU2l6ZTogeyB3OiAyMDAsIGg6IDEwMCB9LFxyXG4gIG1heFNpemU6IHVuZGVmaW5lZCxcclxuICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgcmVzaXphYmxlOiB0cnVlLFxyXG4gIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gIG1heGltaXphYmxlOiB0cnVlLFxyXG4gIHN0YXJ0TWluaW1pemVkOiB7IG1vYmlsZTogZmFsc2UsIHRhYmxldDogZmFsc2UsIGRlc2t0b3A6IGZhbHNlIH0sXHJcbn0gYXMgUGFydGlhbDxQcm9wcz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XHJcbiJdfQ==