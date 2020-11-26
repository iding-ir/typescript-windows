/// <reference types="react" />
export interface Window {
    key: string;
    title?: string;
    component: JSX.Element;
    grids: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
    draggable?: boolean;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    startMinimized?: boolean;
}
interface WindowsProps {
    windows: Window[];
    taskbar: boolean;
    grid: number;
    gridsGap: number;
    gridsCount: number;
}
declare const Windows: {
    (props: WindowsProps): JSX.Element;
    defaultProps: {
        taskbar: boolean;
        grid: number;
        gridsGap: number;
        gridsCount: number;
    };
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map