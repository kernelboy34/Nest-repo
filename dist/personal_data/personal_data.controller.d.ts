import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
export declare class PersonalDataController {
    private readonly personalDataService;
    constructor(personalDataService: PersonalDataService);
    create(data: CreatePersonalDatumDto): Promise<import("./entities/personal_datum.entity").PersonalDatum>;
    findAll(): Promise<import("./entities/personal_datum.entity").PersonalDatum[]>;
    findOne(id: number): Promise<import("./entities/personal_datum.entity").PersonalDatum>;
    update(id: number, updatePersonalDatumDto: UpdatePersonalDatumDto): Promise<{
        message: string;
        status: number;
        data: UpdatePersonalDatumDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
