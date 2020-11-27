"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.scss");

var _windows = require("./windows");

var _Windows = _interopRequireDefault(require("./components/Windows"));

var _iconMinimize = _interopRequireDefault(require("./assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("./assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("./assets/images/icon-resize.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_Windows.default, {
    windows: _windows.windows,
    taskbar: true,
    grid: 5,
    gridsGap: 10,
    gridsCount: 12,
    styles: {
      borderRadius: "1rem",
      headerSize: "2.4rem",
      headerColor: "#bdbdbd",
      headerBackground: "#424242",
      bodyColor: "#9e9e9e",
      bodyBackground: "#212121",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      IconMaximize: "url(".concat(_iconMaximize.default, ")"),
      IconMinimize: "url(".concat(_iconMinimize.default, ")"),
      IconResize: "url(".concat(_iconResize.default, ")")
    }
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiLCJib3JkZXJSYWRpdXMiLCJoZWFkZXJTaXplIiwiaGVhZGVyQ29sb3IiLCJoZWFkZXJCYWNrZ3JvdW5kIiwiYm9keUNvbG9yIiwiYm9keUJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJJY29uTWF4aW1pemUiLCJpY29uTWF4aW1pemUiLCJJY29uTWluaW1pemUiLCJpY29uTWluaW1pemUiLCJJY29uUmVzaXplIiwiaWNvblJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsNkJBQUMsZ0JBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRUMsZ0JBRFg7QUFFRSxJQUFBLE9BQU8sRUFBRSxJQUZYO0FBR0UsSUFBQSxJQUFJLEVBQUUsQ0FIUjtBQUlFLElBQUEsUUFBUSxFQUFFLEVBSlo7QUFLRSxJQUFBLFVBQVUsRUFBRSxFQUxkO0FBTUUsSUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsWUFBWSxFQUFFLE1BRFI7QUFFTkMsTUFBQUEsVUFBVSxFQUFFLFFBRk47QUFHTkMsTUFBQUEsV0FBVyxFQUFFLFNBSFA7QUFJTkMsTUFBQUEsZ0JBQWdCLEVBQUUsU0FKWjtBQUtOQyxNQUFBQSxTQUFTLEVBQUUsU0FMTDtBQU1OQyxNQUFBQSxjQUFjLEVBQUUsU0FOVjtBQU9OQyxNQUFBQSxTQUFTLEVBQUUsNEJBUEw7QUFRTkMsTUFBQUEsWUFBWSxnQkFBU0MscUJBQVQsTUFSTjtBQVNOQyxNQUFBQSxZQUFZLGdCQUFTQyxxQkFBVCxNQVROO0FBVU5DLE1BQUFBLFVBQVUsZ0JBQVNDLG1CQUFUO0FBVko7QUFOVixJQURGLENBREY7QUF1QkQsQ0F4QkQ7O2VBMEJlZCxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9BcHAuc2Nzc1wiO1xyXG5pbXBvcnQgeyB3aW5kb3dzIH0gZnJvbSBcIi4vd2luZG93c1wiO1xyXG5pbXBvcnQgV2luZG93cyBmcm9tIFwiLi9jb21wb25lbnRzL1dpbmRvd3NcIjtcclxuaW1wb3J0IGljb25NaW5pbWl6ZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tbWluaW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uTWF4aW1pemUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tcmVzaXplLnBuZ1wiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8V2luZG93c1xyXG4gICAgICAgIHdpbmRvd3M9e3dpbmRvd3N9XHJcbiAgICAgICAgdGFza2Jhcj17dHJ1ZX1cclxuICAgICAgICBncmlkPXs1fVxyXG4gICAgICAgIGdyaWRzR2FwPXsxMH1cclxuICAgICAgICBncmlkc0NvdW50PXsxMn1cclxuICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXHJcbiAgICAgICAgICBoZWFkZXJTaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgICAgICAgaGVhZGVyQ29sb3I6IFwiI2JkYmRiZFwiLFxyXG4gICAgICAgICAgaGVhZGVyQmFja2dyb3VuZDogXCIjNDI0MjQyXCIsXHJcbiAgICAgICAgICBib2R5Q29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgICAgICAgYm9keUJhY2tncm91bmQ6IFwiIzIxMjEyMVwiLFxyXG4gICAgICAgICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICAgICAgICBJY29uTWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICAgICAgICBJY29uTWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICAgICAgICBJY29uUmVzaXplOiBgdXJsKCR7aWNvblJlc2l6ZX0pYCxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19