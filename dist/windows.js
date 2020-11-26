"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windows = void 0;

var _react = _interopRequireDefault(require("react"));

var _Content = _interopRequireDefault(require("./components/Content"));

var _Title = _interopRequireDefault(require("./components/Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var windows = [{
  key: "window1",
  title: /*#__PURE__*/_react.default.createElement(_Title.default, {
    i18n: "window1.title"
  }),
  component: /*#__PURE__*/_react.default.createElement(_Content.default, {
    i18n: "window1.content"
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
  key: "window2",
  title: /*#__PURE__*/_react.default.createElement(_Title.default, {
    i18n: "window2.title"
  }),
  component: /*#__PURE__*/_react.default.createElement(_Content.default, {
    i18n: "window2.content"
  }),
  grids: {
    x: 4,
    y: 9,
    w: 4,
    h: 3
  },
  draggable: true,
  resizable: false,
  minimizable: false,
  maximizable: false,
  startMinimized: false
}, {
  key: "window3",
  title: /*#__PURE__*/_react.default.createElement(_Title.default, {
    i18n: "window3.title"
  }),
  component: /*#__PURE__*/_react.default.createElement(_Content.default, {
    i18n: "window3.content"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwidGl0bGUiLCJjb21wb25lbnQiLCJncmlkcyIsIngiLCJ5IiwidyIsImgiLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwic3RhcnRNaW5pbWl6ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFDQTs7OztBQUVPLElBQU1BLE9BQWlCLEdBQUcsQ0FDL0I7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLFNBRFA7QUFFRUMsRUFBQUEsS0FBSyxlQUFFLDZCQUFDLGNBQUQ7QUFBTyxJQUFBLElBQUksRUFBQztBQUFaLElBRlQ7QUFHRUMsRUFBQUEsU0FBUyxlQUFFLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxJQUFJLEVBQUM7QUFBZCxJQUhiO0FBSUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjQyxJQUFBQSxDQUFDLEVBQUUsQ0FBakI7QUFBb0JDLElBQUFBLENBQUMsRUFBRTtBQUF2QixHQUpUO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxJQUxiO0FBTUVDLEVBQUFBLFNBQVMsRUFBRSxJQU5iO0FBT0VDLEVBQUFBLFdBQVcsRUFBRSxJQVBmO0FBUUVDLEVBQUFBLFdBQVcsRUFBRSxJQVJmO0FBU0VDLEVBQUFBLGNBQWMsRUFBRTtBQVRsQixDQUQrQixFQVkvQjtBQUNFWixFQUFBQSxHQUFHLEVBQUUsU0FEUDtBQUVFQyxFQUFBQSxLQUFLLGVBQUUsNkJBQUMsY0FBRDtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFGVDtBQUdFQyxFQUFBQSxTQUFTLGVBQUUsNkJBQUMsZ0JBQUQ7QUFBUyxJQUFBLElBQUksRUFBQztBQUFkLElBSGI7QUFJRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsSUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEdBSlQ7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLElBTGI7QUFNRUMsRUFBQUEsU0FBUyxFQUFFLEtBTmI7QUFPRUMsRUFBQUEsV0FBVyxFQUFFLEtBUGY7QUFRRUMsRUFBQUEsV0FBVyxFQUFFLEtBUmY7QUFTRUMsRUFBQUEsY0FBYyxFQUFFO0FBVGxCLENBWitCLEVBdUIvQjtBQUNFWixFQUFBQSxHQUFHLEVBQUUsU0FEUDtBQUVFQyxFQUFBQSxLQUFLLGVBQUUsNkJBQUMsY0FBRDtBQUFPLElBQUEsSUFBSSxFQUFDO0FBQVosSUFGVDtBQUdFQyxFQUFBQSxTQUFTLGVBQUUsNkJBQUMsZ0JBQUQ7QUFBUyxJQUFBLElBQUksRUFBQztBQUFkLElBSGI7QUFJRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLElBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLElBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsSUFBQUEsQ0FBQyxFQUFFO0FBQXZCLEdBSlQ7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLElBTGI7QUFNRUMsRUFBQUEsU0FBUyxFQUFFLElBTmI7QUFPRUMsRUFBQUEsV0FBVyxFQUFFLElBUGY7QUFRRUMsRUFBQUEsV0FBVyxFQUFFLElBUmY7QUFTRUMsRUFBQUEsY0FBYyxFQUFFO0FBVGxCLENBdkIrQixDQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1wiO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbnRlbnRcIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuL2NvbXBvbmVudHMvVGl0bGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB3aW5kb3dzOiBXaW5kb3dbXSA9IFtcclxuICB7XHJcbiAgICBrZXk6IFwid2luZG93MVwiLFxyXG4gICAgdGl0bGU6IDxUaXRsZSBpMThuPVwid2luZG93MS50aXRsZVwiIC8+LFxyXG4gICAgY29tcG9uZW50OiA8Q29udGVudCBpMThuPVwid2luZG93MS5jb250ZW50XCIgLz4sXHJcbiAgICBncmlkczogeyB4OiAwLCB5OiAwLCB3OiA0LCBoOiAzIH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICBtaW5pbWl6YWJsZTogdHJ1ZSxcclxuICAgIG1heGltaXphYmxlOiB0cnVlLFxyXG4gICAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIndpbmRvdzJcIixcclxuICAgIHRpdGxlOiA8VGl0bGUgaTE4bj1cIndpbmRvdzIudGl0bGVcIiAvPixcclxuICAgIGNvbXBvbmVudDogPENvbnRlbnQgaTE4bj1cIndpbmRvdzIuY29udGVudFwiIC8+LFxyXG4gICAgZ3JpZHM6IHsgeDogNCwgeTogOSwgdzogNCwgaDogMyB9LFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcclxuICAgIG1pbmltaXphYmxlOiBmYWxzZSxcclxuICAgIG1heGltaXphYmxlOiBmYWxzZSxcclxuICAgIHN0YXJ0TWluaW1pemVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCJ3aW5kb3czXCIsXHJcbiAgICB0aXRsZTogPFRpdGxlIGkxOG49XCJ3aW5kb3czLnRpdGxlXCIgLz4sXHJcbiAgICBjb21wb25lbnQ6IDxDb250ZW50IGkxOG49XCJ3aW5kb3czLmNvbnRlbnRcIiAvPixcclxuICAgIGdyaWRzOiB7IHg6IDgsIHk6IDAsIHc6IDQsIGg6IDMgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gICAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgICBzdGFydE1pbmltaXplZDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iXX0=