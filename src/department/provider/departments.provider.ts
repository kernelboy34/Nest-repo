import { Department } from "../entities/department.entity";

export const departmentsProvider = [
    {
        provide: "DEPARTMENTS_REPOSITORY",
        useValue: Department
    }
]