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

var _iconMinimize = _interopRequireDefault(require("../assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("../assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("../assets/images/icon-resize.png"));

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

  var _useContext = (0, _react.useContext)(_WindowsProvider.StateContext),
      state = _useContext.state,
      setState = _useContext.setState;

  var dBoxMinimizes = windows.reduce(function (total, item) {
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
      grid: grid,
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
    windows.forEach(function (window) {
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
  grid: 1,
  gridsGap: 10,
  gridsCount: 12,
  styles: {
    header: {
      size: "2.4rem",
      color: "#bdbdbd",
      background: "#424242"
    },
    body: {
      color: "#9e9e9e",
      background: "#212121"
    },
    icons: {
      maximize: "url(".concat(_iconMaximize.default, ")"),
      minimize: "url(".concat(_iconMinimize.default, ")"),
      resize: "url(".concat(_iconResize.default, ")")
    },
    borderRadius: "1rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"
  }
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZEJveE1pbmltaXplcyIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsImlkIiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJkZWZhdWx0UHJvcHMiLCJoZWFkZXIiLCJzaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9keSIsImljb25zIiwibWF4aW1pemUiLCJpY29uTWF4aW1pemUiLCJtaW5pbWl6ZSIsImljb25NaW5pbWl6ZSIsInJlc2l6ZSIsImljb25SZXNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciXSwi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QUFPLENBQUNnRCxZQUFSLEdBQXVCO0FBQ3JCN0MsRUFBQUEsT0FBTyxFQUFFLElBRFk7QUFFckJDLEVBQUFBLElBQUksRUFBRSxDQUZlO0FBR3JCRSxFQUFBQSxRQUFRLEVBQUUsRUFIVztBQUlyQkQsRUFBQUEsVUFBVSxFQUFFLEVBSlM7QUFLckJFLEVBQUFBLE1BQU0sRUFBRTtBQUNOMEMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLElBQUksRUFBRSxRQURBO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxTQUZEO0FBR05DLE1BQUFBLFVBQVUsRUFBRTtBQUhOLEtBREY7QUFNTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLE1BQUFBLFVBQVUsRUFBRTtBQUZSLEtBTkE7QUFVTkUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BREg7QUFFTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFGSDtBQUdMQyxNQUFBQSxNQUFNLGdCQUFTQyxtQkFBVDtBQUhELEtBVkQ7QUFlTkMsSUFBQUEsWUFBWSxFQUFFLE1BZlI7QUFnQk5DLElBQUFBLFNBQVMsRUFBRTtBQWhCTDtBQUxhLENBQXZCO2VBeUJlOUQsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC11c2UtZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBEZWZhdWx0VGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VHcmlkcyB9IGZyb20gXCIuLi91dGlscy91c2VHcmlkc1wiO1xyXG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0TG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgaWNvbk1pbmltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWluaW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uTWF4aW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1tYXhpbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25SZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXMge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgc2l6ZTogc3RyaW5nO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZztcclxuICB9O1xyXG4gIGJvZHk6IHtcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgfTtcclxuICBpY29uczoge1xyXG4gICAgbWF4aW1pemU6IHN0cmluZztcclxuICAgIG1pbmltaXplOiBzdHJpbmc7XHJcbiAgICByZXNpemU6IHN0cmluZztcclxuICB9O1xyXG4gIGJvcmRlclJhZGl1czogc3RyaW5nO1xyXG4gIGJveFNoYWRvdzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICB3aW5kb3dzOiBKU1guRWxlbWVudFtdO1xyXG4gIHRhc2tiYXI6IGJvb2xlYW47XHJcbiAgZ3JpZDogbnVtYmVyO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG4gIHN0eWxlczogU3R5bGVzO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCwgZ3JpZHNDb3VudCwgZ3JpZHNHYXAsIHN0eWxlcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMpKCk7XHJcbiAgY29uc3QgeyBncmlkc1dpZHRoLCBncmlkc0hlaWdodCB9ID0gdXNlR3JpZHMoZ3JpZHNDb3VudCwgZ3JpZHNHYXApO1xyXG4gIGNvbnN0IFtoZWFkZXJSZWYsIHsgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKCk7XHJcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZEJveE1pbmltaXplcyA9IHdpbmRvd3MucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udG90YWwsIFtpdGVtLnByb3BzLmlkXTogaXRlbS5wcm9wcy5zdGFydE1pbmltaXplZCB9O1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgaVdpbmRvd1NpemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93U2l6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1pJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TG9jYXRpb25zXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWF4aW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWF4aW1pemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWluaW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWluaW1pemVzXCIsIGRCb3hNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XHJcbiAgfSwgW3dpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1pJbmRleGVzKSk7XHJcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcclxuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNaW5pbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWluaW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB0YXNrYmFyLFxyXG4gICAgICBncmlkLFxyXG4gICAgICBncmlkc0dhcCxcclxuICAgICAgZ3JpZHNXaWR0aCxcclxuICAgICAgZ3JpZHNIZWlnaHQsXHJcbiAgICAgIGhlYWRlclJlZixcclxuICAgICAgaGVhZGVySGVpZ2h0LFxyXG4gICAgICB3aW5kb3dTaXplcyxcclxuICAgICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1NpemVzLFxyXG4gICAgICBzZXRXaW5kb3daSW5kZXhlcyxcclxuICAgICAgc2V0V2luZG93TG9jYXRpb25zLFxyXG4gICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd01pbmltaXplcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIHdpbmRvd3MuZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNbd2luZG93LnByb3BzLmlkXSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIHdpbmRvd107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgd2luZG93XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fSBhcyBEZWZhdWx0VGhlbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInR3LXdpbmRvd3NcIl19PlxyXG4gICAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgZ3JpZDogMSxcclxuICBncmlkc0dhcDogMTAsXHJcbiAgZ3JpZHNDb3VudDogMTIsXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgc2l6ZTogXCIyLjRyZW1cIixcclxuICAgICAgY29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM0MjQyNDJcIixcclxuICAgIH0sXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGNvbG9yOiBcIiM5ZTllOWVcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjMjEyMTIxXCIsXHJcbiAgICB9LFxyXG4gICAgaWNvbnM6IHtcclxuICAgICAgbWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICAgIG1pbmltaXplOiBgdXJsKCR7aWNvbk1pbmltaXplfSlgLFxyXG4gICAgICByZXNpemU6IGB1cmwoJHtpY29uUmVzaXplfSlgLFxyXG4gICAgfSxcclxuICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICB9LFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19