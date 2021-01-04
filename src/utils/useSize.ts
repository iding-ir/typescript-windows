import { Grids } from "../components/Window";

export const useSize = (
  headerHeight: number,
  gridsHeight: number,
  gridsWidth: number,
  gridsGap: number,
  grids: Grids,
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

  return { size };
};
