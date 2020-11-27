"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

require("./Title.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(props) {
  var i18n = props.i18n;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, t(i18n));
};

var _default = Title;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6WyJUaXRsZSIsInByb3BzIiwiaTE4biIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQU1BLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBdUI7QUFBQSxNQUMzQkMsSUFEMkIsR0FDbEJELEtBRGtCLENBQzNCQyxJQUQyQjs7QUFBQSx3QkFHckIsbUNBSHFCO0FBQUEsTUFHM0JDLENBSDJCLG1CQUczQkEsQ0FIMkI7O0FBS25DLHNCQUFPO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF3QkEsQ0FBQyxDQUFDRCxJQUFELENBQXpCLENBQVA7QUFDRCxDQU5EOztlQVFlRixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5pbXBvcnQgXCIuL1RpdGxlLnNjc3NcIjtcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICBpMThuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFRpdGxlID0gKHByb3BzOiBUaXRsZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpMThuIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KGkxOG4pfTwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iXX0=