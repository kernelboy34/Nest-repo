import { Schema } from 'mongoose';

export const DatosGeocSchema = new Schema({
  OBJECTID: { type: Number, required: true },
  geometry: {
    type: {
      type: String, // "Polygon" o "Point"
      required: true,
    },
    coordinates: {
      type: [[Number]], // Arreglo de arreglos de números
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
