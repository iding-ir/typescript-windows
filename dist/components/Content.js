"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  var i18n = props.i18n;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, t(i18n));
};

var _default = Content;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkNvbnRlbnQiLCJwcm9wcyIsImkxOG4iLCJ0IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBTUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUF5QjtBQUFBLE1BQy9CQyxJQUQrQixHQUN0QkQsS0FEc0IsQ0FDL0JDLElBRCtCOztBQUFBLHdCQUd6QixtQ0FIeUI7QUFBQSxNQUcvQkMsQ0FIK0IsbUJBRy9CQSxDQUgrQjs7QUFLdkMsc0JBQU87QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLEtBQWtDRCxDQUFDLENBQUNELElBQUQsQ0FBbkMsQ0FBUDtBQUNELENBTkQ7O2VBUWVGLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuXHJcbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xyXG4gIGkxOG46IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29udGVudCA9IChwcm9wczogQ29udGVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpMThuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICByZXR1cm4gPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT57dChpMThuKX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xyXG4iXX0=