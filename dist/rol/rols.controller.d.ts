import { RolsService } from "./rols.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
import { Rol } from "./entity/rol.entity";
export declare class RolsController {
    private readonly rolsService;
    constructor(rolsService: RolsService);
    create(data: CreateRolsDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    updateOne(data: UpdateRolsDto, id: number): Promise<{
        message: string;
        status: number;
        data: UpdateRolsDto;
    }>;
    deleteOne(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
