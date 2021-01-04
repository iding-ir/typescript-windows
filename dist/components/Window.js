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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YWJsZXQiLCJtb2JpbGUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsInNpemUiLCJsb2NhdGlvbiIsImxpbWl0cyIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVm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QUFFO0FBQUVrQyxJQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFVRSxJQUFBQSxDQUFDLEVBQUU7QUFBYixHQUhXO0FBSXBCbkMsRUFBQUEsT0FBTyxFQUFFOEQsU0FKVztBQUtwQjdELEVBQUFBLFNBQVMsRUFBRSxJQUxTO0FBTXBCQyxFQUFBQSxTQUFTLEVBQUUsSUFOUztBQU9wQkMsRUFBQUEsV0FBVyxFQUFFLElBUE87QUFRcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVJPO0FBU3BCMkQsRUFBQUEsY0FBYyxFQUFFO0FBVEksQ0FBdEI7ZUFZZXpFLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tIFwidXNlLWJyZWFrcG9pbnRcIjtcblxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3cgfSBmcm9tIFwiLi4vdXRpbHMvdXNlV2luZG93XCI7XG5pbXBvcnQgeyBTaXplLCBHcmlkcywgQm91bmRzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICBncmlkczogR3JpZHM7XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQ7XG4gIGJvdW5kcz86IEJvdW5kcztcbiAgbWluU2l6ZT86IFNpemU7XG4gIG1heFNpemU/OiBTaXplO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICByZXNpemFibGU/OiBib29sZWFuO1xuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBXaW5kb3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICBjb25zdCB7XG4gICAgaWQsXG4gICAgY2hpbGRyZW4sXG4gICAgZ3JpZHMsXG4gICAgdGl0bGUsXG4gICAgYm91bmRzLFxuICAgIG1pblNpemUsXG4gICAgbWF4U2l6ZSxcbiAgICBkcmFnZ2FibGUsXG4gICAgcmVzaXphYmxlLFxuICAgIG1pbmltaXphYmxlLFxuICAgIG1heGltaXphYmxlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHRhc2tiYXIsXG4gICAgc3RlcCxcbiAgICBicmVha1BvaW50cyxcbiAgICBncmlkc0dhcCxcbiAgICBncmlkc1dpZHRoLFxuICAgIGdyaWRzSGVpZ2h0LFxuICAgIGhlYWRlclJlZixcbiAgICBoZWFkZXJIZWlnaHQsXG4gICAgd2luZG93U2l6ZXMsXG4gICAgd2luZG93WkluZGV4ZXMsXG4gICAgd2luZG93TG9jYXRpb25zLFxuICAgIHdpbmRvd01heGltaXplcyxcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXG4gICAgc2V0V2luZG93U2l6ZXMsXG4gICAgc2V0V2luZG93WkluZGV4ZXMsXG4gICAgc2V0V2luZG93TG9jYXRpb25zLFxuICAgIHNldFdpbmRvd01heGltaXplcyxcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMsXG4gIH0gPSBzdGF0ZTtcblxuICBncmlkcy50YWJsZXQgPSBncmlkcy50YWJsZXQgfHwgZ3JpZHMubW9iaWxlO1xuICBncmlkcy5kZXNrdG9wID0gZ3JpZHMuZGVza3RvcCB8fCBncmlkcy50YWJsZXQ7XG5cbiAgaWYgKGJvdW5kcykge1xuICAgIGJvdW5kcy50YWJsZXQgPSBib3VuZHMudGFibGV0IHx8IGJvdW5kcy5tb2JpbGU7XG4gICAgYm91bmRzLmRlc2t0b3AgPSBib3VuZHMuZGVza3RvcCB8fCBib3VuZHMudGFibGV0O1xuICB9XG5cbiAgY29uc3QgeyBicmVha3BvaW50IH0gPSB1c2VCcmVha3BvaW50KGJyZWFrUG9pbnRzLCBcImRlc2t0b3BcIik7XG5cbiAgY29uc3QgeyBzaXplLCBsb2NhdGlvbiwgbGltaXRzIH0gPSB1c2VXaW5kb3coXG4gICAgaGVhZGVySGVpZ2h0LFxuICAgIHdpbmRvd1NpemVzLFxuICAgIGdyaWRzSGVpZ2h0LFxuICAgIGdyaWRzV2lkdGgsXG4gICAgZ3JpZHNHYXAsXG4gICAgYm91bmRzLFxuICAgIGdyaWRzLFxuICAgIGlkLFxuICAgIGJyZWFrcG9pbnQgYXMgc3RyaW5nXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcbiAgICBzZXRXaW5kb3dTaXplcyh7XG4gICAgICAuLi53aW5kb3dTaXplcyxcbiAgICAgIFtpZF06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcbiAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcbiAgICAgIDogWzBdO1xuXG4gICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XG5cbiAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBbaWRdOiB6SW5kZXggfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xuICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNbaWRdIHx8IHdpbmRvd01pbmltaXplc1tpZF0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xuICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxuICAgICAgW2lkXTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xuICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXG4gICAgICBbaWRdOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHNldFdpbmRvd01heGltaXplcyh7XG4gICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICBbaWRdOiAhd2luZG93TWF4aW1pemVzW2lkXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxuICAgICAgW2lkXTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgW2lkXTogIXdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcbiAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgZGVza3RvcCBkZXZpY2VzXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IHdpbmRvd01pbmltaXplc1tpZF1cbiAgICAgICAgICAgID8gXCJhdXRvXCJcbiAgICAgICAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICAgICAgICA/IHdpbmRvd1NpemVzW2lkXS53XG4gICAgICAgICAgICA6IFwiYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxuICAgICAgICAgIHt0aXRsZSB8fCBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIj5cbiAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cblxuICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXG4gICAgICA/IFwiMTAwJVwiXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xuICAgICAgOiBNYXRoLm1heChzaXplLncsIG1pblNpemU/LncgfHwgMCk7XG5cbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXG4gICAgICA/IFwiMTAwJVwiXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0uaFxuICAgICAgOiBNYXRoLm1heChzaXplLmgsIG1pblNpemU/LmggfHwgMCk7XG5cbiAgICBjb25zdCBtaW5XaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lnc7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8uaDtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lnc7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8uaDtcblxuICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1tpZF0gPyAoXG4gICAgICA8UmVzaXphYmxlQm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxuICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtzdGVwLCBzdGVwXSB9fVxuICAgICAgICBvblJlc2l6ZT17aGFuZGxlUmVzaXplfVxuICAgICAgICBtaW5Db25zdHJhaW50cz17bWluU2l6ZSAmJiBbbWluU2l6ZT8udywgbWluU2l6ZS5oXX1cbiAgICAgICAgbWF4Q29uc3RyYWludHM9e21heFNpemUgJiYgW21heFNpemU/LncsIG1heFNpemUuaF19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUmVzaXphYmxlQm94PlxuICAgICkgOiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQgfX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwge1xuICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxuICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXG4gICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2lkXSxcbiAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2lkXSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlXG4gICAgICBrZXk9e2lkfVxuICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxuICAgICAgcG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XG4gICAgICBncmlkPXtbc3RlcCwgc3RlcF19XG4gICAgICBzY2FsZT17MX1cbiAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxuICAgICAgYm91bmRzPXtsaW1pdHMgfHwgXCJwYXJlbnRcIn1cbiAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiB0b3VjaCBkZXZpY2VzXG4gICAgICBvblN0b3A9e2hhbmRsZURyYWd9XG4gICAgICBjYW5jZWw9XCIudHctYnV0dG9uc1wiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1tpZF0gfX1cbiAgICAgID5cbiAgICAgICAge3JlbmRlckhlYWRlcigpfVxuXG4gICAgICAgIHtyZW5kZXJCb2R5KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKTtcbn07XG5cbldpbmRvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiA8ZGl2PjwvZGl2PixcbiAgYm91bmRzOiB1bmRlZmluZWQsXG4gIG1pblNpemU6IHsgdzogMjAwLCBoOiAxMDAgfSxcbiAgbWF4U2l6ZTogdW5kZWZpbmVkLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIHJlc2l6YWJsZTogdHJ1ZSxcbiAgbWluaW1pemFibGU6IHRydWUsXG4gIG1heGltaXphYmxlOiB0cnVlLFxuICBzdGFydE1pbmltaXplZDogZmFsc2UsXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3c7XG4iXX0=