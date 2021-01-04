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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImNoaWxkcmVuIiwidGFza2JhciIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZEJveE1pbmltaXplcyIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsImlkIiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJkZWZhdWx0UHJvcHMiLCJtb2JpbGUiLCJ0YWJsZXQiLCJkZXNrdG9wIiwiaGVhZGVyIiwic2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvZHkiLCJpY29ucyIsIm1heGltaXplIiwiaWNvbk1heGltaXplIiwibWluaW1pemUiLCJpY29uTWluaW1pemUiLCJyZXNpemUi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RTtBQUFLLElBQUEsU0FBUyxFQUFFSixPQUFPLENBQUMsWUFBRDtBQUF2QixLQUNHZ0MsZUFESCxlQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2QkYsY0FBN0IsQ0FIRixDQURGLENBREY7QUFTRCxDQTlHRDs7QUFnSEF2QyxPQUFPLENBQUNpRCxZQUFSLEdBQXVCO0FBQ3JCOUMsRUFBQUEsT0FBTyxFQUFFLElBRFk7QUFFckJDLEVBQUFBLElBQUksRUFBRSxDQUZlO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRTZDLElBQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWFDLElBQUFBLE1BQU0sRUFBRSxHQUFyQjtBQUEwQkMsSUFBQUEsT0FBTyxFQUFFO0FBQW5DLEdBSFE7QUFJckI3QyxFQUFBQSxRQUFRLEVBQUUsRUFKVztBQUtyQkQsRUFBQUEsVUFBVSxFQUFFLEVBTFM7QUFNckJFLEVBQUFBLE1BQU0sRUFBRTtBQUNONkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLElBQUksRUFBRSxRQURBO0FBRU5DLE1BQUFBLEtBQUssRUFBRSxTQUZEO0FBR05DLE1BQUFBLFVBQVUsRUFBRTtBQUhOLEtBREY7QUFNTkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pGLE1BQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLE1BQUFBLFVBQVUsRUFBRTtBQUZSLEtBTkE7QUFVTkUsSUFBQUEsS0FBSyxFQUFFO0FBQ0xDLE1BQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BREg7QUFFTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFGSDtBQUdMQyxNQUFBQSxNQUFNLGdCQUFTQyxtQkFBVDtBQUhELEtBVkQ7QUFlTkMsSUFBQUEsWUFBWSxFQUFFLE1BZlI7QUFnQk5DLElBQUFBLFNBQVMsRUFBRTtBQWhCTDtBQU5hLENBQXZCO2VBMEJlbEUsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC11c2UtZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBEZWZhdWx0VGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VHcmlkcyB9IGZyb20gXCIuLi91dGlscy91c2VHcmlkc1wiO1xyXG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0TG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgaWNvbk1pbmltaXplIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2ljb24tbWluaW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uTWF4aW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1tYXhpbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25SZXNpemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1yZXNpemUucG5nXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBTdHlsZXMsIEJyZWFrUG9pbnRzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgYnJlYWtQb2ludHM6IEJyZWFrUG9pbnRzO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG4gIHN0eWxlczogU3R5bGVzO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgdGFza2JhcixcclxuICAgIHN0ZXAsXHJcbiAgICBicmVha1BvaW50cyxcclxuICAgIGdyaWRzQ291bnQsXHJcbiAgICBncmlkc0dhcCxcclxuICAgIHN0eWxlcyxcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMpKCk7XHJcbiAgY29uc3QgeyBncmlkc1dpZHRoLCBncmlkc0hlaWdodCB9ID0gdXNlR3JpZHMoZ3JpZHNDb3VudCwgZ3JpZHNHYXApO1xyXG4gIGNvbnN0IFtoZWFkZXJSZWYsIHsgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKCk7XHJcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZEJveE1pbmltaXplcyA9IGNoaWxkcmVuLnJlZHVjZSgodG90YWw6IG9iamVjdCwgaXRlbTogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnRvdGFsLCBbaXRlbS5wcm9wcy5pZF06IGl0ZW0ucHJvcHMuc3RhcnRNaW5pbWl6ZWQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd1NpemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93WkluZGV4ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3daSW5kZXhlc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd0xvY2F0aW9uc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01heGltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01heGltaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGdldExvY2FsU3RvcmFnZShcIndpbmRvd01pbmltaXplc1wiLCBkQm94TWluaW1pemVzKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgdGFza2JhcixcclxuICAgICAgc3RlcCxcclxuICAgICAgYnJlYWtQb2ludHMsXHJcbiAgICAgIGdyaWRzR2FwLFxyXG4gICAgICBncmlkc1dpZHRoLFxyXG4gICAgICBncmlkc0hlaWdodCxcclxuICAgICAgaGVhZGVyUmVmLFxyXG4gICAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1NpemVzLFxyXG4gICAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1pJbmRleGVzLFxyXG4gICAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgICAgc2V0V2luZG93TWluaW1pemVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNbd2luZG93LnByb3BzLmlkXSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIHdpbmRvd107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgd2luZG93XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fSBhcyBEZWZhdWx0VGhlbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInR3LXdpbmRvd3NcIl19PlxyXG4gICAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgc3RlcDogMSxcclxuICBicmVha1BvaW50czogeyBtb2JpbGU6IDAsIHRhYmxldDogNjAwLCBkZXNrdG9wOiAxMjgwIH0sXHJcbiAgZ3JpZHNHYXA6IDEwLFxyXG4gIGdyaWRzQ291bnQ6IDEyLFxyXG4gIHN0eWxlczoge1xyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIHNpemU6IFwiMi40cmVtXCIsXHJcbiAgICAgIGNvbG9yOiBcIiNiZGJkYmRcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjNDI0MjQyXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keToge1xyXG4gICAgICBjb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgfSxcclxuICAgIGljb25zOiB7XHJcbiAgICAgIG1heGltaXplOiBgdXJsKCR7aWNvbk1heGltaXplfSlgLFxyXG4gICAgICBtaW5pbWl6ZTogYHVybCgke2ljb25NaW5pbWl6ZX0pYCxcclxuICAgICAgcmVzaXplOiBgdXJsKCR7aWNvblJlc2l6ZX0pYCxcclxuICAgIH0sXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMXJlbVwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgfSxcclxufSBhcyBQYXJ0aWFsPFByb3BzPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==