"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLimits = void 0;

var useLimits = function useLimits(headerHeight, windowSizes, gridsHeight, gridsWidth, gridsGap, bounds, size, id) {
  var _windowSizes$id, _windowSizes$id2;

  var limits = bounds && {
    left: gridsWidth * bounds.left + gridsGap * (bounds.left + 1),
    top: gridsHeight * bounds.top + gridsGap * (bounds.top + 1),
    right: gridsWidth * bounds.right + gridsGap * bounds.right - (((_windowSizes$id = windowSizes[id]) === null || _windowSizes$id === void 0 ? void 0 : _windowSizes$id.w) || size.w),
    bottom: gridsHeight * bounds.bottom + gridsGap * bounds.bottom - (((_windowSizes$id2 = windowSizes[id]) === null || _windowSizes$id2 === void 0 ? void 0 : _windowSizes$id2.h) + headerHeight || size.h + headerHeight)
  };
  return {
    limits: limits
  };
};

exports.useLimits = useLimits;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy91c2VMaW1pdHMudHMiXSwibmFtZXMiOlsidXNlTGltaXRzIiwiaGVhZGVySGVpZ2h0Iiwid2luZG93U2l6ZXMiLCJncmlkc0hlaWdodCIsImdyaWRzV2lkdGgiLCJncmlkc0dhcCIsImJvdW5kcyIsInNpemUiLCJpZCIsImxpbWl0cyIsImxlZnQiLCJ0b3AiLCJyaWdodCIsInciLCJib3R0b20iLCJoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FDdkJDLFlBRHVCLEVBRXZCQyxXQUZ1QixFQUd2QkMsV0FIdUIsRUFJdkJDLFVBSnVCLEVBS3ZCQyxRQUx1QixFQU12QkMsTUFOdUIsRUFPdkJDLElBUHVCLEVBUXZCQyxFQVJ1QixFQVNwQjtBQUFBOztBQUNILE1BQU1DLE1BQU0sR0FBR0gsTUFBTSxJQUFJO0FBQ3ZCSSxJQUFBQSxJQUFJLEVBQUVOLFVBQVUsR0FBR0UsTUFBTSxDQUFDSSxJQUFwQixHQUEyQkwsUUFBUSxJQUFJQyxNQUFNLENBQUNJLElBQVAsR0FBYyxDQUFsQixDQURsQjtBQUV2QkMsSUFBQUEsR0FBRyxFQUFFUixXQUFXLEdBQUdHLE1BQU0sQ0FBQ0ssR0FBckIsR0FBMkJOLFFBQVEsSUFBSUMsTUFBTSxDQUFDSyxHQUFQLEdBQWEsQ0FBakIsQ0FGakI7QUFHdkJDLElBQUFBLEtBQUssRUFDSFIsVUFBVSxHQUFHRSxNQUFNLENBQUNNLEtBQXBCLEdBQ0FQLFFBQVEsR0FBR0MsTUFBTSxDQUFDTSxLQURsQixJQUVDLG9CQUFBVixXQUFXLENBQUNNLEVBQUQsQ0FBWCxvRUFBaUJLLENBQWpCLEtBQXNCTixJQUFJLENBQUNNLENBRjVCLENBSnFCO0FBT3ZCQyxJQUFBQSxNQUFNLEVBQ0pYLFdBQVcsR0FBR0csTUFBTSxDQUFDUSxNQUFyQixHQUNBVCxRQUFRLEdBQUdDLE1BQU0sQ0FBQ1EsTUFEbEIsSUFFQyxxQkFBQVosV0FBVyxDQUFDTSxFQUFELENBQVgsc0VBQWlCTyxDQUFqQixJQUFxQmQsWUFBckIsSUFBcUNNLElBQUksQ0FBQ1EsQ0FBTCxHQUFTZCxZQUYvQztBQVJxQixHQUF6QjtBQWFBLFNBQU87QUFBRVEsSUFBQUEsTUFBTSxFQUFOQTtBQUFGLEdBQVA7QUFDRCxDQXhCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdW5kcywgU2l6ZSwgU2l6ZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XaW5kb3dcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMaW1pdHMgPSAoXHJcbiAgaGVhZGVySGVpZ2h0OiBudW1iZXIsXHJcbiAgd2luZG93U2l6ZXM6IFNpemVzLFxyXG4gIGdyaWRzSGVpZ2h0OiBudW1iZXIsXHJcbiAgZ3JpZHNXaWR0aDogbnVtYmVyLFxyXG4gIGdyaWRzR2FwOiBudW1iZXIsXHJcbiAgYm91bmRzOiBCb3VuZHMgfCB1bmRlZmluZWQsXHJcbiAgc2l6ZTogU2l6ZSxcclxuICBpZDogc3RyaW5nXHJcbikgPT4ge1xyXG4gIGNvbnN0IGxpbWl0cyA9IGJvdW5kcyAmJiB7XHJcbiAgICBsZWZ0OiBncmlkc1dpZHRoICogYm91bmRzLmxlZnQgKyBncmlkc0dhcCAqIChib3VuZHMubGVmdCArIDEpLFxyXG4gICAgdG9wOiBncmlkc0hlaWdodCAqIGJvdW5kcy50b3AgKyBncmlkc0dhcCAqIChib3VuZHMudG9wICsgMSksXHJcbiAgICByaWdodDpcclxuICAgICAgZ3JpZHNXaWR0aCAqIGJvdW5kcy5yaWdodCArXHJcbiAgICAgIGdyaWRzR2FwICogYm91bmRzLnJpZ2h0IC1cclxuICAgICAgKHdpbmRvd1NpemVzW2lkXT8udyB8fCBzaXplLncpLFxyXG4gICAgYm90dG9tOlxyXG4gICAgICBncmlkc0hlaWdodCAqIGJvdW5kcy5ib3R0b20gK1xyXG4gICAgICBncmlkc0dhcCAqIGJvdW5kcy5ib3R0b20gLVxyXG4gICAgICAod2luZG93U2l6ZXNbaWRdPy5oICsgaGVhZGVySGVpZ2h0IHx8IHNpemUuaCArIGhlYWRlckhlaWdodCksXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgbGltaXRzIH07XHJcbn07XHJcbiJdfQ==