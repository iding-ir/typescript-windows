"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalStorage = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setLocalStorage = function setLocalStorage(id, name, value) {
  var storage = JSON.parse(localStorage.getItem("windows")) || {};
  storage = _objectSpread(_objectSpread({}, storage), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, storage[id]), {}, _defineProperty({}, name, value))));
  localStorage.setItem("windows", JSON.stringify(storage));
};

exports.setLocalStorage = setLocalStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zZXRMb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOlsic2V0TG9jYWxTdG9yYWdlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJzdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEVBQUQsRUFBYUMsSUFBYixFQUEyQkMsS0FBM0IsRUFBMEM7QUFDdkUsTUFBSUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsS0FBeUQsRUFBdkU7QUFFQUosRUFBQUEsT0FBTyxtQ0FDRkEsT0FERSwyQkFFSkgsRUFGSSxrQ0FHQUcsT0FBTyxDQUFDSCxFQUFELENBSFAsMkJBSUZDLElBSkUsRUFJS0MsS0FKTCxJQUFQO0FBUUFJLEVBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixTQUFyQixFQUFnQ0osSUFBSSxDQUFDSyxTQUFMLENBQWVOLE9BQWYsQ0FBaEM7QUFDRCxDQVpNIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZSA9IChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcclxuICBsZXQgc3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dzXCIpIGFzIHN0cmluZykgfHwge307XHJcblxyXG4gIHN0b3JhZ2UgPSB7XHJcbiAgICAuLi5zdG9yYWdlLFxyXG4gICAgW2lkXToge1xyXG4gICAgICAuLi5zdG9yYWdlW2lkXSxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2UpKTtcclxufTtcclxuIl19