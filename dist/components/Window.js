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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YWJsZXQiLCJtb2JpbGUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsInNpemUiLCJsb2NhdGlvbiIsImxpbWl0cyIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVm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QUFFO0FBQUVrQyxJQUFBQSxDQUFDLEVBQUUsR0FBTDtBQUFVRSxJQUFBQSxDQUFDLEVBQUU7QUFBYixHQUhXO0FBSXBCbkMsRUFBQUEsT0FBTyxFQUFFOEQsU0FKVztBQUtwQjdELEVBQUFBLFNBQVMsRUFBRSxJQUxTO0FBTXBCQyxFQUFBQSxTQUFTLEVBQUUsSUFOUztBQU9wQkMsRUFBQUEsV0FBVyxFQUFFLElBUE87QUFRcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVJPO0FBU3BCMkQsRUFBQUEsY0FBYyxFQUFFO0FBVEksQ0FBdEI7ZUFZZXpFLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB1c2VCcmVha3BvaW50IGZyb20gXCJ1c2UtYnJlYWtwb2ludFwiO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IHVzZVdpbmRvdyB9IGZyb20gXCIuLi91dGlscy91c2VXaW5kb3dcIjtcclxuaW1wb3J0IHsgU2l6ZSwgR3JpZHMsIEJvdW5kcyB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBncmlkczogR3JpZHM7XHJcbiAgdGl0bGU/OiBKU1guRWxlbWVudDtcclxuICBib3VuZHM/OiBCb3VuZHM7XHJcbiAgbWluU2l6ZT86IFNpemU7XHJcbiAgbWF4U2l6ZT86IFNpemU7XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZ3JpZHMsXHJcbiAgICB0aXRsZSxcclxuICAgIGJvdW5kcyxcclxuICAgIG1pblNpemUsXHJcbiAgICBtYXhTaXplLFxyXG4gICAgZHJhZ2dhYmxlLFxyXG4gICAgcmVzaXphYmxlLFxyXG4gICAgbWluaW1pemFibGUsXHJcbiAgICBtYXhpbWl6YWJsZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRhc2tiYXIsXHJcbiAgICBzdGVwLFxyXG4gICAgYnJlYWtQb2ludHMsXHJcbiAgICBncmlkc0dhcCxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlclJlZixcclxuICAgIGhlYWRlckhlaWdodCxcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICBzZXRXaW5kb3dTaXplcyxcclxuICAgIHNldFdpbmRvd1pJbmRleGVzLFxyXG4gICAgc2V0V2luZG93TG9jYXRpb25zLFxyXG4gICAgc2V0V2luZG93TWF4aW1pemVzLFxyXG4gICAgc2V0V2luZG93TWluaW1pemVzLFxyXG4gIH0gPSBzdGF0ZTtcclxuXHJcbiAgZ3JpZHMudGFibGV0ID0gZ3JpZHMudGFibGV0IHx8IGdyaWRzLm1vYmlsZTtcclxuICBncmlkcy5kZXNrdG9wID0gZ3JpZHMuZGVza3RvcCB8fCBncmlkcy50YWJsZXQ7XHJcblxyXG4gIGlmIChib3VuZHMpIHtcclxuICAgIGJvdW5kcy50YWJsZXQgPSBib3VuZHMudGFibGV0IHx8IGJvdW5kcy5tb2JpbGU7XHJcbiAgICBib3VuZHMuZGVza3RvcCA9IGJvdW5kcy5kZXNrdG9wIHx8IGJvdW5kcy50YWJsZXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGJyZWFrcG9pbnQgfSA9IHVzZUJyZWFrcG9pbnQoYnJlYWtQb2ludHMsIFwiZGVza3RvcFwiKTtcclxuXHJcbiAgY29uc3QgeyBzaXplLCBsb2NhdGlvbiwgbGltaXRzIH0gPSB1c2VXaW5kb3coXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzR2FwLFxyXG4gICAgYm91bmRzLFxyXG4gICAgZ3JpZHMsXHJcbiAgICBpZCxcclxuICAgIGJyZWFrcG9pbnQgYXMgc3RyaW5nXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgLi4ud2luZG93U2l6ZXMsXHJcbiAgICAgIFtpZF06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXHJcbiAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgOiBbMF07XHJcblxyXG4gICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XHJcblxyXG4gICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2lkXTogekluZGV4IH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNbaWRdIHx8IHdpbmRvd01pbmltaXplc1tpZF0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgW2lkXTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIFtpZF06IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICBbaWRdOiAhd2luZG93TWF4aW1pemVzW2lkXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICBbaWRdOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgW2lkXTogIXdpbmRvd01pbmltaXplc1tpZF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0gLz5cclxuICAgICkgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfSAvPlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgZGVza3RvcCBkZXZpY2VzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiB3aW5kb3dNaW5pbWl6ZXNbaWRdXHJcbiAgICAgICAgICAgID8gXCJhdXRvXCJcclxuICAgICAgICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xyXG4gICAgICAgICAgICA6IFwiYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxyXG4gICAgICAgICAge3RpdGxlIHx8IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAge3JlbmRlck1heGltaXplKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXHJcbiAgICAgID8gXCIxMDAlXCJcclxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xyXG4gICAgICA6IE1hdGgubWF4KHNpemUudywgbWluU2l6ZT8udyB8fCAwKTtcclxuXHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXHJcbiAgICAgID8gXCIxMDAlXCJcclxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0uaFxyXG4gICAgICA6IE1hdGgubWF4KHNpemUuaCwgbWluU2l6ZT8uaCB8fCAwKTtcclxuXHJcbiAgICBjb25zdCBtaW5XaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lnc7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy5oO1xyXG4gICAgY29uc3QgbWF4V2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy53O1xyXG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8uaDtcclxuXHJcbiAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNbaWRdID8gKFxyXG4gICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW3N0ZXAsIHN0ZXBdIH19XHJcbiAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICBtaW5Db25zdHJhaW50cz17bWluU2l6ZSAmJiBbbWluU2l6ZT8udywgbWluU2l6ZS5oXX1cclxuICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwge1xyXG4gICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXHJcbiAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNbaWRdLFxyXG4gICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1tpZF0sXHJcbiAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2lkXSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnZ2FibGVcclxuICAgICAga2V5PXtpZH1cclxuICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxyXG4gICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cclxuICAgICAgZ3JpZD17W3N0ZXAsIHN0ZXBdfVxyXG4gICAgICBzY2FsZT17MX1cclxuICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgIGJvdW5kcz17bGltaXRzIHx8IFwicGFyZW50XCJ9XHJcbiAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cclxuICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2lkXSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG5cclxuICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ2dhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlOiA8ZGl2PjwvZGl2PixcclxuICBib3VuZHM6IHVuZGVmaW5lZCxcclxuICBtaW5TaXplOiB7IHc6IDIwMCwgaDogMTAwIH0sXHJcbiAgbWF4U2l6ZTogdW5kZWZpbmVkLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICByZXNpemFibGU6IHRydWUsXHJcbiAgbWluaW1pemFibGU6IHRydWUsXHJcbiAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iXX0=