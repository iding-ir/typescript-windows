import { Bounds, Size, Sizes } from "../components/Window";

export const useLimits = (
  headerHeight: number,
  windowSizes: Sizes,
  gridsHeight: number,
  gridsWidth: number,
  gridsGap: number,
  bounds: Bounds | undefined,
  size: Size,
  id: string
) => {
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

  return { limits };
};
