"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

require("./Content.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = function Content(props) {
  var i18n = props.i18n;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, t(i18n));
};

var _default = Content;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkNvbnRlbnQiLCJwcm9wcyIsImkxOG4iLCJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFNQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQXlCO0FBQUEsTUFDL0JDLElBRCtCLEdBQ3RCRCxLQURzQixDQUMvQkMsSUFEK0I7O0FBQUEsd0JBR3pCLG1DQUh5QjtBQUFBLE1BRy9CQyxDQUgrQixtQkFHL0JBLENBSCtCOztBQUt2QyxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMEJBLENBQUMsQ0FBQ0QsSUFBRCxDQUEzQixDQUFQO0FBQ0QsQ0FORDs7ZUFRZUYsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuaW1wb3J0IFwiLi9Db250ZW50LnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBDb250ZW50UHJvcHMge1xyXG4gIGkxOG46IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ29udGVudCA9IChwcm9wczogQ29udGVudFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpMThuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+e3QoaTE4bil9PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcclxuIl19