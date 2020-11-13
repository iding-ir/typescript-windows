/// <reference types="react" />
export interface Window {
    key: string;
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
    collapsable?: boolean;
    maximizable?: boolean;
    title?: string;
}
interface WindowsProps {
    windows: Window[];
    grid?: number;
}
declare const Windows: {
    (props: WindowsProps): JSX.Element;
    defaultProps: {
        grid: number;
    };
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map