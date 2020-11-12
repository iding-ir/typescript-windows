"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

require("./styles/resizable.scss");

require("./components/Windows.scss");

var _windows = require("./windows");

var _Windows2 = _interopRequireDefault(require("./components/Windows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_Windows2.default, {
    windows: _windows.windows,
    grid: 1
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLGlCQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVDLGdCQUFsQjtBQUEyQixJQUFBLElBQUksRUFBRTtBQUFqQyxJQURGLENBREY7QUFLRCxDQU5EOztlQVFlRCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2l6YWJsZS5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvV2luZG93cy5zY3NzXCI7XG5pbXBvcnQgeyB3aW5kb3dzIH0gZnJvbSBcIi4vd2luZG93c1wiO1xuaW1wb3J0IFdpbmRvd3MgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgPFdpbmRvd3Mgd2luZG93cz17d2luZG93c30gZ3JpZD17MX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ==