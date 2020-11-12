"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _reactI18next = require("react-i18next");

var _reactResizable = require("react-resizable");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var iWindowLocations = localStorage.getItem("windowLocations") ? JSON.parse(localStorage.getItem("windowLocations")) : {};
var iWindowSizes = localStorage.getItem("windowSizes") ? JSON.parse(localStorage.getItem("windowSizes")) : {};
var iWindowDisplays = localStorage.getItem("windowDisplays") ? JSON.parse(localStorage.getItem("windowDisplays")) : {};
var iWindowZIndexes = localStorage.getItem("windowZIndexes") ? JSON.parse(localStorage.getItem("windowZIndexes")) : {};

var Windows = function Windows(props) {
  var windows = props.windows,
      grid = props.grid;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(iWindowLocations),
      _useState2 = _slicedToArray(_useState, 2),
      windowLocations = _useState2[0],
      setWindowLocations = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowSizes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowSizes = _useState4[0],
      setWindowSizes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowDisplays),
      _useState6 = _slicedToArray(_useState5, 2),
      windowDisplays = _useState6[0],
      setWindowDisplays = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowZIndexes),
      _useState8 = _slicedToArray(_useState7, 2),
      windowZIndexes = _useState8[0],
      setWindowZIndexes = _useState8[1];

  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);

  var renderWindows = function renderWindows() {
    return windows.map(function (window) {
      var key = window.key,
          component = window.component,
          size = window.size,
          location = window.location,
          draggable = window.draggable,
          resizable = window.resizable,
          collapsable = window.collapsable,
          title = window.title;

      var handleDrag = function handleDrag(e, data) {
        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleDisplay = function handleDisplay() {
        setWindowDisplays(_objectSpread(_objectSpread({}, windowDisplays), {}, _defineProperty({}, key, !windowDisplays[key])));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var renderCollapse = function renderCollapse() {
        return collapsable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "ts-button ts-collapse",
          onClick: handleDisplay
        }) : null;
      };

      var renderHandler = function renderHandler() {
        var classNames = (0, _clsx.default)("ts-header", {
          "ts-header-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classNames,
          onClick: handleZIndex
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "ts-title"
        }, title ? t(title) : null), /*#__PURE__*/_react.default.createElement("div", {
          className: "ts-buttons"
        }, renderCollapse()));
      };

      var renderBody = function renderBody() {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "ts-body"
        }, renderBodyContents());
      };

      var renderBodyContents = function renderBodyContents() {
        var width = windowSizes[key] ? windowSizes[key].w : size.w;
        var height = windowSizes[key] ? windowSizes[key].h : size.h;
        return resizable ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
          width: width,
          height: height,
          resizeHandles: ["se"],
          draggableOpts: {
            grid: [grid, grid]
          },
          onResizeStop: handleResize
        }, component) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            width: width,
            height: height
          }
        }, component);
      };

      var classNames = (0, _clsx.default)("ts-window", key, {
        "ts-display-on": !windowDisplays[key],
        "ts-display-off": windowDisplays[key]
      });
      return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        key: key,
        defaultPosition: windowLocations[key] || location,
        grid: [grid, grid],
        scale: 1,
        handle: ".ts-header-draggable",
        bounds: "parent",
        onStop: handleDrag
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHandler(), renderBody()));
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ts-windows"
  }, renderWindows());
};

