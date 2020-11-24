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
        handle: ".tw-header-draggable",
        bounds: "parent",
        onStop: handleDrag
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHandler(), renderBody()));

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
  grid: 5
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwidGFza2JhciIsImdyaWQiLCJ0Iiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJrZXkiLCJjb21wb25lbnQiLCJzaXplIiwibG9jYXRpb24iLCJkcmFnZ2FibGUiLCJyZXNpemFibGUiLCJtaW5pbWl6YWJsZSIsIm1heGltaXphYmxlIiwidGl0bGUiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJ4IiwieSIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJDb2xsYXBzZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGFuZGxlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5Iiwi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QUNELGNBQUQsQ0FBakI7QUFDQUcsSUFBQUEsa0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsQ0F0S2MsQ0F1S2Q7QUFDRCxHQXhLRCxFQXdLRyxDQUNEWixXQURDLEVBRURFLGNBRkMsRUFHREUsZUFIQyxFQUlERSxlQUpDLEVBS0RFLGVBTEMsQ0F4S0g7QUFnTEEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dJLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERjtBQU9ELENBeE5EOztBQTBOQWhCLE9BQU8sQ0FBQzRELFlBQVIsR0FBdUI7QUFDckJ6RCxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFO0FBRmUsQ0FBdkI7ZUFLZUosTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRHJhZ2dhYmxlLCB7IERyYWdnYWJsZUV2ZW50LCBEcmFnZ2FibGVEYXRhIH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5cclxuY29uc3QgaVdpbmRvd1NpemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd1pJbmRleGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01heGltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpIGFzIHN0cmluZylcclxuICA6IHt9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIGNvbXBvbmVudDogSlNYLkVsZW1lbnQ7XHJcbiAgc2l6ZTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xyXG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XHJcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcclxuICByZXNpemFibGU/OiBib29sZWFuO1xyXG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcclxuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xyXG4gIHdpbmRvd3M6IFdpbmRvd1tdO1xyXG4gIHRhc2tiYXI/OiBib29sZWFuO1xyXG4gIGdyaWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgd2luZG93cywgdGFza2JhciwgZ3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcclxuICBjb25zdCBbd2luZG93TG9jYXRpb25zLCBzZXRXaW5kb3dMb2NhdGlvbnNdID0gdXNlU3RhdGUoaVdpbmRvd0xvY2F0aW9ucyk7XHJcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zSW4sIHNldFRhc2tiYXJJdGVtc0luXSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xyXG4gIH0sIFt3aW5kb3dTaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xyXG4gIH0sIFt3aW5kb3daSW5kZXhlc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TG9jYXRpb25zKSk7XHJcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XHJcbiAgfSwgW3dpbmRvd01pbmltaXplc10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc0luOiBKU1guRWxlbWVudFtdID0gW107XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgd2luZG93cy5mb3JFYWNoKCh3aW5kb3c6IFdpbmRvdykgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGNvbXBvbmVudCxcclxuICAgICAgICBzaXplLFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgIGRyYWdnYWJsZSxcclxuICAgICAgICByZXNpemFibGUsXHJcbiAgICAgICAgbWluaW1pemFibGUsXHJcbiAgICAgICAgbWF4aW1pemFibGUsXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgIH0gPSB3aW5kb3c7XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd1NpemVzLFxyXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpLmxlbmd0aFxyXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxyXG4gICAgICAgICAgOiBbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3daSW5kZXhlcyh7IC4uLndpbmRvd1pJbmRleGVzLCBba2V5XTogekluZGV4IH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcclxuICAgICAgICAgIC4uLndpbmRvd0xvY2F0aW9ucyxcclxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQ29sbGFwc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1pbmltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctY29sbGFwc2VcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWF4aW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1oZWFkZXItZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlckNvbGxhcHNlKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemVTdG9wPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21wb25lbnR9XHJcbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb21wb25lbnR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xyXG4gICAgICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxyXG4gICAgICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudDogSlNYLkVsZW1lbnQgPSAoXHJcbiAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxyXG4gICAgICAgICAgZ3JpZD17W2dyaWQgYXMgbnVtYmVyLCBncmlkIGFzIG51bWJlcl19XHJcbiAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgIGhhbmRsZT1cIi50dy1oZWFkZXItZHJhZ2dhYmxlXCJcclxuICAgICAgICAgIGJvdW5kcz1cInBhcmVudFwiXHJcbiAgICAgICAgICBvblN0b3A9e2hhbmRsZURyYWd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cclxuICAgICAgICAgICAge3JlbmRlckhhbmRsZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0dy13aW5kb3dzXCI+XHJcbiAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiA1LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19