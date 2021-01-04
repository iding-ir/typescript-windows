import { Grids, Bounds, Sizes } from "../components/index.d";

export const useWindow = (
  headerHeight: number,
  windowSizes: Sizes,
  gridsHeight: number,
  gridsWidth: number,
  gridsGap: number,
  bounds: Bounds | undefined,
  grids: Grids,
  id: string,
  breakpoint: string
) => {
  const size = {
    w: gridsWidth * grids[breakpoint].w + gridsGap * (grids[breakpoint].w - 1),
    h: headerHeight
      ? gridsHeight * grids[breakpoint].h +
        gridsGap * (grids[breakpoint].h - 1) -
        headerHeight
      : 0,
  };

  const location = {
    x: gridsWidth * grids[breakpoint].x + gridsGap * (grids[breakpoint].x + 1),
    y: gridsHeight * grids[breakpoint].y + gridsGap * (grids[breakpoint].y + 1),
  };

  const limits = bounds && {
    left: gridsWidth * bounds.left + gridsGap * (bounds.left + 1),
    top: gridsHeight * bounds.top + gridsGap * (bounds.top + 1),
    right:
      gridsWidth * bounds.right +
      gridsGap * bounds.right -
      (windowSizes[id]?.w || size.w),
    bottom:
      gridsHeight * bounds.bottom +
      gridsGap * bounds.bottom -
      (windowSizes[id]?.h + headerHeight || size.h + headerHeight),
  };

  return { size, location, limits };
};
