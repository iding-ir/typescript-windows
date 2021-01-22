export interface Grid {
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface Grids {
  [key: string]: Grid;
}

export interface Size {
  w: number;
  h: number;
}

export interface Sizes {
  [key: string]: Size;
}

export interface Bound {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface Bounds {
  [key: string]: Bound;
}

export type BreakPoint = number;

export interface BreakPoints {
  [key: string]: BreakPoint;
}

export interface Styles {
  headerSize: string;
  headerColor: string;
  headerBackgroundColor: string;
  bodyColor: string;
  bodyBackgroundColor: string;
  iconMaximize: string;
  iconMinimize: string;
  iconResize: string;
  backgroundColor: string;
  borderRadius: string;
  boxShadow: string;
}

export type TaskbarLocation = "top" | "left" | "right" | "bottom";
