import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(data: AuthDTO): Promise<{
        access_token: string;
    }>;
}
