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
  console.log(id, grids);

  var _useBreakpoint = (0, _useBreakpoint2.default)(breakPoints, "desktop"),
      breakpoint = _useBreakpoint.breakpoint,
      maxWidth = _useBreakpoint.maxWidth,
      minWidth = _useBreakpoint.minWidth;

  var bp = breakpoint;
  var size = {
    w: gridsWidth * grids[bp].w + gridsGap * (grids[bp].w - 1),
    h: headerHeight ? gridsHeight * grids[bp].h + gridsGap * (grids[bp].h - 1) - headerHeight : 0
  };
  var location = {
    x: gridsWidth * grids[bp].x + gridsGap * (grids[bp].x + 1),
    y: gridsHeight * grids[bp].y + gridsGap * (grids[bp].y + 1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImdyaWRzIiwiaWQiLCJjaGlsZHJlbiIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJtb2JpbGUiLCJkZXNrdG9wIiwidGFibGV0IiwiY29uc29sZSIsImxvZyIsImJyZWFrcG9pbnQiLCJtYXhXaWR0aCIsIm1pbldpZHRoIiwiYnAiLCJzaXplIiwidyIsImgiLCJsb2NhdGlvbiIsIngiLCJ5IiwibGltaXRzIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJncmlkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwic3RhcnRNaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQWtCO0FBQUE7O0FBQUEsb0JBQ2IsdUJBQVdDLDZCQUFYLENBRGE7QUFBQSxNQUN2QkMsS0FEdUIsZUFDdkJBLEtBRHVCOztBQUFBLE1BR3pCQyxLQUh5QixHQUdmSCxLQUhlLENBR3pCRyxLQUh5QjtBQUFBLE1BTTdCQyxFQU42QixHQWdCM0JKLEtBaEIyQixDQU03QkksRUFONkI7QUFBQSxNQU83QkMsUUFQNkIsR0FnQjNCTCxLQWhCMkIsQ0FPN0JLLFFBUDZCO0FBQUEsTUFRN0JDLEtBUjZCLEdBZ0IzQk4sS0FoQjJCLENBUTdCTSxLQVI2QjtBQUFBLE1BUzdCQyxNQVQ2QixHQWdCM0JQLEtBaEIyQixDQVM3Qk8sTUFUNkI7QUFBQSxNQVU3QkMsT0FWNkIsR0FnQjNCUixLQWhCMkIsQ0FVN0JRLE9BVjZCO0FBQUEsTUFXN0JDLE9BWDZCLEdBZ0IzQlQsS0FoQjJCLENBVzdCUyxPQVg2QjtBQUFBLE1BWTdCQyxTQVo2QixHQWdCM0JWLEtBaEIyQixDQVk3QlUsU0FaNkI7QUFBQSxNQWE3QkMsU0FiNkIsR0FnQjNCWCxLQWhCMkIsQ0FhN0JXLFNBYjZCO0FBQUEsTUFjN0JDLFdBZDZCLEdBZ0IzQlosS0FoQjJCLENBYzdCWSxXQWQ2QjtBQUFBLE1BZTdCQyxXQWY2QixHQWdCM0JiLEtBaEIyQixDQWU3QmEsV0FmNkI7QUFBQSxNQW1CN0JDLE9BbkI2QixHQXFDM0JaLEtBckMyQixDQW1CN0JZLE9BbkI2QjtBQUFBLE1Bb0I3QkMsSUFwQjZCLEdBcUMzQmIsS0FyQzJCLENBb0I3QmEsSUFwQjZCO0FBQUEsTUFx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QUtHa0UsWUFBWSxFQUxmLEVBT0dFLFVBQVUsRUFQYixDQVpGLENBREY7QUF3QkQsQ0F4UEQ7O0FBMFBBekUsTUFBTSxDQUFDOEUsWUFBUCxHQUFzQjtBQUNwQnZFLEVBQUFBLEtBQUssZUFBRSx5Q0FEYTtBQUVwQkMsRUFBQUEsTUFBTSxFQUFFdUUsU0FGWTtBQUdwQnRFLEVBQUFBLE9BQU8sRUFBRTtBQUFFa0MsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIVztBQUlwQmxDLEVBQUFBLE9BQU8sRUFBRXFFLFNBSlc7QUFLcEJwRSxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsU0FBUyxFQUFFLElBTlM7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVBPO0FBUXBCQyxFQUFBQSxXQUFXLEVBQUUsSUFSTztBQVNwQmtFLEVBQUFBLGNBQWMsRUFBRTtBQVRJLENBQXRCO2VBWWVoRixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHVzZUJyZWFrcG9pbnQgZnJvbSBcInVzZS1icmVha3BvaW50XCI7XG5cbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xuICBncmlkczoge1xuICAgIFtrZXk6IHN0cmluZ106IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIH07XG4gIHRpdGxlPzogSlNYLkVsZW1lbnQ7XG4gIGJvdW5kcz86IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfTtcbiAgbWluU2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgbWF4U2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XG4gIHN0YXJ0TWluaW1pemVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgV2luZG93ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XG5cbiAgbGV0IHsgZ3JpZHMgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBjaGlsZHJlbixcbiAgICB0aXRsZSxcbiAgICBib3VuZHMsXG4gICAgbWluU2l6ZSxcbiAgICBtYXhTaXplLFxuICAgIGRyYWdnYWJsZSxcbiAgICByZXNpemFibGUsXG4gICAgbWluaW1pemFibGUsXG4gICAgbWF4aW1pemFibGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdGFza2JhcixcbiAgICBzdGVwLFxuICAgIGJyZWFrUG9pbnRzLFxuICAgIGdyaWRzR2FwLFxuICAgIGdyaWRzV2lkdGgsXG4gICAgZ3JpZHNIZWlnaHQsXG4gICAgaGVhZGVyUmVmLFxuICAgIGhlYWRlckhlaWdodCxcbiAgICB3aW5kb3dTaXplcyxcbiAgICB3aW5kb3daSW5kZXhlcyxcbiAgICB3aW5kb3dMb2NhdGlvbnMsXG4gICAgd2luZG93TWF4aW1pemVzLFxuICAgIHdpbmRvd01pbmltaXplcyxcbiAgICBzZXRXaW5kb3dTaXplcyxcbiAgICBzZXRXaW5kb3daSW5kZXhlcyxcbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXG4gICAgc2V0V2luZG93TWF4aW1pemVzLFxuICAgIHNldFdpbmRvd01pbmltaXplcyxcbiAgfSA9IHN0YXRlO1xuXG4gIGdyaWRzID0ge1xuICAgIC4uLmdyaWRzLFxuICAgIG1vYmlsZTogZ3JpZHMubW9iaWxlIHx8IGdyaWRzLmRlc2t0b3AsXG4gICAgdGFibGV0OiBncmlkcy50YWJsZXQgfHwgZ3JpZHMuZGVza3RvcCxcbiAgfTtcblxuICBjb25zb2xlLmxvZyhpZCwgZ3JpZHMpO1xuXG4gIGNvbnN0IHsgYnJlYWtwb2ludCwgbWF4V2lkdGgsIG1pbldpZHRoIH0gPSB1c2VCcmVha3BvaW50KFxuICAgIGJyZWFrUG9pbnRzLFxuICAgIFwiZGVza3RvcFwiXG4gICk7XG5cbiAgY29uc3QgYnAgPSBicmVha3BvaW50IGFzIHN0cmluZztcblxuICBjb25zdCBzaXplID0ge1xuICAgIHc6IGdyaWRzV2lkdGggKiBncmlkc1ticF0udyArIGdyaWRzR2FwICogKGdyaWRzW2JwXS53IC0gMSksXG4gICAgaDogaGVhZGVySGVpZ2h0XG4gICAgICA/IGdyaWRzSGVpZ2h0ICogZ3JpZHNbYnBdLmggKyBncmlkc0dhcCAqIChncmlkc1ticF0uaCAtIDEpIC0gaGVhZGVySGVpZ2h0XG4gICAgICA6IDAsXG4gIH07XG5cbiAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgeDogZ3JpZHNXaWR0aCAqIGdyaWRzW2JwXS54ICsgZ3JpZHNHYXAgKiAoZ3JpZHNbYnBdLnggKyAxKSxcbiAgICB5OiBncmlkc0hlaWdodCAqIGdyaWRzW2JwXS55ICsgZ3JpZHNHYXAgKiAoZ3JpZHNbYnBdLnkgKyAxKSxcbiAgfTtcblxuICBjb25zdCBsaW1pdHMgPSBib3VuZHMgJiYge1xuICAgIGxlZnQ6IGdyaWRzV2lkdGggKiBib3VuZHMubGVmdCArIGdyaWRzR2FwICogKGJvdW5kcy5sZWZ0ICsgMSksXG4gICAgdG9wOiBncmlkc0hlaWdodCAqIGJvdW5kcy50b3AgKyBncmlkc0dhcCAqIChib3VuZHMudG9wICsgMSksXG4gICAgcmlnaHQ6XG4gICAgICBncmlkc1dpZHRoICogYm91bmRzLnJpZ2h0ICtcbiAgICAgIGdyaWRzR2FwICogYm91bmRzLnJpZ2h0IC1cbiAgICAgICh3aW5kb3dTaXplc1tpZF0/LncgfHwgc2l6ZS53KSxcbiAgICBib3R0b206XG4gICAgICBncmlkc0hlaWdodCAqIGJvdW5kcy5ib3R0b20gK1xuICAgICAgZ3JpZHNHYXAgKiBib3VuZHMuYm90dG9tIC1cbiAgICAgICh3aW5kb3dTaXplc1tpZF0/LmggKyBoZWFkZXJIZWlnaHQgfHwgc2l6ZS5oICsgaGVhZGVySGVpZ2h0KSxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xuICAgIHNldFdpbmRvd1NpemVzKHtcbiAgICAgIC4uLndpbmRvd1NpemVzLFxuICAgICAgW2lkXTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxuICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxuICAgICAgOiBbMF07XG5cbiAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcblxuICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtpZF06IHpJbmRleCB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XG4gICAgaWYgKHdpbmRvd01heGltaXplc1tpZF0gfHwgd2luZG93TWluaW1pemVzW2lkXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XG4gICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXG4gICAgICBbaWRdOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgc2V0V2luZG93TWluaW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcbiAgICAgIFtpZF06IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgIFtpZF06ICF3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xuICAgIHNldFdpbmRvd01heGltaXplcyh7XG4gICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICBbaWRdOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXG4gICAgICBbaWRdOiAhd2luZG93TWluaW1pemVzW2lkXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1taW5pbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xuICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICByZWY9e2hlYWRlclJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiBkZXNrdG9wIGRldmljZXNcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2lkXVxuICAgICAgICAgICAgPyBcImF1dG9cIlxuICAgICAgICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgICAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcbiAgICAgICAgICAgIDogXCJhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGl0bGVcIiBvbkRvdWJsZUNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+XG4gICAgICAgICAge3RpdGxlIHx8IG51bGx9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxuICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxuXG4gICAgICAgICAge3JlbmRlck1heGltaXplKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1tpZF1cbiAgICAgID8gXCIxMDAlXCJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS53XG4gICAgICA6IE1hdGgubWF4KHNpemUudywgbWluU2l6ZT8udyB8fCAwKTtcblxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF1cbiAgICAgID8gXCIxMDAlXCJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS5oXG4gICAgICA6IE1hdGgubWF4KHNpemUuaCwgbWluU2l6ZT8uaCB8fCAwKTtcblxuICAgIGNvbnN0IG1pbldpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8udztcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy5oO1xuICAgIGNvbnN0IG1heFdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8udztcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy5oO1xuXG4gICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2lkXSA/IChcbiAgICAgIDxSZXNpemFibGVCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XG4gICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW3N0ZXAsIHN0ZXBdIH19XG4gICAgICAgIG9uUmVzaXplPXtoYW5kbGVSZXNpemV9XG4gICAgICAgIG1pbkNvbnN0cmFpbnRzPXttaW5TaXplICYmIFttaW5TaXplPy53LCBtaW5TaXplLmhdfVxuICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9SZXNpemFibGVCb3g+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCB7XG4gICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXG4gICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcbiAgICBcInR3LW1pbmltaXplLW9uXCI6IHdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICAgIFwidHctbWF4aW1pemUtb2ZmXCI6ICF3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGVcbiAgICAgIGtleT17aWR9XG4gICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XG4gICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cbiAgICAgIGdyaWQ9e1tzdGVwLCBzdGVwXX1cbiAgICAgIHNjYWxlPXsxfVxuICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXG4gICAgICBib3VuZHM9e2xpbWl0cyB8fCBcInBhcmVudFwifVxuICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIHRvdWNoIGRldmljZXNcbiAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cbiAgICAgIGNhbmNlbD1cIi50dy1idXR0b25zXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2lkXSB9fVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySGVhZGVyKCl9XG5cbiAgICAgICAge3JlbmRlckJvZHkoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufTtcblxuV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IDxkaXY+PC9kaXY+LFxuICBib3VuZHM6IHVuZGVmaW5lZCxcbiAgbWluU2l6ZTogeyB3OiAyMDAsIGg6IDEwMCB9LFxuICBtYXhTaXplOiB1bmRlZmluZWQsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBtaW5pbWl6YWJsZTogdHJ1ZSxcbiAgbWF4aW1pemFibGU6IHRydWUsXG4gIHN0YXJ0TWluaW1pemVkOiBmYWxzZSxcbn0gYXMgUGFydGlhbDxQcm9wcz47XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcbiJdfQ==