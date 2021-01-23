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
      background = props.background,
      children = props.children,
      taskbar = props.taskbar,
      taskbarLocation = props.taskbarLocation,
      step = props.step,
      breakPoints = props.breakPoints,
      gridsCount = props.gridsCount,
      gridsGap = props.gridsGap,
      styles = props.styles;
  var classes = (0, _styles.useStyles)(styles, taskbarLocation)();

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
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-background"
  }, background), taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn)));
};

Windows.defaultProps = {
  background: null,
  taskbar: true,
  taskbarLocation: "bottom",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImlkIiwiYmFja2dyb3VuZCIsImNoaWxkcmVuIiwidGFza2JhciIsInRhc2tiYXJMb2NhdGlvbiIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiZEJveE1pbmltaXplcyIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInN0YXJ0TWluaW1pemVkIiwiaVdpbmRvd1NpemVzIiwiaVdpbmRvd1pJbmRleGVzIiwiaVdpbmRvd0xvY2F0aW9ucyIsImlXaW5kb3dNYXhpbWl6ZXMiLCJpV2luZG93TWluaW1pemVzIiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0IiwiZm9yRWFjaCIsIndpbmRvdyIsImRlZmF1bHRQcm9wcyIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBa0I7QUFBQSxNQUU5QkMsRUFGOEIsR0FZNUJELEtBWjRCLENBRTlCQyxFQUY4QjtBQUFBLE1BRzlCQyxVQUg4QixHQVk1QkYsS0FaNEIsQ0FHOUJFLFVBSDhCO0FBQUEsTUFJOUJDLFFBSjhCLEdBWTVCSCxLQVo0QixDQUk5QkcsUUFKOEI7QUFBQSxNQUs5QkMsT0FMOEIsR0FZNUJKLEtBWjRCLENBSzlCSSxPQUw4QjtBQUFBLE1BTTlCQyxlQU44QixHQVk1QkwsS0FaNEIsQ0FNOUJLLGVBTjhCO0FBQUEsTUFPOUJDLElBUDhCLEdBWTVCTixLQVo0QixDQU85Qk0sSUFQOEI7QUFBQSxNQVE5QkMsV0FSOEIsR0FZNUJQLEtBWjRCLENBUTlCTyxXQVI4QjtBQUFBLE1BUzlCQyxVQVQ4QixHQVk1QlIsS0FaNEIsQ0FTOUJRLFVBVDhCO0FBQUEsTUFVOUJDLFFBVjhCLEdBWTVCVCxLQVo0QixDQVU5QlMsUUFWOEI7QUFBQSxNQVc5QkMsTUFYOEIsR0FZNUJWLEtBWjRCLENBVzlCVSxNQVg4QjtBQWNoQyxNQUFNQyxPQUFPLEdBQUcsdUJBQVVELE1BQVYsRUFBa0JMLGVBQWxCLEdBQWhCOztBQWRnQyxrQkFlSSx5QkFBU0csVUFBVCxFQUFxQkMsUUFBckIsQ0FmSjtBQUFBLE1BZXhCRyxVQWZ3QixhQWV4QkEsVUFmd0I7QUFBQSxNQWVaQyxXQWZZLGFBZVpBLFdBZlk7O0FBQUEsdUJBZ0JjLGtDQWhCZDtBQUFBO0FBQUEsTUFnQnpCQyxTQWhCeUI7QUFBQSxNQWdCSkMsWUFoQkksc0JBZ0JaQyxNQWhCWTs7QUFBQSxvQkFpQkosdUJBQVdDLDZCQUFYLENBakJJO0FBQUEsTUFpQnhCQyxLQWpCd0IsZUFpQnhCQSxLQWpCd0I7QUFBQSxNQWlCakJDLFFBakJpQixlQWlCakJBLFFBakJpQjs7QUFtQmhDLE1BQU1DLGFBQWEsR0FBR2pCLFFBQVEsQ0FBQ2tCLE1BQVQsQ0FBZ0IsVUFBQ0MsS0FBRCxFQUFnQkMsSUFBaEIsRUFBc0M7QUFDMUUsMkNBQVlELEtBQVosMkJBQW9CQyxJQUFJLENBQUN2QixLQUFMLENBQVdDLEVBQS9CLEVBQW9Dc0IsSUFBSSxDQUFDdkIsS0FBTCxDQUFXd0IsY0FBL0M7QUFDRCxHQUZxQixFQUVuQixFQUZtQixDQUF0QjtBQUlBLE1BQU1DLFlBQVksR0FBRyxzQ0FBZ0J4QixFQUFoQixFQUFvQixPQUFwQixFQUE2QixFQUE3QixDQUFyQjtBQUNBLE1BQU15QixlQUFlLEdBQUcsc0NBQWdCekIsRUFBaEIsRUFBb0IsVUFBcEIsRUFBZ0MsRUFBaEMsQ0FBeEI7QUFDQSxNQUFNMEIsZ0JBQWdCLEdBQUcsc0NBQWdCMUIsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUMsRUFBakMsQ0FBekI7QUFDQSxNQUFNMkIsZ0JBQWdCLEdBQUcsc0NBQWdCM0IsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUMsRUFBakMsQ0FBekI7QUFDQSxNQUFNNEIsZ0JBQWdCLEdBQUcsc0NBQWdCNUIsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUNtQixhQUFqQyxDQUF6Qjs7QUEzQmdDLGtCQTZCTSxxQkFBU0ssWUFBVCxDQTdCTjtBQUFBO0FBQUEsTUE2QnpCSyxXQTdCeUI7QUFBQSxNQTZCWkMsY0E3Qlk7O0FBQUEsbUJBOEJZLHFCQUFTTCxlQUFULENBOUJaO0FBQUE7QUFBQSxNQThCekJNLGNBOUJ5QjtBQUFBLE1BOEJUQyxpQkE5QlM7O0FBQUEsbUJBK0JjLHFCQUFTTixnQkFBVCxDQS9CZDtBQUFBO0FBQUEsTUErQnpCTyxlQS9CeUI7QUFBQSxNQStCUkMsa0JBL0JROztBQUFBLG1CQWdDYyxxQkFBU1AsZ0JBQVQsQ0FoQ2Q7QUFBQTtBQUFBLE1BZ0N6QlEsZUFoQ3lCO0FBQUEsTUFnQ1JDLGtCQWhDUTs7QUFBQSxtQkFpQ2MscUJBQVNSLGdCQUFULENBakNkO0FBQUE7QUFBQSxNQWlDekJTLGVBakN5QjtBQUFBLE1BaUNSQyxrQkFqQ1E7O0FBQUEsb0JBa0NZLHFCQUF3QixFQUF4QixDQWxDWjtBQUFBO0FBQUEsTUFrQ3pCQyxjQWxDeUI7QUFBQSxNQWtDVEMsaUJBbENTOztBQUFBLG9CQW1DYyxxQkFBd0IsRUFBeEIsQ0FuQ2Q7QUFBQTtBQUFBLE1BbUN6QkMsZUFuQ3lCO0FBQUEsTUFtQ1JDLGtCQW5DUTs7QUFxQ2hDLHdCQUFVLFlBQU07QUFDZCwwQ0FBZ0IxQyxFQUFoQixFQUFvQixPQUFwQixFQUE2QjZCLFdBQTdCO0FBQ0QsR0FGRCxFQUVHLENBQUM3QixFQUFELEVBQUs2QixXQUFMLENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2QsMENBQWdCN0IsRUFBaEIsRUFBb0IsVUFBcEIsRUFBZ0MrQixjQUFoQztBQUNELEdBRkQsRUFFRyxDQUFDL0IsRUFBRCxFQUFLK0IsY0FBTCxDQUZIO0FBSUEsd0JBQVUsWUFBTTtBQUNkLDBDQUFnQi9CLEVBQWhCLEVBQW9CLFdBQXBCLEVBQWlDaUMsZUFBakM7QUFDRCxHQUZELEVBRUcsQ0FBQ2pDLEVBQUQsRUFBS2lDLGVBQUwsQ0FGSDtBQUlBLHdCQUFVLFlBQU07QUFDZCwwQ0FBZ0JqQyxFQUFoQixFQUFvQixXQUFwQixFQUFpQ21DLGVBQWpDO0FBQ0QsR0FGRCxFQUVHLENBQUNuQyxFQUFELEVBQUttQyxlQUFMLENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2QsMENBQWdCbkMsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUNxQyxlQUFqQztBQUNELEdBRkQsRUFFRyxDQUFDckMsRUFBRCxFQUFLcUMsZUFBTCxDQUZIO0FBSUEsd0JBQVUsWUFBTTtBQUNkbkIsSUFBQUEsUUFBUSxpQ0FDSEQsS0FERztBQUVOZCxNQUFBQSxPQUFPLEVBQVBBLE9BRk07QUFHTkUsTUFBQUEsSUFBSSxFQUFKQSxJQUhNO0FBSU5DLE1BQUFBLFdBQVcsRUFBWEEsV0FKTTtBQUtORSxNQUFBQSxRQUFRLEVBQVJBLFFBTE07QUFNTkcsTUFBQUEsVUFBVSxFQUFWQSxVQU5NO0FBT05DLE1BQUFBLFdBQVcsRUFBWEEsV0FQTTtBQVFOQyxNQUFBQSxTQUFTLEVBQVRBLFNBUk07QUFTTkMsTUFBQUEsWUFBWSxFQUFaQSxZQVRNO0FBVU5lLE1BQUFBLFdBQVcsRUFBWEEsV0FWTTtBQVdORSxNQUFBQSxjQUFjLEVBQWRBLGNBWE07QUFZTkUsTUFBQUEsZUFBZSxFQUFmQSxlQVpNO0FBYU5FLE1BQUFBLGVBQWUsRUFBZkEsZUFiTTtBQWNORSxNQUFBQSxlQUFlLEVBQWZBLGVBZE07QUFlTlAsTUFBQUEsY0FBYyxFQUFkQSxjQWZNO0FBZ0JORSxNQUFBQSxpQkFBaUIsRUFBakJBLGlCQWhCTTtBQWlCTkUsTUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFqQk07QUFrQk5FLE1BQUFBLGtCQUFrQixFQUFsQkEsa0JBbEJNO0FBbUJORSxNQUFBQSxrQkFBa0IsRUFBbEJBO0FBbkJNLE9BQVI7QUFzQkEsUUFBSUMsY0FBNkIsR0FBRyxFQUFwQztBQUNBLFFBQUlFLGVBQThCLEdBQUcsRUFBckM7QUFFQXZDLElBQUFBLFFBQVEsQ0FBQ3lDLE9BQVQsQ0FBaUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFVBQUlQLGVBQWUsQ0FBQ08sTUFBTSxDQUFDN0MsS0FBUCxDQUFhQyxFQUFkLENBQWYsSUFBb0NHLE9BQXhDLEVBQWlEO0FBQy9Db0MsUUFBQUEsY0FBYyxnQ0FBT0EsY0FBUCxJQUF1QkssTUFBdkIsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMSCxRQUFBQSxlQUFlLGdDQUFPQSxlQUFQLElBQXdCRyxNQUF4QixFQUFmO0FBQ0Q7QUFDRixLQU5EO0FBUUFKLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBbkNjLENBb0NkO0FBQ0QsR0FyQ0QsRUFxQ0csQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLEVBTUQxQixVQU5DLEVBT0RDLFdBUEMsRUFRREUsWUFSQyxDQXJDSDtBQWdEQSxzQkFDRSw2QkFBQyx1QkFBRDtBQUFlLElBQUEsS0FBSyxFQUFFO0FBQXRCLGtCQUNFO0FBQUssSUFBQSxFQUFFLEVBQUVkLEVBQVQ7QUFBYSxJQUFBLFNBQVMsRUFBRVUsT0FBTyxDQUFDLFlBQUQ7QUFBL0Isa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQWdDVCxVQUFoQyxDQURGLEVBR0d3QyxlQUhILGVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixjQUE3QixDQUxGLENBREYsQ0FERjtBQVdELENBcEhEOztBQXNIQXpDLE9BQU8sQ0FBQytDLFlBQVIsR0FBdUI7QUFDckI1QyxFQUFBQSxVQUFVLEVBQUUsSUFEUztBQUVyQkUsRUFBQUEsT0FBTyxFQUFFLElBRlk7QUFHckJDLEVBQUFBLGVBQWUsRUFBRSxRQUhJO0FBSXJCQyxFQUFBQSxJQUFJLEVBQUUsQ0FKZTtBQUtyQkMsRUFBQUEsV0FBVyxFQUFFO0FBQUV3QyxJQUFBQSxNQUFNLEVBQUUsQ0FBVjtBQUFhQyxJQUFBQSxNQUFNLEVBQUUsR0FBckI7QUFBMEJDLElBQUFBLE9BQU8sRUFBRTtBQUFuQyxHQUxRO0FBTXJCeEMsRUFBQUEsUUFBUSxFQUFFLEVBTlc7QUFPckJELEVBQUFBLFVBQVUsRUFBRTtBQVBTLENBQXZCO2VBVWVULE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlR3JpZHMgfSBmcm9tIFwiLi4vdXRpbHMvdXNlR3JpZHNcIjtcclxuaW1wb3J0IHsgZ2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2dldExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBzZXRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvc2V0TG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiLi9XaW5kb3dzUHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgU3R5bGVzLCBCcmVha1BvaW50cywgVGFza2JhckxvY2F0aW9uIH0gZnJvbSBcIi4vaW5kZXguZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBiYWNrZ3JvdW5kOiBKU1guRWxlbWVudCB8IG51bGw7XHJcbiAgY2hpbGRyZW46IEpTWC5FbGVtZW50W107XHJcbiAgdGFza2JhcjogYm9vbGVhbjtcclxuICB0YXNrYmFyTG9jYXRpb246IFRhc2tiYXJMb2NhdGlvbjtcclxuICBzdGVwOiBudW1iZXI7XHJcbiAgYnJlYWtQb2ludHM6IEJyZWFrUG9pbnRzO1xyXG4gIGdyaWRzR2FwOiBudW1iZXI7XHJcbiAgZ3JpZHNDb3VudDogbnVtYmVyO1xyXG4gIHN0eWxlcz86IFBhcnRpYWw8U3R5bGVzPjtcclxufVxyXG5cclxuY29uc3QgV2luZG93cyA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpZCxcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIHRhc2tiYXIsXHJcbiAgICB0YXNrYmFyTG9jYXRpb24sXHJcbiAgICBzdGVwLFxyXG4gICAgYnJlYWtQb2ludHMsXHJcbiAgICBncmlkc0NvdW50LFxyXG4gICAgZ3JpZHNHYXAsXHJcbiAgICBzdHlsZXMsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHN0eWxlcywgdGFza2JhckxvY2F0aW9uKSgpO1xyXG4gIGNvbnN0IHsgZ3JpZHNXaWR0aCwgZ3JpZHNIZWlnaHQgfSA9IHVzZUdyaWRzKGdyaWRzQ291bnQsIGdyaWRzR2FwKTtcclxuICBjb25zdCBbaGVhZGVyUmVmLCB7IGhlaWdodDogaGVhZGVySGVpZ2h0IH1dID0gdXNlRGltZW5zaW9ucygpO1xyXG4gIGNvbnN0IHsgc3RhdGUsIHNldFN0YXRlIH0gPSB1c2VDb250ZXh0KFN0YXRlQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGRCb3hNaW5pbWl6ZXMgPSBjaGlsZHJlbi5yZWR1Y2UoKHRvdGFsOiBvYmplY3QsIGl0ZW06IEpTWC5FbGVtZW50KSA9PiB7XHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2l0ZW0ucHJvcHMuaWRdOiBpdGVtLnByb3BzLnN0YXJ0TWluaW1pemVkIH07XHJcbiAgfSwge30pO1xyXG5cclxuICBjb25zdCBpV2luZG93U2l6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoaWQsIFwic2l6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJ6SW5kZXhlc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJsb2NhdGlvbnNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWF4aW1pemVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TWluaW1pemVzID0gZ2V0TG9jYWxTdG9yYWdlKGlkLCBcIm1pbmltaXplc1wiLCBkQm94TWluaW1pemVzKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGlkLCBcInNpemVzXCIsIHdpbmRvd1NpemVzKTtcclxuICB9LCBbaWQsIHdpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwiekluZGV4ZXNcIiwgd2luZG93WkluZGV4ZXMpO1xyXG4gIH0sIFtpZCwgd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvY2FsU3RvcmFnZShpZCwgXCJsb2NhdGlvbnNcIiwgd2luZG93TG9jYXRpb25zKTtcclxuICB9LCBbaWQsIHdpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGlkLCBcIm1heGltaXplc1wiLCB3aW5kb3dNYXhpbWl6ZXMpO1xyXG4gIH0sIFtpZCwgd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWluaW1pemVzXCIsIHdpbmRvd01pbmltaXplcyk7XHJcbiAgfSwgW2lkLCB3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIHRhc2tiYXIsXHJcbiAgICAgIHN0ZXAsXHJcbiAgICAgIGJyZWFrUG9pbnRzLFxyXG4gICAgICBncmlkc0dhcCxcclxuICAgICAgZ3JpZHNXaWR0aCxcclxuICAgICAgZ3JpZHNIZWlnaHQsXHJcbiAgICAgIGhlYWRlclJlZixcclxuICAgICAgaGVhZGVySGVpZ2h0LFxyXG4gICAgICB3aW5kb3dTaXplcyxcclxuICAgICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1NpemVzLFxyXG4gICAgICBzZXRXaW5kb3daSW5kZXhlcyxcclxuICAgICAgc2V0V2luZG93TG9jYXRpb25zLFxyXG4gICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHNldFdpbmRvd01pbmltaXplcyxcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNoaWxkcmVuLmZvckVhY2goKHdpbmRvdykgPT4ge1xyXG4gICAgICBpZiAod2luZG93TWluaW1pemVzW3dpbmRvdy5wcm9wcy5pZF0gJiYgdGFza2Jhcikge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc0luID0gWy4uLnRhc2tiYXJJdGVtc0luLCB3aW5kb3ddO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIHdpbmRvd107XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcclxuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICBncmlkc1dpZHRoLFxyXG4gICAgZ3JpZHNIZWlnaHQsXHJcbiAgICBoZWFkZXJIZWlnaHQsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17e30gYXMgRGVmYXVsdFRoZW1lfT5cclxuICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17Y2xhc3Nlc1tcInR3LXdpbmRvd3NcIl19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYmFja2dyb3VuZFwiPntiYWNrZ3JvdW5kfTwvZGl2PlxyXG5cclxuICAgICAgICB7dGFza2Jhckl0ZW1zT3V0fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBiYWNrZ3JvdW5kOiBudWxsLFxyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgdGFza2JhckxvY2F0aW9uOiBcImJvdHRvbVwiLFxyXG4gIHN0ZXA6IDEsXHJcbiAgYnJlYWtQb2ludHM6IHsgbW9iaWxlOiAwLCB0YWJsZXQ6IDYwMCwgZGVza3RvcDogMTI4MCB9LFxyXG4gIGdyaWRzR2FwOiAxMCxcclxuICBncmlkc0NvdW50OiAxMixcclxufSBhcyBQYXJ0aWFsPFByb3BzPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==