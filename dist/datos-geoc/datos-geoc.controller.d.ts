import { DatosGeocService } from './datos-geoc.service';
import { DatosGeoc } from './datos-geoc.module';
export declare class DatosGeocController {
    private readonly datosGeocService;
    constructor(datosGeocService: DatosGeocService);
    create(datosGeoc: DatosGeoc): Promise<DatosGeoc>;
    findAll(): Promise<DatosGeoc[]>;
    findOne(objectId: number): Promise<DatosGeoc>;
    update(objectId: number, datosGeoc: Partial<DatosGeoc>): Promise<DatosGeoc>;
    delete(objectId: number): Promise<DatosGeoc>;
}
