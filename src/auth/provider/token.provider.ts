import { ResetToken } from "../entity/token.entity";

export const tokenProvider = [
    {
        provide: "TOKEN_REPOSITORY",
        useValue: ResetToken
    }
]