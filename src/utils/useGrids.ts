export const useGrids = (gridsCount: number, gridsGap: number) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const gridsWidth = (windowWidth - (gridsCount + 1) * gridsGap) / gridsCount;
  const gridsHeight = (windowHeight - (gridsCount + 1) * gridsGap) / gridsCount;

  return { gridsWidth, gridsHeight };
};
