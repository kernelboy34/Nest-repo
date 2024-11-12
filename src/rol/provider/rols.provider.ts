import { Rol } from "../entity/rol.entity";

export const rolProvider = [
    {
        provide: "ROLS_REPOSITORY",
        useValue: Rol
    }
]