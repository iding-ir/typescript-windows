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
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Draggable, resizable, collapsable and maximizable"
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
  collapsable: true,
  maximizable: true,
  title: "box.title"
}, {
  key: "box-2",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Only draggable"
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
  collapsable: false,
  maximizable: false,
  title: "box.title"
}];
exports.windows = windows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwiY29tcG9uZW50Iiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsImNvbGxhcHNhYmxlIiwibWF4aW1pemFibGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOzs7O0FBRU8sSUFBTUEsT0FBaUIsR0FBRyxDQUMvQjtBQUNFQyxFQUFBQSxHQUFHLEVBQUUsT0FEUDtBQUVFQyxFQUFBQSxTQUFTLGVBQUUsNkJBQUMsWUFBRDtBQUFLLElBQUEsSUFBSSxFQUFDO0FBQVYsSUFGYjtBQUdFQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIUjtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEVBQUw7QUFBU0MsSUFBQUEsQ0FBQyxFQUFFO0FBQVosR0FKWjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsSUFMYjtBQU1FQyxFQUFBQSxTQUFTLEVBQUUsSUFOYjtBQU9FQyxFQUFBQSxXQUFXLEVBQUUsSUFQZjtBQVFFQyxFQUFBQSxXQUFXLEVBQUUsSUFSZjtBQVNFQyxFQUFBQSxLQUFLLEVBQUU7QUFUVCxDQUQrQixFQVkvQjtBQUNFWixFQUFBQSxHQUFHLEVBQUUsT0FEUDtBQUVFQyxFQUFBQSxTQUFTLGVBQUUsNkJBQUMsWUFBRDtBQUFLLElBQUEsSUFBSSxFQUFDO0FBQVYsSUFGYjtBQUdFQyxFQUFBQSxJQUFJLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FIUjtBQUlFQyxFQUFBQSxRQUFRLEVBQUU7QUFBRUMsSUFBQUEsQ0FBQyxFQUFFLEdBQUw7QUFBVUMsSUFBQUEsQ0FBQyxFQUFFO0FBQWIsR0FKWjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsSUFMYjtBQU1FQyxFQUFBQSxTQUFTLEVBQUUsS0FOYjtBQU9FQyxFQUFBQSxXQUFXLEVBQUUsS0FQZjtBQVFFQyxFQUFBQSxXQUFXLEVBQUUsS0FSZjtBQVNFQyxFQUFBQSxLQUFLLEVBQUU7QUFUVCxDQVorQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1wiO1xyXG5pbXBvcnQgQm94IGZyb20gXCIuL2NvbXBvbmVudHMvQm94XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgd2luZG93czogV2luZG93W10gPSBbXHJcbiAge1xyXG4gICAga2V5OiBcImJveC0xXCIsXHJcbiAgICBjb21wb25lbnQ6IDxCb3ggdGV4dD1cIkRyYWdnYWJsZSwgcmVzaXphYmxlLCBjb2xsYXBzYWJsZSBhbmQgbWF4aW1pemFibGVcIiAvPixcclxuICAgIHNpemU6IHsgdzogMjAwLCBoOiAyMDAgfSxcclxuICAgIGxvY2F0aW9uOiB7IHg6IDE1LCB5OiAxNSB9LFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICBtYXhpbWl6YWJsZTogdHJ1ZSxcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcImJveC0yXCIsXHJcbiAgICBjb21wb25lbnQ6IDxCb3ggdGV4dD1cIk9ubHkgZHJhZ2dhYmxlXCIgLz4sXHJcbiAgICBzaXplOiB7IHc6IDIwMCwgaDogMjAwIH0sXHJcbiAgICBsb2NhdGlvbjogeyB4OiAzMTUsIHk6IDE1IH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgY29sbGFwc2FibGU6IGZhbHNlLFxyXG4gICAgbWF4aW1pemFibGU6IGZhbHNlLFxyXG4gICAgdGl0bGU6IFwiYm94LnRpdGxlXCIsXHJcbiAgfSxcclxuXTtcclxuIl19