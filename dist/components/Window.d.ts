/// <reference types="react" />
export interface Grid {
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface Grids {
    [key: string]: Grid;
}
export interface Bounds {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface Size {
    w: number;
    h: number;
}
export interface Sizes {
    [key: string]: Size;
}
export interface Props {
    id: string;
    children: JSX.Element;
    grids: Grids;
    title?: JSX.Element;
    bounds?: Bounds;
    minSize?: Size;
    maxSize?: Size;
    draggable?: boolean;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    startMinimized?: boolean;
}
declare const Window: {
    (props: Props): JSX.Element;
    defaultProps: Partial<Props>;
};
export default Window;
//# sourceMappingURL=Window.d.ts.map