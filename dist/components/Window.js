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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvdy50c3giXSwibmFtZXMiOlsiV2luZG93IiwicHJvcHMiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsImlkIiwiY2hpbGRyZW4iLCJncmlkcyIsInRpdGxlIiwiYm91bmRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGFza2JhciIsImdyaWQiLCJncmlkc0dhcCIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImhlYWRlckhlaWdodCIsIndpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dTaXplcyIsInNldFdpbmRvd1pJbmRleGVzIiwic2V0V2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TWF4aW1pemVzIiwic2V0V2luZG93TWluaW1pemVzIiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImxpbWl0cyIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyTWluaW1pemUiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhlYWRlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsInN0YXJ0TWluaW1pemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFrQjtBQUFBOztBQUFBLG9CQUNiLHVCQUFXQyw2QkFBWCxDQURhO0FBQUEsTUFDdkJDLEtBRHVCLGVBQ3ZCQSxLQUR1Qjs7QUFBQSxNQUk3QkMsRUFKNkIsR0FlM0JILEtBZjJCLENBSTdCRyxFQUo2QjtBQUFBLE1BSzdCQyxRQUw2QixHQWUzQkosS0FmMkIsQ0FLN0JJLFFBTDZCO0FBQUEsTUFNN0JDLEtBTjZCLEdBZTNCTCxLQWYyQixDQU03QkssS0FONkI7QUFBQSxNQU83QkMsS0FQNkIsR0FlM0JOLEtBZjJCLENBTzdCTSxLQVA2QjtBQUFBLE1BUTdCQyxNQVI2QixHQWUzQlAsS0FmMkIsQ0FRN0JPLE1BUjZCO0FBQUEsTUFTN0JDLE9BVDZCLEdBZTNCUixLQWYyQixDQVM3QlEsT0FUNkI7QUFBQSxNQVU3QkMsT0FWNkIsR0FlM0JULEtBZjJCLENBVTdCUyxPQVY2QjtBQUFBLE1BVzdCQyxTQVg2QixHQWUzQlYsS0FmMkIsQ0FXN0JVLFNBWDZCO0FBQUEsTUFZN0JDLFNBWjZCLEdBZTNCWCxLQWYyQixDQVk3QlcsU0FaNkI7QUFBQSxNQWE3QkMsV0FiNkIsR0FlM0JaLEtBZjJCLENBYTdCWSxXQWI2QjtBQUFBLE1BYzdCQyxXQWQ2QixHQWUzQmIsS0FmMkIsQ0FjN0JhLFdBZDZCO0FBQUEsTUFrQjdCQyxPQWxCNkIsR0FtQzNCWixLQW5DMkIsQ0FrQjdCWSxPQWxCNkI7QUFBQSxNQW1CN0JDLElBbkI2QixHQW1DM0JiLEtBbkMyQixDQW1CN0JhLElBbkI2QjtBQUFBLE1Bb0I3QkMsUUFwQjZCLEdBbUMzQmQsS0FuQzJCLENBb0I3QmMsUUFwQjZCO0FBQUEsTUFxQjdCQyxVQXJCNkIsR0FtQzNCZixLQW5DMkIsQ0FxQjdCZSxVQXJCNkI7QUFBQSxNQXNCN0JDLFdBdEI2QixHQW1DM0JoQixLQW5DMkIsQ0FzQjdCZ0IsV0F0QjZCO0FBQUEsTUF1QjdCQyxTQXZCNkIsR0FtQzNCakIsS0FuQzJCLENBdUI3QmlCLFNBdkI2QjtBQUFBLE1Bd0I3QkMsWUF4QjZCLEdBbUMzQmxCLEtBbkMyQixDQXdCN0JrQixZQXhCNkI7QUFBQSxNQXlCN0JDLFdBekI2QixHQW1DM0JuQixLQW5DMkIsQ0F5QjdCbUIsV0F6QjZCO0FBQUEsTUEwQjdCQyxjQTFCNkIsR0FtQzNCcEIsS0FuQzJCLENBMEI3Qm9CLGNBMUI2QjtBQUFBLE1BMkI3QkMsZUEzQjZCLEdBbUMzQnJCLEtBbkMyQixDQTJCN0JxQixlQTNCNkI7QUFBQSxNQTRCN0JDLGVBNUI2QixHQW1DM0J0QixLQW5DMkIsQ0E0QjdCc0IsZUE1QjZCO0FBQUEsTUE2QjdCQyxlQTdCNkIsR0FtQzNCdkIsS0FuQzJCLENBNkI3QnVCLGVBN0I2QjtBQUFBLE1BOEI3QkMsY0E5QjZCLEdBbUMzQnhCLEtBbkMyQixDQThCN0J3QixjQTlCNkI7QUFBQSxNQStCN0JDLGlCQS9CNkIsR0FtQzNCekIsS0FuQzJCLENBK0I3QnlCLGlCQS9CNkI7QUFBQSxNQWdDN0JDLGtCQWhDNkIsR0FtQzNCMUIsS0FuQzJCLENBZ0M3QjBCLGtCQWhDNkI7QUFBQSxNQWlDN0JDLGtCQWpDNkIsR0FtQzNCM0IsS0FuQzJCLENBaUM3QjJCLGtCQWpDNkI7QUFBQSxNQWtDN0JDLGtCQWxDNkIsR0FtQzNCNUIsS0FuQzJCLENBa0M3QjRCLGtCQWxDNkI7QUFxQy9CLE1BQU1DLElBQUksR0FBRztBQUNYQyxJQUFBQSxDQUFDLEVBQUVmLFVBQVUsR0FBR1osS0FBSyxDQUFDMkIsQ0FBbkIsR0FBdUJoQixRQUFRLElBQUlYLEtBQUssQ0FBQzJCLENBQU4sR0FBVSxDQUFkLENBRHZCO0FBRVhDLElBQUFBLENBQUMsRUFBRWIsWUFBWSxHQUNYRixXQUFXLEdBQUdiLEtBQUssQ0FBQzRCLENBQXBCLEdBQXdCakIsUUFBUSxJQUFJWCxLQUFLLENBQUM0QixDQUFOLEdBQVUsQ0FBZCxDQUFoQyxHQUFtRGIsWUFEeEMsR0FFWDtBQUpPLEdBQWI7QUFPQSxNQUFNYyxRQUFRLEdBQUc7QUFDZkMsSUFBQUEsQ0FBQyxFQUFFbEIsVUFBVSxHQUFHWixLQUFLLENBQUM4QixDQUFuQixHQUF1Qm5CLFFBQVEsSUFBSVgsS0FBSyxDQUFDOEIsQ0FBTixHQUFVLENBQWQsQ0FEbkI7QUFFZkMsSUFBQUEsQ0FBQyxFQUFFbEIsV0FBVyxHQUFHYixLQUFLLENBQUMrQixDQUFwQixHQUF3QnBCLFFBQVEsSUFBSVgsS0FBSyxDQUFDK0IsQ0FBTixHQUFVLENBQWQ7QUFGcEIsR0FBakI7QUFLQSxNQUFNQyxNQUFNLEdBQUc5QixNQUFNLElBQUk7QUFDdkIrQixJQUFBQSxJQUFJLEVBQUVyQixVQUFVLEdBQUdWLE1BQU0sQ0FBQytCLElBQXBCLEdBQTJCdEIsUUFBUSxJQUFJVCxNQUFNLENBQUMrQixJQUFQLEdBQWMsQ0FBbEIsQ0FEbEI7QUFFdkJDLElBQUFBLEdBQUcsRUFBRXJCLFdBQVcsR0FBR1gsTUFBTSxDQUFDZ0MsR0FBckIsR0FBMkJ2QixRQUFRLElBQUlULE1BQU0sQ0FBQ2dDLEdBQVAsR0FBYSxDQUFqQixDQUZqQjtBQUd2QkMsSUFBQUEsS0FBSyxFQUNIdkIsVUFBVSxHQUFHVixNQUFNLENBQUNpQyxLQUFwQixHQUNBeEIsUUFBUSxHQUFHVCxNQUFNLENBQUNpQyxLQURsQixJQUVDLG9CQUFBbkIsV0FBVyxDQUFDbEIsRUFBRCxDQUFYLG9FQUFpQjZCLENBQWpCLEtBQXNCRCxJQUFJLENBQUNDLENBRjVCLENBSnFCO0FBT3ZCUyxJQUFBQSxNQUFNLEVBQ0p2QixXQUFXLEdBQUdYLE1BQU0sQ0FBQ2tDLE1BQXJCLEdBQ0F6QixRQUFRLEdBQUdULE1BQU0sQ0FBQ2tDLE1BRGxCLElBRUMscUJBQUFwQixXQUFXLENBQUNsQixFQUFELENBQVgsc0VBQWlCOEIsQ0FBakIsSUFBcUJiLFlBQXJCLElBQXFDVyxJQUFJLENBQUNFLENBQUwsR0FBU2IsWUFGL0M7QUFScUIsR0FBekI7O0FBYUEsTUFBTXNCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBb0JDLElBQXBCLEVBQWlEO0FBQ3BFbEIsSUFBQUEsY0FBYyxpQ0FDVEwsV0FEUywyQkFFWGxCLEVBRlcsRUFFTjtBQUFFNkIsTUFBQUEsQ0FBQyxFQUFFWSxJQUFJLENBQUNiLElBQUwsQ0FBVWMsS0FBZjtBQUFzQlosTUFBQUEsQ0FBQyxFQUFFVyxJQUFJLENBQUNiLElBQUwsQ0FBVWU7QUFBbkMsS0FGTSxHQUFkO0FBSUQsR0FMRDs7QUFPQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM1QixjQUFkLEVBQThCNkIsTUFBOUIsR0FDVEYsTUFBTSxDQUFDQyxNQUFQLENBQWM1QixjQUFkLENBRFMsR0FFVCxDQUFDLENBQUQsQ0FGSjtBQUlBLFFBQU04QixNQUFNLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxPQUFBRCxJQUFJLHFCQUFTTCxJQUFULEVBQUosR0FBa0MsQ0FBakQ7QUFFQXJCLElBQUFBLGlCQUFpQixpQ0FBTUwsY0FBTiwyQkFBdUJuQixFQUF2QixFQUE0QmlELE1BQTVCLEdBQWpCO0FBQ0QsR0FSRDs7QUFVQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDWixDQUFELEVBQW9CQyxJQUFwQixFQUE0QztBQUM3RCxRQUFJcEIsZUFBZSxDQUFDckIsRUFBRCxDQUFmLElBQXVCc0IsZUFBZSxDQUFDdEIsRUFBRCxDQUExQyxFQUFnRDtBQUM5QztBQUNEOztBQUVEeUIsSUFBQUEsa0JBQWtCLGlDQUNiTCxlQURhLDJCQUVmcEIsRUFGZSxFQUVWO0FBQUVnQyxNQUFBQSxDQUFDLEVBQUVTLElBQUksQ0FBQ1QsQ0FBVjtBQUFhQyxNQUFBQSxDQUFDLEVBQUVRLElBQUksQ0FBQ1I7QUFBckIsS0FGVSxHQUFsQjtBQUlELEdBVEQ7O0FBV0EsTUFBTW9CLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjFCLElBQUFBLGtCQUFrQixpQ0FDYkwsZUFEYSwyQkFFZnRCLEVBRmUsRUFFVixLQUZVLEdBQWxCO0FBS0EwQixJQUFBQSxrQkFBa0IsaUNBQ2JMLGVBRGEsMkJBRWZyQixFQUZlLEVBRVYsQ0FBQ3FCLGVBQWUsQ0FBQ3JCLEVBQUQsQ0FGTixHQUFsQjtBQUlELEdBVkQ7O0FBWUEsTUFBTXNELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQjVCLElBQUFBLGtCQUFrQixpQ0FDYkwsZUFEYSwyQkFFZnJCLEVBRmUsRUFFVixLQUZVLEdBQWxCO0FBS0EyQixJQUFBQSxrQkFBa0IsaUNBQ2JMLGVBRGEsMkJBRWZ0QixFQUZlLEVBRVYsQ0FBQ3NCLGVBQWUsQ0FBQ3RCLEVBQUQsQ0FGTixHQUFsQjtBQUlELEdBVkQ7O0FBWUEsTUFBTXVELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixXQUFPOUMsV0FBVyxnQkFDaEI7QUFBSyxNQUFBLFNBQVMsRUFBQyx1QkFBZjtBQUF1QyxNQUFBLE9BQU8sRUFBRTZDO0FBQWhELE1BRGdCLEdBRWQsSUFGSjtBQUdELEdBSkQ7O0FBTUEsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFdBQU85QyxXQUFXLGdCQUNoQjtBQUFLLE1BQUEsU0FBUyxFQUFDLHVCQUFmO0FBQXVDLE1BQUEsT0FBTyxFQUFFMkM7QUFBaEQsTUFEZ0IsR0FFZCxJQUZKO0FBR0QsR0FKRDs7QUFNQSxNQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFFBQU1DLFVBQVUsR0FBRyxtQkFBSyxXQUFMLEVBQWtCO0FBQ25DLHNCQUFnQm5EO0FBRG1CLEtBQWxCLENBQW5CO0FBSUEsd0JBQ0U7QUFDRSxNQUFBLFNBQVMsRUFBRW1ELFVBRGI7QUFFRSxNQUFBLEdBQUcsRUFBRTFDLFNBRlA7QUFHRSxNQUFBLFdBQVcsRUFBRTRCLFlBSGYsQ0FHNkI7QUFIN0I7QUFJRSxNQUFBLEtBQUssRUFBRTtBQUNMRixRQUFBQSxLQUFLLEVBQUVwQixlQUFlLENBQUN0QixFQUFELENBQWYsR0FDSCxNQURHLEdBRUhrQixXQUFXLENBQUNsQixFQUFELENBQVgsR0FDQWtCLFdBQVcsQ0FBQ2xCLEVBQUQsQ0FBWCxDQUFnQjZCLENBRGhCLEdBRUE7QUFMQztBQUpULG9CQVlFO0FBQUssTUFBQSxTQUFTLEVBQUMsVUFBZjtBQUEwQixNQUFBLGFBQWEsRUFBRXdCO0FBQXpDLE9BQ0dsRCxLQUFLLElBQUksSUFEWixDQVpGLGVBZ0JFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHb0QsY0FBYyxFQURqQixFQUdHQyxjQUFjLEVBSGpCLENBaEJGLENBREY7QUF3QkQsR0E3QkQ7O0FBK0JBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsd0JBQU87QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQTBCQyxrQkFBa0IsRUFBNUMsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLFFBQU1sQixLQUFLLEdBQUdyQixlQUFlLENBQUNyQixFQUFELENBQWYsR0FDVixNQURVLEdBRVZrQixXQUFXLENBQUNsQixFQUFELENBQVgsR0FDQWtCLFdBQVcsQ0FBQ2xCLEVBQUQsQ0FBWCxDQUFnQjZCLENBRGhCLEdBRUFELElBQUksQ0FBQ0MsQ0FKVDtBQU1BLFFBQU1jLE1BQU0sR0FBR3RCLGVBQWUsQ0FBQ3JCLEVBQUQsQ0FBZixHQUNYLE1BRFcsR0FFWGtCLFdBQVcsQ0FBQ2xCLEVBQUQsQ0FBWCxHQUNBa0IsV0FBVyxDQUFDbEIsRUFBRCxDQUFYLENBQWdCOEIsQ0FEaEIsR0FFQUYsSUFBSSxDQUFDRSxDQUpUO0FBTUEsUUFBTStCLFFBQVEsR0FBR3hDLGVBQWUsQ0FBQ3JCLEVBQUQsQ0FBZixHQUFzQixNQUF0QixHQUErQkssT0FBL0IsYUFBK0JBLE9BQS9CLHVCQUErQkEsT0FBTyxDQUFFd0IsQ0FBekQ7QUFDQSxRQUFNaUMsU0FBUyxHQUFHekMsZUFBZSxDQUFDckIsRUFBRCxDQUFmLEdBQXNCLE1BQXRCLEdBQStCSyxPQUEvQixhQUErQkEsT0FBL0IsdUJBQStCQSxPQUFPLENBQUV5QixDQUExRDtBQUNBLFFBQU1pQyxRQUFRLEdBQUcxQyxlQUFlLENBQUNyQixFQUFELENBQWYsR0FBc0IsTUFBdEIsR0FBK0JNLE9BQS9CLGFBQStCQSxPQUEvQix1QkFBK0JBLE9BQU8sQ0FBRXVCLENBQXpEO0FBQ0EsUUFBTW1DLFNBQVMsR0FBRzNDLGVBQWUsQ0FBQ3JCLEVBQUQsQ0FBZixHQUFzQixNQUF0QixHQUErQk0sT0FBL0IsYUFBK0JBLE9BQS9CLHVCQUErQkEsT0FBTyxDQUFFd0IsQ0FBMUQ7QUFFQSxXQUFPdEIsU0FBUyxJQUFJLENBQUNhLGVBQWUsQ0FBQ3JCLEVBQUQsQ0FBN0IsZ0JBQ0wsNkJBQUMsNEJBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRTBDLEtBRFQ7QUFFRSxNQUFBLE1BQU0sRUFBRUMsTUFGVjtBQUdFLE1BQUEsYUFBYSxFQUFFLENBQUMsSUFBRCxDQUhqQjtBQUlFLE1BQUEsYUFBYSxFQUFFO0FBQUUvQixRQUFBQSxJQUFJLEVBQUUsQ0FBQ0EsSUFBRCxFQUFPQSxJQUFQO0FBQVIsT0FKakI7QUFLRSxNQUFBLFFBQVEsRUFBRTJCLFlBTFo7QUFNRSxNQUFBLGNBQWMsRUFBRWxDLE9BQU8sSUFBSSxDQUFDQSxPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRXdCLENBQVYsRUFBYXhCLE9BQU8sQ0FBQ3lCLENBQXJCLENBTjdCO0FBT0UsTUFBQSxjQUFjLEVBQUV4QixPQUFPLElBQUksQ0FBQ0EsT0FBRCxhQUFDQSxPQUFELHVCQUFDQSxPQUFPLENBQUV1QixDQUFWLEVBQWF2QixPQUFPLENBQUN3QixDQUFyQjtBQVA3QixPQVNHN0IsUUFUSCxDQURLLGdCQWFMO0FBQUssTUFBQSxLQUFLLEVBQUU7QUFBRXlDLFFBQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTQyxRQUFBQSxNQUFNLEVBQU5BLE1BQVQ7QUFBaUJrQixRQUFBQSxRQUFRLEVBQVJBLFFBQWpCO0FBQTJCQyxRQUFBQSxTQUFTLEVBQVRBLFNBQTNCO0FBQXNDQyxRQUFBQSxRQUFRLEVBQVJBLFFBQXRDO0FBQWdEQyxRQUFBQSxTQUFTLEVBQVRBO0FBQWhEO0FBQVosT0FDRy9ELFFBREgsQ0FiRjtBQWlCRCxHQW5DRDs7QUFxQ0EsTUFBTXlELFVBQVUsR0FBRyxtQkFBSyxXQUFMLEVBQWtCO0FBQ25DLHFCQUFpQi9DLE9BRGtCO0FBRW5DLHNCQUFrQixDQUFDQSxPQUZnQjtBQUduQyxzQkFBa0JXLGVBQWUsQ0FBQ3RCLEVBQUQsQ0FIRTtBQUluQyx1QkFBbUIsQ0FBQ3NCLGVBQWUsQ0FBQ3RCLEVBQUQsQ0FKQTtBQUtuQyxzQkFBa0JxQixlQUFlLENBQUNyQixFQUFELENBTEU7QUFNbkMsdUJBQW1CLENBQUNxQixlQUFlLENBQUNyQixFQUFEO0FBTkEsR0FBbEIsQ0FBbkI7QUFTQSxzQkFDRSw2QkFBQyx1QkFBRDtBQUNFLElBQUEsR0FBRyxFQUFFQSxFQURQO0FBRUUsSUFBQSxlQUFlLEVBQUVvQixlQUFlLENBQUNwQixFQUFELENBQWYsSUFBdUIrQixRQUYxQztBQUdFLElBQUEsUUFBUSxFQUFFWCxlQUFlLENBQUNwQixFQUFELENBQWYsSUFBdUIrQixRQUhuQztBQUlFLElBQUEsSUFBSSxFQUFFLENBQUNuQixJQUFELEVBQU9BLElBQVAsQ0FKUjtBQUtFLElBQUEsS0FBSyxFQUFFLENBTFQ7QUFNRSxJQUFBLE1BQU0sRUFBQyxlQU5UO0FBT0UsSUFBQSxNQUFNLEVBQUVzQixNQUFNLElBQUksUUFQcEI7QUFRRSxJQUFBLE9BQU8sRUFBRVUsWUFSWCxDQVF5QjtBQVJ6QjtBQVNFLElBQUEsTUFBTSxFQUFFUSxVQVRWO0FBVUUsSUFBQSxNQUFNLEVBQUM7QUFWVCxrQkFZRTtBQUNFLElBQUEsU0FBUyxFQUFFTSxVQURiO0FBRUUsSUFBQSxFQUFFLEVBQUUxRCxFQUZOO0FBR0UsSUFBQSxLQUFLLEVBQUU7QUFBRWlELE1BQUFBLE1BQU0sRUFBRTlCLGNBQWMsQ0FBQ25CLEVBQUQ7QUFBeEI7QUFIVCxLQUtHeUQsWUFBWSxFQUxmLEVBT0dFLFVBQVUsRUFQYixDQVpGLENBREY7QUF3QkQsQ0F2T0Q7O0FBeU9BL0QsTUFBTSxDQUFDcUUsWUFBUCxHQUFzQjtBQUNwQjlELEVBQUFBLEtBQUssZUFBRSx5Q0FEYTtBQUVwQkMsRUFBQUEsTUFBTSxFQUFFOEQsU0FGWTtBQUdwQjdELEVBQUFBLE9BQU8sRUFBRTtBQUFFd0IsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIVztBQUlwQnhCLEVBQUFBLE9BQU8sRUFBRTRELFNBSlc7QUFLcEIzRCxFQUFBQSxTQUFTLEVBQUUsSUFMUztBQU1wQkMsRUFBQUEsU0FBUyxFQUFFLElBTlM7QUFPcEJDLEVBQUFBLFdBQVcsRUFBRSxJQVBPO0FBUXBCQyxFQUFBQSxXQUFXLEVBQUUsSUFSTztBQVNwQnlELEVBQUFBLGNBQWMsRUFBRTtBQVRJLENBQXRCO2VBWWV2RSxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxuICBncmlkczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICB0aXRsZT86IEpTWC5FbGVtZW50O1xyXG4gIGJvdW5kcz86IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgcmlnaHQ6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfTtcclxuICBtaW5TaXplPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIG1heFNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3cgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZ3JpZHMsXHJcbiAgICB0aXRsZSxcclxuICAgIGJvdW5kcyxcclxuICAgIG1pblNpemUsXHJcbiAgICBtYXhTaXplLFxyXG4gICAgZHJhZ2dhYmxlLFxyXG4gICAgcmVzaXphYmxlLFxyXG4gICAgbWluaW1pemFibGUsXHJcbiAgICBtYXhpbWl6YWJsZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHRhc2tiYXIsXHJcbiAgICBncmlkLFxyXG4gICAgZ3JpZHNHYXAsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJSZWYsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICBzZXRXaW5kb3daSW5kZXhlcyxcclxuICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgIHNldFdpbmRvd01pbmltaXplcyxcclxuICB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IHNpemUgPSB7XHJcbiAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcclxuICAgIGg6IGhlYWRlckhlaWdodFxyXG4gICAgICA/IGdyaWRzSGVpZ2h0ICogZ3JpZHMuaCArIGdyaWRzR2FwICogKGdyaWRzLmggLSAxKSAtIGhlYWRlckhlaWdodFxyXG4gICAgICA6IDAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB7XHJcbiAgICB4OiBncmlkc1dpZHRoICogZ3JpZHMueCArIGdyaWRzR2FwICogKGdyaWRzLnggKyAxKSxcclxuICAgIHk6IGdyaWRzSGVpZ2h0ICogZ3JpZHMueSArIGdyaWRzR2FwICogKGdyaWRzLnkgKyAxKSxcclxuICB9O1xyXG5cclxuICBjb25zdCBsaW1pdHMgPSBib3VuZHMgJiYge1xyXG4gICAgbGVmdDogZ3JpZHNXaWR0aCAqIGJvdW5kcy5sZWZ0ICsgZ3JpZHNHYXAgKiAoYm91bmRzLmxlZnQgKyAxKSxcclxuICAgIHRvcDogZ3JpZHNIZWlnaHQgKiBib3VuZHMudG9wICsgZ3JpZHNHYXAgKiAoYm91bmRzLnRvcCArIDEpLFxyXG4gICAgcmlnaHQ6XHJcbiAgICAgIGdyaWRzV2lkdGggKiBib3VuZHMucmlnaHQgK1xyXG4gICAgICBncmlkc0dhcCAqIGJvdW5kcy5yaWdodCAtXHJcbiAgICAgICh3aW5kb3dTaXplc1tpZF0/LncgfHwgc2l6ZS53KSxcclxuICAgIGJvdHRvbTpcclxuICAgICAgZ3JpZHNIZWlnaHQgKiBib3VuZHMuYm90dG9tICtcclxuICAgICAgZ3JpZHNHYXAgKiBib3VuZHMuYm90dG9tIC1cclxuICAgICAgKHdpbmRvd1NpemVzW2lkXT8uaCArIGhlYWRlckhlaWdodCB8fCBzaXplLmggKyBoZWFkZXJIZWlnaHQpLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XHJcbiAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICBbaWRdOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXHJcbiAgICAgIDogWzBdO1xyXG5cclxuICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtpZF06IHpJbmRleCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XHJcbiAgICBpZiAod2luZG93TWF4aW1pemVzW2lkXSB8fCB3aW5kb3dNaW5pbWl6ZXNbaWRdKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xyXG4gICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIFtpZF06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xyXG4gICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICBbaWRdOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgW2lkXTogIXdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgW2lkXTogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIFtpZF06ICF3aW5kb3dNaW5pbWl6ZXNbaWRdLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgIG9uTW91c2VEb3duPXtoYW5kbGVaSW5kZXh9IC8vIEhhcyB0byBiZSBoZXJlIGJlY2F1c2Ugb2YgZGVza3RvcCBkZXZpY2VzXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiB3aW5kb3dNaW5pbWl6ZXNbaWRdXHJcbiAgICAgICAgICAgID8gXCJhdXRvXCJcclxuICAgICAgICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xyXG4gICAgICAgICAgICA6IFwiYXV0b1wiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxyXG4gICAgICAgICAge3RpdGxlIHx8IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAge3JlbmRlck1heGltaXplKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXHJcbiAgICAgID8gXCIxMDAlXCJcclxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0ud1xyXG4gICAgICA6IHNpemUudztcclxuXHJcbiAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdXHJcbiAgICAgID8gXCIxMDAlXCJcclxuICAgICAgOiB3aW5kb3dTaXplc1tpZF1cclxuICAgICAgPyB3aW5kb3dTaXplc1tpZF0uaFxyXG4gICAgICA6IHNpemUuaDtcclxuXHJcbiAgICBjb25zdCBtaW5XaWR0aCA9IHdpbmRvd01heGltaXplc1tpZF0gPyBcIjEwMCVcIiA6IG1pblNpemU/Lnc7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtaW5TaXplPy5oO1xyXG4gICAgY29uc3QgbWF4V2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNbaWRdID8gXCIxMDAlXCIgOiBtYXhTaXplPy53O1xyXG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2lkXSA/IFwiMTAwJVwiIDogbWF4U2l6ZT8uaDtcclxuXHJcbiAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNbaWRdID8gKFxyXG4gICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW2dyaWQsIGdyaWRdIH19XHJcbiAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICBtaW5Db25zdHJhaW50cz17bWluU2l6ZSAmJiBbbWluU2l6ZT8udywgbWluU2l6ZS5oXX1cclxuICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICApIDogKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQsIG1pbldpZHRoLCBtaW5IZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQgfX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwge1xyXG4gICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXHJcbiAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNbaWRdLFxyXG4gICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1tpZF0sXHJcbiAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1tpZF0sXHJcbiAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2lkXSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmFnZ2FibGVcclxuICAgICAga2V5PXtpZH1cclxuICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNbaWRdIHx8IGxvY2F0aW9ufVxyXG4gICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2lkXSB8fCBsb2NhdGlvbn1cclxuICAgICAgZ3JpZD17W2dyaWQsIGdyaWRdfVxyXG4gICAgICBzY2FsZT17MX1cclxuICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgIGJvdW5kcz17bGltaXRzIHx8IFwicGFyZW50XCJ9XHJcbiAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH0gLy8gSGFzIHRvIGJlIGhlcmUgYmVjYXVzZSBvZiB0b3VjaCBkZXZpY2VzXHJcbiAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cclxuICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgIGlkPXtpZH1cclxuICAgICAgICBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2lkXSB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG5cclxuICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRHJhZ2dhYmxlPlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlOiA8ZGl2PjwvZGl2PixcclxuICBib3VuZHM6IHVuZGVmaW5lZCxcclxuICBtaW5TaXplOiB7IHc6IDIwMCwgaDogMTAwIH0sXHJcbiAgbWF4U2l6ZTogdW5kZWZpbmVkLFxyXG4gIGRyYWdnYWJsZTogdHJ1ZSxcclxuICByZXNpemFibGU6IHRydWUsXHJcbiAgbWluaW1pemFibGU6IHRydWUsXHJcbiAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93O1xyXG4iXX0=