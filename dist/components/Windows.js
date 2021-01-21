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

var _setLocalStorage = require("../utils/setLocalStorage");

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
  var id = props.id,
      children = props.children,
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
  var iWindowSizes = (0, _getLocalStorage.getLocalStorage)(id, "sizes", {});
  var iWindowZIndexes = (0, _getLocalStorage.getLocalStorage)(id, "zIndexes", {});
  var iWindowLocations = (0, _getLocalStorage.getLocalStorage)(id, "locations", {});
  var iWindowMaximizes = (0, _getLocalStorage.getLocalStorage)(id, "maximizes", {});
  var iWindowMinimizes = (0, _getLocalStorage.getLocalStorage)(id, "minimizes", dBoxMinimizes);

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
    (0, _setLocalStorage.setLocalStorage)(id, "sizes", windowSizes);
  }, [id, windowSizes]);
  (0, _react.useEffect)(function () {
    (0, _setLocalStorage.setLocalStorage)(id, "zIndexes", windowZIndexes);
  }, [id, windowZIndexes]);
  (0, _react.useEffect)(function () {
    (0, _setLocalStorage.setLocalStorage)(id, "locations", windowLocations);
  }, [id, windowLocations]);
  (0, _react.useEffect)(function () {
    (0, _setLocalStorage.setLocalStorage)(id, "maximizes", windowMaximizes);
  }, [id, windowMaximizes]);
  (0, _react.useEffect)(function () {
    (0, _setLocalStorage.setLocalStorage)(id, "minimizes", windowMinimizes);
  }, [id, windowMinimizes]);
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
    id: id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImlkIiwiY2hpbGRyZW4iLCJ0YXNrYmFyIiwic3RlcCIsImJyZWFrUG9pbnRzIiwiZ3JpZHNDb3VudCIsImdyaWRzR2FwIiwic3R5bGVzIiwiY2xhc3NlcyIsImdyaWRzV2lkdGgiLCJncmlkc0hlaWdodCIsImhlYWRlclJlZiIsImhlYWRlckhlaWdodCIsImhlaWdodCIsIlN0YXRlQ29udGV4dCIsInN0YXRlIiwic2V0U3RhdGUiLCJkQm94TWluaW1pemVzIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwic3RhcnRNaW5pbWl6ZWQiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJmb3JFYWNoIiwid2luZG93IiwiZGVmYXVsdFByb3BzIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQWtCO0FBQUEs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LElBRFk7QUFFckJDLEVBQUFBLElBQUksRUFBRSxDQUZlO0FBR3JCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRXdDLElBQUFBLE1BQU0sRUFBRSxDQUFWO0FBQWFDLElBQUFBLE1BQU0sRUFBRSxHQUFyQjtBQUEwQkMsSUFBQUEsT0FBTyxFQUFFO0FBQW5DLEdBSFE7QUFJckJ4QyxFQUFBQSxRQUFRLEVBQUUsRUFKVztBQUtyQkQsRUFBQUEsVUFBVSxFQUFFO0FBTFMsQ0FBdkI7ZUFRZVAsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gXCJyZWFjdC11c2UtZGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBEZWZhdWx0VGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VHcmlkcyB9IGZyb20gXCIuLi91dGlscy91c2VHcmlkc1wiO1xyXG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0TG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IHNldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9zZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gXCIuL1dpbmRvd3NQcm92aWRlclwiO1xyXG5pbXBvcnQgeyBTdHlsZXMsIEJyZWFrUG9pbnRzIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjaGlsZHJlbjogSlNYLkVsZW1lbnRbXTtcclxuICB0YXNrYmFyOiBib29sZWFuO1xyXG4gIHN0ZXA6IG51bWJlcjtcclxuICBicmVha1BvaW50czogQnJlYWtQb2ludHM7XHJcbiAgZ3JpZHNHYXA6IG51bWJlcjtcclxuICBncmlkc0NvdW50OiBudW1iZXI7XHJcbiAgc3R5bGVzPzogUGFydGlhbDxTdHlsZXM+O1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGlkLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICB0YXNrYmFyLFxyXG4gICAgc3RlcCxcclxuICAgIGJyZWFrUG9pbnRzLFxyXG4gICAgZ3JpZHNDb3VudCxcclxuICAgIGdyaWRzR2FwLFxyXG4gICAgc3R5bGVzLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMpKCk7XHJcbiAgY29uc3QgeyBncmlkc1dpZHRoLCBncmlkc0hlaWdodCB9ID0gdXNlR3JpZHMoZ3JpZHNDb3VudCwgZ3JpZHNHYXApO1xyXG4gIGNvbnN0IFtoZWFkZXJSZWYsIHsgaGVpZ2h0OiBoZWFkZXJIZWlnaHQgfV0gPSB1c2VEaW1lbnNpb25zKCk7XHJcbiAgY29uc3QgeyBzdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZUNvbnRleHQoU3RhdGVDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZEJveE1pbmltaXplcyA9IGNoaWxkcmVuLnJlZHVjZSgodG90YWw6IG9iamVjdCwgaXRlbTogSlNYLkVsZW1lbnQpID0+IHtcclxuICAgIHJldHVybiB7IC4uLnRvdGFsLCBbaXRlbS5wcm9wcy5pZF06IGl0ZW0ucHJvcHMuc3RhcnRNaW5pbWl6ZWQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJzaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKGlkLCBcInpJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKGlkLCBcImxvY2F0aW9uc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01heGltaXplcyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJtYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWluaW1pemVzXCIsIGRCb3hNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwic2l6ZXNcIiwgd2luZG93U2l6ZXMpO1xyXG4gIH0sIFtpZCwgd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvY2FsU3RvcmFnZShpZCwgXCJ6SW5kZXhlc1wiLCB3aW5kb3daSW5kZXhlcyk7XHJcbiAgfSwgW2lkLCB3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGlkLCBcImxvY2F0aW9uc1wiLCB3aW5kb3dMb2NhdGlvbnMpO1xyXG4gIH0sIFtpZCwgd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWF4aW1pemVzXCIsIHdpbmRvd01heGltaXplcyk7XHJcbiAgfSwgW2lkLCB3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvY2FsU3RvcmFnZShpZCwgXCJtaW5pbWl6ZXNcIiwgd2luZG93TWluaW1pemVzKTtcclxuICB9LCBbaWQsIHdpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgdGFza2JhcixcclxuICAgICAgc3RlcCxcclxuICAgICAgYnJlYWtQb2ludHMsXHJcbiAgICAgIGdyaWRzR2FwLFxyXG4gICAgICBncmlkc1dpZHRoLFxyXG4gICAgICBncmlkc0hlaWdodCxcclxuICAgICAgaGVhZGVyUmVmLFxyXG4gICAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1NpemVzLFxyXG4gICAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1pJbmRleGVzLFxyXG4gICAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgICAgc2V0V2luZG93TWluaW1pemVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNbd2luZG93LnByb3BzLmlkXSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIHdpbmRvd107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgd2luZG93XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fSBhcyBEZWZhdWx0VGhlbWV9PlxyXG4gICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBzdGVwOiAxLFxyXG4gIGJyZWFrUG9pbnRzOiB7IG1vYmlsZTogMCwgdGFibGV0OiA2MDAsIGRlc2t0b3A6IDEyODAgfSxcclxuICBncmlkc0dhcDogMTAsXHJcbiAgZ3JpZHNDb3VudDogMTIsXHJcbn0gYXMgUGFydGlhbDxQcm9wcz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xyXG4iXX0=