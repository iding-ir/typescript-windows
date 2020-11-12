"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.css");

var _windows = require("./windows");

var _Windows = _interopRequireDefault(require("./components/Windows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_Windows.default, {
    windows: _windows.windows,
    grid: 1
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxPQUFPLEVBQUVDLGdCQUFsQjtBQUEyQixJQUFBLElBQUksRUFBRTtBQUFqQyxJQURGLENBREY7QUFLRCxDQU5EOztlQVFlRCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL0FwcC5jc3NcIjtcbmltcG9ydCB7IHdpbmRvd3MgfSBmcm9tIFwiLi93aW5kb3dzXCI7XG5pbXBvcnQgV2luZG93cyBmcm9tIFwiLi9jb21wb25lbnRzL1dpbmRvd3NcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICA8V2luZG93cyB3aW5kb3dzPXt3aW5kb3dzfSBncmlkPXsxfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19