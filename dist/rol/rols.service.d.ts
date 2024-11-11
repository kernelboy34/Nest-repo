import { PrismaService } from "src/prisma/prisma.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { rols } from "@prisma/client";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
export declare class RolsService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateRolsDto): Promise<CreateRolsDto>;
    findOne(id: number): Promise<rols>;
    findAll(): Promise<rols[]>;
    updateOne(data: UpdateRolsDto, id: number): Promise<UpdateRolsDto>;
    deleteOne(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        idrols: number;
    }>;
}
