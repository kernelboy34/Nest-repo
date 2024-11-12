import { User } from "../entity/user.entity";

export const usersProvider = [
    {
        provide: "USERS_REPOSITORY",
        useValue: User
    }
]