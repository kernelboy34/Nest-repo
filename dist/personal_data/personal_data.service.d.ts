import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PersonalDataService {
    private db;
    constructor(db: PrismaService);
    create(data: CreatePersonalDatumDto): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
    findAll(): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
    update(id: number, data: UpdatePersonalDatumDto): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
}
