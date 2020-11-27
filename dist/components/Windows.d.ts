/// <reference types="react" />
export interface Window {
    key: string;
    title: JSX.Element;
    component: JSX.Element;
    grids: {
        x: number;
        y: number;
        w: number;
        h: number;
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
    borderRadius: string;
    headerSize: string;
    headerColor: string;
    headerBackground: string;
    bodyColor: string;
    bodyBackground: string;
    boxShadow: string;
    IconMaximize: string;
    IconMinimize: string;
    IconResize: string;
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
            borderRadius: string;
            headerSize: string;
            headerColor: string;
            headerBackground: string;
            bodyColor: string;
            bodyBackground: string;
            boxShadow: string;
            IconMaximize: string;
            IconMinimize: string;
            IconResize: string;
        };
    };
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map