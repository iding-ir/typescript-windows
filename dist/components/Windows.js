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

      var renderHeader = function renderHeader() {
        var classNames = (0, _clsx.default)("tw-title", {
          "tw-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-header",
          onClick: handleZIndex
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: classNames
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
        onStop: handleDrag
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwidGFza2JhciIsImdyaWQiLCJ0Iiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJrZXkiLCJ0aXRsZSIsImNvbXBvbmVudCIsInNpemUiLCJsb2NhdGlvbiIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJ4IiwieSIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJy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Y0FBRCxDQUFqQjtBQUNBRyxJQUFBQSxrQkFBa0IsQ0FBQ0QsZUFBRCxDQUFsQixDQXRLYyxDQXVLZDtBQUNELEdBeEtELEVBd0tHLENBQ0RaLFdBREMsRUFFREUsY0FGQyxFQUdERSxlQUhDLEVBSURFLGVBSkMsRUFLREUsZUFMQyxDQXhLSDtBQWdMQSxzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0ksZUFESCxlQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2QkYsY0FBN0IsQ0FIRixDQURGO0FBT0QsQ0F4TkQ7O0FBME5BaEIsT0FBTyxDQUFDNEQsWUFBUixHQUF1QjtBQUNyQnpELEVBQUFBLE9BQU8sRUFBRSxJQURZO0FBRXJCQyxFQUFBQSxJQUFJLEVBQUU7QUFGZSxDQUF2QjtlQUtlSixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcclxuaW1wb3J0IHsgUmVzaXphYmxlQm94LCBSZXNpemVDYWxsYmFja0RhdGEgfSBmcm9tIFwicmVhY3QtcmVzaXphYmxlXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG5jb25zdCBpV2luZG93U2l6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1NpemVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93WkluZGV4ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpXHJcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TG9jYXRpb25zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TWF4aW1pemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5jb25zdCBpV2luZG93TWluaW1pemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIikgYXMgc3RyaW5nKVxyXG4gIDoge307XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgY29tcG9uZW50OiBKU1guRWxlbWVudDtcclxuICBzaXplOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XHJcbiAgbG9jYXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcclxuICBkcmFnZ2FibGU/OiBib29sZWFuO1xyXG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XHJcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xyXG4gIG1heGltaXphYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFdpbmRvd3NQcm9wcyB7XHJcbiAgd2luZG93czogV2luZG93W107XHJcbiAgdGFza2Jhcj86IGJvb2xlYW47XHJcbiAgZ3JpZD86IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgV2luZG93cyA9IChwcm9wczogV2luZG93c1Byb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB3aW5kb3dzLCB0YXNrYmFyLCBncmlkIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd1pJbmRleGVzLCBzZXRXaW5kb3daSW5kZXhlc10gPSB1c2VTdGF0ZShpV2luZG93WkluZGV4ZXMpO1xyXG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcclxuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XHJcbiAgY29uc3QgW3dpbmRvd01pbmltaXplcywgc2V0V2luZG93TWluaW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNaW5pbWl6ZXMpO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xyXG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XHJcbiAgfSwgW3dpbmRvd1NpemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1pJbmRleGVzKSk7XHJcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcclxuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWF4aW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNaW5pbWl6ZXMpKTtcclxuICB9LCBbd2luZG93TWluaW1pemVzXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdGFza2Jhckl0ZW1zSW46IEpTWC5FbGVtZW50W10gPSBbXTtcclxuICAgIGxldCB0YXNrYmFySXRlbXNPdXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICB3aW5kb3dzLmZvckVhY2goKHdpbmRvdzogV2luZG93KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgY29tcG9uZW50LFxyXG4gICAgICAgIHNpemUsXHJcbiAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgZHJhZ2dhYmxlLFxyXG4gICAgICAgIHJlc2l6YWJsZSxcclxuICAgICAgICBtaW5pbWl6YWJsZSxcclxuICAgICAgICBtYXhpbWl6YWJsZSxcclxuICAgICAgfSA9IHdpbmRvdztcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93U2l6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93U2l6ZXMsXHJcbiAgICAgICAgICBba2V5XTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZVpJbmRleCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXHJcbiAgICAgICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXHJcbiAgICAgICAgICA6IFswXTtcclxuXHJcbiAgICAgICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtrZXldOiB6SW5kZXggfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvd01heGltaXplc1trZXldIHx8IHdpbmRvd01pbmltaXplc1trZXldKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRXaW5kb3dMb2NhdGlvbnMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxyXG4gICAgICAgICAgW2tleV06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZU1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFdpbmRvd01heGltaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXHJcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWluaW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1jb2xsYXBzZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cclxuICAgICAgICApIDogbnVsbDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1heGltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctdGl0bGVcIiwge1xyXG4gICAgICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1oZWFkZXJcIiBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XHJcblxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNYXhpbWl6ZSgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cclxuICAgICAgICAgID8gXCIxMDAlXCJcclxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxyXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcclxuICAgICAgICAgIDogc2l6ZS53O1xyXG5cclxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxyXG4gICAgICAgICAgOiBzaXplLmg7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxyXG4gICAgICAgICAgPFJlc2l6YWJsZUJveFxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICByZXNpemVIYW5kbGVzPXtbXCJzZVwiXX1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cclxuICAgICAgICAgICAgb25SZXNpemVTdG9wPXtoYW5kbGVSZXNpemV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjb21wb25lbnR9XHJcbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb21wb25lbnR9PC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xyXG4gICAgICAgIFwidHctdGFza2Jhci1vblwiOiB0YXNrYmFyLFxyXG4gICAgICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1pbmltaXplLW9mZlwiOiAhd2luZG93TWluaW1pemVzW2tleV0sXHJcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZWxlbWVudDogSlNYLkVsZW1lbnQgPSAoXHJcbiAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxyXG4gICAgICAgICAgZ3JpZD17W2dyaWQgYXMgbnVtYmVyLCBncmlkIGFzIG51bWJlcl19XHJcbiAgICAgICAgICBzY2FsZT17MX1cclxuICAgICAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxyXG4gICAgICAgICAgYm91bmRzPVwicGFyZW50XCJcclxuICAgICAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1trZXldIH19PlxyXG4gICAgICAgICAgICB7cmVuZGVySGVhZGVyKCl9XHJcblxyXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAod2luZG93TWluaW1pemVzW2tleV0gJiYgdGFza2Jhcikge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc0luID0gWy4uLnRhc2tiYXJJdGVtc0luLCBlbGVtZW50XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrYmFySXRlbXNPdXQgPSBbLi4udGFza2Jhckl0ZW1zT3V0LCBlbGVtZW50XTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xyXG4gICAgc2V0VGFza2Jhckl0ZW1zT3V0KHRhc2tiYXJJdGVtc091dCk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW1xyXG4gICAgd2luZG93U2l6ZXMsXHJcbiAgICB3aW5kb3daSW5kZXhlcyxcclxuICAgIHdpbmRvd0xvY2F0aW9ucyxcclxuICAgIHdpbmRvd01heGltaXplcyxcclxuICAgIHdpbmRvd01pbmltaXplcyxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHctd2luZG93c1wiPlxyXG4gICAgICB7dGFza2Jhckl0ZW1zT3V0fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRhc2tiYXI6IHRydWUsXHJcbiAgZ3JpZDogMSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbmRvd3M7XHJcbiJdfQ==