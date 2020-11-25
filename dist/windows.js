"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windows = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("./components/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var windows = [{
  key: "box-1",
  title: "box.title",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Box-1: draggable, resizable, minimizable and maximizable"
  }),
  size: {
    w: 200,
    h: 200
  },
  location: {
    x: 15,
    y: 15
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true
}, {
  key: "box-2",
  title: "box.title",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Box-2: only draggable"
  }),
  size: {
    w: 200,
    h: 200
  },
  location: {
    x: 315,
    y: 15
  },
  draggable: true,
  resizable: false,
  minimizable: false,
  maximizable: false
}, {
  key: "box-3",
  title: "box.title",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Box-3: draggable, resizable, minimizable and maximizable"
  }),
  size: {
    w: 200,
    h: 200
  },
  location: {
    x: 15,
    y: 315
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true
}];
exports.windows = windows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwidGl0bGUiLCJjb21wb25lbnQiLCJzaXplIiwidyIsImgiLCJsb2NhdGlvbiIsIngiLCJ5IiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOzs7O0FBRU8sSUFBTUEsT0FBaUIsR0FBRyxDQUMvQjtBQUNFQyxFQUFBQSxHQUFHLEVBQUUsT0FEUDtBQUVFQyxFQUFBQSxLQUFLLEVBQUUsV0FGVDtBQUdFQyxFQUFBQSxTQUFTLGVBQ1AsNkJBQUMsWUFBRDtBQUFLLElBQUEsSUFBSSxFQUFDO0FBQVYsSUFKSjtBQU1FQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FOUjtBQU9FQyxFQUFBQSxRQUFRLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEVBQUw7QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FQWjtBQVFFQyxFQUFBQSxTQUFTLEVBQUUsSUFSYjtBQVNFQyxFQUFBQSxTQUFTLEVBQUUsSUFUYjtBQVVFQyxFQUFBQSxXQUFXLEVBQUUsSUFWZjtBQVdFQyxFQUFBQSxXQUFXLEVBQUU7QUFYZixDQUQrQixFQWMvQjtBQUNFWixFQUFBQSxHQUFHLEVBQUUsT0FEUDtBQUVFQyxFQUFBQSxLQUFLLEVBQUUsV0FGVDtBQUdFQyxFQUFBQSxTQUFTLGVBQUUsNkJBQUMsWUFBRDtBQUFLLElBQUEsSUFBSSxFQUFDO0FBQVYsSUFIYjtBQUlFQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FKUjtBQUtFQyxFQUFBQSxRQUFRLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FMWjtBQU1FQyxFQUFBQSxTQUFTLEVBQUUsSUFOYjtBQU9FQyxFQUFBQSxTQUFTLEVBQUUsS0FQYjtBQVFFQyxFQUFBQSxXQUFXLEVBQUUsS0FSZjtBQVNFQyxFQUFBQSxXQUFXLEVBQUU7QUFUZixDQWQrQixFQXlCL0I7QUFDRVosRUFBQUEsR0FBRyxFQUFFLE9BRFA7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLFdBRlQ7QUFHRUMsRUFBQUEsU0FBUyxlQUNQLDZCQUFDLFlBQUQ7QUFBSyxJQUFBLElBQUksRUFBQztBQUFWLElBSko7QUFNRUMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLElBQUFBLENBQUMsRUFBRTtBQUFiLEdBTlI7QUFPRUMsRUFBQUEsUUFBUSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxFQUFMO0FBQVNDLElBQUFBLENBQUMsRUFBRTtBQUFaLEdBUFo7QUFRRUMsRUFBQUEsU0FBUyxFQUFFLElBUmI7QUFTRUMsRUFBQUEsU0FBUyxFQUFFLElBVGI7QUFVRUMsRUFBQUEsV0FBVyxFQUFFLElBVmY7QUFXRUMsRUFBQUEsV0FBVyxFQUFFO0FBWGYsQ0F6QitCLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgV2luZG93IH0gZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIi4vY29tcG9uZW50cy9Cb3hcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3aW5kb3dzOiBXaW5kb3dbXSA9IFtcclxuICB7XHJcbiAgICBrZXk6IFwiYm94LTFcIixcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gICAgY29tcG9uZW50OiAoXHJcbiAgICAgIDxCb3ggdGV4dD1cIkJveC0xOiBkcmFnZ2FibGUsIHJlc2l6YWJsZSwgbWluaW1pemFibGUgYW5kIG1heGltaXphYmxlXCIgLz5cclxuICAgICksXHJcbiAgICBzaXplOiB7IHc6IDIwMCwgaDogMjAwIH0sXHJcbiAgICBsb2NhdGlvbjogeyB4OiAxNSwgeTogMTUgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gICAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiYm94LTJcIixcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gICAgY29tcG9uZW50OiA8Qm94IHRleHQ9XCJCb3gtMjogb25seSBkcmFnZ2FibGVcIiAvPixcclxuICAgIHNpemU6IHsgdzogMjAwLCBoOiAyMDAgfSxcclxuICAgIGxvY2F0aW9uOiB7IHg6IDMxNSwgeTogMTUgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICBtaW5pbWl6YWJsZTogZmFsc2UsXHJcbiAgICBtYXhpbWl6YWJsZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiYm94LTNcIixcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gICAgY29tcG9uZW50OiAoXHJcbiAgICAgIDxCb3ggdGV4dD1cIkJveC0zOiBkcmFnZ2FibGUsIHJlc2l6YWJsZSwgbWluaW1pemFibGUgYW5kIG1heGltaXphYmxlXCIgLz5cclxuICAgICksXHJcbiAgICBzaXplOiB7IHc6IDIwMCwgaDogMjAwIH0sXHJcbiAgICBsb2NhdGlvbjogeyB4OiAxNSwgeTogMzE1IH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICBtaW5pbWl6YWJsZTogdHJ1ZSxcclxuICAgIG1heGltaXphYmxlOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcbiJdfQ==