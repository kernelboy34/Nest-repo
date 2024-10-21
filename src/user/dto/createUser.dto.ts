import { user } from "@prisma/client";


export type CreateUserDto = Omit<user, 'iduser' | 'is_deleted'>