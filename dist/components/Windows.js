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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImNoaWxkcmVuIiwidGFza2JhciIsImdyaWQiLCJncmlkc0NvdW50IiwiZ3JpZHNHYXAiLCJzdHlsZXMiLCJjbGFzc2VzIiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0IiwiaGVhZGVyUmVmIiwiaGVhZGVySGVpZ2h0IiwiaGVpZ2h0IiwiU3RhdGVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImRCb3hNaW5pbWl6ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJpZCIsInN0YXJ0TWluaW1pemVkIiwiaVdpbmRvd1NpemVzIiwiaVdpbmRvd1pJbmRleGVzIiwiaVdpbmRvd0xvY2F0aW9ucyIsImlXaW5kb3dNYXhpbWl6ZXMiLCJpV2luZG93TWluaW1pemVzIiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3JFYWNoIiwid2luZG93IiwiZGVmYXVsdFByb3BzIiwiaGVhZGVyIiwic2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvZHkiLCJpY29ucyIsIm1heGltaXplIiwiaWNvbk1heGltaXplIiwibWluaW1pemUiLCJpY29uTWluaW1pemUiLCJyZXNpemUiLCJpY29uUmVzaXplIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Il0s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LE9BQU8sQ0FBQ2dELFlBQVIsR0FBdUI7QUFDckI3QyxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFLENBRmU7QUFHckJFLEVBQUFBLFFBQVEsRUFBRSxFQUhXO0FBSXJCRCxFQUFBQSxVQUFVLEVBQUUsRUFKUztBQUtyQkUsRUFBQUEsTUFBTSxFQUFFO0FBQ04wQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsSUFBSSxFQUFFLFFBREE7QUFFTkMsTUFBQUEsS0FBSyxFQUFFLFNBRkQ7QUFHTkMsTUFBQUEsVUFBVSxFQUFFO0FBSE4sS0FERjtBQU1OQyxJQUFBQSxJQUFJLEVBQUU7QUFDSkYsTUFBQUEsS0FBSyxFQUFFLFNBREg7QUFFSkMsTUFBQUEsVUFBVSxFQUFFO0FBRlIsS0FOQTtBQVVORSxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsUUFBUSxnQkFBU0MscUJBQVQsTUFESDtBQUVMQyxNQUFBQSxRQUFRLGdCQUFTQyxxQkFBVCxNQUZIO0FBR0xDLE1BQUFBLE1BQU0sZ0JBQVNDLG1CQUFUO0FBSEQsS0FWRDtBQWVOQyxJQUFBQSxZQUFZLEVBQUUsTUFmUjtBQWdCTkMsSUFBQUEsU0FBUyxFQUFFO0FBaEJMO0FBTGEsQ0FBdkI7ZUF5QmU5RCxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LXVzZS1kaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCBpY29uTWluaW1pemUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1taW5pbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25NYXhpbWl6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlcyB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBzaXplOiBzdHJpbmc7XHJcbiAgICBjb2xvcjogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZDogc3RyaW5nO1xyXG4gIH07XHJcbiAgYm9keToge1xyXG4gICAgY29sb3I6IHN0cmluZztcclxuICAgIGJhY2tncm91bmQ6IHN0cmluZztcclxuICB9O1xyXG4gIGljb25zOiB7XHJcbiAgICBtYXhpbWl6ZTogc3RyaW5nO1xyXG4gICAgbWluaW1pemU6IHN0cmluZztcclxuICAgIHJlc2l6ZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgYm9yZGVyUmFkaXVzOiBzdHJpbmc7XHJcbiAgYm94U2hhZG93OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudFtdO1xyXG4gIHRhc2tiYXI6IGJvb2xlYW47XHJcbiAgZ3JpZDogbnVtYmVyO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG4gIHN0eWxlczogU3R5bGVzO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHRhc2tiYXIsIGdyaWQsIGdyaWRzQ291bnQsIGdyaWRzR2FwLCBzdHlsZXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoc3R5bGVzKSgpO1xyXG4gIGNvbnN0IHsgZ3JpZHNXaWR0aCwgZ3JpZHNIZWlnaHQgfSA9IHVzZUdyaWRzKGdyaWRzQ291bnQsIGdyaWRzR2FwKTtcclxuICBjb25zdCBbaGVhZGVyUmVmLCB7IGhlaWdodDogaGVhZGVySGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucygpO1xyXG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGRCb3hNaW5pbWl6ZXMgPSBjaGlsZHJlbi5yZWR1Y2UoKHRvdGFsOiBvYmplY3QsIGl0ZW06IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2l0ZW0ucHJvcHMuaWRdOiBpdGVtLnByb3BzLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dTaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKFwid2luZG93WkluZGV4ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dMb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgZEJveE1pbmltaXplcyk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHRhc2tiYXIsXHJcbiAgICAgIGdyaWQsXHJcbiAgICAgIGdyaWRzR2FwLFxyXG4gICAgICBncmlkc1dpZHRoLFxyXG4gICAgICBncmlkc0hlaWdodCxcclxuICAgICAgaGVhZGVyUmVmLFxyXG4gICAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1NpemVzLFxyXG4gICAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1pJbmRleGVzLFxyXG4gICAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgICAgc2V0V2luZG93TWluaW1pemVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNbd2luZG93LnByb3BzLmlkXSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIHdpbmRvd107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgd2luZG93XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fSBhcyBEZWZhdWx0VGhlbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInR3LXdpbmRvd3NcIl19PlxyXG4gICAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgZ3JpZDogMSxcclxuICBncmlkc0dhcDogMTAsXHJcbiAgZ3JpZHNDb3VudDogMTIsXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgc2l6ZTogXCIyLjRyZW1cIixcclxuICAgICAgY29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcIiM0MjQyNDJcIixcclxuICAgIH0sXHJcbiAgICBib2R5OiB7XHJcbiAgICAgIGNvbG9yOiBcIiM5ZTllOWVcIixcclxuICAgICAgYmFja2dyb3VuZDogXCIjMjEyMTIxXCIsXHJcbiAgICB9LFxyXG4gICAgaWNvbnM6IHtcclxuICAgICAgbWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICAgIG1pbmltaXplOiBgdXJsKCR7aWNvbk1pbmltaXplfSlgLFxyXG4gICAgICByZXNpemU6IGB1cmwoJHtpY29uUmVzaXplfSlgLFxyXG4gICAgfSxcclxuICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICBib3hTaGFkb3c6IFwiMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIixcclxuICB9LFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19