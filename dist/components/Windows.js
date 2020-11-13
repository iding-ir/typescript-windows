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

var iWindowSizes = localStorage.getItem("windowSizes") ? JSON.parse(localStorage.getItem("windowSizes")) : {};
var iWindowDisplays = localStorage.getItem("windowDisplays") ? JSON.parse(localStorage.getItem("windowDisplays")) : {};
var iWindowZIndexes = localStorage.getItem("windowZIndexes") ? JSON.parse(localStorage.getItem("windowZIndexes")) : {};
var iWindowLocations = localStorage.getItem("windowLocations") ? JSON.parse(localStorage.getItem("windowLocations")) : {};
var iWindowMaximized = localStorage.getItem("windowMaximized") ? JSON.parse(localStorage.getItem("windowMaximized")) : {};

var Windows = function Windows(props) {
  var windows = props.windows,
      grid = props.grid;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(iWindowSizes),
      _useState2 = _slicedToArray(_useState, 2),
      windowSizes = _useState2[0],
      setWindowSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowDisplays),
      _useState4 = _slicedToArray(_useState3, 2),
      windowDisplays = _useState4[0],
      setWindowDisplays = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowZIndexes),
      _useState6 = _slicedToArray(_useState5, 2),
      windowZIndexes = _useState6[0],
      setWindowZIndexes = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowLocations),
      _useState8 = _slicedToArray(_useState7, 2),
      windowLocations = _useState8[0],
      setWindowLocations = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMaximized),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMaximized = _useState10[0],
      setWindowMaximized = _useState10[1];

  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMaximized", JSON.stringify(windowMaximized));
  }, [windowMaximized]);

  var renderWindows = function renderWindows() {
    return windows.map(function (window) {
      var key = window.key,
          component = window.component,
          size = window.size,
          location = window.location,
          draggable = window.draggable,
          resizable = window.resizable,
          collapsable = window.collapsable,
          maximizable = window.maximizable,
          title = window.title;

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleDisplay = function handleDisplay() {
        setWindowMaximized(null);
        setWindowDisplays(_objectSpread(_objectSpread({}, windowDisplays), {}, _defineProperty({}, key, !windowDisplays[key])));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var handleDrag = function handleDrag(e, data) {
        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleMaximize = function handleMaximize() {
        windowMaximized === key ? setWindowMaximized(null) : setWindowMaximized(key);
      };

      var renderCollapse = function renderCollapse() {
        return collapsable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-collapse",
          onClick: handleDisplay
        }) : null;
      };

      var renderMaximize = function renderMaximize() {
        return maximizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-maximize",
          onClick: handleMaximize
        }) : null;
      };

      var renderHandler = function renderHandler() {
        var classNames = (0, _clsx.default)("tw-header", {
          "tw-header-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classNames,
          onClick: handleZIndex
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title"
        }, title ? t(title) : null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons"
        }, renderCollapse(), renderMaximize()));
      };

      var renderBody = function renderBody() {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-body"
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

      var classNames = (0, _clsx.default)("tw-window", key, {
        "tw-display-on": !windowDisplays[key],
        "tw-display-off": windowDisplays[key],
        "tw-maximize-on": windowMaximized === key,
        "tw-maximize-off": windowMaximized !== key
      });
      return /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        key: key,
        defaultPosition: windowLocations[key] || location,
        grid: [grid, grid],
        scale: 1,
        handle: ".tw-header-draggable",
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
    className: "tw-windows"
  }, renderWindows());
};

