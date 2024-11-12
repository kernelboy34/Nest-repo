import { PersonalDatum } from "../entities/personal_datum.entity";

export const personaldatasProvider = [
    {
        provide: "PERSONAL_DATAS_REPOSITORY",
        useValue: PersonalDatum
    }
]