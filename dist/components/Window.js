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
      title = props.title,
      content = props.content,
      grids = props.grids,
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
    h: gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight
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
    var width = windowMaximizes[id] ? "100%" : windowSizes[id] ? windowSizes[id].w : size.w;
    var height = windowMaximizes[id] ? "100%" : windowSizes[id] ? windowSizes[id].h : size.h;
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
    }, content) : /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight
      }
    }, content);
  };

  var classNames = (0, _clsx.default)("tw-window", id, {
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
    style: {
      zIndex: windowZIndexes[id]
    }
  }, renderHeader(), renderBody()));
};

Window.defaultProps = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiZ3JpZHMiLCJib3VuZHMiLCJtaW5TaXplIiwibWF4U2l6ZSIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzR2FwIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd1NpemVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJzaXplIiwidyIsImgiLCJsb2NhdGlvbiIsIngiLCJ5IiwibGltaXRzIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3aWR0aCIsImhlaWdodCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwic3RhcnRNaW5p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RjtBQW9CRCxDQWpPRDs7QUFtT0EvRCxNQUFNLENBQUNxRSxZQUFQLEdBQXNCO0FBQ3BCN0QsRUFBQUEsTUFBTSxFQUFFOEQsU0FEWTtBQUVwQjdELEVBQUFBLE9BQU8sRUFBRTtBQUFFd0IsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FGVztBQUdwQnhCLEVBQUFBLE9BQU8sRUFBRTRELFNBSFc7QUFJcEIzRCxFQUFBQSxTQUFTLEVBQUUsSUFKUztBQUtwQkMsRUFBQUEsU0FBUyxFQUFFLElBTFM7QUFNcEJDLEVBQUFBLFdBQVcsRUFBRSxJQU5PO0FBT3BCQyxFQUFBQSxXQUFXLEVBQUUsSUFQTztBQVFwQnlELEVBQUFBLGNBQWMsRUFBRTtBQVJJLENBQXRCO2VBV2V2RSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBKU1guRWxlbWVudDtcclxuICBjb250ZW50OiBKU1guRWxlbWVudDtcclxuICBncmlkczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBib3VuZHM/OiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHJpZ2h0OiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH07XHJcbiAgbWluU2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBtYXhTaXplPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcclxuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xyXG4gIHN0YXJ0TWluaW1pemVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgV2luZG93ID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGNvbnRlbnQsXHJcbiAgICBncmlkcyxcclxuICAgIGJvdW5kcyxcclxuICAgIG1pblNpemUsXHJcbiAgICBtYXhTaXplLFxyXG4gICAgZHJhZ2dhYmxlLFxyXG4gICAgcmVzaXphYmxlLFxyXG4gICAgbWluaW1pemFibGUsXHJcbiAgICBtYXhpbWl6YWJsZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRhc2tiYXIsXHJcbiAgICBncmlkLFxyXG4gICAgZ3JpZHNHYXAsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJSZWYsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICBzZXRXaW5kb3daSW5kZXhlcyxcclxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgIHNldFdpbmRvd01pbmltaXplcyxcclxuICB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IHNpemUgPSB7XHJcbiAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcclxuICAgIGg6IGdyaWRzSGVpZ2h0ICogZ3JpZHMuaCArIGdyaWRzR2FwICogKGdyaWRzLmggLSAxKSAtIGhlYWRlckhlaWdodCxcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgIHg6IGdyaWRzV2lkdGggKiBncmlkcy54ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueCArIDEpLFxyXG4gICAgeTogZ3JpZHNIZWlnaHQgKiBncmlkcy55ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueSArIDEpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxpbWl0cyA9IGJvdW5kcyAmJiB7XHJcbiAgICBsZWZ0OiBncmlkc1dpZHRoICogYm91bmRzLmxlZnQgKyBncmlkc0dhcCAqIChib3VuZHMubGVmdCArIDEpLFxyXG4gICAgdG9wOiBncmlkc0hlaWdodCAqIGJvdW5kcy50b3AgKyBncmlkc0dhcCAqIChib3VuZHMudG9wICsgMSksXHJcbiAgICByaWdodDpcclxuICAgICAgZ3JpZHNXaWR0aCAqIGJvdW5kcy5yaWdodCArXHJcbiAgICAgIGdyaWRzR2FwICogYm91bmRzLnJpZ2h0IC1cclxuICAgICAgKHdpbmRvd1NpemVzW2lkXT8udyB8fCBzaXplLncpLFxyXG4gICAgYm90dG9tOlxyXG4gICAgICBncmlkc0hlaWdodCAqIGJvdW5kcy5ib3R0b20gK1xyXG4gICAgICBncmlkc0dhcCAqIGJvdW5kcy5ib3R0b20gLVxyXG4gICAgICAod2luZG93U2l6ZXNbaWRdPy5oICsgaGVhZGVySGVpZ2h0IHx8IHNpemUuaCArIGhlYWRlckhlaWdodCksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgLi4ud2luZG93U2l6ZXMsXHJcbiAgICAgIFtpZF06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXHJcbiAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgOiBbMF07XHJcblxyXG4gICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XHJcblxyXG4gICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2lkXTogekluZGV4IH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNbaWRdIHx8IHdpbmRvd01pbmltaXplc1tpZF0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgW2lkXTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIFtpZF06IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICBbaWRdOiAhd2luZG93TWF4aW1pemVzW2lkXSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICBbaWRdOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgW2lkXTogIXdpbmRvd01pbmltaXplc1tpZF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICApIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XHJcbiAgICApIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XHJcbiAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XHJcbiAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XHJcbiAgICAgICAgb25Nb3VzZURvd249e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiBkZXNrdG9wIGRldmljZXNcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgd2lkdGg6IHdpbmRvd01pbmltaXplc1tpZF1cclxuICAgICAgICAgICAgPyBcImF1dG9cIlxyXG4gICAgICAgICAgICA6IHdpbmRvd1NpemVzW2lkXVxyXG4gICAgICAgICAgICA/IHdpbmRvd1NpemVzW2lkXS53XHJcbiAgICAgICAgICAgIDogXCJhdXRvXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGl0bGVcIiBvbkRvdWJsZUNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+XHJcbiAgICAgICAgICB7dGl0bGUgfHwgbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cclxuXHJcbiAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1tpZF1cclxuICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxyXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS53XHJcbiAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF1cclxuICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICA6IHdpbmRvd1NpemVzW2lkXVxyXG4gICAgICA/IHdpbmRvd1NpemVzW2lkXS5oXHJcbiAgICAgIDogc2l6ZS5oO1xyXG5cclxuICAgIGNvbnN0IG1pbldpZHRoID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWluU2l6ZT8udztcclxuICAgIGNvbnN0IG1pbkhlaWdodCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lmg7XHJcbiAgICBjb25zdCBtYXhXaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1heFNpemU/Lnc7XHJcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy5oO1xyXG5cclxuICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1tpZF0gPyAoXHJcbiAgICAgIDxSZXNpemFibGVCb3hcclxuICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XHJcbiAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICBvblJlc2l6ZT17aGFuZGxlUmVzaXplfVxyXG4gICAgICAgIG1pbkNvbnN0cmFpbnRzPXttaW5TaXplICYmIFttaW5TaXplPy53LCBtaW5TaXplLmhdfVxyXG4gICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgKSA6IChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0LCBtaW5XaWR0aCwgbWluSGVpZ2h0LCBtYXhXaWR0aCwgbWF4SGVpZ2h0IH19PlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwgaWQsIHtcclxuICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxyXG4gICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcclxuICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2lkXSxcclxuICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxyXG4gICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNbaWRdLFxyXG4gICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhZ2dhYmxlXHJcbiAgICAgIGtleT17aWR9XHJcbiAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cclxuICAgICAgcG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1tpZF0gfHwgbG9jYXRpb259XHJcbiAgICAgIGdyaWQ9e1tncmlkLCBncmlkXX1cclxuICAgICAgc2NhbGU9ezF9XHJcbiAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxyXG4gICAgICBib3VuZHM9e2xpbWl0cyB8fCBcInBhcmVudFwifVxyXG4gICAgICBvblN0YXJ0PXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgdG91Y2ggZGV2aWNlc1xyXG4gICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgIGNhbmNlbD1cIi50dy1idXR0b25zXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNbaWRdIH19PlxyXG4gICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAge3JlbmRlckJvZHkoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RyYWdnYWJsZT5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcclxuICBib3VuZHM6IHVuZGVmaW5lZCxcclxuICBtaW5TaXplOiB7IHc6IDIwMCwgaDogMTAwIH0sXHJcbiAgbWF4U2l6ZTogdW5kZWZpbmVkLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICByZXNpemFibGU6IHRydWUsXHJcbiAgbWluaW1pemFibGU6IHRydWUsXHJcbiAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iXX0=