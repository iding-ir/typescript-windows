"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StateProvider = exports.StateContext = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var StateContext = /*#__PURE__*/(0, _react.createContext)({
  state: {},
  setState: function setState() {}
});
exports.StateContext = StateContext;

var StateProvider = function StateProvider(props) {
  var children = props.children;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(StateContext.Provider, {
    value: {
      state: state,
      setState: setState
    }
  }, children);
};

exports.StateProvider = StateProvider;
var _default = StateProvider;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3NQcm92aWRlci50c3giXSwibmFtZXMiOlsiU3RhdGVDb250ZXh0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIlN0YXRlUHJvdmlkZXIiLCJwcm9wcyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsWUFBMEIsZ0JBQUcsMEJBQWM7QUFDdERDLEVBQUFBLEtBQUssRUFBRSxFQUQrQztBQUV0REMsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFGb0MsQ0FBZCxDQUFuQzs7O0FBU0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQWtCO0FBQUEsTUFDckNDLFFBRHFDLEdBQ3hCRCxLQUR3QixDQUNyQ0MsUUFEcUM7O0FBQUEsa0JBR25CLHFCQUFTLEVBQVQsQ0FIbUI7QUFBQTtBQUFBLE1BR3RDSixLQUhzQztBQUFBLE1BRy9CQyxRQUgrQjs7QUFLN0Msc0JBQ0UsNkJBQUMsWUFBRCxDQUFjLFFBQWQ7QUFBdUIsSUFBQSxLQUFLLEVBQUU7QUFBRUQsTUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNDLE1BQUFBLFFBQVEsRUFBUkE7QUFBVDtBQUE5QixLQUNHRyxRQURILENBREY7QUFLRCxDQVZNOzs7ZUFZUUYsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb250ZXh0LCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dDogQ29udGV4dDxhbnk+ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgc3RhdGU6IHt9LFxyXG4gIHNldFN0YXRlOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlUHJvdmlkZXIgPSAocHJvcHM6IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgc2V0U3RhdGUgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0ZVByb3ZpZGVyO1xyXG4iXX0=