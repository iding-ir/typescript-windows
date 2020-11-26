import { useWindowSize } from "@react-hook/window-size";

export const useGrids = (gridsCount: number, gridsGap: number) => {
  const [windowWidth, windowHeight] = useWindowSize();

  const gridsWidth = (windowWidth - (gridsCount + 1) * gridsGap) / gridsCount;
  const gridsHeight = (windowHeight - (gridsCount + 1) * gridsGap) / gridsCount;

  return { gridsWidth, gridsHeight };
};
