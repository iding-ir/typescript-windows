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
var iWindowZIndexes = localStorage.getItem("windowZIndexes") ? JSON.parse(localStorage.getItem("windowZIndexes")) : {};
var iWindowLocations = localStorage.getItem("windowLocations") ? JSON.parse(localStorage.getItem("windowLocations")) : {};
var iWindowMaximizes = localStorage.getItem("windowMaximizes") ? JSON.parse(localStorage.getItem("windowMaximizes")) : {};
var iWindowMinimizes = localStorage.getItem("windowMinimizes") ? JSON.parse(localStorage.getItem("windowMinimizes")) : {};

var Windows = function Windows(props) {
  var windows = props.windows,
      taskbar = props.taskbar,
      grid = props.grid;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(iWindowSizes),
      _useState2 = _slicedToArray(_useState, 2),
      windowSizes = _useState2[0],
      setWindowSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowZIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowZIndexes = _useState4[0],
      setWindowZIndexes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowLocations),
      _useState6 = _slicedToArray(_useState5, 2),
      windowLocations = _useState6[0],
      setWindowLocations = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowMaximizes),
      _useState8 = _slicedToArray(_useState7, 2),
      windowMaximizes = _useState8[0],
      setWindowMaximizes = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMinimizes),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMinimizes = _useState10[0],
      setWindowMinimizes = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      taskbarItemsIn = _useState12[0],
      setTaskbarItemsIn = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      taskbarItemsOut = _useState14[0],
      setTaskbarItemsOut = _useState14[1];

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
  (0, _react.useEffect)(function () {
    var taskbarItemsIn = [];
    var taskbarItemsOut = [];
    windows.forEach(function (window) {
      var key = window.key,
          title = window.title,
          component = window.component,
          size = window.size,
          location = window.location,
          draggable = window.draggable,
          resizable = window.resizable,
          minimizable = window.minimizable,
          maximizable = window.maximizable;

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

      var renderMinimize = function renderMinimize() {
        return minimizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-minimize",
          onClick: handleMinimize
        }) : null;
      };

      var renderMaximize = function renderMaximize() {
        return maximizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-maximize",
          onClick: handleMaximize
        }) : null;
      };

      var renderHeader = function renderHeader() {
        var classNames = (0, _clsx.default)("tw-header", {
          "tw-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classNames,
          onClick: handleZIndex
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title"
        }, title ? t(title) : null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons"
        }, renderMinimize(), renderMaximize()));
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
        "tw-taskbar-on": taskbar,
        "tw-taskbar-off": !taskbar,
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
        handle: ".tw-draggable",
        bounds: "parent",
        onStop: handleDrag,
        cancel: ".tw-minimize, .tw-maximize"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHeader(), renderBody()));

      if (windowMinimizes[key] && taskbar) {
        taskbarItemsIn = [].concat(_toConsumableArray(taskbarItemsIn), [element]);
      } else {
        taskbarItemsOut = [].concat(_toConsumableArray(taskbarItemsOut), [element]);
      }
    });
    setTaskbarItemsIn(taskbarItemsIn);
    setTaskbarItemsOut(taskbarItemsOut); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSizes, windowZIndexes, windowLocations, windowMaximizes, windowMinimizes]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-windows"
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwidGFza2JhciIsImdyaWQiLCJ0Iiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJrZXkiLCJ0aXRsZSIsImNvbXBvbmVudCIsInNpemUiLCJsb2NhdGlvbiIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJ4IiwieSIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJy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a0tBMUMsSUFBQUEsaUJBQWlCLENBQUNELGNBQUQsQ0FBakI7QUFDQUcsSUFBQUEsa0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsQ0F2S2MsQ0F3S2Q7QUFDRCxHQXpLRCxFQXlLRyxDQUNEWixXQURDLEVBRURFLGNBRkMsRUFHREUsZUFIQyxFQUlERSxlQUpDLEVBS0RFLGVBTEMsQ0F6S0g7QUFpTEEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dJLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERjtBQU9ELENBek5EOztBQTJOQWhCLE9BQU8sQ0FBQzRELFlBQVIsR0FBdUI7QUFDckJ6RCxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFO0FBRmUsQ0FBdkI7ZUFLZUosTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgaVdpbmRvd1NpemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd1pJbmRleGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01heGltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGNvbXBvbmVudDogSlNYLkVsZW1lbnQ7XHJcbiAgc2l6ZTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIHRhc2tiYXI/OiBib29sZWFuO1xyXG4gIGdyaWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgd2luZG93cy5mb3JFYWNoKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgbWluaW1pemFibGUsXHJcbiAgICAgICAgbWF4aW1pemFibGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LWhlYWRlclwiLCB7XHJcbiAgICAgICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gb25DbGljaz17aGFuZGxlWkluZGV4fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiPnt0aXRsZSA/IHQodGl0bGUpIDogbnVsbH08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNaW5pbWl6ZSgpfVxyXG5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0dy1ib2R5XCI+e3JlbmRlckJvZHlDb250ZW50cygpfTwvZGl2PjtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHlDb250ZW50cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XHJcbiAgICAgICAgICA6IHNpemUudztcclxuXHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLmhcclxuICAgICAgICAgIDogc2l6ZS5oO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNba2V5XSA/IChcclxuICAgICAgICAgIDxSZXNpemFibGVCb3hcclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XHJcbiAgICAgICAgICAgIGRyYWdnYWJsZU9wdHM9e3sgZ3JpZDogW2dyaWQsIGdyaWRdIH19XHJcbiAgICAgICAgICAgIG9uUmVzaXplU3RvcD17aGFuZGxlUmVzaXplfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tcG9uZW50fVxyXG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fT57Y29tcG9uZW50fTwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcclxuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcclxuICAgICAgICBcInR3LXRhc2tiYXItb2ZmXCI6ICF0YXNrYmFyLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb25cIjogd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxyXG4gICAgICAgIDxEcmFnZ2FibGVcclxuICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cclxuICAgICAgICAgIGdyaWQ9e1tncmlkIGFzIG51bWJlciwgZ3JpZCBhcyBudW1iZXJdfVxyXG4gICAgICAgICAgc2NhbGU9ezF9XHJcbiAgICAgICAgICBoYW5kbGU9XCIudHctZHJhZ2dhYmxlXCJcclxuICAgICAgICAgIGJvdW5kcz1cInBhcmVudFwiXHJcbiAgICAgICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgICAgICBjYW5jZWw9XCIudHctbWluaW1pemUsIC50dy1tYXhpbWl6ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cclxuICAgICAgICAgICAge3JlbmRlckhlYWRlcigpfVxyXG5cclxuICAgICAgICAgICAge3JlbmRlckJvZHkoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHdpbmRvd01pbmltaXplc1trZXldICYmIHRhc2tiYXIpIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNJbiA9IFsuLi50YXNrYmFySXRlbXNJbiwgZWxlbWVudF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zT3V0ID0gWy4uLnRhc2tiYXJJdGVtc091dCwgZWxlbWVudF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcclxuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtcclxuICAgIHdpbmRvd1NpemVzLFxyXG4gICAgd2luZG93WkluZGV4ZXMsXHJcbiAgICB3aW5kb3dMb2NhdGlvbnMsXHJcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICB3aW5kb3dNaW5pbWl6ZXMsXHJcbiAgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXdpbmRvd3NcIj5cclxuICAgICAge3Rhc2tiYXJJdGVtc091dH1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5XaW5kb3dzLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YXNrYmFyOiB0cnVlLFxyXG4gIGdyaWQ6IDEsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xyXG4iXX0=