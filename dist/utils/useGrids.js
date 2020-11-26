"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGrids = void 0;

var _useWindowSize3 = require("./useWindowSize");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGrids = function useGrids(gridsCount, gridsGap) {
  var _useWindowSize = (0, _useWindowSize3.useWindowSize)(),
      _useWindowSize2 = _slicedToArray(_useWindowSize, 2),
      windowWidth = _useWindowSize2[0],
      windowHeight = _useWindowSize2[1];

  var gridsWidth = (windowWidth - (gridsCount + 1) * gridsGap) / gridsCount;
  var gridsHeight = (windowHeight - (gridsCount + 1) * gridsGap) / gridsCount;
  return {
    gridsWidth: gridsWidth,
    gridsHeight: gridsHeight
  };
};

exports.useGrids = useGrids;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91c2VHcmlkcy50cyJdLCJuYW1lcyI6WyJ1c2VHcmlkcyIsImdyaWRzQ291bnQiLCJncmlkc0dhcCIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiZ3JpZHNXaWR0aCIsImdyaWRzSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsVUFBRCxFQUFxQkMsUUFBckIsRUFBMEM7QUFBQSx1QkFDNUIsb0NBRDRCO0FBQUE7QUFBQSxNQUN6REMsV0FEeUQ7QUFBQSxNQUM1Q0MsWUFENEM7O0FBR2hFLE1BQU1DLFVBQVUsR0FBRyxDQUFDRixXQUFXLEdBQUcsQ0FBQ0YsVUFBVSxHQUFHLENBQWQsSUFBbUJDLFFBQWxDLElBQThDRCxVQUFqRTtBQUNBLE1BQU1LLFdBQVcsR0FBRyxDQUFDRixZQUFZLEdBQUcsQ0FBQ0gsVUFBVSxHQUFHLENBQWQsSUFBbUJDLFFBQW5DLElBQStDRCxVQUFuRTtBQUVBLFNBQU87QUFBRUksSUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNDLElBQUFBLFdBQVcsRUFBWEE7QUFBZCxHQUFQO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tIFwiLi91c2VXaW5kb3dTaXplXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR3JpZHMgPSAoZ3JpZHNDb3VudDogbnVtYmVyLCBncmlkc0dhcDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgW3dpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHRdID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICBjb25zdCBncmlkc1dpZHRoID0gKHdpbmRvd1dpZHRoIC0gKGdyaWRzQ291bnQgKyAxKSAqIGdyaWRzR2FwKSAvIGdyaWRzQ291bnQ7XHJcbiAgY29uc3QgZ3JpZHNIZWlnaHQgPSAod2luZG93SGVpZ2h0IC0gKGdyaWRzQ291bnQgKyAxKSAqIGdyaWRzR2FwKSAvIGdyaWRzQ291bnQ7XHJcblxyXG4gIHJldHVybiB7IGdyaWRzV2lkdGgsIGdyaWRzSGVpZ2h0IH07XHJcbn07XHJcbiJdfQ==