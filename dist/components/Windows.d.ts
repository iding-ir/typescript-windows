/// <reference types="react" />
export interface Window {
    key: string;
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
export interface WindowsProps {
    windows: Window[];
    taskbar: boolean;
    grid: number;
    gridsGap: number;
    gridsCount: number;
    styles: Styles;
}
declare const Windows: {
    (props: WindowsProps): JSX.Element;
    defaultProps: {
        taskbar: boolean;
        grid: number;
        gridsGap: number;
        gridsCount: number;
        styles: {
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
        };
    };
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map