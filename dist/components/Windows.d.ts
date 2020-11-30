/// <reference types="react" />
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
export interface Props {
    windows: JSX.Element[];
    taskbar: boolean;
    grid: number;
    gridsGap: number;
    gridsCount: number;
    styles: Styles;
}
declare const Windows: {
    (props: Props): JSX.Element;
    defaultProps: Partial<Props>;
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map