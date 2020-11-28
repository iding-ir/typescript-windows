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
      header: {
        size: "2.4rem",
        color: "#bdbdbd",
        background: "#424242"
      },
      body: {
        color: "#9e9e9e",
        background: "#212121"
      },
      icons: {
        maximize: "url(".concat(_iconMaximize.default, ")"),
        minimize: "url(".concat(_iconMinimize.default, ")"),
        resize: "url(".concat(_iconResize.default, ")")
      },
      borderRadius: "1rem",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)"
    }
  }));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiLCJoZWFkZXIiLCJzaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9keSIsImljb25zIiwibWF4aW1pemUiLCJpY29uTWF4aW1pemUiLCJtaW5pbWl6ZSIsImljb25NaW5pbWl6ZSIsInJlc2l6ZSIsImljb25SZXNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLGdCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUVDLGdCQURYO0FBRUUsSUFBQSxPQUFPLEVBQUUsSUFGWDtBQUdFLElBQUEsSUFBSSxFQUFFLENBSFI7QUFJRSxJQUFBLFFBQVEsRUFBRSxFQUpaO0FBS0UsSUFBQSxVQUFVLEVBQUUsRUFMZDtBQU1FLElBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVOQyxRQUFBQSxLQUFLLEVBQUUsU0FGRDtBQUdOQyxRQUFBQSxVQUFVLEVBQUU7QUFITixPQURGO0FBTU5DLE1BQUFBLElBQUksRUFBRTtBQUNKRixRQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKQyxRQUFBQSxVQUFVLEVBQUU7QUFGUixPQU5BO0FBVU5FLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxRQUFRLGdCQUFTQyxxQkFBVCxNQURIO0FBRUxDLFFBQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BRkg7QUFHTEMsUUFBQUEsTUFBTSxnQkFBU0MsbUJBQVQ7QUFIRCxPQVZEO0FBZU5DLE1BQUFBLFlBQVksRUFBRSxNQWZSO0FBZ0JOQyxNQUFBQSxTQUFTLEVBQUU7QUFoQkw7QUFOVixJQURGLENBREY7QUE2QkQsQ0E5QkQ7O2VBZ0NlZixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9BcHAuc2Nzc1wiO1xyXG5pbXBvcnQgeyB3aW5kb3dzIH0gZnJvbSBcIi4vd2luZG93c1wiO1xyXG5pbXBvcnQgV2luZG93cyBmcm9tIFwiLi9jb21wb25lbnRzL1dpbmRvd3NcIjtcclxuaW1wb3J0IGljb25NaW5pbWl6ZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tbWluaW1pemUucG5nXCI7XHJcbmltcG9ydCBpY29uTWF4aW1pemUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pY29uLW1heGltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvblJlc2l6ZSBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2ljb24tcmVzaXplLnBuZ1wiO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8V2luZG93c1xyXG4gICAgICAgIHdpbmRvd3M9e3dpbmRvd3N9XHJcbiAgICAgICAgdGFza2Jhcj17dHJ1ZX1cclxuICAgICAgICBncmlkPXs1fVxyXG4gICAgICAgIGdyaWRzR2FwPXsxMH1cclxuICAgICAgICBncmlkc0NvdW50PXsxMn1cclxuICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBzaXplOiBcIjIuNHJlbVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjYmRiZGJkXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzQyNDI0MlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzllOWU5ZVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyMTIxMjFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICBtYXhpbWl6ZTogYHVybCgke2ljb25NYXhpbWl6ZX0pYCxcclxuICAgICAgICAgICAgbWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICAgICAgICAgIHJlc2l6ZTogYHVybCgke2ljb25SZXNpemV9KWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcclxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXX0=