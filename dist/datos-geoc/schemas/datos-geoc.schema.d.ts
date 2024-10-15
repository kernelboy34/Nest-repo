import { Schema } from 'mongoose';
export declare const DatosGeocSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    OBJECTID: number;
    geometry?: {
        type?: string;
        required?: unknown;
    };
    properties?: {
        AREA: number;
        PERIMETER: number;
        PR_: number;
        PR_ID: number;
        RINGS_OK: number;
        RINGS_NOK: number;
        WRSPR: number;
        PR: number;
        PATH: number;
        ROW: number;
        MODE: string;
        SEQUENCE: number;
        ACQDayL7: string;
        ACQDayL8: string;
    };
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    OBJECTID: number;
    geometry?: {
        type?: string;
        required?: unknown;
    };
    properties?: {
        AREA: number;
        PERIMETER: number;
        PR_: number;
        PR_ID: number;
        RINGS_OK: number;
        RINGS_NOK: number;
        WRSPR: number;
        PR: number;
        PATH: number;
        ROW: number;
        MODE: string;
        SEQUENCE: number;
        ACQDayL7: string;
        ACQDayL8: string;
    };
}>> & import("mongoose").FlatRecord<{
    OBJECTID: number;
    geometry?: {
        type?: string;
        required?: unknown;
    };
    properties?: {
        AREA: number;
        PERIMETER: number;
        PR_: number;
        PR_ID: number;
        RINGS_OK: number;
        RINGS_NOK: number;
        WRSPR: number;
        PR: number;
        PATH: number;
        ROW: number;
        MODE: string;
        SEQUENCE: number;
        ACQDayL7: string;
        ACQDayL8: string;
    };
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
