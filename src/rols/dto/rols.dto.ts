import { rols } from "@prisma/client";

export type RolsCreateDto = Omit<rols, 'idrols' | 'is_deleted'>