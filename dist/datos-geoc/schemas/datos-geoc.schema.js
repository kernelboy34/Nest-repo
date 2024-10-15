"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosGeocSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DatosGeocSchema = new mongoose_1.Schema({
    OBJECTID: { type: Number, required: true },
    geometry: {
        type: {
            type: String,
            required: true,
        },
        coordinates: {
            type: [[Number]],
            required: true,
        },
    },
    properties: {
        AREA: { type: Number, required: true },
        PERIMETER: { type: Number, required: true },
        PR_: { type: Number, required: true },
        PR_ID: { type: Number, required: true },
        RINGS_OK: { type: Number, required: true },
        RINGS_NOK: { type: Number, required: true },
        WRSPR: { type: Number, required: true },
        PR: { type: Number, required: true },
        PATH: { type: Number, required: true },
        ROW: { type: Number, required: true },
        MODE: { type: String, required: true },
        SEQUENCE: { type: Number, required: true },
        ACQDayL7: { type: String, required: true },
        ACQDayL8: { type: String, required: true },
    },
});
//# sourceMappingURL=datos-geoc.schema.js.map