/// <reference types="react" />
import { Styles, BreakPoints, TaskbarLocation } from "./index.d";
export interface Props {
    id: string;
    background: JSX.Element | null;
    children: JSX.Element[];
    taskbar: boolean;
    taskbarLocation: TaskbarLocation;
    step: number;
    breakPoints: BreakPoints;
    gridsGap: number;
    gridsCount: number;
    styles?: Partial<Styles>;
}
declare const Windows: {
    (props: Props): JSX.Element;
    defaultProps: Partial<Props>;
};
export default Windows;
//# sourceMappingURL=Windows.d.ts.map