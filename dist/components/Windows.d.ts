/// <reference types="react" />
import { Styles, BreakPoints } from "./index.d";
export interface Props {
    children: JSX.Element[];
    taskbar: boolean;
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