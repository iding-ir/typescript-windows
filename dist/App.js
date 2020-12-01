"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.scss");

var _Window = _interopRequireDefault(require("./components/Window"));

var _Windows = _interopRequireDefault(require("./components/Windows"));

var _WindowsProvider = _interopRequireDefault(require("./components/WindowsProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_WindowsProvider.default, null, /*#__PURE__*/_react.default.createElement(_Windows.default, {
    taskbar: true,
    grid: 5
  }, /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window1",
    grids: {
      x: 0,
      y: 0,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 1")
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Draggable, resizable, minimizable and maximizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window2",
    grids: {
      x: 4,
      y: 0,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 2"),
    minSize: {
      w: 200,
      h: 100
    },
    maxSize: {
      w: 500,
      h: 300
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "With minimum and maximum size.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window3",
    grids: {
      x: 8,
      y: 0,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 3"),
    bounds: {
      top: 0,
      left: 0,
      right: 12,
      bottom: 6
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Bounded to the upper half of the screen.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window4",
    grids: {
      x: 0,
      y: 4,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 4"),
    draggable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not draggable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window5",
    grids: {
      x: 4,
      y: 4,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 5"),
    resizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not resizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window6",
    grids: {
      x: 8,
      y: 4,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 6"),
    minimizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not minimizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window7",
    grids: {
      x: 0,
      y: 8,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 7"),
    maximizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not maximizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window8",
    grids: {
      x: 4,
      y: 8,
      w: 4,
      h: 4
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Without a title.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window9",
    grids: {
      x: 8,
      y: 8,
      w: 4,
      h: 4
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 9"),
    startMinimized: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Starting minimized.")))));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIngiLCJ5IiwidyIsImgiLCJwYWRkaW5nIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQ2hCLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSw2QkFBQyx3QkFBRCxxQkFDRSw2QkFBQyxnQkFBRDtBQUFTLElBQUEsT0FBTyxFQUFFLElBQWxCO0FBQXdCLElBQUEsSUFBSSxFQUFFO0FBQTlCLGtCQUNFLDZCQUFDLGVBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxTQURMO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsTUFBQUEsQ0FBQyxFQUFFLENBQVg7QUFBY0MsTUFBQUEsQ0FBQyxFQUFFLENBQWpCO0FBQW9CQyxNQUFBQSxDQUFDLEVBQUU7QUFBdkIsS0FGVDtBQUdFLElBQUEsS0FBSyxlQUFFO0FBSFQsa0JBS0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLDBEQUxGLENBREYsZUFXRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsU0FETDtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUVKLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLE1BQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsTUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEtBRlQ7QUFHRSxJQUFBLEtBQUssZUFBRSxxREFIVDtBQUlFLElBQUEsT0FBTyxFQUFFO0FBQUVELE1BQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLE1BQUFBLENBQUMsRUFBRTtBQUFiLEtBSlg7QUFLRSxJQUFBLE9BQU8sRUFB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O0FBQUVKLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLE1BQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsTUFBQUEsQ0FBQyxFQUFFO0FBQXZCO0FBQTVCLGtCQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWix3QkFERixDQXRFRixlQTBFRSw2QkFBQyxlQUFEO0FBQ0UsSUFBQSxFQUFFLEVBQUMsU0FETDtBQUVFLElBQUEsS0FBSyxFQUFFO0FBQUVKLE1BQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLE1BQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLE1BQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsTUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEtBRlQ7QUFHRSxJQUFBLEtBQUssZUFBRSxxREFIVDtBQUlFLElBQUEsY0FBYyxFQUFFO0FBSmxCLGtCQU1FO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWiwyQkFORixDQTFFRixDQURGLENBREYsQ0FERjtBQXlGRCxDQTFGRDs7ZUE0RmVMLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL0FwcC5zY3NzXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dcIjtcclxuaW1wb3J0IFdpbmRvd3MgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzXCI7XHJcbmltcG9ydCBXaW5kb3dzUHJvdmlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzUHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPFdpbmRvd3NQcm92aWRlcj5cclxuICAgICAgICA8V2luZG93cyB0YXNrYmFyPXt0cnVlfSBncmlkPXs1fT5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3cxXCJcclxuICAgICAgICAgICAgZ3JpZHM9e3sgeDogMCwgeTogMCwgdzogNCwgaDogNCB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgMTwvZGl2Pn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBEcmFnZ2FibGUsIHJlc2l6YWJsZSwgbWluaW1pemFibGUgYW5kIG1heGltaXphYmxlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3cyXCJcclxuICAgICAgICAgICAgZ3JpZHM9e3sgeDogNCwgeTogMCwgdzogNCwgaDogNCB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgMjwvZGl2Pn1cclxuICAgICAgICAgICAgbWluU2l6ZT17eyB3OiAyMDAsIGg6IDEwMCB9fVxyXG4gICAgICAgICAgICBtYXhTaXplPXt7IHc6IDUwMCwgaDogMzAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgV2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICBpZD1cIndpbmRvdzNcIlxyXG4gICAgICAgICAgICBncmlkcz17eyB4OiA4LCB5OiAwLCB3OiA0LCBoOiA0IH19XHJcbiAgICAgICAgICAgIHRpdGxlPXs8ZGl2PldpbmRvdyAzPC9kaXY+fVxyXG4gICAgICAgICAgICBib3VuZHM9e3sgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMTIsIGJvdHRvbTogNiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIEJvdW5kZWQgdG8gdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHNjcmVlbi5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1dpbmRvdz5cclxuXHJcbiAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgIGlkPVwid2luZG93NFwiXHJcbiAgICAgICAgICAgIGdyaWRzPXt7IHg6IDAsIHk6IDQsIHc6IDQsIGg6IDQgfX1cclxuICAgICAgICAgICAgdGl0bGU9ezxkaXY+V2luZG93IDQ8L2Rpdj59XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+Tm90IGRyYWdnYWJsZS48L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3c1XCJcclxuICAgICAgICAgICAgZ3JpZHM9e3sgeDogNCwgeTogNCwgdzogNCwgaDogNCB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgNTwvZGl2Pn1cclxuICAgICAgICAgICAgcmVzaXphYmxlPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5Ob3QgcmVzaXphYmxlLjwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICBpZD1cIndpbmRvdzZcIlxyXG4gICAgICAgICAgICBncmlkcz17eyB4OiA4LCB5OiA0LCB3OiA0LCBoOiA0IH19XHJcbiAgICAgICAgICAgIHRpdGxlPXs8ZGl2PldpbmRvdyA2PC9kaXY+fVxyXG4gICAgICAgICAgICBtaW5pbWl6YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+Tm90IG1pbmltaXphYmxlLjwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICBpZD1cIndpbmRvdzdcIlxyXG4gICAgICAgICAgICBncmlkcz17eyB4OiAwLCB5OiA4LCB3OiA0LCBoOiA0IH19XHJcbiAgICAgICAgICAgIHRpdGxlPXs8ZGl2PldpbmRvdyA3PC9kaXY+fVxyXG4gICAgICAgICAgICBtYXhpbWl6YWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+Tm90IG1heGltaXphYmxlLjwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvdyBpZD1cIndpbmRvdzhcIiBncmlkcz17eyB4OiA0LCB5OiA4LCB3OiA0LCBoOiA0IH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PldpdGhvdXQgYSB0aXRsZS48L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3c5XCJcclxuICAgICAgICAgICAgZ3JpZHM9e3sgeDogOCwgeTogOCwgdzogNCwgaDogNCB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgOTwvZGl2Pn1cclxuICAgICAgICAgICAgc3RhcnRNaW5pbWl6ZWQ9e3RydWV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+U3RhcnRpbmcgbWluaW1pemVkLjwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcbiAgICAgICAgPC9XaW5kb3dzPlxyXG4gICAgICA8L1dpbmRvd3NQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ==