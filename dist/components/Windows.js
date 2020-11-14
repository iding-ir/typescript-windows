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
        var width = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].w : size.w;
        var height = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].h : size.h;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwiZ3JpZCIsInQiLCJ0YXNrYmFyUmVmIiwiZm9yY2VVcGRhdGUiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW5kZXJXaW5kb3dzIiwibWFwIiwid2luZG93Iiwia2V5IiwiY29tcG9uZW50Iiwic2l6ZSIsImxvY2F0aW9uIiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsInRpdGxlIiwiaGFuZGxlUmVzaXplIiwiZSIsImRhdGEiLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIk1hdGgiLCJtYXgiLCJoYW5kbGVEcmFnIiwieCIsInkiLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyQ29sbGFwc2UiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhhbmRsZXIiLCJjbGFzc05hbWVzIiwicmVuZGVyQm9keSIsInJlbmRlckJvZHlDb250ZW50cyIsImVsZW1lbnQiLCJjdXJyZW50IiwiUmVhY3RE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QXlELEVBQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2Z4RCxJQUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYO0FBQ0QsR0FGUyxFQUVQLENBRk8sQ0FBVjtBQUlBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHYSxhQUFhLEVBRGhCLEVBR0cwQyxhQUFhLEVBSGhCLENBREY7QUFPRCxDQXRORDs7QUF3TkE3RCxPQUFPLENBQUMrRCxZQUFSLEdBQXVCO0FBQ3JCNUQsRUFBQUEsSUFBSSxFQUFFO0FBRGUsQ0FBdkI7ZUFJZUgsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5jb25zdCBpV2luZG93U2l6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93WkluZGV4ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TG9jYXRpb25zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TWF4aW1pemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TWluaW1pemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgY29tcG9uZW50OiBKU1guRWxlbWVudDtcclxuICBzaXplOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgbG9jYXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XHJcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xyXG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcclxuICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpbmRvd3NQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgZ3JpZD86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgV2luZG93cyA9IChwcm9wczogV2luZG93c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB3aW5kb3dzLCBncmlkIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICBjb25zdCB0YXNrYmFyUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBbLCBmb3JjZVVwZGF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICBjb25zdCByZW5kZXJXaW5kb3dzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHdpbmRvd3MubWFwKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgbWluaW1pemFibGUsXHJcbiAgICAgICAgbWF4aW1pemFibGUsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQ29sbGFwc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctY29sbGFwc2VcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1oZWFkZXItZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlckNvbGxhcHNlKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemVTdG9wPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21wb25lbnR9XHJcbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb21wb25lbnR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkIGFzIG51bWJlciwgZ3JpZCBhcyBudW1iZXJdfVxyXG4gICAgICAgICAgc2NhbGU9ezF9XHJcbiAgICAgICAgICBoYW5kbGU9XCIudHctaGVhZGVyLWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIYW5kbGVyKCl9XHJcblxyXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gd2luZG93TWluaW1pemVzW2tleV0gJiYgdGFza2JhclJlZj8uY3VycmVudFxyXG4gICAgICAgID8gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgICAgICAodGFza2JhclJlZj8uY3VycmVudCBhcyB1bmtub3duKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIDogZWxlbWVudDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhc2tiYXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCIgcmVmPXt0YXNrYmFyUmVmfT48L2Rpdj47XHJcbiAgfTtcclxuXHJcbiAgLy8gQnkgdGhlIHRpbWUgb2YgY3JlYXRpbmcgYSBwb3J0YWwgdG8gXCIudHctdGFza2JhclwiIHRoaXMgZWxlbWVudCBpcyBub3RcclxuICAvLyB5ZXQgcmVuZGVyZWQgaW4gRE9NLiBCeSBmb3JjZVVwZGF0ZShpbmcpIFdpbmRvd3MgY29tcG9uZW50IHdlIG1ha2Ugc3VyZVxyXG4gIC8vIHRoYXQgbWluaW1pemVkIHdpbmRvd3MgZ28gdG8gdGFza2JhciB3aGVuIHBhZ2UgaXMgcmVmcmVzaGVkLlxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZm9yY2VVcGRhdGUoMSk7XHJcbiAgfSwgMCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXdpbmRvd3NcIj5cclxuICAgICAge3JlbmRlcldpbmRvd3MoKX1cclxuXHJcbiAgICAgIHtyZW5kZXJUYXNrYmFyKCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZ3JpZDogNSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==