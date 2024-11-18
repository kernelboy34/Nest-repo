import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";
import { Forgot_TokenDto } from "./dto/token_forgot.dto";
import { ResetTokenDto } from "./dto/token_reset.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(data: AuthDTO): Promise<{
        access_token: string;
    }>;
    forgotPassword(email: Forgot_TokenDto): Promise<{
        message: string;
        resetToken: string;
    }>;
    resetPassword(data: ResetTokenDto): Promise<{
        message: string;
    }>;
}
