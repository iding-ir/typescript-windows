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
    text: "Draggable, resizable and collapsable"
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
  title: "box.title"
}];
exports.windows = windows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwiY29tcG9uZW50Iiwic2l6ZSIsInciLCJoIiwibG9jYXRpb24iLCJ4IiwieSIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsImNvbGxhcHNhYmxlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQTs7OztBQUVPLElBQU1BLE9BQWlCLEdBQUcsQ0FDL0I7QUFDRUMsRUFBQUEsR0FBRyxFQUFFLE9BRFA7QUFFRUMsRUFBQUEsU0FBUyxlQUFFLDZCQUFDLFlBQUQ7QUFBSyxJQUFBLElBQUksRUFBQztBQUFWLElBRmI7QUFHRUMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLElBQUFBLENBQUMsRUFBRTtBQUFiLEdBSFI7QUFJRUMsRUFBQUEsUUFBUSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxFQUFMO0FBQVNDLElBQUFBLENBQUMsRUFBRTtBQUFaLEdBSlo7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLElBTGI7QUFNRUMsRUFBQUEsU0FBUyxFQUFFLElBTmI7QUFPRUMsRUFBQUEsV0FBVyxFQUFFLElBUGY7QUFRRUMsRUFBQUEsS0FBSyxFQUFFO0FBUlQsQ0FEK0IsRUFXL0I7QUFDRVgsRUFBQUEsR0FBRyxFQUFFLE9BRFA7QUFFRUMsRUFBQUEsU0FBUyxlQUFFLDZCQUFDLFlBQUQ7QUFBSyxJQUFBLElBQUksRUFBQztBQUFWLElBRmI7QUFHRUMsRUFBQUEsSUFBSSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLElBQUFBLENBQUMsRUFBRTtBQUFiLEdBSFI7QUFJRUMsRUFBQUEsUUFBUSxFQUFFO0FBQUVDLElBQUFBLENBQUMsRUFBRSxHQUFMO0FBQVVDLElBQUFBLENBQUMsRUFBRTtBQUFiLEdBSlo7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLElBTGI7QUFNRUMsRUFBQUEsU0FBUyxFQUFFLEtBTmI7QUFPRUMsRUFBQUEsV0FBVyxFQUFFLEtBUGY7QUFRRUMsRUFBQUEsS0FBSyxFQUFFO0FBUlQsQ0FYK0IsQ0FBMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBXaW5kb3cgfSBmcm9tIFwiLi9jb21wb25lbnRzL1dpbmRvd3NcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiLi9jb21wb25lbnRzL0JveFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbmRvd3M6IFdpbmRvd1tdID0gW1xyXG4gIHtcclxuICAgIGtleTogXCJib3gtMVwiLFxyXG4gICAgY29tcG9uZW50OiA8Qm94IHRleHQ9XCJEcmFnZ2FibGUsIHJlc2l6YWJsZSBhbmQgY29sbGFwc2FibGVcIiAvPixcclxuICAgIHNpemU6IHsgdzogMjAwLCBoOiAyMDAgfSxcclxuICAgIGxvY2F0aW9uOiB7IHg6IDE1LCB5OiAxNSB9LFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgY29sbGFwc2FibGU6IHRydWUsXHJcbiAgICB0aXRsZTogXCJib3gudGl0bGVcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCJib3gtMlwiLFxyXG4gICAgY29tcG9uZW50OiA8Qm94IHRleHQ9XCJPbmx5IGRyYWdnYWJsZVwiIC8+LFxyXG4gICAgc2l6ZTogeyB3OiAyMDAsIGg6IDIwMCB9LFxyXG4gICAgbG9jYXRpb246IHsgeDogMzE1LCB5OiAxNSB9LFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiBmYWxzZSxcclxuICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcclxuICAgIHRpdGxlOiBcImJveC50aXRsZVwiLFxyXG4gIH0sXHJcbl07XHJcbiJdfQ==