Windows.defaultProps = {
  grid: 5
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dMb2NhdGlvbnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaVdpbmRvd1NpemVzIiwiaVdpbmRvd0Rpc3BsYXlzIiwiaVdpbmRvd1pJbmRleGVzIiwiV2luZG93cyIsInByb3BzIiwid2luZG93cyIsImdyaWQiLCJ0Iiwid2luZG93TG9jYXRpb25zIiwic2V0V2luZG93TG9jYXRpb25zIiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd0Rpc3BsYXlzIiwic2V0V2luZG93RGlzcGxheXMiLCJ3aW5kb3daSW5kZXhlcyIsInNldFdpbmRvd1pJbmRleGVzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInJlbmRlcldpbmRvd3MiLCJtYXAiLCJ3aW5kb3ciLCJrZXkiLCJjb21wb25lbnQiLCJzaXplIiwibG9jYXRpb24iLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJjb2xsYXBzYWJsZSIsInRpdGxlIiwiaGFuZGxlRHJhZyIsImUiLCJkYXRhIiwieCIsInkiLCJoYW5kbGVSZXNpemUiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiaGFuZGxlRGlzcGxheSIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwicmVuZGVyQ29sbGFwc2UiLCJyZW5kZXJIYW5kbGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixpQkFBckIsSUFDckJDLElBQUks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RDtBQUF4QjtBQUFuQyxTQUNHNEIsYUFBYSxFQURoQixFQUdHRSxVQUFVLEVBSGIsQ0FURixDQURGO0FBaUJELEtBNUdNLENBQVA7QUE2R0QsR0E5R0Q7O0FBZ0hBLHNCQUFPO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2QmpDLGFBQWEsRUFBMUMsQ0FBUDtBQUNELENBM0lEOztBQTZJQWYsT0FBTyxDQUFDa0QsWUFBUixHQUF1QjtBQUNyQi9DLEVBQUFBLElBQUksRUFBRTtBQURlLENBQXZCO2VBSWVILE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3dTaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3dEaXNwbGF5cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93RGlzcGxheXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dEaXNwbGF5c1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICBjb21wb25lbnQ6IEpTWC5FbGVtZW50O1xyXG4gIHNpemU6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBsb2NhdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcclxuICBjb2xsYXBzYWJsZT86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIGdyaWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgZ3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93RGlzcGxheXMsIHNldFdpbmRvd0Rpc3BsYXlzXSA9IHVzZVN0YXRlKGlXaW5kb3dEaXNwbGF5cyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dEaXNwbGF5c1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dEaXNwbGF5cykpO1xyXG4gIH0sIFt3aW5kb3dEaXNwbGF5c10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICBjb25zdCByZW5kZXJXaW5kb3dzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHdpbmRvd3MubWFwKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgY29sbGFwc2FibGUsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEaXNwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd0Rpc3BsYXlzKHtcclxuICAgICAgICAgIC4uLndpbmRvd0Rpc3BsYXlzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dEaXNwbGF5c1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb2xsYXBzYWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHMtYnV0dG9uIHRzLWNvbGxhcHNlXCIgb25DbGljaz17aGFuZGxlRGlzcGxheX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHMtaGVhZGVyXCIsIHtcclxuICAgICAgICAgIFwidHMtaGVhZGVyLWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gb25DbGljaz17aGFuZGxlWkluZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cy10aXRsZVwiPnt0aXRsZSA/IHQodGl0bGUpIDogbnVsbH08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHMtYnV0dG9uc1wiPntyZW5kZXJDb2xsYXBzZSgpfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHMtYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3dTaXplc1trZXldID8gd2luZG93U2l6ZXNba2V5XS53IDogc2l6ZS53O1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd1NpemVzW2tleV0gPyB3aW5kb3dTaXplc1trZXldLmggOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgPyAoXHJcbiAgICAgICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtncmlkLCBncmlkXSB9fVxyXG4gICAgICAgICAgICBvblJlc2l6ZVN0b3A9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbXBvbmVudH1cclxuICAgICAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbXBvbmVudH08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0cy13aW5kb3dcIiwga2V5LCB7XHJcbiAgICAgICAgXCJ0cy1kaXNwbGF5LW9uXCI6ICF3aW5kb3dEaXNwbGF5c1trZXldLFxyXG4gICAgICAgIFwidHMtZGlzcGxheS1vZmZcIjogd2luZG93RGlzcGxheXNba2V5XSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkIGFzIG51bWJlciwgZ3JpZCBhcyBudW1iZXJdfVxyXG4gICAgICAgICAgc2NhbGU9ezF9XHJcbiAgICAgICAgICBoYW5kbGU9XCIudHMtaGVhZGVyLWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIYW5kbGVyKCl9XHJcblxyXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0cy13aW5kb3dzXCI+e3JlbmRlcldpbmRvd3MoKX08L2Rpdj47XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBncmlkOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19