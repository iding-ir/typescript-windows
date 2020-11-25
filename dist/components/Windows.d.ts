/// <reference types="react" />
export interface Window {
    key: string;
    title?: string;
    component: JSX.Element;
    size: {
        w: number;
        h: number;
    };
    location: {
        x: number;
        y: number;
    };
    draggable?: boolean;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
}
interface WindowsProps {
    windows: Window[];
    taskbar?: boolean;
    grid?: number;
}
declare const Windows: {
    (props: WindowsProps): JSX.Element;
    defaultProps: {
        taskbar: boolean;
        grid: number;
    };
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map