"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.scss");

var _windows = require("./windows");

var _Windows = _interopRequireDefault(require("./components/Windows"));

var _WindowsProvider = _interopRequireDefault(require("./components/WindowsProvider"));

var _iconMinimize = _interopRequireDefault(require("./assets/images/icon-minimize.png"));

var _iconMaximize = _interopRequireDefault(require("./assets/images/icon-maximize.png"));

var _iconResize = _interopRequireDefault(require("./assets/images/icon-resize.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_WindowsProvider.default, null, /*#__PURE__*/_react.default.createElement(_Windows.default, {
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
  })));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIndpbmRvd3MiLCJoZWFkZXIiLCJzaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9keSIsImljb25zIiwibWF4aW1pemUiLCJpY29uTWF4aW1pemUiLCJtaW5pbWl6ZSIsImljb25NaW5pbWl6ZSIsInJlc2l6ZSIsImljb25SZXNpemUiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU07QUFDaEIsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLDZCQUFDLHdCQUFELHFCQUNFLDZCQUFDLGdCQUFEO0FBQ0UsSUFBQSxPQUFPLEVBQUVDLGdCQURYO0FBRUUsSUFBQSxPQUFPLEVBQUUsSUFGWDtBQUdFLElBQUEsSUFBSSxFQUFFLENBSFI7QUFJRSxJQUFBLFFBQVEsRUFBRSxFQUpaO0FBS0UsSUFBQSxVQUFVLEVBQUUsRUFMZDtBQU1FLElBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVOQyxRQUFBQSxLQUFLLEVBQUUsU0FGRDtBQUdOQyxRQUFBQSxVQUFVLEVBQUU7QUFITixPQURGO0FBTU5DLE1BQUFBLElBQUksRUFBRTtBQUNKRixRQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKQyxRQUFBQSxVQUFVLEVBQUU7QUFGUixPQU5BO0FBVU5FLE1BQUFBLEtBQUssRUFBRTtBQUNMQyxRQUFBQSxRQUFRLGdCQUFTQyxxQkFBVCxNQURIO0FBRUxDLFFBQUFBLFFBQVEsZ0JBQVNDLHFCQUFULE1BRkg7QUFHTEMsUUFBQUEsTUFBTSxnQkFBU0MsbUJBQVQ7QUFIRCxPQVZEO0FBZU5DLE1BQUFBLFlBQVksRUFBRSxNQWZSO0FBZ0JOQyxNQUFBQSxTQUFTLEVBQUU7QUFoQkw7QUFOVixJQURGLENBREYsQ0FERjtBQStCRCxDQWhDRDs7ZUFrQ2VmLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL0FwcC5zY3NzXCI7XHJcbmltcG9ydCB7IHdpbmRvd3MgfSBmcm9tIFwiLi93aW5kb3dzXCI7XHJcbmltcG9ydCBXaW5kb3dzIGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1wiO1xyXG5pbXBvcnQgV2luZG93c1Byb3ZpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1Byb3ZpZGVyXCI7XHJcbmltcG9ydCBpY29uTWluaW1pemUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pY29uLW1pbmltaXplLnBuZ1wiO1xyXG5pbXBvcnQgaWNvbk1heGltaXplIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvaWNvbi1tYXhpbWl6ZS5wbmdcIjtcclxuaW1wb3J0IGljb25SZXNpemUgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9pY29uLXJlc2l6ZS5wbmdcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPFdpbmRvd3NQcm92aWRlcj5cclxuICAgICAgICA8V2luZG93c1xyXG4gICAgICAgICAgd2luZG93cz17d2luZG93c31cclxuICAgICAgICAgIHRhc2tiYXI9e3RydWV9XHJcbiAgICAgICAgICBncmlkPXs1fVxyXG4gICAgICAgICAgZ3JpZHNHYXA9ezEwfVxyXG4gICAgICAgICAgZ3JpZHNDb3VudD17MTJ9XHJcbiAgICAgICAgICBzdHlsZXM9e3tcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgc2l6ZTogXCIyLjRyZW1cIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjYmRiZGJkXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjNDI0MjQyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjOWU5ZTllXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMjEyMTIxXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgbWF4aW1pemU6IGB1cmwoJHtpY29uTWF4aW1pemV9KWAsXHJcbiAgICAgICAgICAgICAgbWluaW1pemU6IGB1cmwoJHtpY29uTWluaW1pemV9KWAsXHJcbiAgICAgICAgICAgICAgcmVzaXplOiBgdXJsKCR7aWNvblJlc2l6ZX0pYCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvV2luZG93c1Byb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19