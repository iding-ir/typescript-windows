"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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
var iWindowZIndexes = localStorage.getItem("windowZIndexes") ? JSON.parse(localStorage.getItem("windowZIndexes")) : {};
var iWindowLocations = localStorage.getItem("windowLocations") ? JSON.parse(localStorage.getItem("windowLocations")) : {};
var iWindowMaximizes = localStorage.getItem("windowMaximizes") ? JSON.parse(localStorage.getItem("windowMaximizes")) : {};
var iWindowMinimizes = localStorage.getItem("windowMinimizes") ? JSON.parse(localStorage.getItem("windowMinimizes")) : {};

var Windows = function Windows(props) {
  var windows = props.windows,
      grid = props.grid;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var taskbarRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      forceUpdate = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowSizes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowSizes = _useState4[0],
      setWindowSizes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowZIndexes),
      _useState6 = _slicedToArray(_useState5, 2),
      windowZIndexes = _useState6[0],
      setWindowZIndexes = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowLocations),
      _useState8 = _slicedToArray(_useState7, 2),
      windowLocations = _useState8[0],
      setWindowLocations = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMaximizes),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMaximizes = _useState10[0],
      setWindowMaximizes = _useState10[1];

  var _useState11 = (0, _react.useState)(iWindowMinimizes),
      _useState12 = _slicedToArray(_useState11, 2),
      windowMinimizes = _useState12[0],
      setWindowMinimizes = _useState12[1];

  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMaximizes", JSON.stringify(windowMaximizes));
  }, [windowMaximizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMinimizes", JSON.stringify(windowMinimizes));
  }, [windowMinimizes]);

  var renderWindows = function renderWindows() {
    return windows.map(function (window) {
      var key = window.key,
          component = window.component,
          size = window.size,
          location = window.location,
          draggable = window.draggable,
          resizable = window.resizable,
          minimizable = window.minimizable,
          maximizable = window.maximizable,
          title = window.title;

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var handleDrag = function handleDrag(e, data) {
        if (windowMaximizes[key] || windowMinimizes[key]) {
          return;
        }

        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleMaximize = function handleMaximize() {
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, false)));
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, !windowMaximizes[key])));
      };

      var handleMinimize = function handleMinimize() {
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, false)));
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, !windowMinimizes[key])));
      };

      var renderCollapse = function renderCollapse() {
        return minimizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-collapse",
          onClick: handleMinimize
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
        return resizable && !windowMaximizes[key] ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
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
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key]
      });

      var element = /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
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

      return windowMinimizes[key] && (taskbarRef === null || taskbarRef === void 0 ? void 0 : taskbarRef.current) ? /*#__PURE__*/_reactDom.default.createPortal(element, taskbarRef === null || taskbarRef === void 0 ? void 0 : taskbarRef.current) : element;
    });
  };

  var renderTaskbar = function renderTaskbar() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "tw-taskbar",
      ref: taskbarRef
    });
  }; // By the time of creating a portal to ".tw-taskbar" this element is not
  // yet rendered in DOM. By forceUpdate(ing) Windows component we make sure
  // that minimized windows go to taskbar when page is refreshed.


  setTimeout(function () {
    forceUpdate(1);
  }, 0);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-windows"
  }, renderWindows(), renderTaskbar());
};

