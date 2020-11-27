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
          style: {
            width: windowMinimizes[key] ? "auto" : windowSizes[key] ? windowSizes[key].w : "auto"
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title",
          onClick: handleZIndex,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImhlYWRlckhlaWdodCIsImhlaWdodCIsImRXaW5kb3dNaW5pbWl6ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJrZXkiLCJzdGFydE1pbmltaXplZCIsImlXaW5kb3dTaXplcyIsImlXaW5kb3daSW5kZXhlcyIsImlXaW5kb3dMb2NhdGlvbnMiLCJpV2luZG93TWF4aW1pemVzIiwiaVdpbmRvd01pbmltaXplcyIsIndpbmRvd1NpemVzIiwic2V0V2luZG93U2l6ZXMiLCJ3aW5kb3daSW5kZXhlcyIsInNldFdpbmRvd1pJbmRleGVzIiwid2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TG9jYXRpb25zIiwid2luZG93TWF4aW1pemVzIiwic2V0V2luZG93TWF4aW1pemVzIiwid2luZG93TWluaW1pemVzIiwic2V0V2luZG93TWluaW1pemVzIiwidGFza2Jhckl0ZW1zSW4iLCJzZXRUYXNrYmFySXRlbXNJbiIsInRhc2tiYXJJdGVtc091dCIsInNldFRhc2tiYXJJdGVtc091dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsIndpbmRvdyIsInRpdGxlIiwiY29tcG9uZW50IiwiZ3JpZHMiLCJtaW5TaXplIiwibWF4U2l6ZSIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJzaXplIiwidyIsImgiLCJsb2NhdGlvbiIsIngiLCJ5IiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3aWR0aCIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQXlCO0FBQUEsTUFDL0JDLE9BRCtCLEdBQ2tCRCxLQURsQixDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsT0FEc0IsR0FDa0JGLEtBRGxCLENBQ3RCRSxPQURzQjtBQUFBLE1BQ2JDLElBRGEsR0FDa0JILEtBRGxCLENBQ2JHLElBRGE7QUFBQSxNQUNQQyxVQURPLEdBQ2tCSixLQURsQixDQUNQSSxVQURPO0FBQUEsTUFDS0MsUUFETCxHQUNrQkwsS0FEbEIsQ0FDS0ssUUFETDs7QUFBQSxrQkFHSCx5QkFBU0QsVUFBVCxFQUFxQkMsUUFBckIsQ0FIRztBQUFBLE1BRy9CQyxVQUgrQixhQUcvQkEsVUFIK0I7QUFBQSxNQUduQkMsV0FIbUIsYUFHbkJBLFdBSG1COztBQUFBLHVCQUtPLGtDQUxQO0FBQUE7QUFBQSxNQUtoQ0MsU0FMZ0M7QUFBQSxNQUtYQyxZQUxXLHNCQUtuQkMsTUFMbUI7O0FBT3ZDLE1BQU1DLGdCQUFnQixHQUFHVixPQUFPLENBQUNXLE1BQVIsQ0FBZSxVQUFDQyxLQUFELEVBQWdCQyxJQUFoQixFQUFpQztBQUN2RSwyQ0FBWUQsS0FBWiwyQkFBb0JDLElBQUksQ0FBQ0MsR0FBekIsRUFBK0JELElBQUksQ0FBQ0UsY0FBcEM7QUFDRCxHQUZ3QixFQUV0QixFQUZzQixDQUF6QjtBQUlBLE1BQU1D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QyxjQUFjLENBQUNULEdBQUQ7QUFBeEI7QUFBbkMsU0FDRzJELFlBQVksRUFEZixFQUdHRSxVQUFVLEVBSGIsQ0FYRixDQURGOztBQW9CQSxVQUFJOUMsZUFBZSxDQUFDZixHQUFELENBQWYsSUFBd0JiLE9BQTVCLEVBQXFDO0FBQ25DOEIsUUFBQUEsY0FBYyxnQ0FBT0EsY0FBUCxJQUF1QjhDLE9BQXZCLEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTDVDLFFBQUFBLGVBQWUsZ0NBQU9BLGVBQVAsSUFBd0I0QyxPQUF4QixFQUFmO0FBQ0Q7QUFDRixLQTlMRDtBQWdNQTdDLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBck1jLENBc01kO0FBQ0QsR0F2TUQsRUF1TUcsQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLEVBTUR4QixVQU5DLEVBT0RDLFdBUEMsRUFRREUsWUFSQyxDQXZNSDtBQWtOQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR3lCLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERjtBQU9ELENBdFFEOztBQXdRQWpDLE9BQU8sQ0FBQ2dGLFlBQVIsR0FBdUI7QUFDckI3RSxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLENBRmU7QUFHckJFLEVBQUFBLFFBQVEsRUFBRSxFQUhXO0FBSXJCRCxFQUFBQSxVQUFVLEVBQUU7QUFKUyxDQUF2QjtlQU9lTCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICB0aXRsZTogSlNYLkVsZW1lbnQ7XHJcbiAgY29tcG9uZW50OiBKU1guRWxlbWVudDtcclxuICBncmlkczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBtaW5TaXplPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIG1heFNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2luZG93c1Byb3BzIHtcclxuICB3aW5kb3dzOiBXaW5kb3dbXTtcclxuICB0YXNrYmFyOiBib29sZWFuO1xyXG4gIGdyaWQ6IG51bWJlcjtcclxuICBncmlkc0dhcDogbnVtYmVyO1xyXG4gIGdyaWRzQ291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgV2luZG93cyA9IChwcm9wczogV2luZG93c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB3aW5kb3dzLCB0YXNrYmFyLCBncmlkLCBncmlkc0NvdW50LCBncmlkc0dhcCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgZ3JpZHNXaWR0aCwgZ3JpZHNIZWlnaHQgfSA9IHVzZUdyaWRzKGdyaWRzQ291bnQsIGdyaWRzR2FwKTtcclxuXHJcbiAgY29uc3QgW2hlYWRlclJlZiwgeyBoZWlnaHQ6IGhlYWRlckhlaWdodCB9XSA9IHVzZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgY29uc3QgZFdpbmRvd01pbmltaXplcyA9IHdpbmRvd3MucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBXaW5kb3cpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnRvdGFsLCBbaXRlbS5rZXldOiBpdGVtLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dTaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93WkluZGV4ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dMb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgZFdpbmRvd01pbmltaXplcyk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIHdpbmRvd3MuZm9yRWFjaCgod2luZG93OiBXaW5kb3cpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb21wb25lbnQsXHJcbiAgICAgICAgZ3JpZHMsXHJcbiAgICAgICAgbWluU2l6ZSxcclxuICAgICAgICBtYXhTaXplLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgbWluaW1pemFibGUsXHJcbiAgICAgICAgbWF4aW1pemFibGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBzaXplID0ge1xyXG4gICAgICAgIHc6IGdyaWRzV2lkdGggKiBncmlkcy53ICsgZ3JpZHNHYXAgKiAoZ3JpZHMudyAtIDEpLFxyXG4gICAgICAgIGg6IGdyaWRzSGVpZ2h0ICogZ3JpZHMuaCArIGdyaWRzR2FwICogKGdyaWRzLmggLSAxKSAtIGhlYWRlckhlaWdodCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0ge1xyXG4gICAgICAgIHg6IGdyaWRzV2lkdGggKiBncmlkcy54ICsgZ3JpZHNHYXAgKiAoZ3JpZHMueCArIDEpLFxyXG4gICAgICAgIHk6IGdyaWRzSGVpZ2h0ICogZ3JpZHMueSArIGdyaWRzR2FwICogKGdyaWRzLnkgKyAxKSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93U2l6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93U2l6ZXMsXHJcbiAgICAgICAgICBba2V5XTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXHJcbiAgICAgICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXHJcbiAgICAgICAgICA6IFswXTtcclxuXHJcbiAgICAgICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtrZXldOiB6SW5kZXggfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvd01heGltaXplc1trZXldIHx8IHdpbmRvd01pbmltaXplc1trZXldKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxyXG4gICAgICAgICAgW2tleV06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1taW5pbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcclxuICAgICAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxyXG4gICAgICAgICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2tleV1cclxuICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgICAgICAgIDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0dy10aXRsZVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlWkluZGV4fVxyXG4gICAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e2hhbmRsZU1heGltaXplfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RpdGxlIHx8IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XHJcbiAgICAgICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tcG9uZW50fVxyXG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT57Y29tcG9uZW50fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcclxuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcclxuICAgICAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkLCBncmlkXX1cclxuICAgICAgICAgIHNjYWxlPXsxfVxyXG4gICAgICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnMsIHR3LXRpdGxlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1trZXldIH19PlxyXG4gICAgICAgICAgICB7cmVuZGVySGVhZGVyKCl9XHJcblxyXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAod2luZG93TWluaW1pemVzW2tleV0gJiYgdGFza2Jhcikge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc0luID0gWy4uLnRhc2tiYXJJdGVtc0luLCBlbGVtZW50XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNPdXQgPSBbLi4udGFza2Jhckl0ZW1zT3V0LCBlbGVtZW50XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHctd2luZG93c1wiPlxyXG4gICAgICB7dGFza2Jhckl0ZW1zT3V0fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgZ3JpZDogMSxcclxuICBncmlkc0dhcDogMTAsXHJcbiAgZ3JpZHNDb3VudDogMTIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xyXG4iXX0=