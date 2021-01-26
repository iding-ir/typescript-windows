"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactUseDimensions = _interopRequireDefault(require("react-use-dimensions"));

var _reactJss = require("react-jss");

var _useBreakpoint2 = _interopRequireDefault(require("use-breakpoint"));

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

  var _useBreakpoint = (0, _useBreakpoint2.default)(breakPoints, "desktop"),
      breakpoint = _useBreakpoint.breakpoint;

  var dBoxMinimizes = children.reduce(function (total, item) {
    var _item$props = item.props,
        id = _item$props.id,
        startMinimized = _item$props.startMinimized;
    startMinimized.tablet = startMinimized.tablet === undefined ? startMinimized.mobile : startMinimized.tablet;
    startMinimized.desktop = startMinimized.desktop === undefined ? startMinimized.tablet : startMinimized.desktop;
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, id, startMinimized));
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
      if (windowMinimizes[window.props.id][breakpoint] && taskbar) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsImlkIiwiYmFja2dyb3VuZCIsImNoaWxkcmVuIiwidGFza2JhciIsInRhc2tiYXJMb2NhdGlvbiIsInN0ZXAiLCJicmVha1BvaW50cyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsInN0eWxlcyIsImNsYXNzZXMiLCJncmlkc1dpZHRoIiwiZ3JpZHNIZWlnaHQiLCJoZWFkZXJSZWYiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiYnJlYWtwb2ludCIsImRCb3hNaW5pbWl6ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJzdGFydE1pbmltaXplZCIsInRhYmxldCIsInVuZGVmaW5lZCIsIm1vYmlsZSIsImRlc2t0b3AiLCJpV2luZG93U2l6ZXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJmb3JFYWNoIiwid2luZG93IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQWtCO0FBQUEsTUFFOUJDLEVBRjhCLEdBWTVCRCxLQVo0QixDQUU5QkMsRUFGOEI7QUFBQSxNQUc5QkMsVUFIOEIsR0FZNUJGLEtBWjRCLENBRzlCRSxVQUg4QjtBQUFBLE1BSTlCQyxRQUo4QixHQVk1QkgsS0FaNEIsQ0FJOUJHLFFBSjhCO0FBQUEsTUFLOUJDLE9BTDhCLEdBWTVCSixLQVo0QixDQUs5QkksT0FMOEI7QUFBQSxNQU05QkMsZUFOOEIsR0FZNUJMLEtBWjRCLENBTTlCSyxlQU44QjtBQUFBLE1BTzlCQyxJQVA4QixHQVk1Qk4sS0FaNEIsQ0FPOUJNLElBUDhCO0FBQUEsTUFROUJDLFdBUjhCLEdBWTVCUCxLQVo0QixDQVE5Qk8sV0FSOEI7QUFBQSxNQVM5QkMsVUFUOEIsR0FZNUJSLEtBWjRCLENBUzlCUSxVQVQ4QjtBQUFBLE1BVTlCQyxRQVY4QixHQVk1QlQsS0FaNEIsQ0FVOUJTLFFBVjhCO0FBQUEsTUFXOUJDLE1BWDhCLEdBWTVCVixLQVo0QixDQVc5QlUsTUFYOEI7QUFjaEMsTUFBTUMsT0FBTyxHQUFHLHVCQUFVRCxNQUFWLEVBQWtCTCxlQUFsQixHQUFoQjs7QUFkZ0Msa0JBZUkseUJBQVNHLFVBQVQsRUFBcUJDLFFBQXJCLENBZko7QUFBQSxNQWV4QkcsVUFmd0IsYUFleEJBLFVBZndCO0FBQUEsTUFlWkMsV0FmWSxhQWVaQSxXQWZZOztBQUFBLHVCQWdCYyxrQ0FoQmQ7QUFBQTtBQUFBLE1BZ0J6QkMsU0FoQnlCO0FBQUEsTUFnQkpDLFlBaEJJLHNCQWdCWkMsTUFoQlk7O0FBQUEsb0JBaUJKLHVCQUFXQyw2QkFBWCxDQWpCSTtBQUFBLE1BaUJ4QkMsS0FqQndCLGVBaUJ4QkEsS0FqQndCO0FBQUEsTUFpQmpCQyxRQWpCaUIsZUFpQmpCQSxRQWpCaUI7O0FBQUEsdUJBa0JULDZCQUFjWixXQUFkLEVBQTJCLFNBQTNCLENBbEJTO0FBQUEsTUFrQnhCYSxVQWxCd0Isa0JBa0J4QkEsVUFsQndCOztBQW9CaEMsTUFBTUMsYUFBYSxHQUFHbEIsUUFBUSxDQUFDbUIsTUFBVCxDQUFnQixVQUFDQyxLQUFELEVBQWdCQyxJQUFoQixFQUFzQztBQUFBLHNCQUMzQ0EsSUFBSSxDQUFDeEIsS0FEc0M7QUFBQSxRQUNsRUMsRUFEa0UsZUFDbEVBLEVBRGtFO0FBQUEsUUFDOUR3QixjQUQ4RCxlQUM5REEsY0FEOEQ7QUFHMUVBLElBQUFBLGNBQWMsQ0FBQ0MsTUFBZixHQUNFRCxjQUFjLENBQUNDLE1BQWYsS0FBMEJDLFNBQTFCLEdBQ0lGLGNBQWMsQ0FBQ0csTUFEbkIsR0FFSUgsY0FBYyxDQUFDQyxNQUhyQjtBQUtBRCxJQUFBQSxjQUFjLENBQUNJLE9BQWYsR0FDRUosY0FBYyxDQUFDSSxPQUFmLEtBQTJCRixTQUEzQixHQUNJRixjQUFjLENBQUNDLE1BRG5CLEdBRUlELGNBQWMsQ0FBQ0ksT0FIckI7QUFLQSwyQ0FBWU4sS0FBWiwyQkFBb0J0QixFQUFwQixFQUF5QndCLGNBQXpCO0FBQ0QsR0FkcUIsRUFjbkIsRUFkbUIsQ0FBdEI7QUFnQkEsTUFBTUssWUFBWSxHQUFHLHNDQUFnQjdCLEVBQWhCLEVBQW9CLE9BQXBCLEVBQTZCLEVBQTdCLENBQXJCO0FBQ0EsTUFBTThCLGVBQWUsR0FBRyxzQ0FBZ0I5QixFQUFoQixFQUFvQixVQUFwQixFQUFnQyxFQUFoQyxDQUF4QjtBQUNBLE1BQU0rQixnQkFBZ0IsR0FBRyxzQ0FBZ0IvQixFQUFoQixFQUFvQixXQUFwQixFQUFpQyxFQUFqQyxDQUF6QjtBQUNBLE1BQU1nQyxnQkFBZ0IsR0FBRyxzQ0FBZ0JoQyxFQUFoQixFQUFvQixXQUFwQixFQUFpQyxFQUFqQyxDQUF6QjtBQUNBLE1BQU1pQyxnQkFBZ0IsR0FBRyxzQ0FBZ0JqQyxFQUFoQixFQUFvQixXQUFwQixFQUFpQ29CLGFBQWpDLENBQXpCOztBQXhDZ0Msa0JBMENNLHFCQUFTUyxZQUFULENBMUNOO0FBQUE7QUFBQSxNQTBDekJLLFdBMUN5QjtBQUFBLE1BMENaQyxjQTFDWTs7QUFBQSxtQkEyQ1kscUJBQVNMLGVBQVQsQ0EzQ1o7QUFBQTtBQUFBLE1BMkN6Qk0sY0EzQ3lCO0FBQUEsTUEyQ1RDLGlCQTNDUzs7QUFBQSxtQkE0Q2MscUJBQVNOLGdCQUFULENBNUNkO0FBQUE7QUFBQSxNQTRDekJPLGVBNUN5QjtBQUFBLE1BNENSQyxrQkE1Q1E7O0FBQUEsbUJBNkNjLHFCQUFTUCxnQkFBVCxDQTdDZDtBQUFBO0FBQUEsTUE2Q3pCUSxlQTdDeUI7QUFBQSxNQTZDUkMsa0JBN0NROztBQUFBLG1CQThDYyxxQkFBU1IsZ0JBQVQsQ0E5Q2Q7QUFBQTtBQUFBLE1BOEN6QlMsZUE5Q3lCO0FBQUEsTUE4Q1JDLGtCQTlDUTs7QUFBQSxvQkErQ1kscUJBQXdCLEVBQXhCLENBL0NaO0FBQUE7QUFBQSxNQStDekJDLGNBL0N5QjtBQUFBLE1BK0NUQyxpQkEvQ1M7O0FBQUEsb0JBZ0RjLHFCQUF3QixFQUF4QixDQWhEZDtBQUFBO0FBQUEsTUFnRHpCQyxlQWhEeUI7QUFBQSxNQWdEUkMsa0JBaERROztBQWtEaEMsd0JBQVUsWUFBTTtBQUNkLDBDQUFnQi9DLEVBQWhCLEVBQW9CLE9BQXBCLEVBQTZCa0MsV0FBN0I7QUFDRCxHQUZELEVBRUcsQ0FBQ2xDLEVBQUQsRUFBS2tDLFdBQUwsQ0FGSDtBQUlBLHdCQUFVLFlBQU07QUFDZCwwQ0FBZ0JsQyxFQUFoQixFQUFvQixVQUFwQixFQUFnQ29DLGNBQWhDO0FBQ0QsR0FGRCxFQUVHLENBQUNwQyxFQUFELEVBQUtvQyxjQUFMLENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2QsMENBQWdCcEMsRUFBaEIsRUFBb0IsV0FBcEIsRUFBaUNzQyxlQUFqQztBQUNELEdBRkQsRUFFRyxDQUFDdEMsRUFBRCxFQUFLc0MsZUFBTCxDQUZIO0FBSUEsd0JBQVUsWUFBTTtBQUNkLDBDQUFnQnRDLEVBQWhCLEVBQW9CLFdBQXBCLEVBQWlDd0MsZUFBakM7QUFDRCxHQUZELEVBRUcsQ0FBQ3hDLEVBQUQsRUFBS3dDLGVBQUwsQ0FGSDtBQUlBLHdCQUFVLFlBQU07QUFDZCwwQ0FBZ0J4QyxFQUFoQixFQUFvQixXQUFwQixFQUFpQzBDLGVBQWpDO0FBQ0QsR0FGRCxFQUVHLENBQUMxQyxFQUFELEVBQUswQyxlQUFMLENBRkg7QUFJQSx3QkFBVSxZQUFNO0FBQ2R4QixJQUFBQSxRQUFRLGlDQUNIRCxLQURHO0FBRU5kLE1BQUFBLE9BQU8sRUFBUEEsT0FGTTtBQUdORSxNQUFBQSxJQUFJLEVBQUpBLElBSE07QUFJTkMsTUFBQUEsV0FBVyxFQUFYQSxXQUpNO0FBS05FLE1BQUFBLFFBQVEsRUFBUkEsUUFMTTtBQU1ORyxNQUFBQSxVQUFVLEVBQVZBLFVBTk07QUFPTkMsTUFBQUEsV0FBVyxFQUFYQSxXQVBNO0FBUU5DLE1BQUFBLFNBQVMsRUFBVEEsU0FSTTtBQVNOQyxNQUFBQSxZQUFZLEVBQVpBLFlBVE07QUFVTm9CLE1BQUFBLFdBQVcsRUFBWEEsV0FWTTtBQVdORSxNQUFBQSxjQUFjLEVBQWRBLGNBWE07QUFZTkUsTUFBQUEsZUFBZSxFQUFmQSxlQVpNO0FBYU5FLE1BQUFBLGVBQWUsRUFBZkEsZUFiTTtBQWNORSxNQUFBQSxlQUFlLEVBQWZBLGVBZE07QUFlTlAsTUFBQUEsY0FBYyxFQUFkQSxjQWZNO0FBZ0JORSxNQUFBQSxpQkFBaUIsRUFBakJBLGlCQWhCTTtBQWlCTkUsTUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFqQk07QUFrQk5FLE1BQUFBLGtCQUFrQixFQUFsQkEsa0JBbEJNO0FBbUJORSxNQUFBQSxrQkFBa0IsRUFBbEJBO0FBbkJNLE9BQVI7QUFzQkEsUUFBSUMsY0FBNkIsR0FBRyxFQUFwQztBQUNBLFFBQUlFLGVBQThCLEdBQUcsRUFBckM7QUFFQTVDLElBQUFBLFFBQVEsQ0FBQzhDLE9BQVQsQ0FBaUIsVUFBQ0MsTUFBRCxFQUFZO0FBQzNCLFVBQUlQLGVBQWUsQ0FBQ08sTUFBTSxDQUFDbEQsS0FBUCxDQUFhQyxFQUFkLENBQWYsQ0FBaUNtQixVQUFqQyxLQUFnRGhCLE9BQXBELEVBQTZEO0FBQzNEeUMsUUFBQUEsY0FBYyxnQ0FBT0EsY0FBUCxJQUF1QkssTUFBdkIsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMSCxRQUFBQSxlQUFlLGdDQUFPQSxlQUFQLElBQXdCRyxNQUF4QixFQUFmO0FBQ0Q7QUFDRixLQU5EO0FBUUFKLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBbkNjLENBb0NkO0FBQ0QsR0FyQ0QsRUFxQ0csQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLEVBTUQvQixVQU5DLEVBT0RDLFdBUEMsRUFRREUsWUFSQyxDQXJDSDtBQWdEQSxzQkFDRSw2QkFBQyx1QkFBRDtBQUFlLElBQUEsS0FBSyxFQUFFO0FBQXRCLGtCQUNFO0FBQUssSUFBQSxFQUFFLEVBQUVkLEVBQVQ7QUFBYSxJQUFBLFNBQVMsRUFBRVUsT0FBTyxDQUFDLFlBQUQ7QUFBL0Isa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQWdDVCxVQUFoQyxDQURGLEVBR0c2QyxlQUhILGVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixjQUE3QixDQUxGLENBREYsQ0FERjtBQVdELENBaklEOztBQW1JQTlDLE9BQU8sQ0FBQ29ELFlBQVIsR0FBdUI7QUFDckJqRCxFQUFBQSxVQUFVLEVBQUUsSUFEUztBQUVyQkUsRUFBQUEsT0FBTyxFQUFFLElBRlk7QUFHckJDLEVBQUFBLGVBQWUsRUFBRSxRQUhJO0FBSXJCQyxFQUFBQSxJQUFJLEVBQUUsQ0FKZTtBQUtyQkMsRUFBQUEsV0FBVyxFQUFFO0FBQUVxQixJQUFBQSxNQUFNLEVBQUUsQ0FBVjtBQUFhRixJQUFBQSxNQUFNLEVBQUUsR0FBckI7QUFBMEJHLElBQUFBLE9BQU8sRUFBRTtBQUFuQyxHQUxRO0FBTXJCcEIsRUFBQUEsUUFBUSxFQUFFLEVBTlc7QUFPckJELEVBQUFBLFVBQVUsRUFBRTtBQVBTLENBQXZCO2VBVWVULE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtdXNlLWRpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xyXG5pbXBvcnQgdXNlQnJlYWtwb2ludCBmcm9tIFwidXNlLWJyZWFrcG9pbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUdyaWRzIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUdyaWRzXCI7XHJcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gXCIuLi91dGlscy9nZXRMb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgc2V0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL3NldExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSBcIi4vV2luZG93c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IFN0eWxlcywgQnJlYWtQb2ludHMsIFRhc2tiYXJMb2NhdGlvbiB9IGZyb20gXCIuL2luZGV4LmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYmFja2dyb3VuZDogSlNYLkVsZW1lbnQgfCBudWxsO1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudFtdO1xyXG4gIHRhc2tiYXI6IGJvb2xlYW47XHJcbiAgdGFza2JhckxvY2F0aW9uOiBUYXNrYmFyTG9jYXRpb247XHJcbiAgc3RlcDogbnVtYmVyO1xyXG4gIGJyZWFrUG9pbnRzOiBCcmVha1BvaW50cztcclxuICBncmlkc0dhcDogbnVtYmVyO1xyXG4gIGdyaWRzQ291bnQ6IG51bWJlcjtcclxuICBzdHlsZXM/OiBQYXJ0aWFsPFN0eWxlcz47XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgaWQsXHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICB0YXNrYmFyLFxyXG4gICAgdGFza2JhckxvY2F0aW9uLFxyXG4gICAgc3RlcCxcclxuICAgIGJyZWFrUG9pbnRzLFxyXG4gICAgZ3JpZHNDb3VudCxcclxuICAgIGdyaWRzR2FwLFxyXG4gICAgc3R5bGVzLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyhzdHlsZXMsIHRhc2tiYXJMb2NhdGlvbikoKTtcclxuICBjb25zdCB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH0gPSB1c2VHcmlkcyhncmlkc0NvdW50LCBncmlkc0dhcCk7XHJcbiAgY29uc3QgW2hlYWRlclJlZiwgeyBoZWlnaHQ6IGhlYWRlckhlaWdodCB9XSA9IHVzZURpbWVuc2lvbnMoKTtcclxuICBjb25zdCB7IHN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlQ29udGV4dChTdGF0ZUNvbnRleHQpO1xyXG4gIGNvbnN0IHsgYnJlYWtwb2ludCB9ID0gdXNlQnJlYWtwb2ludChicmVha1BvaW50cywgXCJkZXNrdG9wXCIpO1xyXG5cclxuICBjb25zdCBkQm94TWluaW1pemVzID0gY2hpbGRyZW4ucmVkdWNlKCh0b3RhbDogb2JqZWN0LCBpdGVtOiBKU1guRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgc3RhcnRNaW5pbWl6ZWQgfSA9IGl0ZW0ucHJvcHM7XHJcblxyXG4gICAgc3RhcnRNaW5pbWl6ZWQudGFibGV0ID1cclxuICAgICAgc3RhcnRNaW5pbWl6ZWQudGFibGV0ID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IHN0YXJ0TWluaW1pemVkLm1vYmlsZVxyXG4gICAgICAgIDogc3RhcnRNaW5pbWl6ZWQudGFibGV0O1xyXG5cclxuICAgIHN0YXJ0TWluaW1pemVkLmRlc2t0b3AgPVxyXG4gICAgICBzdGFydE1pbmltaXplZC5kZXNrdG9wID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IHN0YXJ0TWluaW1pemVkLnRhYmxldFxyXG4gICAgICAgIDogc3RhcnRNaW5pbWl6ZWQuZGVza3RvcDtcclxuXHJcbiAgICByZXR1cm4geyAuLi50b3RhbCwgW2lkXTogc3RhcnRNaW5pbWl6ZWQgfTtcclxuICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJzaXplc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd1pJbmRleGVzID0gZ2V0TG9jYWxTdG9yYWdlKGlkLCBcInpJbmRleGVzXCIsIHt9KTtcclxuICBjb25zdCBpV2luZG93TG9jYXRpb25zID0gZ2V0TG9jYWxTdG9yYWdlKGlkLCBcImxvY2F0aW9uc1wiLCB7fSk7XHJcbiAgY29uc3QgaVdpbmRvd01heGltaXplcyA9IGdldExvY2FsU3RvcmFnZShpZCwgXCJtYXhpbWl6ZXNcIiwge30pO1xyXG4gIGNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBnZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWluaW1pemVzXCIsIGRCb3hNaW5pbWl6ZXMpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwic2l6ZXNcIiwgd2luZG93U2l6ZXMpO1xyXG4gIH0sIFtpZCwgd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvY2FsU3RvcmFnZShpZCwgXCJ6SW5kZXhlc1wiLCB3aW5kb3daSW5kZXhlcyk7XHJcbiAgfSwgW2lkLCB3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlKGlkLCBcImxvY2F0aW9uc1wiLCB3aW5kb3dMb2NhdGlvbnMpO1xyXG4gIH0sIFtpZCwgd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoaWQsIFwibWF4aW1pemVzXCIsIHdpbmRvd01heGltaXplcyk7XHJcbiAgfSwgW2lkLCB3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvY2FsU3RvcmFnZShpZCwgXCJtaW5pbWl6ZXNcIiwgd2luZG93TWluaW1pemVzKTtcclxuICB9LCBbaWQsIHdpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgdGFza2JhcixcclxuICAgICAgc3RlcCxcclxuICAgICAgYnJlYWtQb2ludHMsXHJcbiAgICAgIGdyaWRzR2FwLFxyXG4gICAgICBncmlkc1dpZHRoLFxyXG4gICAgICBncmlkc0hlaWdodCxcclxuICAgICAgaGVhZGVyUmVmLFxyXG4gICAgICBoZWFkZXJIZWlnaHQsXHJcbiAgICAgIHdpbmRvd1NpemVzLFxyXG4gICAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgICAgc2V0V2luZG93U2l6ZXMsXHJcbiAgICAgIHNldFdpbmRvd1pJbmRleGVzLFxyXG4gICAgICBzZXRXaW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgIHNldFdpbmRvd01heGltaXplcyxcclxuICAgICAgc2V0V2luZG93TWluaW1pemVzLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgod2luZG93KSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNbd2luZG93LnByb3BzLmlkXVticmVha3BvaW50XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIHdpbmRvd107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgd2luZG93XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICAgIGdyaWRzV2lkdGgsXHJcbiAgICBncmlkc0hlaWdodCxcclxuICAgIGhlYWRlckhlaWdodCxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt7fSBhcyBEZWZhdWx0VGhlbWV9PlxyXG4gICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtjbGFzc2VzW1widHctd2luZG93c1wiXX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1iYWNrZ3JvdW5kXCI+e2JhY2tncm91bmR9PC9kaXY+XHJcblxyXG4gICAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIGJhY2tncm91bmQ6IG51bGwsXHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICB0YXNrYmFyTG9jYXRpb246IFwiYm90dG9tXCIsXHJcbiAgc3RlcDogMSxcclxuICBicmVha1BvaW50czogeyBtb2JpbGU6IDAsIHRhYmxldDogNjAwLCBkZXNrdG9wOiAxMjgwIH0sXHJcbiAgZ3JpZHNHYXA6IDEwLFxyXG4gIGdyaWRzQ291bnQ6IDEyLFxyXG59IGFzIFBhcnRpYWw8UHJvcHM+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19