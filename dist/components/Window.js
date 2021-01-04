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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImdyaWRzIiwiaWQiLCJjaGlsZHJlbiIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJtb2JpbGUiLCJkZXNrdG9wIiwidGFibGV0IiwiYnJlYWtwb2ludCIsInNpemUiLCJsb2NhdGlvbiIsImxpbWl0cyIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJoYW5kbGVNaW5pbWl6ZSIsInJlbmRlck1pbmltaXplIiwicmVuZGVyTWF4aW1pemUiLCJyZW5kZXJIZWFkZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVm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QUEsV0FBVyxFQUFFLElBUE87QUFRcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVJPO0FBU3BCMkQsRUFBQUEsY0FBYyxFQUFFO0FBVEksQ0FBdEI7ZUFZZXpFLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tIFwidXNlLWJyZWFrcG9pbnRcIjtcblxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XG5pbXBvcnQgeyB1c2VXaW5kb3cgfSBmcm9tIFwiLi4vdXRpbHMvdXNlV2luZG93XCI7XG5pbXBvcnQgeyBTaXplLCBHcmlkcywgQm91bmRzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICBncmlkczogR3JpZHM7XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQ7XG4gIGJvdW5kcz86IEJvdW5kcztcbiAgbWluU2l6ZT86IFNpemU7XG4gIG1heFNpemU/OiBTaXplO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICByZXNpemFibGU/OiBib29sZWFuO1xuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBXaW5kb3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcblxuICBsZXQgeyBncmlkcyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGNoaWxkcmVuLFxuICAgIHRpdGxlLFxuICAgIGJvdW5kcyxcbiAgICBtaW5TaXplLFxuICAgIG1heFNpemUsXG4gICAgZHJhZ2dhYmxlLFxuICAgIHJlc2l6YWJsZSxcbiAgICBtaW5pbWl6YWJsZSxcbiAgICBtYXhpbWl6YWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICB0YXNrYmFyLFxuICAgIHN0ZXAsXG4gICAgYnJlYWtQb2ludHMsXG4gICAgZ3JpZHNHYXAsXG4gICAgZ3JpZHNXaWR0aCxcbiAgICBncmlkc0hlaWdodCxcbiAgICBoZWFkZXJSZWYsXG4gICAgaGVhZGVySGVpZ2h0LFxuICAgIHdpbmRvd1NpemVzLFxuICAgIHdpbmRvd1pJbmRleGVzLFxuICAgIHdpbmRvd0xvY2F0aW9ucyxcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXG4gICAgd2luZG93TWluaW1pemVzLFxuICAgIHNldFdpbmRvd1NpemVzLFxuICAgIHNldFdpbmRvd1pJbmRleGVzLFxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXG4gICAgc2V0V2luZG93TWluaW1pemVzLFxuICB9ID0gc3RhdGU7XG5cbiAgZ3JpZHMgPSB7XG4gICAgLi4uZ3JpZHMsXG4gICAgbW9iaWxlOiBncmlkcy5tb2JpbGUgfHwgZ3JpZHMuZGVza3RvcCxcbiAgICB0YWJsZXQ6IGdyaWRzLnRhYmxldCB8fCBncmlkcy5kZXNrdG9wLFxuICB9O1xuXG4gIGNvbnN0IHsgYnJlYWtwb2ludCB9ID0gdXNlQnJlYWtwb2ludChicmVha1BvaW50cywgXCJkZXNrdG9wXCIpO1xuXG4gIGNvbnN0IHsgc2l6ZSwgbG9jYXRpb24sIGxpbWl0cyB9ID0gdXNlV2luZG93KFxuICAgIGhlYWRlckhlaWdodCxcbiAgICB3aW5kb3dTaXplcyxcbiAgICBncmlkc0hlaWdodCxcbiAgICBncmlkc1dpZHRoLFxuICAgIGdyaWRzR2FwLFxuICAgIGJvdW5kcyxcbiAgICBncmlkcyxcbiAgICBpZCxcbiAgICBicmVha3BvaW50IGFzIHN0cmluZ1xuICApO1xuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XG4gICAgc2V0V2luZG93U2l6ZXMoe1xuICAgICAgLi4ud2luZG93U2l6ZXMsXG4gICAgICBbaWRdOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXG4gICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXG4gICAgICA6IFswXTtcblxuICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xuXG4gICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2lkXTogekluZGV4IH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcbiAgICBpZiAod2luZG93TWF4aW1pemVzW2lkXSB8fCB3aW5kb3dNaW5pbWl6ZXNbaWRdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0V2luZG93TG9jYXRpb25zKHtcbiAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcbiAgICAgIFtpZF06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgW2lkXTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxuICAgICAgW2lkXTogIXdpbmRvd01heGltaXplc1tpZF0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWluaW1pemUgPSAoKSA9PiB7XG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgIFtpZF06IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgc2V0V2luZG93TWluaW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcbiAgICAgIFtpZF06ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xuICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XG4gICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxuICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIGRlc2t0b3AgZGV2aWNlc1xuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiB3aW5kb3dNaW5pbWl6ZXNbaWRdXG4gICAgICAgICAgICA/IFwiYXV0b1wiXG4gICAgICAgICAgICA6IHdpbmRvd1NpemVzW2lkXVxuICAgICAgICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xuICAgICAgICAgICAgOiBcImF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiIG9uRG91YmxlQ2xpY2s9e2hhbmRsZU1heGltaXplfT5cbiAgICAgICAgICB7dGl0bGUgfHwgbnVsbH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XG4gICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XG5cbiAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXVxuICAgICAgPyBcIjEwMCVcIlxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcbiAgICAgIDogTWF0aC5tYXgoc2l6ZS53LCBtaW5TaXplPy53IHx8IDApO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXVxuICAgICAgPyBcIjEwMCVcIlxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgID8gd2luZG93U2l6ZXNbaWRdLmhcbiAgICAgIDogTWF0aC5tYXgoc2l6ZS5oLCBtaW5TaXplPy5oIHx8IDApO1xuXG4gICAgY29uc3QgbWluV2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy53O1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lmg7XG4gICAgY29uc3QgbWF4V2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy53O1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lmg7XG5cbiAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNbaWRdID8gKFxuICAgICAgPFJlc2l6YWJsZUJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cbiAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbc3RlcCwgc3RlcF0gfX1cbiAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cbiAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XG4gICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1Jlc2l6YWJsZUJveD5cbiAgICApIDogKFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0IH19PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIHtcbiAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcbiAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxuICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2lkXSxcbiAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2lkXSxcbiAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1tpZF0sXG4gICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1tpZF0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cbiAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxuICAgICAgZ3JpZD17W3N0ZXAsIHN0ZXBdfVxuICAgICAgc2NhbGU9ezF9XG4gICAgICBoYW5kbGU9XCIudHctZHJhZ2dhYmxlXCJcbiAgICAgIGJvdW5kcz17bGltaXRzIHx8IFwicGFyZW50XCJ9XG4gICAgICBvblN0YXJ0PXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgdG91Y2ggZGV2aWNlc1xuICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxuICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNbaWRdIH19XG4gICAgICA+XG4gICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cblxuICAgICAgICB7cmVuZGVyQm9keSgpfVxuICAgICAgPC9kaXY+XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59O1xuXG5XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogPGRpdj48L2Rpdj4sXG4gIGJvdW5kczogdW5kZWZpbmVkLFxuICBtaW5TaXplOiB7IHc6IDIwMCwgaDogMTAwIH0sXG4gIG1heFNpemU6IHVuZGVmaW5lZCxcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICByZXNpemFibGU6IHRydWUsXG4gIG1pbmltaXphYmxlOiB0cnVlLFxuICBtYXhpbWl6YWJsZTogdHJ1ZSxcbiAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxufSBhcyBQYXJ0aWFsPFByb3BzPjtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xuIl19