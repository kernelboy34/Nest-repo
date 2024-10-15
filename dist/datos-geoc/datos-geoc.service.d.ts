import { Model } from 'mongoose';
import { DatosGeoc } from './datos-geoc.module';
export declare class DatosGeocService {
    private datosGeocModel;
    constructor(datosGeocModel: Model<DatosGeoc>);
    create(datos: DatosGeoc): Promise<DatosGeoc>;
    findAll(): Promise<DatosGeoc[]>;
    findById(objectId: number): Promise<DatosGeoc>;
    update(objectId: number, datos: Partial<DatosGeoc>): Promise<DatosGeoc>;
    delete(objectId: number): Promise<DatosGeoc>;
}
