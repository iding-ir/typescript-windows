"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _reactResizable = require("react-resizable");

var _reactUseDimensions = _interopRequireDefault(require("react-use-dimensions"));

var _clsx = _interopRequireDefault(require("clsx"));

var _useGrids2 = require("../utils/useGrids");

var _getLocalStorage = require("../utils/getLocalStorage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Windows = function Windows(props) {
  var windows = props.windows,
      taskbar = props.taskbar,
      grid = props.grid,
      gridsCount = props.gridsCount,
      gridsGap = props.gridsGap;

  var _useGrids = (0, _useGrids2.useGrids)(gridsCount, gridsGap),
      gridsWidth = _useGrids.gridsWidth,
      gridsHeight = _useGrids.gridsHeight;

  var _useDimensions = (0, _reactUseDimensions.default)(),
      _useDimensions2 = _slicedToArray(_useDimensions, 2),
      headerRef = _useDimensions2[0],
      headerHeight = _useDimensions2[1].height;

  var dWindowMinimizes = windows.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item.key, item.startMinimized));
  }, {});
  var iWindowSizes = (0, _getLocalStorage.getLocalStorage)("windowSizes", {});
  var iWindowZIndexes = (0, _getLocalStorage.getLocalStorage)("windowZIndexes", {});
  var iWindowLocations = (0, _getLocalStorage.getLocalStorage)("windowLocations", {});
  var iWindowMaximizes = (0, _getLocalStorage.getLocalStorage)("windowMaximizes", {});
  var iWindowMinimizes = (0, _getLocalStorage.getLocalStorage)("windowMinimizes", dWindowMinimizes);

  var _useState = (0, _react.useState)(iWindowSizes),
      _useState2 = _slicedToArray(_useState, 2),
      windowSizes = _useState2[0],
      setWindowSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowZIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowZIndexes = _useState4[0],
      setWindowZIndexes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowLocations),
      _useState6 = _slicedToArray(_useState5, 2),
      windowLocations = _useState6[0],
      setWindowLocations = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowMaximizes),
      _useState8 = _slicedToArray(_useState7, 2),
      windowMaximizes = _useState8[0],
      setWindowMaximizes = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMinimizes),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMinimizes = _useState10[0],
      setWindowMinimizes = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      taskbarItemsIn = _useState12[0],
      setTaskbarItemsIn = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      taskbarItemsOut = _useState14[0],
      setTaskbarItemsOut = _useState14[1];

  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMaximizes", JSON.stringify(windowMaximizes));
  }, [windowMaximizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMinimizes", JSON.stringify(windowMinimizes));
  }, [windowMinimizes]);
  (0, _react.useEffect)(function () {
    var taskbarItemsIn = [];
    var taskbarItemsOut = [];
    windows.forEach(function (window) {
      var key = window.key,
          title = window.title,
          component = window.component,
          grids = window.grids,
          minSize = window.minSize,
          maxSize = window.maxSize,
          draggable = window.draggable,
          resizable = window.resizable,
          minimizable = window.minimizable,
          maximizable = window.maximizable;
      var size = {
        w: gridsWidth * grids.w + gridsGap * (grids.w - 1),
        h: gridsHeight * grids.h + gridsGap * (grids.h - 1) - headerHeight
      };
      var location = {
        x: gridsWidth * grids.x + gridsGap * (grids.x + 1),
        y: gridsHeight * grids.y + gridsGap * (grids.y + 1)
      };

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var handleDrag = function handleDrag(e, data) {
        if (windowMaximizes[key] || windowMinimizes[key]) {
          return;
        }

        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleMaximize = function handleMaximize() {
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, false)));
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, !windowMaximizes[key])));
      };

      var handleMinimize = function handleMinimize() {
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, false)));
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, !windowMinimizes[key])));
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
          onClick: handleZIndex,
          style: {
            width: windowMinimizes[key] ? "auto" : windowSizes[key] ? windowSizes[key].w : "auto"
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
        var width = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].w : size.w;
        var height = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].h : size.h;
        return resizable && !windowMaximizes[key] ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
          width: width,
          height: height,
          resizeHandles: ["se"],
          draggableOpts: {
            grid: [grid, grid]
          },
          onResize: handleResize,
          minConstraints: minSize && [minSize === null || minSize === void 0 ? void 0 : minSize.w, minSize.h],
          maxConstraints: maxSize && [maxSize === null || maxSize === void 0 ? void 0 : maxSize.w, maxSize.h]
        }, component) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            width: width,
            height: height
          }
        }, component);
      };

      var classNames = (0, _clsx.default)("tw-window", key, {
        "tw-taskbar-on": taskbar,
        "tw-taskbar-off": !taskbar,
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key]
      });

      var element = /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        key: key,
        defaultPosition: windowLocations[key] || location,
        position: windowLocations[key] || location,
        grid: [grid, grid],
        scale: 1,
        handle: ".tw-draggable",
        bounds: "parent",
        onStop: handleDrag,
        cancel: ".tw-buttons, tw-title"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHeader(), renderBody()));

      if (windowMinimizes[key] && taskbar) {
        taskbarItemsIn = [].concat(_toConsumableArray(taskbarItemsIn), [element]);
      } else {
        taskbarItemsOut = [].concat(_toConsumableArray(taskbarItemsOut), [element]);
      }
    });
    setTaskbarItemsIn(taskbarItemsIn);
    setTaskbarItemsOut(taskbarItemsOut); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSizes, windowZIndexes, windowLocations, windowMaximizes, windowMinimizes, gridsWidth, gridsHeight, headerHeight]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-windows"
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImhlYWRlckhlaWdodCIsImhlaWdodCIsImRXaW5kb3dNaW5pbWl6ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJrZXkiLCJzdGFydE1pbmltaXplZCIsImlXaW5kb3dTaXplcyIsImlXaW5kb3daSW5kZXhlcyIsImlXaW5kb3dMb2NhdGlvbnMiLCJpV2luZG93TWF4aW1pemVzIiwiaVdpbmRvd01pbmltaXplcyIsIndpbmRvd1NpemVzIiwic2V0V2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsInNldFdpbmRvd1pJbmRleGVzIiwid2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TG9jYXRpb25zIiwid2luZG93TWF4aW1pemVzIiwic2V0V2luZG93TWF4aW1pemVzIiwid2luZG93TWluaW1pemVzIiwic2V0V2luZG93TWluaW1pemVzIiwidGFza2Jhckl0ZW1zSW4iLCJzZXRUYXNrYmFySXRlbXNJbiIsInRhc2tiYXJJdGVtc091dCIsInNldFRhc2tiYXJJdGVtc091dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsIndpbmRvdyIsInRpdGxlIiwiY29tcG9uZW50IiwiZ3JpZHMiLCJtaW5TaXplIiwibWF4U2l6ZSIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJzaXplIiwidyIsImgiLCJsb2NhdGlvbiIsIngiLCJ5IiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3aWR0aCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQXlCO0FBQUEsTUFDL0JDLE9BRCtCLEdBQ2tCRCxLQURsQixDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsT0FEc0IsR0FDa0JGLEtBRGxCLENBQ3RCRSxPQURzQjtBQUFBLE1BQ2JDLElBRGEsR0FDa0JILEtBRGxCLENBQ2JHLElBRGE7QUFBQSxNQUNQQyxVQURPLEdBQ2tCSixLQURsQixDQUNQSSxVQURPO0FBQUEsTUFDS0MsUUFETCxHQUNrQkwsS0FEbEIsQ0FDS0ssUUFETDs7QUFBQSxrQkFHSCx5QkFBU0QsVUFBVCxFQUFxQkMsUUFBckIsQ0FIRztBQUFBLE1BRy9CQyxVQUgrQixhQUcvQkEsVUFIK0I7QUFBQSxNQUduQkMsV0FIbUIsYUFHbkJBLFdBSG1COztBQUFBLHVCQUtPLGtDQUxQO0FBQUE7QUFBQSxNQUtoQ0MsU0FMZ0M7QUFBQSxNQUtYQyxZQUxXLHNCQUtuQkMsTUFMbUI7O0FBT3ZDLE1BQU1DLGdCQUFnQixHQUFHVixPQUFPLENBQUNXLE1BQVIsQ0FBZSxVQUFDQyxLQUFELEVBQWdCQyxJQUFoQixFQUFpQztBQUN2RSwyQ0FBWUQsS0FBWiwyQkFBb0JDLElBQUksQ0FBQ0MsR0FBekIsRUFBK0JELElBQUksQ0FBQ0UsY0FBcEM7QUFDRCxHQUZ3QixFQUV0QixFQUZzQixDQUF6QjtBQUlBLE1BQU1D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RTFDLGNBQWMsQ0FBQ1QsR0FBRDtBQUF4QjtBQUFuQyxTQUNHMkQsWUFBWSxFQURmLEVBR0dFLFVBQVUsRUFIYixDQVhGLENBREY7O0FBb0JBLFVBQUk5QyxlQUFlLENBQUNmLEdBQUQsQ0FBZixJQUF3QmIsT0FBNUIsRUFBcUM7QUFDbkM4QixRQUFBQSxjQUFjLGdDQUFPQSxjQUFQLElBQXVCOEMsT0FBdkIsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMNUMsUUFBQUEsZUFBZSxnQ0FBT0EsZUFBUCxJQUF3QjRDLE9BQXhCLEVBQWY7QUFDRDtBQUNGLEtBM0xEO0FBNkxBN0MsSUFBQUEsaUJBQWlCLENBQUNELGNBQUQsQ0FBakI7QUFDQUcsSUFBQUEsa0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsQ0FsTWMsQ0FtTWQ7QUFDRCxHQXBNRCxFQW9NRyxDQUNEWixXQURDLEVBRURFLGNBRkMsRUFHREUsZUFIQyxFQUlERSxlQUpDLEVBS0RFLGVBTEMsRUFNRHhCLFVBTkMsRUFPREMsV0FQQyxFQVFERSxZQVJDLENBcE1IO0FBK01BLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHeUIsZUFESCxlQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2QkYsY0FBN0IsQ0FIRixDQURGO0FBT0QsQ0FuUUQ7O0FBcVFBakMsT0FBTyxDQUFDZ0YsWUFBUixHQUF1QjtBQUNyQjdFLEVBQUFBLE9BQU8sRUFBRSxJQURZO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsQ0FGZTtBQUdyQkUsRUFBQUEsUUFBUSxFQUFFLEVBSFc7QUFJckJELEVBQUFBLFVBQVUsRUFBRTtBQUpTLENBQXZCO2VBT2VMLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC11c2UtZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHRpdGxlOiBKU1guRWxlbWVudDtcclxuICBjb21wb25lbnQ6IEpTWC5FbGVtZW50O1xyXG4gIGdyaWRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIG1pblNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgbWF4U2l6ZT86IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XHJcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xyXG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcclxuICBzdGFydE1pbmltaXplZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIHRhc2tiYXI6IGJvb2xlYW47XHJcbiAgZ3JpZDogbnVtYmVyO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBXaW5kb3dzUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHdpbmRvd3MsIHRhc2tiYXIsIGdyaWQsIGdyaWRzQ291bnQsIGdyaWRzR2FwIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyBncmlkc1dpZHRoLCBncmlkc0hlaWdodCB9ID0gdXNlR3JpZHMoZ3JpZHNDb3VudCwgZ3JpZHNHYXApO1xyXG5cclxuICBjb25zdCBbaGVhZGVyUmVmLCB7IGhlaWdodDogaGVhZGVySGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucygpO1xyXG5cclxuICBjb25zdCBkV2luZG93TWluaW1pemVzID0gd2luZG93cy5yZWR1Y2UoKHRvdGFsOiBvYmplY3QsIGl0ZW06IFdpbmRvdykgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udG90YWwsIFtpdGVtLmtleV06IGl0ZW0uc3RhcnRNaW5pbWl6ZWQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1NpemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93WkluZGV4ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3daSW5kZXhlc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd0xvY2F0aW9uc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01heGltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01heGltaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01pbmltaXplc1wiLCBkV2luZG93TWluaW1pemVzKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgd2luZG93cy5mb3JFYWNoKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBncmlkcyxcclxuICAgICAgICBtaW5TaXplLFxyXG4gICAgICAgIG1heFNpemUsXHJcbiAgICAgICAgZHJhZ2dhYmxlLFxyXG4gICAgICAgIHJlc2l6YWJsZSxcclxuICAgICAgICBtaW5pbWl6YWJsZSxcclxuICAgICAgICBtYXhpbWl6YWJsZSxcclxuICAgICAgfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSB7XHJcbiAgICAgICAgdzogZ3JpZHNXaWR0aCAqIGdyaWRzLncgKyBncmlkc0dhcCAqIChncmlkcy53IC0gMSksXHJcbiAgICAgICAgaDogZ3JpZHNIZWlnaHQgKiBncmlkcy5oICsgZ3JpZHNHYXAgKiAoZ3JpZHMuaCAtIDEpIC0gaGVhZGVySGVpZ2h0LFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgbG9jYXRpb24gPSB7XHJcbiAgICAgICAgeDogZ3JpZHNXaWR0aCAqIGdyaWRzLnggKyBncmlkc0dhcCAqIChncmlkcy54ICsgMSksXHJcbiAgICAgICAgeTogZ3JpZHNIZWlnaHQgKiBncmlkcy55ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueSArIDEpLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgICAgIFtrZXldOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgICAgICBpZiAod2luZG93TWF4aW1pemVzW2tleV0gfHwgd2luZG93TWluaW1pemVzW2tleV0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgICAgICBba2V5XTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XHJcbiAgICAgICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IHdpbmRvd01pbmltaXplc1trZXldXHJcbiAgICAgICAgICAgICAgICA/IFwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICAgICAgICA6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCIgb25Eb3VibGVDbGljaz17aGFuZGxlTWF4aW1pemV9PlxyXG4gICAgICAgICAgICAgIHt0aXRsZSB8fCBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICA6IHNpemUudztcclxuXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLmhcclxuICAgICAgICAgIDogc2l6ZS5oO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNba2V5XSA/IChcclxuICAgICAgICAgIDxSZXNpemFibGVCb3hcclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW2dyaWQsIGdyaWRdIH19XHJcbiAgICAgICAgICAgIG9uUmVzaXplPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICAgIG1pbkNvbnN0cmFpbnRzPXttaW5TaXplICYmIFttaW5TaXplPy53LCBtaW5TaXplLmhdfVxyXG4gICAgICAgICAgICBtYXhDb25zdHJhaW50cz17bWF4U2l6ZSAmJiBbbWF4U2l6ZT8udywgbWF4U2l6ZS5oXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbXBvbmVudH1cclxuICAgICAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbXBvbmVudH08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwga2V5LCB7XHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcclxuICAgICAgICBcInR3LW1pbmltaXplLW9uXCI6IHdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb2ZmXCI6ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50OiBKU1guRWxlbWVudCA9IChcclxuICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2tleV0gfHwgbG9jYXRpb259XHJcbiAgICAgICAgICBwb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2tleV0gfHwgbG9jYXRpb259XHJcbiAgICAgICAgICBncmlkPXtbZ3JpZCwgZ3JpZF19XHJcbiAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxyXG4gICAgICAgICAgYm91bmRzPVwicGFyZW50XCJcclxuICAgICAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cclxuICAgICAgICAgIGNhbmNlbD1cIi50dy1idXR0b25zLCB0dy10aXRsZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cclxuICAgICAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG5cclxuICAgICAgICAgICAge3JlbmRlckJvZHkoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHdpbmRvd01pbmltaXplc1trZXldICYmIHRhc2tiYXIpIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNJbiA9IFsuLi50YXNrYmFySXRlbXNJbiwgZWxlbWVudF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgZWxlbWVudF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcclxuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXdpbmRvd3NcIj5cclxuICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YXNrYmFyOiB0cnVlLFxyXG4gIGdyaWQ6IDEsXHJcbiAgZ3JpZHNHYXA6IDEwLFxyXG4gIGdyaWRzQ291bnQ6IDEyLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19