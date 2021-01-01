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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImNoaWxkcmVuIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZEJveE1pbmltaXplcyIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsImlkIiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJkZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaGVhZGVyIiwic2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvZHkiLCJpY29ucyIsIm1heGltaXplIiwiaWNvbk1heGltaXplIiwibWluaW1pemUiLCJpY29uTWluaW1pemUiLCJyZXNpemUi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Q0U7QUFBSyxJQUFBLFNBQVMsRUFBRUosT0FBTyxDQUFDLFlBQUQ7QUFBdkIsS0FDR2dDLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERixDQURGO0FBU0QsQ0E5R0Q7O0FBZ0hBdkMsT0FBTyxDQUFDaUQsWUFBUixHQUF1QjtBQUNyQjlDLEVBQUFBLE9BQU8sRUFBRSxJQURZO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUUsQ0FGZTtBQUdyQkMsRUFBQUEsV0FBVyxFQUFFO0FBQUU2QyxJQUFBQSxNQUFNLEVBQUUsQ0FBVjtBQUFhQyxJQUFBQSxNQUFNLEVBQUUsR0FBckI7QUFBMEJDLElBQUFBLE9BQU8sRUFBRTtBQUFuQyxHQUhRO0FBSXJCN0MsRUFBQUEsUUFBUSxFQUFFLEVBSlc7QUFLckJELEVBQUFBLFVBQVUsRUFBRSxFQUxTO0FBTXJCRSxFQUFBQSxNQUFNLEVBQUU7QUFDTjZDLElBQUFBLE1BQU0sRUFBRTtBQUNOQyxNQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVOQyxNQUFBQSxLQUFLLEVBQUUsU0FGRDtBQUdOQyxNQUFBQSxVQUFVLEVBQUU7QUFITixLQURGO0FBTU5DLElBQUFBLElBQUksRUFBRTtBQUNKRixNQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKQyxNQUFBQSxVQUFVLEVBQUU7QUFGUixLQU5BO0FBVU5FLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxRQUFRLGdCQUFTQyxxQkFBVCxNQURIO0FBRUxDLE1BQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BRkg7QUFHTEMsTUFBQUEsTUFBTSxnQkFBU0MsbUJBQVQ7QUFIRCxLQVZEO0FBZU5DLElBQUFBLFlBQVksRUFBRSxNQWZSO0FBZ0JOQyxJQUFBQSxTQUFTLEVBQUU7QUFoQkw7QUFOYSxDQUF2QjtlQTBCZWxFLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IGljb25NaW5pbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbk1heGltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWF4aW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uUmVzaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tcmVzaXplLnBuZ1wiO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9XaW5kb3dzUHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVzIHtcclxuICBoZWFkZXI6IHtcclxuICAgIHNpemU6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib2R5OiB7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIH07XHJcbiAgaWNvbnM6IHtcclxuICAgIG1heGltaXplOiBzdHJpbmc7XHJcbiAgICBtaW5pbWl6ZTogc3RyaW5nO1xyXG4gICAgcmVzaXplOiBzdHJpbmc7XHJcbiAgfTtcclxuICBib3JkZXJSYWRpdXM6IHN0cmluZztcclxuICBib3hTaGFkb3c6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgYnJlYWtQb2ludHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH07XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzOiBTdHlsZXM7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2hpbGRyZW4sXHJcbiAgICB0YXNrYmFyLFxyXG4gICAgc3RlcCxcclxuICAgIGJyZWFrUG9pbnRzLFxyXG4gICAgZ3JpZHNDb3VudCxcclxuICAgIGdyaWRzR2FwLFxyXG4gICAgc3R5bGVzLFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHN0eWxlcykoKTtcclxuICBjb25zdCB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH0gPSB1c2VHcmlkcyhncmlkc0NvdW50LCBncmlkc0dhcCk7XHJcbiAgY29uc3QgW2hlYWRlclJlZiwgeyBoZWlnaHQ6IGhlYWRlckhlaWdodCB9XSA9IHVzZURpbWVuc2lvbnMoKTtcclxuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG5cclxuICBjb25zdCBkQm94TWluaW1pemVzID0gY2hpbGRyZW4ucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgcmV0dXJuIHsgLi4udG90YWwsIFtpdGVtLnByb3BzLmlkXTogaXRlbS5wcm9wcy5zdGFydE1pbmltaXplZCB9O1xyXG4gIH0sIHt9KTtcclxuXHJcbiAgY29uc3QgaVdpbmRvd1NpemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93U2l6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1pJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TG9jYXRpb25zXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWF4aW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWF4aW1pemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWluaW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93TWluaW1pemVzXCIsIGRCb3hNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XHJcbiAgfSwgW3dpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1pJbmRleGVzKSk7XHJcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcclxuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNaW5pbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWluaW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB0YXNrYmFyLFxyXG4gICAgICBzdGVwLFxyXG4gICAgICBicmVha1BvaW50cyxcclxuICAgICAgZ3JpZHNHYXAsXHJcbiAgICAgIGdyaWRzV2lkdGgsXHJcbiAgICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgICBoZWFkZXJSZWYsXHJcbiAgICAgIGhlYWRlckhlaWdodCxcclxuICAgICAgd2luZG93U2l6ZXMsXHJcbiAgICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIHdpbmRvd01heGltaXplcyxcclxuICAgICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgICBzZXRXaW5kb3dTaXplcyxcclxuICAgICAgc2V0V2luZG93WkluZGV4ZXMsXHJcbiAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgc2V0V2luZG93TWF4aW1pemVzLFxyXG4gICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zSW46IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGxldCB0YXNrYmFySXRlbXNPdXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKCh3aW5kb3cpID0+IHtcclxuICAgICAgaWYgKHdpbmRvd01pbmltaXplc1t3aW5kb3cucHJvcHMuaWRdICYmIHRhc2tiYXIpIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNJbiA9IFsuLi50YXNrYmFySXRlbXNJbiwgd2luZG93XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNPdXQgPSBbLi4udGFza2Jhckl0ZW1zT3V0LCB3aW5kb3ddO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gICAgZ3JpZHNXaWR0aCxcclxuICAgIGdyaWRzSGVpZ2h0LFxyXG4gICAgaGVhZGVySGVpZ2h0LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3t9IGFzIERlZmF1bHRUaGVtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBzdGVwOiAxLFxyXG4gIGJyZWFrUG9pbnRzOiB7IG1vYmlsZTogMCwgdGFibGV0OiA2MDAsIGRlc2t0b3A6IDEyODAgfSxcclxuICBncmlkc0dhcDogMTAsXHJcbiAgZ3JpZHNDb3VudDogMTIsXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgc2l6ZTogXCIyLjRyZW1cIixcclxuICAgICAgY29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM0MjQyNDJcIixcclxuICAgIH0sXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGNvbG9yOiBcIiM5ZTllOWVcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjMjEyMTIxXCIsXHJcbiAgICB9LFxyXG4gICAgaWNvbnM6IHtcclxuICAgICAgbWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICAgIG1pbmltaXplOiBgdXJsKCR7aWNvbk1pbmltaXplfSlgLFxyXG4gICAgICByZXNpemU6IGB1cmwoJHtpY29uUmVzaXplfSlgLFxyXG4gICAgfSxcclxuICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICB9LFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19