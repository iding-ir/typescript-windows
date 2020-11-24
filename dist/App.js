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
    taskbar: true,
    grid: 1
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLGlCQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVDLGdCQUFsQjtBQUEyQixJQUFBLE9BQU8sRUFBRSxJQUFwQztBQUEwQyxJQUFBLElBQUksRUFBRTtBQUFoRCxJQURGLENBREY7QUFLRCxDQU5EOztlQVFlRCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9BcHAuY3NzXCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzL3Jlc2l6YWJsZS5zY3NzXCI7XHJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9XaW5kb3dzLnNjc3NcIjtcclxuaW1wb3J0IHsgd2luZG93cyB9IGZyb20gXCIuL3dpbmRvd3NcIjtcclxuaW1wb3J0IFdpbmRvd3MgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDxXaW5kb3dzIHdpbmRvd3M9e3dpbmRvd3N9IHRhc2tiYXI9e3RydWV9IGdyaWQ9ezF9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=