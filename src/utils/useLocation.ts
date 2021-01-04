import { Grids } from "../components/Window";

export const useLocation = (
  gridsHeight: number,
  gridsWidth: number,
  gridsGap: number,
  grids: Grids,
  breakpoint: string
) => {
  const location = {
    x: gridsWidth * grids[breakpoint].x + gridsGap * (grids[breakpoint].x + 1),
    y: gridsHeight * grids[breakpoint].y + gridsGap * (grids[breakpoint].y + 1),
  };

  return { location };
};
