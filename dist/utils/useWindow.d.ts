import { Grids, Bounds, Sizes } from "../components/index.d";
export declare const useWindow: (headerHeight: number, windowSizes: Sizes, gridsHeight: number, gridsWidth: number, gridsGap: number, bounds: Bounds | undefined, grids: Grids, id: string, breakpoint: string) => {
    size: {
        w: number;
        h: number;
    };
    location: {
        x: number;
        y: number;
    };
    limits: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    } | undefined;
};
//# sourceMappingURL=useWindow.d.ts.map