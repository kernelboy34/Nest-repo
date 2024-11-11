import { RolsService } from "./rols.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
export declare class RolsController {
    private readonly rolsService;
    constructor(rolsService: RolsService);
    create(data: CreateRolsDto): Promise<CreateRolsDto>;
    findAll(): Promise<{
        name: string;
        is_deleted: number | null;
        idrols: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        idrols: number;
    }>;
    updateOne(data: UpdateRolsDto, id: number): Promise<UpdateRolsDto>;
    deleteOne(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        idrols: number;
    }>;
}