Windows.defaultProps = {
  grid: 5
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwiZ3JpZCIsInQiLCJ0YXNrYmFyUmVmIiwiZm9yY2VVcGRhdGUiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW5kZXJXaW5kb3dzIiwibWFwIiwid2luZG93Iiwia2V5IiwiY29tcG9uZW50Iiwic2l6ZSIsImxvY2F0aW9uIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInRpdGxlIiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwieCIsInkiLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyQ29sbGFwc2UiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhhbmRsZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJjdXJyZW50IiwiUmVhY3RE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RUFFUCxDQUZPLENBQVY7QUFJQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR2EsYUFBYSxFQURoQixFQUdHMEMsYUFBYSxFQUhoQixDQURGO0FBT0QsQ0E3TUQ7O0FBK01BN0QsT0FBTyxDQUFDK0QsWUFBUixHQUF1QjtBQUNyQjVELEVBQUFBLElBQUksRUFBRTtBQURlLENBQXZCO2VBSWVILE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3ludGhldGljRXZlbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgaVdpbmRvd1NpemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd1pJbmRleGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01heGltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNvbXBvbmVudDogSlNYLkVsZW1lbnQ7XHJcbiAgc2l6ZTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIGdyaWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgZ3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgdGFza2JhclJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgWywgZm9yY2VVcGRhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyV2luZG93cyA9ICgpID0+IHtcclxuICAgIHJldHVybiB3aW5kb3dzLm1hcCgod2luZG93OiBXaW5kb3cpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICBjb21wb25lbnQsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIG1pbmltaXphYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgICAgIFtrZXldOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgICAgICBpZiAod2luZG93TWF4aW1pemVzW2tleV0gfHwgd2luZG93TWluaW1pemVzW2tleV0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgICAgICBba2V5XTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckNvbGxhcHNlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LWNvbGxhcHNlXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcclxuICAgICAgICAgIFwidHctaGVhZGVyLWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gb25DbGljaz17aGFuZGxlWkluZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiPnt0aXRsZSA/IHQodGl0bGUpIDogbnVsbH08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJDb2xsYXBzZSgpfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd1NpemVzW2tleV0gPyB3aW5kb3dTaXplc1trZXldLncgOiBzaXplLnc7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93U2l6ZXNba2V5XSA/IHdpbmRvd1NpemVzW2tleV0uaCA6IHNpemUuaDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2tleV0gPyAoXHJcbiAgICAgICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtncmlkLCBncmlkXSB9fVxyXG4gICAgICAgICAgICBvblJlc2l6ZVN0b3A9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbXBvbmVudH1cclxuICAgICAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbXBvbmVudH08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwga2V5LCB7XHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudDogSlNYLkVsZW1lbnQgPSAoXHJcbiAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxyXG4gICAgICAgICAgZ3JpZD17W2dyaWQgYXMgbnVtYmVyLCBncmlkIGFzIG51bWJlcl19XHJcbiAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgIGhhbmRsZT1cIi50dy1oZWFkZXItZHJhZ2dhYmxlXCJcclxuICAgICAgICAgIGJvdW5kcz1cInBhcmVudFwiXHJcbiAgICAgICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cclxuICAgICAgICAgICAge3JlbmRlckhhbmRsZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiB3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyUmVmPy5jdXJyZW50XHJcbiAgICAgICAgPyBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgICAgICh0YXNrYmFyUmVmPy5jdXJyZW50IGFzIHVua25vd24pIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiBlbGVtZW50O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGFza2JhciA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIiByZWY9e3Rhc2tiYXJSZWZ9PjwvZGl2PjtcclxuICB9O1xyXG5cclxuICAvLyBCeSB0aGUgdGltZSBvZiBjcmVhdGluZyBhIHBvcnRhbCB0byBcIi50dy10YXNrYmFyXCIgdGhpcyBlbGVtZW50IGlzIG5vdFxyXG4gIC8vIHlldCByZW5kZXJlZCBpbiBET00uIEJ5IGZvcmNlVXBkYXRlKGluZykgV2luZG93cyBjb21wb25lbnQgd2UgbWFrZSBzdXJlXHJcbiAgLy8gdGhhdCBtaW5pbWl6ZWQgd2luZG93cyBnbyB0byB0YXNrYmFyIHdoZW4gcGFnZSBpcyByZWZyZXNoZWQuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBmb3JjZVVwZGF0ZSgxKTtcclxuICB9LCAwKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHctd2luZG93c1wiPlxyXG4gICAgICB7cmVuZGVyV2luZG93cygpfVxyXG5cclxuICAgICAge3JlbmRlclRhc2tiYXIoKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICBncmlkOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19