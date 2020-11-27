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

var _reactJss = require("react-jss");

var _useGrids2 = require("../utils/useGrids");

var _getLocalStorage = require("../utils/getLocalStorage");

var _styles = require("./styles");

var _iconMinimize = _interopRequireDefault(require("../assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("../assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("../assets/images/icon-resize.png"));

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
      gridsGap = props.gridsGap,
      styles = props.styles;
  var classes = (0, _styles.useStyles)(styles)();

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
        cancel: "tw-buttons, tw-title"
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
  return /*#__PURE__*/_react.default.createElement(_reactJss.ThemeProvider, {
    theme: {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes["tw-windows"]
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn)));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1,
  gridsGap: 10,
  gridsCount: 12,
  styles: {
    borderRadius: "1rem",
    headerSize: "2.4rem",
    headerColor: "#bdbdbd",
    headerBackground: "#424242",
    bodyColor: "#9e9e9e",
    bodyBackground: "#212121",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    IconMaximize: "url(".concat(_iconMaximize.default, ")"),
    IconMinimize: "url(".concat(_iconMinimize.default, ")"),
    IconResize: "url(".concat(_iconResize.default, ")")
  }
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJkV2luZG93TWluaW1pemVzIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwia2V5Iiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbXBvbmVudCIsImdyaWRzIiwibWluU2l6ZSIsIm1heFNpemUiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwid2lkdGgiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyTWluaW1pemUiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhlYWRlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyIsImJvcmRlclJhZGl1cyIsImhlYWRlclNpemUiLCJoZWFkZXJDb2xvciIsImhlYWRlckJhY2tncm91bmQiLCJib2R5Q29sb3IiLCJib2R5QmFja2dyb3VuZCIsImJveFNoYWRvdyIsIkljb25NYXhpbWl6ZSIsImljb25NYXhpbWl6ZSIsIkljb25NaW5pbWl6ZSIsImljb25NaW5pbWl6ZSIsIkljb25SZXNpemUiLCJpY29uUmVzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQXlCO0FBQUEsTUFDL0JDLE9BRCtCLEdBQzBCRCxLQUQxQixDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsT0FEc0IsR0FDMEJGLEtBRDFCLENBQ3RCRSxPQURzQjtBQUFBLE1BQ2JDLElBRGEsR0FDMEJILEtBRDFCLENBQ2JHLElBRGE7QUFBQSxNQUNQQyxVQURPLEdBQzBCSixLQUQxQixDQUNQSSxVQURPO0FBQUEsTUFDS0MsUUFETCxHQUMwQkwsS0FEMUIsQ0FDS0ssUUFETDtBQUFBLE1BQ2VDLE1BRGYsR0FDMEJOLEtBRDFCLENBQ2VNLE1BRGY7QUFHdkMsTUFBTUMsT0FBTyxHQUFHLHVCQUFVRCxNQUFWLEdBQWhCOztBQUh1QyxrQkFLSCx5QkFBU0YsVUFBVCxFQUFxQkMsUUFBckIsQ0FMRztBQUFBLE1BSy9CRyxVQUwrQixhQUsvQkEsVUFMK0I7QUFBQSxNQUtuQkMsV0FMbUIsYUFLbkJBLFdBTG1COztBQUFBLHVCQU9PLGtDQVBQO0FBQUE7QUFBQSxNQU9oQ0MsU0FQZ0M7QUFBQSxNQU9YQyxZQVBXLHNCQU9uQkMsTUFQbUI7O0FBU3ZDLE1BQU1DLGdCQUFnQixHQUFHWixPQUFPLENBQUNhLE1BQVIsQ0FBZSxVQUFDQyxLQUFELEVBQWdCQyxJQUFoQixFQUFpQztBQUN2RSwyQ0FBWUQsS0FBWiwyQkFBb0JDLElBQUksQ0FBQ0MsR0FBekIsRUFBK0JELElBQUksQ0FBQ0UsY0FBcEM7QUFDRCxHQUZ3QixFQUV0QixFQUZzQixDQUF6QjtBQUlBLE1BQU1DLFlBQVksR0FBRyxzQ0FBZ0IsYUFBaEIsRUFBK0IsRUFBL0IsQ0FBckI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsc0NBQWdCLGdCQUFoQixFQUFrQyxFQUFsQyxDQUF4QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLHNDQUFnQixpQkFBaEIsRUFBbUMsRUFBbkMsQ0FBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxzQ0FBZ0IsaUJBQWhCLEVBQW1DLEVBQW5DLENBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsc0NBQWdCLGlCQUFoQixFQUFtQ1YsZ0JBQW5DLENBQXpCOztBQWpCdUMsa0JBbUJELHFCQUFTTSxZQUFULENBbkJDO0FBQUE7QUFBQSxNQW1CaENLLFdBbkJnQztBQUFBLE1BbUJuQkMsY0FuQm1COztBQUFBLG1CQW9CSyxxQkFBU0wsZUFBVCxDQXBCTDtBQUFBO0FBQUEsTUFvQmhDTSxjQXBCZ0M7QUFBQSxNQW9CaEJDLGlCQXBCZ0I7O0FBQUEsbUJBcUJPLHFCQUFTTixnQkFBVCxDQXJCUDtBQUFBO0FBQUEsTUFxQmhDTyxlQXJCZ0M7QUFBQSxNQXFCZkMsa0JBckJlOztBQUFBLG1CQXNCTyxxQkFBU1AsZ0JBQVQsQ0F0QlA7QUFBQTtBQUFBLE1Bc0JoQ1EsZUF0QmdDO0FBQUEsTUFzQmZDLGtCQXRCZTs7QUFBQSxtQkF1Qk8scUJBQVNSLGdCQUFULENBdkJQO0FBQUE7QUFBQSxNQXVCaENTLGVBdkJnQztBQUFBLE1BdUJmQyxrQkF2QmU7O0FBQUEsb0JBd0JLLHFCQUF3QixFQUF4QixDQXhCTDtBQUFBO0FBQUEsTUF3QmhDQyxjQXhCZ0M7QUFBQSxNQXdCaEJDLGlCQXhCZ0I7O0FBQUEsb0JBeUJPLHFCQUF3QixFQUF4QixDQXpCUDtBQUFBO0FBQUEsTUF5QmhDQyxlQXpCZ0M7QUFBQSxNQXlCZkMsa0JBekJlOztBQTJCdkMsd0JBQVUsWUFBTTtBQUNkQyxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsRUFBb0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlakIsV0FBZixDQUFwQztBQUNELEdBRkQsRUFFRyxDQUFDQSxXQUFELENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2RjLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsRUFBdUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlZixjQUFmLENBQXZDO0FBQ0QsR0FGRCxFQUVHLENBQUNBLGNBQUQsQ0FGSDtBQUlBLHdCQUFVLFlBQU07QUFDZFksSUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGlCQUFyQixFQUF3Q0MsSUFBSSxDQUFDQyxTQUFMLENBQWViLGVBQWYsQ0FBeEM7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsZUFBRCxDQUZIO0FBSUEsd0JBQVUsWUFBTTtBQUNkVSxJQUFBQSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsaUJBQXJCLEVBQXdDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsZUFBZixDQUF4QztBQUNELEdBRkQsRUFFRyxDQUFDQSxlQUFELENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2RRLElBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsRUFBd0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxlQUFmLENBQXhDO0FBQ0QsR0FGRCxFQUVHLENBQUNBLGVBQUQsQ0FGSDtBQUlBLHdCQUFVLFlBQU07QUFDZCxRQUFJRSxjQUE2QixHQUFHLEVBQXBDO0FBQ0EsUUFBSUUsZUFBOEIsR0FBRyxFQUFyQztBQUVBbkMsSUFBQUEsT0FBTyxDQUFDeUMsT0FBUixDQUFnQixVQUFDQyxNQUFELEVBQW9CO0FBQUEsVUFFaEMxQixHQUZnQyxHQVk5QjBCLE1BWjhCLENBRWhDMUIsR0FGZ0M7QUFBQSxVQUdoQzJCLEtBSGdDLEdBWTlCRCxNQVo4QixDQUdoQ0MsS0FIZ0M7QUFBQSxVQUloQ0MsU0FKZ0MsR0FZOUJGLE1BWjhCLENBSWhDRSxTQUpnQztBQUFBLFVBS2hDQyxLQUxnQyxHQVk5QkgsTUFaOEIsQ0FLaENHLEtBTGdDO0FBQUEsVUFNaENDLE9BTmdDLEdBWTlCSixNQVo4QixDQU1oQ0ksT0FOZ0M7QUFBQSxVQU9oQ0MsT0FQZ0MsR0FZOUJMLE1BWjhCLENBT2hDSyxPQVBnQztBQUFBLFVBUWhDQyxTQVJnQyxHQVk5Qk4sTUFaOEIsQ0FRaENNLFNBUmdDO0FBQUEsVUFTaENDLFNBVGdDLEdBWTlCUCxNQVo4QixDQVNoQ08sU0FUZ0M7QUFBQSxVQVVoQ0MsV0FWZ0MsR0FZOUJSLE1BWjhCLENBVWhDUSxXQVZnQztBQUFBLFVBV2hDQyxXQVhnQyxHQVk5QlQsTUFaOEIsQ0FXaENTLFdBWGdDO0FBY2xDLFVBQU1DLElBQUksR0FBRztBQUNYQyxRQUFBQSxDQUFDLEVBQUU5QyxVQUFVLEdBQUdzQyxLQUFLLENBQUNRLENBQW5CLEdBQXVCakQsUUFBUSxJQUFJeUMsS0FBSyxDQUFDUSxDQUFOLEdBQVUsQ0FBZCxDQUR2QjtBQUVYQyxRQUFBQSxDQUFDLEVBQUU5QyxXQUFXLEdBQUdxQyxLQUFLLENBQUNTLENBQXBCLEdBQXdCbEQsUUFBUSxJQUFJeUMsS0FBSyxDQUFDUyxDQUFOLEdBQVUsQ0FBZCxDQUFoQyxHQUFtRDVDO0FBRjNDLE9BQWI7QUFLQSxVQUFNNkMsUUFBUSxHQUFHO0FBQ2ZDLFFBQUFBLENBQUMsRUFBRWpELFVBQVUsR0FBR3NDLEtBQUssQ0FBQ1csQ0FBbkIsR0FBdUJwRCxRQUFRLElBQUl5QyxLQUFLLENBQUNXLENBQU4sR0FBVSxDQUFkLENBRG5CO0FBRWZDLFFBQUFBLENBQUMsRUFBRWpELFdBQVcsR0FBR3FDLEtBQUssQ0FBQ1ksQ0FBcEIsR0FBd0JyRCxRQUFRLElBQUl5QyxLQUFLLENBQUNZLENBQU4sR0FBVSxDQUFkO0FBRnBCLE9BQWpCOztBQUtBLFVBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBb0JDLElBQXBCLEVBQWlEO0FBQ3BFcEMsUUFBQUEsY0FBYyxpQ0FDVEQsV0FEUywyQkFFWFAsR0FGVyxFQUVMO0FBQUVxQyxVQUFBQSxDQUFDLEVBQUVPLElBQUksQ0FBQ1IsSUFBTCxDQUFVUyxLQUFmO0FBQXNCUCxVQUFBQSxDQUFDLEVBQUVNLElBQUksQ0FBQ1IsSUFBTCxDQUFVekM7QUFBbkMsU0FGSyxHQUFkO0FBSUQsT0FMRDs7QUFPQSxVQUFNbUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixZQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjeEMsY0FBZCxFQUE4QnlDLE1BQTlCLEdBQ1RGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjeEMsY0FBZCxDQURTLEdBRVQsQ0FBQyxDQUFELENBRko7QUFJQSxZQUFNMEMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSxxQkFBU0wsSUFBVCxFQUFKLEdBQWtDLENBQWpEO0FBRUFyQyxRQUFBQSxpQkFBaUIsaUNBQU1ELGNBQU4sMkJBQXVCVCxHQUF2QixFQUE2Qm1ELE1BQTdCLEdBQWpCO0FBQ0QsT0FSRDs7QUFVQSxVQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDWCxDQUFELEVBQW9CQyxJQUFwQixFQUE0QztBQUM3RCxZQUFJL0IsZUFBZSxDQUFDYixHQUFELENBQWYsSUFBd0JlLGVBQWUsQ0FBQ2YsR0FBRCxDQUEzQyxFQUFrRDtBQUNoRDtBQUNEOztBQUVEWSxRQUFBQSxrQkFBa0IsaUNBQ2JELGVBRGEsMkJBRWZYLEdBRmUsRUFFVDtBQUFFd0MsVUFBQUEsQ0FBQyxFQUFFSSxJQUFJLENBQUNKLENBQVY7QUFBYUMsVUFBQUEsQ0FBQyxFQUFFRyxJQUFJLENBQUNIO0FBQXJCLFNBRlMsR0FBbEI7QUFJRCxPQVREOztBQVdBLFVBQU1jLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQnZDLFFBQUFBLGtCQUFrQixpQ0FDYkQsZUFEYSwyQkFFZmYsR0FGZSxFQUVULEtBRlMsR0FBbEI7QUFLQWMsUUFBQUEsa0JBQWtCLGlDQUNiRCxlQURhLDJCQUVmYixHQUZlLEVBRVQsQ0FBQ2EsZUFBZSxDQUFDYixHQUFELENBRlAsR0FBbEI7QUFJRCxPQVZEOztBQVlBLFVBQU13RCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IxQyxRQUFBQSxrQkFBa0IsaUNBQ2JELGVBRGEsMkJBRWZiLEdBRmUsRUFFVCxLQUZTLEdBQWxCO0FBS0FnQixRQUFBQSxrQkFBa0IsaUNBQ2JELGVBRGEsMkJBRWZmLEdBRmUsRUFFVCxDQUFDZSxlQUFlLENBQUNmLEdBQUQsQ0FGUCxHQUFsQjtBQUlELE9BVkQ7O0FBWUEsVUFBTXlELGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixlQUFPdkIsV0FBVyxnQkFDaEI7QUFBSyxVQUFBLFNBQVMsRUFBQyx1QkFBZjtBQUF1QyxVQUFBLE9BQU8sRUFBRXNCO0FBQWhELFVBRGdCLEdBRWQsSUFGSjtBQUdELE9BSkQ7O0FBTUEsVUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLGVBQU92QixXQUFXLGdCQUNoQjtBQUFLLFVBQUEsU0FBUyxFQUFDLHVCQUFmO0FBQXVDLFVBQUEsT0FBTyxFQUFFb0I7QUFBaEQsVUFEZ0IsR0FFZCxJQUZKO0FBR0QsT0FKRDs7QUFNQSxVQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFlBQU1DLFVBQVUsR0FBRyxtQkFBSyxXQUFMLEVBQWtCO0FBQ25DLDBCQUFnQjVCO0FBRG1CLFNBQWxCLENBQW5CO0FBSUEsNEJBQ0U7QUFDRSxVQUFBLFNBQVMsRUFBRTRCLFVBRGI7QUFFRSxVQUFBLEdBQUcsRUFBRW5FLFNBRlA7QUFHRSxVQUFBLE9BQU8sRUFBRXFELFlBSFg7QUFJRSxVQUFBLEtBQUssRUFBRTtBQUNMRCxZQUFBQSxLQUFLLEVBQUU5QixlQUFlLENBQUNmLEdBQUQsQ0FBZixHQUNILE1BREcsR0FFSE8sV0FBVyxDQUFDUCxHQUFELENBQVgsR0FDQU8sV0FBVyxDQUFDUCxHQUFELENBQVgsQ0FBaUJxQyxDQURqQixHQUVBO0FBTEM7QUFKVCx3QkFZRTtBQUFLLFVBQUEsU0FBUyxFQUFDLFVBQWY7QUFBMEIsVUFBQSxhQUFhLEVBQUVrQjtBQUF6QyxXQUNHNUIsS0FBSyxJQUFJLElBRFosQ0FaRixlQWdCRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRzhCLGNBQWMsRUFEakIsRUFHR0MsY0FBYyxFQUhqQixDQWhCRixDQURGO0FBd0JELE9BN0JEOztBQStCQSxVQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLDRCQUFPO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixXQUEwQkMsa0JBQWtCLEVBQTVDLENBQVA7QUFDRCxPQUZEOztBQUlBLFVBQU1BLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixZQUFNakIsS0FBSyxHQUFHaEMsZUFBZSxDQUFDYixHQUFELENBQWYsR0FDVixNQURVLEdBRVZPLFdBQVcsQ0FBQ1AsR0FBRCxDQUFYLEdBQ0FPLFdBQVcsQ0FBQ1AsR0FBRCxDQUFYLENBQWlCcUMsQ0FEakIsR0FFQUQsSUFBSSxDQUFDQyxDQUpUO0FBTUEsWUFBTTFDLE1BQU0sR0FBR2tCLGVBQWUsQ0FBQ2IsR0FBRCxDQUFmLEdBQ1gsTUFEVyxHQUVYTyxXQUFXLENBQUNQLEdBQUQsQ0FBWCxHQUNBTyxXQUFXLENBQUNQLEdBQUQsQ0FBWCxDQUFpQnNDLENBRGpCLEdBRUFGLElBQUksQ0FBQ0UsQ0FKVDtBQU1BLGVBQU9MLFNBQVMsSUFBSSxDQUFDcEIsZUFBZSxDQUFDYixHQUFELENBQTdCLGdCQUNMLDZCQUFDLDRCQUFEO0FBQ0UsVUFBQSxLQUFLLEVBQUU2QyxLQURUO0FBRUUsVUFBQSxNQUFNLEVBQUVsRCxNQUZWO0FBR0UsVUFBQSxhQUFhLEVBQUUsQ0FBQyxJQUFELENBSGpCO0FBSUUsVUFBQSxhQUFhLEVBQUU7QUFBRVQsWUFBQUEsSUFBSSxFQUFFLENBQUNBLElBQUQsRUFBT0EsSUFBUDtBQUFSLFdBSmpCO0FBS0UsVUFBQSxRQUFRLEVBQUV3RCxZQUxaO0FBTUUsVUFBQSxjQUFjLEVBQUVaLE9BQU8sSUFBSSxDQUFDQSxPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRU8sQ0FBVixFQUFhUCxPQUFPLENBQUNRLENBQXJCLENBTjdCO0FBT0UsVUFBQSxjQUFjLEVBQUVQLE9BQU8sSUFBSSxDQUFDQSxPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRU0sQ0FBVixFQUFhTixPQUFPLENBQUNPLENBQXJCO0FBUDdCLFdBU0dWLFNBVEgsQ0FESyxnQkFhTDtBQUFLLFVBQUEsS0FBSyxFQUFFO0FBQUVpQixZQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU2xELFlBQUFBLE1BQU0sRUFBTkE7QUFBVDtBQUFaLFdBQWdDaUMsU0FBaEMsQ0FiRjtBQWVELE9BNUJEOztBQThCQSxVQUFNZ0MsVUFBVSxHQUFHLG1CQUFLLFdBQUwsRUFBa0I1RCxHQUFsQixFQUF1QjtBQUN4Qyx5QkFBaUJmLE9BRHVCO0FBRXhDLDBCQUFrQixDQUFDQSxPQUZxQjtBQUd4QywwQkFBa0I4QixlQUFlLENBQUNmLEdBQUQsQ0FITztBQUl4QywyQkFBbUIsQ0FBQ2UsZUFBZSxDQUFDZixHQUFELENBSks7QUFLeEMsMEJBQWtCYSxlQUFlLENBQUNiLEdBQUQsQ0FMTztBQU14QywyQkFBbUIsQ0FBQ2EsZUFBZSxDQUFDYixHQUFEO0FBTkssT0FBdkIsQ0FBbkI7O0FBU0EsVUFBTStELE9BQW9CLGdCQUN4Qiw2QkFBQyx1QkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFL0QsR0FEUDtBQUVFLFFBQUEsZUFBZSxFQUFFVyxlQUFlLENBQUNYLEdBQUQsQ0FBZixJQUF3QnVDLFFBRjNDO0FBR0UsUUFBQSxRQUFRLEVBQUU1QixlQUFlLENBQUNYLEdBQUQsQ0FBZixJQUF3QnVDLFFBSHBDO0FBSUUsUUFBQSxJQUFJLEVBQUUsQ0FBQ3JELElBQUQsRUFBT0EsSUFBUCxDQUpSO0FBS0UsUUFBQSxLQUFLLEVBQUUsQ0FMVDtBQU1FLFFBQUEsTUFBTSxFQUFDLGVBTlQ7QUFPRSxRQUFBLE1BQU0sRUFBQyxRQVBUO0FBUUUsUUFBQSxNQUFNLEVBQUVvRSxVQVJWO0FBU0UsUUFBQSxNQUFNLEVBQUM7QUFUVCxzQkFXRTtBQUFLLFFBQUEsU0FBUyxFQUFFTSxVQUFoQjtBQUE0QixRQUFBLEtBQUssRUFBRTtBQUFFVCxVQUFBQSxNQUFNLEVBQUUxQyxjQUFjLENBQUNULEdBQUQ7QUFBeEI7QUFBbkMsU0FDRzJELFlBQVksRUFEZixFQUdHRSxVQUFVLEVBSGIsQ0FYRixDQURGOztBQW9CQSxVQUFJOUMsZUFBZSxDQUFDZixHQUFELENBQWYsSUFBd0JmLE9BQTVCLEVBQXFDO0FBQ25DZ0MsUUFBQUEsY0FBYyxnQ0FBT0EsY0FBUCxJQUF1QjhDLE9BQXZCLEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTDVDLFFBQUFBLGVBQWUsZ0NBQU9BLGVBQVAsSUFBd0I0QyxPQUF4QixFQUFmO0FBQ0Q7QUFDRixLQTNMRDtBQTZMQTdDLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBbE1jLENBbU1kO0FBQ0QsR0FwTUQsRUFvTUcsQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLEVBTUR4QixVQU5DLEVBT0RDLFdBUEMsRUFRREUsWUFSQyxDQXBNSDtBQStNQSxzQkFDRSw2QkFBQyx1QkFBRDtBQUFlLElBQUEsS0FBSyxFQUFFO0FBQXRCLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUVKLE9BQU8sQ0FBQyxZQUFEO0FBQXZCLEtBQ0c2QixlQURILGVBR0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixjQUE3QixDQUhGLENBREYsQ0FERjtBQVNELENBdlFEOztBQXlRQW5DLE9BQU8sQ0FBQ2tGLFlBQVIsR0FBdUI7QUFDckIvRSxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLENBRmU7QUFHckJFLEVBQUFBLFFBQVEsRUFBRSxFQUhXO0FBSXJCRCxFQUFBQSxVQUFVLEVBQUUsRUFKUztBQUtyQkUsRUFBQUEsTUFBTSxFQUFFO0FBQ040RSxJQUFBQSxZQUFZLEVBQUUsTUFEUjtBQUVOQyxJQUFBQSxVQUFVLEVBQUUsUUFGTjtBQUdOQyxJQUFBQSxXQUFXLEVBQUUsU0FIUDtBQUlOQyxJQUFBQSxnQkFBZ0IsRUFBRSxTQUpaO0FBS05DLElBQUFBLFNBQVMsRUFBRSxTQUxMO0FBTU5DLElBQUFBLGNBQWMsRUFBRSxTQU5WO0FBT05DLElBQUFBLFNBQVMsRUFBRSw0QkFQTDtBQVFOQyxJQUFBQSxZQUFZLGdCQUFTQyxxQkFBVCxNQVJOO0FBU05DLElBQUFBLFlBQVksZ0JBQVNDLHFCQUFULE1BVE47QUFVTkMsSUFBQUEsVUFBVSxnQkFBU0MsbUJBQVQ7QUFWSjtBQUxhLENBQXZCO2VBbUJlL0YsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBpY29uTWluaW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1taW5pbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25NYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICB0aXRsZTogSlNYLkVsZW1lbnQ7XHJcbiAgY29tcG9uZW50OiBKU1guRWxlbWVudDtcclxuICBncmlkczogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBtaW5TaXplPzogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIG1heFNpemU/OiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgc3RhcnRNaW5pbWl6ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlcyB7XHJcbiAgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcbiAgaGVhZGVyU2l6ZTogc3RyaW5nO1xyXG4gIGhlYWRlckNvbG9yOiBzdHJpbmc7XHJcbiAgaGVhZGVyQmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIGJvZHlDb2xvcjogc3RyaW5nO1xyXG4gIGJvZHlCYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgYm94U2hhZG93OiBzdHJpbmc7XHJcbiAgSWNvbk1heGltaXplOiBzdHJpbmc7XHJcbiAgSWNvbk1pbmltaXplOiBzdHJpbmc7XHJcbiAgSWNvblJlc2l6ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd3NQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBncmlkOiBudW1iZXI7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzOiBTdHlsZXM7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCwgZ3JpZHNDb3VudCwgZ3JpZHNHYXAsIHN0eWxlcyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoc3R5bGVzKSgpO1xyXG5cclxuICBjb25zdCB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH0gPSB1c2VHcmlkcyhncmlkc0NvdW50LCBncmlkc0dhcCk7XHJcblxyXG4gIGNvbnN0IFtoZWFkZXJSZWYsIHsgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKCk7XHJcblxyXG4gIGNvbnN0IGRXaW5kb3dNaW5pbWl6ZXMgPSB3aW5kb3dzLnJlZHVjZSgodG90YWw6IG9iamVjdCwgaXRlbTogV2luZG93KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2l0ZW0ua2V5XTogaXRlbS5zdGFydE1pbmltaXplZCB9O1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgaVdpbmRvd1NpemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93U2l6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1pJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TG9jYXRpb25zXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWF4aW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWF4aW1pemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWluaW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWluaW1pemVzXCIsIGRXaW5kb3dNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XHJcbiAgfSwgW3dpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1pJbmRleGVzKSk7XHJcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcclxuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNaW5pbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWluaW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zSW46IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGxldCB0YXNrYmFySXRlbXNPdXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICB3aW5kb3dzLmZvckVhY2goKHdpbmRvdzogV2luZG93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgY29tcG9uZW50LFxyXG4gICAgICAgIGdyaWRzLFxyXG4gICAgICAgIG1pblNpemUsXHJcbiAgICAgICAgbWF4U2l6ZSxcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIG1pbmltaXphYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3Qgc2l6ZSA9IHtcclxuICAgICAgICB3OiBncmlkc1dpZHRoICogZ3JpZHMudyArIGdyaWRzR2FwICogKGdyaWRzLncgLSAxKSxcclxuICAgICAgICBoOiBncmlkc0hlaWdodCAqIGdyaWRzLmggKyBncmlkc0dhcCAqIChncmlkcy5oIC0gMSkgLSBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHtcclxuICAgICAgICB4OiBncmlkc1dpZHRoICogZ3JpZHMueCArIGdyaWRzR2FwICogKGdyaWRzLnggKyAxKSxcclxuICAgICAgICB5OiBncmlkc0hlaWdodCAqIGdyaWRzLnkgKyBncmlkc0dhcCAqIChncmlkcy55ICsgMSksXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XHJcbiAgICAgICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cclxuICAgICAgICAgICAgcmVmPXtoZWFkZXJSZWZ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVpJbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogd2luZG93TWluaW1pemVzW2tleV1cclxuICAgICAgICAgICAgICAgID8gXCJhdXRvXCJcclxuICAgICAgICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgICAgICAgIDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGl0bGVcIiBvbkRvdWJsZUNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+XHJcbiAgICAgICAgICAgICAge3RpdGxlIHx8IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemU9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgICAgbWluQ29uc3RyYWludHM9e21pblNpemUgJiYgW21pblNpemU/LncsIG1pblNpemUuaF19XHJcbiAgICAgICAgICAgIG1heENvbnN0cmFpbnRzPXttYXhTaXplICYmIFttYXhTaXplPy53LCBtYXhTaXplLmhdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tcG9uZW50fVxyXG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT57Y29tcG9uZW50fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcclxuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcclxuICAgICAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIHBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkLCBncmlkXX1cclxuICAgICAgICAgIHNjYWxlPXsxfVxyXG4gICAgICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwidHctYnV0dG9ucywgdHctdGl0bGVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3t9IGFzIERlZmF1bHRUaGVtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiAxLFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxuICBzdHlsZXM6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICBoZWFkZXJTaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgaGVhZGVyQ29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgaGVhZGVyQmFja2dyb3VuZDogXCIjNDI0MjQyXCIsXHJcbiAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgYm9keUJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICBJY29uTWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICBJY29uTWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICBJY29uUmVzaXplOiBgdXJsKCR7aWNvblJlc2l6ZX0pYCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19