import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
export declare class PersonalDataController {
    private readonly personalDataService;
    constructor(personalDataService: PersonalDataService);
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
    findOne(id: string): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
    update(id: string, updatePersonalDatumDto: UpdatePersonalDatumDto): Promise<{
        name: string;
        is_deleted: number | null;
        address: string | null;
        user_iduser: number;
        lastname: string;
        bank_account: string;
        phone: string | null;
        idpersonal_data: number;
    }>;
    remove(id: string): Promise<{
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