Windows.defaultProps = {
  grid: 5
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93RGlzcGxheXMiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplZCIsIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJncmlkIiwidCIsIndpbmRvd1NpemVzIiwic2V0V2luZG93U2l6ZXMiLCJ3aW5kb3dEaXNwbGF5cyIsInNldFdpbmRvd0Rpc3BsYXlzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplZCIsInNldFdpbmRvd01heGltaXplZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW5kZXJXaW5kb3dzIiwibWFwIiwid2luZG93Iiwia2V5IiwiY29tcG9uZW50Iiwic2l6ZSIsImxvY2F0aW9uIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwiY29sbGFwc2FibGUiLCJtYXhpbWl6YWJsZSIsInRpdGxlIiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiaGFuZGxlRGlzcGxheSIsImhhbmRsZVpJbmRleCIsIm51bXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ6SW5kZXgiLCJNYXRoIiwibWF4IiwiaGFuZGxlRHJhZyIsIngiLCJ5IiwiaGFuZGxlTWF4aW1pemUiLCJyZW5kZXJDb2xsYXBzZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGFuZGxlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFD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U0FDRytCLGFBQWEsRUFEaEIsRUFHR0UsVUFBVSxFQUhiLENBVEYsQ0FERjtBQWlCRCxLQWpJTSxDQUFQO0FBa0lELEdBbklEOztBQXFJQSxzQkFBTztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJwQyxhQUFhLEVBQTFDLENBQVA7QUFDRCxDQXJLRDs7QUF1S0FqQixPQUFPLENBQUN1RCxZQUFSLEdBQXVCO0FBQ3JCcEQsRUFBQUEsSUFBSSxFQUFFO0FBRGUsQ0FBdkI7ZUFJZUgsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgaVdpbmRvd1NpemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd0Rpc3BsYXlzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dEaXNwbGF5c1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0Rpc3BsYXlzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd1pJbmRleGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01heGltaXplZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVkXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVkXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNvbXBvbmVudDogSlNYLkVsZW1lbnQ7XHJcbiAgc2l6ZTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIGNvbGxhcHNhYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIGdyaWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgZ3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dEaXNwbGF5cywgc2V0V2luZG93RGlzcGxheXNdID0gdXNlU3RhdGUoaVdpbmRvd0Rpc3BsYXlzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZWQsIHNldFdpbmRvd01heGltaXplZF0gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVkKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93RGlzcGxheXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93RGlzcGxheXMpKTtcclxuICB9LCBbd2luZG93RGlzcGxheXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVkXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplZCkpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZWRdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV2luZG93cyA9ICgpID0+IHtcclxuICAgIHJldHVybiB3aW5kb3dzLm1hcCgod2luZG93OiBXaW5kb3cpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBjb21wb25lbnQsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIGNvbGxhcHNhYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgICAgIFtrZXldOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRGlzcGxheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZWQobnVsbCk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd0Rpc3BsYXlzKHtcclxuICAgICAgICAgIC4uLndpbmRvd0Rpc3BsYXlzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dEaXNwbGF5c1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxyXG4gICAgICAgICAgW2tleV06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvd01heGltaXplZCA9PT0ga2V5XHJcbiAgICAgICAgICA/IHNldFdpbmRvd01heGltaXplZChudWxsKVxyXG4gICAgICAgICAgOiBzZXRXaW5kb3dNYXhpbWl6ZWQoa2V5KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb2xsYXBzYWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LWNvbGxhcHNlXCIgb25DbGljaz17aGFuZGxlRGlzcGxheX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1oZWFkZXItZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlckNvbGxhcHNlKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93U2l6ZXNba2V5XSA/IHdpbmRvd1NpemVzW2tleV0udyA6IHNpemUudztcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dTaXplc1trZXldID8gd2luZG93U2l6ZXNba2V5XS5oIDogc2l6ZS5oO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzaXphYmxlID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemVTdG9wPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21wb25lbnR9XHJcbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb21wb25lbnR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xyXG4gICAgICAgIFwidHctZGlzcGxheS1vblwiOiAhd2luZG93RGlzcGxheXNba2V5XSxcclxuICAgICAgICBcInR3LWRpc3BsYXktb2ZmXCI6IHdpbmRvd0Rpc3BsYXlzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZWQgPT09IGtleSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiB3aW5kb3dNYXhpbWl6ZWQgIT09IGtleSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkIGFzIG51bWJlciwgZ3JpZCBhcyBudW1iZXJdfVxyXG4gICAgICAgICAgc2NhbGU9ezF9XHJcbiAgICAgICAgICBoYW5kbGU9XCIudHctaGVhZGVyLWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIYW5kbGVyKCl9XHJcblxyXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy13aW5kb3dzXCI+e3JlbmRlcldpbmRvd3MoKX08L2Rpdj47XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBncmlkOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19