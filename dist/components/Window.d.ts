/// <reference types="react" />
export interface Props {
    id: string;
    title: JSX.Element;
    content: JSX.Element;
    grids: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    bounds?: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    };
    minSize?: {
        w: number;
        h: number;
    };
    maxSize?: {
        w: number;
        h: number;
    };
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