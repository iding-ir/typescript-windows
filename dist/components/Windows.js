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
          className: classNames
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title"
        }, title ? t(title) : null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons",
          onClick: handleZIndex
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
        onStart: handleZIndex,
        onStop: handleDrag,
        cancel: ".tw-buttons"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJXaW5kb3dzIiwicHJvcHMiLCJ3aW5kb3dzIiwidGFza2JhciIsImdyaWQiLCJ0Iiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJrZXkiLCJ0aXRsZSIsImNvbXBvbmVudCIsInNpemUiLCJsb2NhdGlvbiIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwiTWF0aCIsIm1heCIsImhhbmRsZURyYWciLCJ4IiwieSIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJy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QixFQUFmO0FBQ0Q7QUFDRixLQWpLRDtBQW1LQTFDLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBeEtjLENBeUtkO0FBQ0QsR0ExS0QsRUEwS0csQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLENBMUtIO0FBa0xBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSSxlQURILGVBR0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixjQUE3QixDQUhGLENBREY7QUFPRCxDQTFORDs7QUE0TkFoQixPQUFPLENBQUM0RCxZQUFSLEdBQXVCO0FBQ3JCekQsRUFBQUEsT0FBTyxFQUFFLElBRFk7QUFFckJDLEVBQUFBLElBQUksRUFBRTtBQUZlLENBQXZCO2VBS2VKLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbmNvbnN0IGlXaW5kb3dTaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIilcclxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3dMb2NhdGlvbnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01heGltaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01heGltaXplc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiKVxyXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiKSBhcyBzdHJpbmcpXHJcbiAgOiB7fTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcclxuICBrZXk6IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZztcclxuICBjb21wb25lbnQ6IEpTWC5FbGVtZW50O1xyXG4gIHNpemU6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcclxuICBsb2NhdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xyXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XHJcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcclxuICBtaW5pbWl6YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgV2luZG93c1Byb3BzIHtcclxuICB3aW5kb3dzOiBXaW5kb3dbXTtcclxuICB0YXNrYmFyPzogYm9vbGVhbjtcclxuICBncmlkPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBXaW5kb3dzUHJvcHMpID0+IHtcclxuICBjb25zdCB7IHdpbmRvd3MsIHRhc2tiYXIsIGdyaWQgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplcywgc2V0V2luZG93U2l6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1NpemVzKTtcclxuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XHJcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xyXG4gIGNvbnN0IFt3aW5kb3dNYXhpbWl6ZXMsIHNldFdpbmRvd01heGltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWF4aW1pemVzKTtcclxuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XHJcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc091dCwgc2V0VGFza2Jhckl0ZW1zT3V0XSA9IHVzZVN0YXRlPEpTWC5FbGVtZW50W10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93U2l6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93U2l6ZXMpKTtcclxuICB9LCBbd2luZG93U2l6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcclxuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xyXG4gIH0sIFt3aW5kb3dMb2NhdGlvbnNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01heGltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xyXG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IHRhc2tiYXJJdGVtc091dDogSlNYLkVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIHdpbmRvd3MuZm9yRWFjaCgod2luZG93OiBXaW5kb3cpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGtleSxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb21wb25lbnQsXHJcbiAgICAgICAgc2l6ZSxcclxuICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICBkcmFnZ2FibGUsXHJcbiAgICAgICAgcmVzaXphYmxlLFxyXG4gICAgICAgIG1pbmltaXphYmxlLFxyXG4gICAgICAgIG1heGltaXphYmxlLFxyXG4gICAgICB9ID0gd2luZG93O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKGU6IFN5bnRoZXRpY0V2ZW50LCBkYXRhOiBSZXNpemVDYWxsYmFja0RhdGEpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcclxuICAgICAgICAgIFtrZXldOiB7IHc6IGRhdGEuc2l6ZS53aWR0aCwgaDogZGF0YS5zaXplLmhlaWdodCB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcclxuICAgICAgICAgID8gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcylcclxuICAgICAgICAgIDogWzBdO1xyXG5cclxuICAgICAgICBjb25zdCB6SW5kZXggPSBNYXRoLm1heCguLi4obnVtcyBhcyBudW1iZXJbXSkpICsgMTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcclxuICAgICAgICBpZiAod2luZG93TWF4aW1pemVzW2tleV0gfHwgd2luZG93TWluaW1pemVzW2tleV0pIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XHJcbiAgICAgICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXHJcbiAgICAgICAgICBba2V5XTogeyB4OiBkYXRhLngsIHk6IGRhdGEueSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcclxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcclxuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcclxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWF4aW1pemVzW2tleV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWF4aW1pemVzLFxyXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xyXG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxyXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1pbmltaXplXCIgb25DbGljaz17aGFuZGxlTWluaW1pemV9PjwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWF4aW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNYXhpbWl6ZX0+PC9kaXY+XHJcbiAgICAgICAgKSA6IG51bGw7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xyXG4gICAgICAgICAgXCJ0dy1kcmFnZ2FibGVcIjogZHJhZ2dhYmxlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCIgb25DbGljaz17aGFuZGxlWkluZGV4fT5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cclxuXHJcbiAgICAgICAgICAgICAge3JlbmRlck1heGltaXplKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxyXG4gICAgICAgICAgPyBcIjEwMCVcIlxyXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXHJcbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0ud1xyXG4gICAgICAgICAgOiBzaXplLnc7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHdpbmRvd01heGltaXplc1trZXldXHJcbiAgICAgICAgICA/IFwiMTAwJVwiXHJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cclxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS5oXHJcbiAgICAgICAgICA6IHNpemUuaDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc2l6YWJsZSAmJiAhd2luZG93TWF4aW1pemVzW2tleV0gPyAoXHJcbiAgICAgICAgICA8UmVzaXphYmxlQm94XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxyXG4gICAgICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtncmlkLCBncmlkXSB9fVxyXG4gICAgICAgICAgICBvblJlc2l6ZVN0b3A9e2hhbmRsZVJlc2l6ZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NvbXBvbmVudH1cclxuICAgICAgICAgIDwvUmVzaXphYmxlQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbXBvbmVudH08L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy13aW5kb3dcIiwga2V5LCB7XHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXHJcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcclxuICAgICAgICBcInR3LW1pbmltaXplLW9uXCI6IHdpbmRvd01pbmltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcclxuICAgICAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1trZXldLFxyXG4gICAgICAgIFwidHctbWF4aW1pemUtb2ZmXCI6ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50OiBKU1guRWxlbWVudCA9IChcclxuICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgIGRlZmF1bHRQb3NpdGlvbj17d2luZG93TG9jYXRpb25zW2tleV0gfHwgbG9jYXRpb259XHJcbiAgICAgICAgICBncmlkPXtbZ3JpZCBhcyBudW1iZXIsIGdyaWQgYXMgbnVtYmVyXX1cclxuICAgICAgICAgIHNjYWxlPXsxfVxyXG4gICAgICAgICAgaGFuZGxlPVwiLnR3LWRyYWdnYWJsZVwiXHJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxyXG4gICAgICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fVxyXG4gICAgICAgICAgb25TdG9wPXtoYW5kbGVEcmFnfVxyXG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfSBzdHlsZT17eyB6SW5kZXg6IHdpbmRvd1pJbmRleGVzW2tleV0gfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cclxuXHJcbiAgICAgICAgICAgIHtyZW5kZXJCb2R5KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XHJcbiAgICAgICAgdGFza2Jhckl0ZW1zSW4gPSBbLi4udGFza2Jhckl0ZW1zSW4sIGVsZW1lbnRdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUYXNrYmFySXRlbXNJbih0YXNrYmFySXRlbXNJbik7XHJcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXHJcbiAgICB3aW5kb3dTaXplcyxcclxuICAgIHdpbmRvd1pJbmRleGVzLFxyXG4gICAgd2luZG93TG9jYXRpb25zLFxyXG4gICAgd2luZG93TWF4aW1pemVzLFxyXG4gICAgd2luZG93TWluaW1pemVzLFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0dy13aW5kb3dzXCI+XHJcbiAgICAgIHt0YXNrYmFySXRlbXNPdXR9XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRhc2tiYXJcIj57dGFza2Jhckl0ZW1zSW59PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGFza2JhcjogdHJ1ZSxcclxuICBncmlkOiAxLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcclxuIl19