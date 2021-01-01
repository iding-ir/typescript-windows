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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJicmVha3BvaW50IiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImJwIiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImxpbWl0cyIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyTWluaW1pemUiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhlYWRlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZ3Jp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cEJDLEVBQUFBLFNBQVMsRUFBRSxJQU5TO0FBT3BCQyxFQUFBQSxXQUFXLEVBQUUsSUFQTztBQVFwQkMsRUFBQUEsV0FBVyxFQUFFLElBUk87QUFTcEI2RCxFQUFBQSxjQUFjLEVBQUU7QUFUSSxDQUF0QjtlQVllM0UsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB1c2VCcmVha3BvaW50IGZyb20gXCJ1c2UtYnJlYWtwb2ludFwiO1xuXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9XaW5kb3dzUHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbiAgZ3JpZHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xuICB9O1xuICB0aXRsZT86IEpTWC5FbGVtZW50O1xuICBib3VuZHM/OiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH07XG4gIG1pblNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIG1heFNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xuICBzdGFydE1pbmltaXplZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IFdpbmRvdyA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xuXG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBjaGlsZHJlbixcbiAgICBncmlkcyxcbiAgICB0aXRsZSxcbiAgICBib3VuZHMsXG4gICAgbWluU2l6ZSxcbiAgICBtYXhTaXplLFxuICAgIGRyYWdnYWJsZSxcbiAgICByZXNpemFibGUsXG4gICAgbWluaW1pemFibGUsXG4gICAgbWF4aW1pemFibGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdGFza2JhcixcbiAgICBzdGVwLFxuICAgIGJyZWFrUG9pbnRzLFxuICAgIGdyaWRzR2FwLFxuICAgIGdyaWRzV2lkdGgsXG4gICAgZ3JpZHNIZWlnaHQsXG4gICAgaGVhZGVyUmVmLFxuICAgIGhlYWRlckhlaWdodCxcbiAgICB3aW5kb3dTaXplcyxcbiAgICB3aW5kb3daSW5kZXhlcyxcbiAgICB3aW5kb3dMb2NhdGlvbnMsXG4gICAgd2luZG93TWF4aW1pemVzLFxuICAgIHdpbmRvd01pbmltaXplcyxcbiAgICBzZXRXaW5kb3dTaXplcyxcbiAgICBzZXRXaW5kb3daSW5kZXhlcyxcbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXG4gICAgc2V0V2luZG93TWF4aW1pemVzLFxuICAgIHNldFdpbmRvd01pbmltaXplcyxcbiAgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IHsgYnJlYWtwb2ludCwgbWF4V2lkdGgsIG1pbldpZHRoIH0gPSB1c2VCcmVha3BvaW50KFxuICAgIGJyZWFrUG9pbnRzLFxuICAgIFwiZGVza3RvcFwiXG4gICk7XG5cbiAgY29uc3QgYnAgPSBicmVha3BvaW50IGFzIHN0cmluZztcblxuICBjb25zdCBzaXplID0ge1xuICAgIHc6IGdyaWRzV2lkdGggKiBncmlkc1ticF0udyArIGdyaWRzR2FwICogKGdyaWRzW2JwXS53IC0gMSksXG4gICAgaDogaGVhZGVySGVpZ2h0XG4gICAgICA/IGdyaWRzSGVpZ2h0ICogZ3JpZHNbYnBdLmggKyBncmlkc0dhcCAqIChncmlkc1ticF0uaCAtIDEpIC0gaGVhZGVySGVpZ2h0XG4gICAgICA6IDAsXG4gIH07XG5cbiAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgeDogZ3JpZHNXaWR0aCAqIGdyaWRzW2JwXS54ICsgZ3JpZHNHYXAgKiAoZ3JpZHNbYnBdLnggKyAxKSxcbiAgICB5OiBncmlkc0hlaWdodCAqIGdyaWRzW2JwXS55ICsgZ3JpZHNHYXAgKiAoZ3JpZHNbYnBdLnkgKyAxKSxcbiAgfTtcblxuICBjb25zdCBsaW1pdHMgPSBib3VuZHMgJiYge1xuICAgIGxlZnQ6IGdyaWRzV2lkdGggKiBib3VuZHMubGVmdCArIGdyaWRzR2FwICogKGJvdW5kcy5sZWZ0ICsgMSksXG4gICAgdG9wOiBncmlkc0hlaWdodCAqIGJvdW5kcy50b3AgKyBncmlkc0dhcCAqIChib3VuZHMudG9wICsgMSksXG4gICAgcmlnaHQ6XG4gICAgICBncmlkc1dpZHRoICogYm91bmRzLnJpZ2h0ICtcbiAgICAgIGdyaWRzR2FwICogYm91bmRzLnJpZ2h0IC1cbiAgICAgICh3aW5kb3dTaXplc1tpZF0/LncgfHwgc2l6ZS53KSxcbiAgICBib3R0b206XG4gICAgICBncmlkc0hlaWdodCAqIGJvdW5kcy5ib3R0b20gK1xuICAgICAgZ3JpZHNHYXAgKiBib3VuZHMuYm90dG9tIC1cbiAgICAgICh3aW5kb3dTaXplc1tpZF0/LmggKyBoZWFkZXJIZWlnaHQgfHwgc2l6ZS5oICsgaGVhZGVySGVpZ2h0KSxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xuICAgIHNldFdpbmRvd1NpemVzKHtcbiAgICAgIC4uLndpbmRvd1NpemVzLFxuICAgICAgW2lkXTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxuICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxuICAgICAgOiBbMF07XG5cbiAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcblxuICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtpZF06IHpJbmRleCB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XG4gICAgaWYgKHdpbmRvd01heGltaXplc1tpZF0gfHwgd2luZG93TWluaW1pemVzW2lkXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XG4gICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXG4gICAgICBbaWRdOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgc2V0V2luZG93TWluaW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcbiAgICAgIFtpZF06IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgIFtpZF06ICF3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xuICAgIHNldFdpbmRvd01heGltaXplcyh7XG4gICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICBbaWRdOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXG4gICAgICBbaWRdOiAhd2luZG93TWluaW1pemVzW2lkXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1taW5pbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xuICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICByZWY9e2hlYWRlclJlZn1cbiAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiBkZXNrdG9wIGRldmljZXNcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2lkXVxuICAgICAgICAgICAgPyBcImF1dG9cIlxuICAgICAgICAgICAgOiB3aW5kb3dTaXplc1tpZF1cbiAgICAgICAgICAgID8gd2luZG93U2l6ZXNbaWRdLndcbiAgICAgICAgICAgIDogXCJhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGl0bGVcIiBvbkRvdWJsZUNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+XG4gICAgICAgICAge3RpdGxlIHx8IG51bGx9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxuICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxuXG4gICAgICAgICAge3JlbmRlck1heGltaXplKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1tpZF1cbiAgICAgID8gXCIxMDAlXCJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS53XG4gICAgICA6IE1hdGgubWF4KHNpemUudywgbWluU2l6ZT8udyB8fCAwKTtcblxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF1cbiAgICAgID8gXCIxMDAlXCJcbiAgICAgIDogd2luZG93U2l6ZXNbaWRdXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS5oXG4gICAgICA6IE1hdGgubWF4KHNpemUuaCwgbWluU2l6ZT8uaCB8fCAwKTtcblxuICAgIGNvbnN0IG1pbldpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8udztcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy5oO1xuICAgIGNvbnN0IG1heFdpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8udztcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy5oO1xuXG4gICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2lkXSA/IChcbiAgICAgIDxSZXNpemFibGVCb3hcbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XG4gICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW3N0ZXAsIHN0ZXBdIH19XG4gICAgICAgIG9uUmVzaXplPXtoYW5kbGVSZXNpemV9XG4gICAgICAgIG1pbkNvbnN0cmFpbnRzPXttaW5TaXplICYmIFttaW5TaXplPy53LCBtaW5TaXplLmhdfVxuICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9SZXNpemFibGVCb3g+XG4gICAgKSA6IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCwgbWluV2lkdGgsIG1pbkhlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCB7XG4gICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXG4gICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcbiAgICBcInR3LW1pbmltaXplLW9uXCI6IHdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1tpZF0sXG4gICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICAgIFwidHctbWF4aW1pemUtb2ZmXCI6ICF3aW5kb3dNYXhpbWl6ZXNbaWRdLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGVcbiAgICAgIGtleT17aWR9XG4gICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XG4gICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cbiAgICAgIGdyaWQ9e1tzdGVwLCBzdGVwXX1cbiAgICAgIHNjYWxlPXsxfVxuICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXG4gICAgICBib3VuZHM9e2xpbWl0cyB8fCBcInBhcmVudFwifVxuICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fSAvLyBIYXMgdG8gYmUgaGVyZSBiZWNhdXNlIG9mIHRvdWNoIGRldmljZXNcbiAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cbiAgICAgIGNhbmNlbD1cIi50dy1idXR0b25zXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2lkXSB9fVxuICAgICAgPlxuICAgICAgICB7cmVuZGVySGVhZGVyKCl9XG5cbiAgICAgICAge3JlbmRlckJvZHkoKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufTtcblxuV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IDxkaXY+PC9kaXY+LFxuICBib3VuZHM6IHVuZGVmaW5lZCxcbiAgbWluU2l6ZTogeyB3OiAyMDAsIGg6IDEwMCB9LFxuICBtYXhTaXplOiB1bmRlZmluZWQsXG4gIGRyYWdnYWJsZTogdHJ1ZSxcbiAgcmVzaXphYmxlOiB0cnVlLFxuICBtaW5pbWl6YWJsZTogdHJ1ZSxcbiAgbWF4aW1pemFibGU6IHRydWUsXG4gIHN0YXJ0TWluaW1pemVkOiBmYWxzZSxcbn0gYXMgUGFydGlhbDxQcm9wcz47XG5cbmV4cG9ydCBkZWZhdWx0IFdpbmRvdztcbiJdfQ==