"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(function () {
      return _interopRequireWildcard(require('web-vitals'));
    }).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

var _default = reportWebVitals;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRXZWJWaXRhbHMudHMiXSwibmFtZXMiOlsicmVwb3J0V2ViVml0YWxzIiwib25QZXJmRW50cnkiLCJGdW5jdGlvbiIsInRoZW4iLCJnZXRDTFMiLCJnZXRGSUQiLCJnZXRGQ1AiLCJnZXRMQ1AiLCJnZXRUVEZCIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxXQUFELEVBQWlDO0FBQ3ZELE1BQUlBLFdBQVcsSUFBSUEsV0FBVyxZQUFZQyxRQUExQyxFQUFvRDtBQUNsRDtBQUFBLDZDQUFPLFlBQVA7QUFBQSxPQUFxQkMsSUFBckIsQ0FBMEIsZ0JBQWlEO0FBQUEsVUFBOUNDLE1BQThDLFFBQTlDQSxNQUE4QztBQUFBLFVBQXRDQyxNQUFzQyxRQUF0Q0EsTUFBc0M7QUFBQSxVQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsVUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFVBQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN6RUosTUFBQUEsTUFBTSxDQUFDSCxXQUFELENBQU47QUFDQUksTUFBQUEsTUFBTSxDQUFDSixXQUFELENBQU47QUFDQUssTUFBQUEsTUFBTSxDQUFDTCxXQUFELENBQU47QUFDQU0sTUFBQUEsTUFBTSxDQUFDTixXQUFELENBQU47QUFDQU8sTUFBQUEsT0FBTyxDQUFDUCxXQUFELENBQVA7QUFDRCxLQU5EO0FBT0Q7QUFDRixDQVZEOztlQVllRCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwb3J0SGFuZGxlciB9IGZyb20gJ3dlYi12aXRhbHMnO1xyXG5cclxuY29uc3QgcmVwb3J0V2ViVml0YWxzID0gKG9uUGVyZkVudHJ5PzogUmVwb3J0SGFuZGxlcikgPT4ge1xyXG4gIGlmIChvblBlcmZFbnRyeSAmJiBvblBlcmZFbnRyeSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICBpbXBvcnQoJ3dlYi12aXRhbHMnKS50aGVuKCh7IGdldENMUywgZ2V0RklELCBnZXRGQ1AsIGdldExDUCwgZ2V0VFRGQiB9KSA9PiB7XHJcbiAgICAgIGdldENMUyhvblBlcmZFbnRyeSk7ICBcclxuICAgICAgZ2V0RklEKG9uUGVyZkVudHJ5KTtcclxuICAgICAgZ2V0RkNQKG9uUGVyZkVudHJ5KTtcclxuICAgICAgZ2V0TENQKG9uUGVyZkVudHJ5KTtcclxuICAgICAgZ2V0VFRGQihvblBlcmZFbnRyeSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcG9ydFdlYlZpdGFscztcclxuIl19