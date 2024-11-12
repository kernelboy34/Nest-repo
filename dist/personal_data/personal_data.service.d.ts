import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { PersonalDatum } from './entities/personal_datum.entity';
export declare class PersonalDataService {
    private personaldataRepository;
    constructor(personaldataRepository: typeof PersonalDatum);
    create(data: CreatePersonalDatumDto): Promise<PersonalDatum>;
    findAll(): Promise<PersonalDatum[]>;
    findOne(id: number): Promise<PersonalDatum>;
    update(id: number, data: UpdatePersonalDatumDto): Promise<{
        message: string;
        status: number;
        data: UpdatePersonalDatumDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
