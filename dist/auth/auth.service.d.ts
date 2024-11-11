import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { AuthDTO } from "./dto/auth.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(data: AuthDTO): Promise<{
        access_token: string;
    }>;
}
