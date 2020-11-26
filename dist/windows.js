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
    text: "Box-1: draggable, resizable, minimizable and maximizable."
  }),
  grids: {
    x: 0,
    y: 0,
    w: 4,
    h: 3
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: false
}, {
  key: "box-2",
  title: "box.title",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Box-2: only draggable."
  }),
  grids: {
    x: 4,
    y: 0,
    w: 4,
    h: 3
  },
  draggable: true,
  resizable: false,
  minimizable: false,
  maximizable: false,
  startMinimized: false
}, {
  key: "box-3",
  title: "box.title",
  component: /*#__PURE__*/_react.default.createElement(_Box.default, {
    text: "Box-3: starting minimized."
  }),
  grids: {
    x: 8,
    y: 0,
    w: 4,
    h: 3
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: true
}];
exports.windows = windows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwidGl0bGUiLCJjb21wb25lbnQiLCJncmlkcyIsIngiLCJ5IiwidyIsImgiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwic3RhcnRNaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7OztBQUVPLElBQU1BLE9BQWlCLEdBQUcsQ0FDL0I7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLE9BRFA7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLFdBRlQ7QUFHRUMsRUFBQUEsU0FBUyxlQUNQLDZCQUFDLFlBQUQ7QUFBSyxJQUFBLElBQUksRUFBQztBQUFWLElBSko7QUFNRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsSUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEdBTlQ7QUFPRUMsRUFBQUEsU0FBUyxFQUFFLElBUGI7QUFRRUMsRUFBQUEsU0FBUyxFQUFFLElBUmI7QUFTRUMsRUFBQUEsV0FBVyxFQUFFLElBVGY7QUFVRUMsRUFBQUEsV0FBVyxFQUFFLElBVmY7QUFXRUMsRUFBQUEsY0FBYyxFQUFFO0FBWGxCLENBRCtCLEVBYy9CO0FBQ0VaLEVBQUFBLEdBQUcsRUFBRSxPQURQO0FBRUVDLEVBQUFBLEtBQUssRUFBRSxXQUZUO0FBR0VDLEVBQUFBLFNBQVMsZUFBRSw2QkFBQyxZQUFEO0FBQUssSUFBQSxJQUFJLEVBQUM7QUFBVixJQUhiO0FBSUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjQyxJQUFBQSxDQUFDLEVBQUUsQ0FBakI7QUFBb0JDLElBQUFBLENBQUMsRUFBRTtBQUF2QixHQUpUO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxJQUxiO0FBTUVDLEVBQUFBLFNBQVMsRUFBRSxLQU5iO0FBT0VDLEVBQUFBLFdBQVcsRUFBRSxLQVBmO0FBUUVDLEVBQUFBLFdBQVcsRUFBRSxLQVJmO0FBU0VDLEVBQUFBLGNBQWMsRUFBRTtBQVRsQixDQWQrQixFQXlCL0I7QUFDRVosRUFBQUEsR0FBRyxFQUFFLE9BRFA7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLFdBRlQ7QUFHRUMsRUFBQUEsU0FBUyxlQUFFLDZCQUFDLFlBQUQ7QUFBSyxJQUFBLElBQUksRUFBQztBQUFWLElBSGI7QUFJRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsSUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEdBSlQ7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLElBTGI7QUFNRUMsRUFBQUEsU0FBUyxFQUFFLElBTmI7QUFPRUMsRUFBQUEsV0FBVyxFQUFFLElBUGY7QUFRRUMsRUFBQUEsV0FBVyxFQUFFLElBUmY7QUFTRUMsRUFBQUEsY0FBYyxFQUFFO0FBVGxCLENBekIrQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1wiO1xyXG5pbXBvcnQgQm94IGZyb20gXCIuL2NvbXBvbmVudHMvQm94XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgd2luZG93czogV2luZG93W10gPSBbXHJcbiAge1xyXG4gICAga2V5OiBcImJveC0xXCIsXHJcbiAgICB0aXRsZTogXCJib3gudGl0bGVcIixcclxuICAgIGNvbXBvbmVudDogKFxyXG4gICAgICA8Qm94IHRleHQ9XCJCb3gtMTogZHJhZ2dhYmxlLCByZXNpemFibGUsIG1pbmltaXphYmxlIGFuZCBtYXhpbWl6YWJsZS5cIiAvPlxyXG4gICAgKSxcclxuICAgIGdyaWRzOiB7IHg6IDAsIHk6IDAsIHc6IDQsIGg6IDMgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gICAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgICBzdGFydE1pbmltaXplZDogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6IFwiYm94LTJcIixcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gICAgY29tcG9uZW50OiA8Qm94IHRleHQ9XCJCb3gtMjogb25seSBkcmFnZ2FibGUuXCIgLz4sXHJcbiAgICBncmlkczogeyB4OiA0LCB5OiAwLCB3OiA0LCBoOiAzIH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgbWluaW1pemFibGU6IGZhbHNlLFxyXG4gICAgbWF4aW1pemFibGU6IGZhbHNlLFxyXG4gICAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcImJveC0zXCIsXHJcbiAgICB0aXRsZTogXCJib3gudGl0bGVcIixcclxuICAgIGNvbXBvbmVudDogPEJveCB0ZXh0PVwiQm94LTM6IHN0YXJ0aW5nIG1pbmltaXplZC5cIiAvPixcclxuICAgIGdyaWRzOiB7IHg6IDgsIHk6IDAsIHc6IDQsIGg6IDMgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gICAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgICBzdGFydE1pbmltaXplZDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iXX0=