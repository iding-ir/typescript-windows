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

export interface Bounds {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export type BreakPoint = number;

export interface BreakPoints {
  [key: string]: BreakPoint;
}

export interface Styles {
  header: {
    size: string;
    color: string;
    background: string;
  };
  body: {
    color: string;
    background: string;
  };
  icons: {
    maximize: string;
    minimize: string;
    resize: string;
  };
  borderRadius: string;
  boxShadow: string;
}
