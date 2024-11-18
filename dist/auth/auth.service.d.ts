import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { AuthDTO } from "./dto/auth.dto";
import { ResetToken } from "./entity/token.entity";
import { Forgot_TokenDto } from "./dto/token_forgot.dto";
import { ResetTokenDto } from "./dto/token_reset.dto";
export declare class AuthService {
    private userService;
    private jwtService;
    private tokenRepository;
    constructor(userService: UserService, jwtService: JwtService, tokenRepository: typeof ResetToken);
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
    removeExpiredTokens(): Promise<void>;
}
