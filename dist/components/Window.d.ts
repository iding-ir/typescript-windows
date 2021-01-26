import React from "react";
import { Size, Grids, Minimizes, Bounds } from "./index.d";
export interface Props {
    id: string;
    children: React.ReactNode;
    grids: Grids;
    title?: JSX.Element;
    bounds?: Bounds;
    minSize?: Size;
    maxSize?: Size;
    draggable?: boolean;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    startMinimized?: Minimizes;
}
declare const Window: {
    (props: Props): JSX.Element;
    defaultProps: Partial<Props>;
};
export default Window;
//# sourceMappingURL=Window.d.ts.map