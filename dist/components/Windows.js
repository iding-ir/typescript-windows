"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactUseDimensions = _interopRequireDefault(require("react-use-dimensions"));

var _reactJss = require("react-jss");

var _useGrids2 = require("../utils/useGrids");

var _getLocalStorage = require("../utils/getLocalStorage");

var _styles = require("./styles");

var _WindowsProvider = require("./WindowsProvider");

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
  var children = props.children,
      taskbar = props.taskbar,
      step = props.step,
      breakPoints = props.breakPoints,
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

  var _useContext = (0, _react.useContext)(_WindowsProvider.StateContext),
      state = _useContext.state,
      setState = _useContext.setState;

  var dBoxMinimizes = children.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item.props.id, item.props.startMinimized));
  }, {});
  var iWindowSizes = (0, _getLocalStorage.getLocalStorage)("windowSizes", {});
  var iWindowZIndexes = (0, _getLocalStorage.getLocalStorage)("windowZIndexes", {});
  var iWindowLocations = (0, _getLocalStorage.getLocalStorage)("windowLocations", {});
  var iWindowMaximizes = (0, _getLocalStorage.getLocalStorage)("windowMaximizes", {});
  var iWindowMinimizes = (0, _getLocalStorage.getLocalStorage)("windowMinimizes", dBoxMinimizes);

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
    setState(_objectSpread(_objectSpread({}, state), {}, {
      taskbar: taskbar,
      step: step,
      breakPoints: breakPoints,
      gridsGap: gridsGap,
      gridsWidth: gridsWidth,
      gridsHeight: gridsHeight,
      headerRef: headerRef,
      headerHeight: headerHeight,
      windowSizes: windowSizes,
      windowZIndexes: windowZIndexes,
      windowLocations: windowLocations,
      windowMaximizes: windowMaximizes,
      windowMinimizes: windowMinimizes,
      setWindowSizes: setWindowSizes,
      setWindowZIndexes: setWindowZIndexes,
      setWindowLocations: setWindowLocations,
      setWindowMaximizes: setWindowMaximizes,
      setWindowMinimizes: setWindowMinimizes
    }));
    var taskbarItemsIn = [];
    var taskbarItemsOut = [];
    children.forEach(function (window) {
      if (windowMinimizes[window.props.id] && taskbar) {
        taskbarItemsIn = [].concat(_toConsumableArray(taskbarItemsIn), [window]);
      } else {
        taskbarItemsOut = [].concat(_toConsumableArray(taskbarItemsOut), [window]);
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
  step: 1,
  breakPoints: {
    mobile: 0,
    tablet: 600,
    desktop: 1280
  },
  gridsGap: 10,
  gridsCount: 12
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImNoaWxkcmVuIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZEJveE1pbmltaXplcyIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsImlkIiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJkZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLElBQU1BLE9BQU8s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LE9BQU8sRUFBRSxJQURZO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsQ0FGZTtBQUdyQkMsRUFBQUEsV0FBVyxFQUFFO0FBQUU2QyxJQUFBQSxNQUFNLEVBQUUsQ0FBVjtBQUFhQyxJQUFBQSxNQUFNLEVBQUUsR0FBckI7QUFBMEJDLElBQUFBLE9BQU8sRUFBRTtBQUFuQyxHQUhRO0FBSXJCN0MsRUFBQUEsUUFBUSxFQUFFLEVBSlc7QUFLckJELEVBQUFBLFVBQVUsRUFBRTtBQUxTLENBQXZCO2VBUWVOLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFN0eWxlcywgQnJlYWtQb2ludHMgfSBmcm9tIFwiLi9pbmRleC5kXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXTtcclxuICB0YXNrYmFyOiBib29sZWFuO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBicmVha1BvaW50czogQnJlYWtQb2ludHM7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzPzogUGFydGlhbDxTdHlsZXM+O1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdGFza2JhcixcclxuICAgIHN0ZXAsXHJcbiAgICBicmVha1BvaW50cyxcclxuICAgIGdyaWRzQ291bnQsXHJcbiAgICBncmlkc0dhcCxcclxuICAgIHN0eWxlcyxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoc3R5bGVzKSgpO1xyXG4gIGNvbnN0IHsgZ3JpZHNXaWR0aCwgZ3JpZHNIZWlnaHQgfSA9IHVzZUdyaWRzKGdyaWRzQ291bnQsIGdyaWRzR2FwKTtcclxuICBjb25zdCBbaGVhZGVyUmVmLCB7IGhlaWdodDogaGVhZGVySGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucygpO1xyXG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGRCb3hNaW5pbWl6ZXMgPSBjaGlsZHJlbi5yZWR1Y2UoKHRvdGFsOiBvYmplY3QsIGl0ZW06IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2l0ZW0ucHJvcHMuaWRdOiBpdGVtLnByb3BzLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dTaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93WkluZGV4ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dMb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgZEJveE1pbmltaXplcyk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHRhc2tiYXIsXHJcbiAgICAgIHN0ZXAsXHJcbiAgICAgIGJyZWFrUG9pbnRzLFxyXG4gICAgICBncmlkc0dhcCxcclxuICAgICAgZ3JpZHNXaWR0aCxcclxuICAgICAgZ3JpZHNIZWlnaHQsXHJcbiAgICAgIGhlYWRlclJlZixcclxuICAgICAgaGVhZGVySGVpZ2h0LFxyXG4gICAgICB3aW5kb3dTaXplcyxcclxuICAgICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1NpemVzLFxyXG4gICAgICBzZXRXaW5kb3daSW5kZXhlcyxcclxuICAgICAgc2V0V2luZG93TG9jYXRpb25zLFxyXG4gICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd01pbmltaXplcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKHdpbmRvdykgPT4ge1xyXG4gICAgICBpZiAod2luZG93TWluaW1pemVzW3dpbmRvdy5wcm9wcy5pZF0gJiYgdGFza2Jhcikge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc0luID0gWy4uLnRhc2tiYXJJdGVtc0luLCB3aW5kb3ddO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIHdpbmRvd107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcclxuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17e30gYXMgRGVmYXVsdFRoZW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbXCJ0dy13aW5kb3dzXCJdfT5cclxuICAgICAgICB7dGFza2Jhckl0ZW1zT3V0fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YXNrYmFyOiB0cnVlLFxyXG4gIHN0ZXA6IDEsXHJcbiAgYnJlYWtQb2ludHM6IHsgbW9iaWxlOiAwLCB0YWJsZXQ6IDYwMCwgZGVza3RvcDogMTI4MCB9LFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxufSBhcyBQYXJ0aWFsPFByb3BzPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==