import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}
    async register(email: string, password: string, name: string, rols_idrols: number) {
        const hashedPassword = await bcrypt.hash(password, 10); 
        // solo es una prueba sergio lo vas a checar plis <3
        return this.userService.create({ email, password: hashedPassword, name, rols_idrols });
    }

    async signIn(email: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(email);
        if (!user || !(await bcrypt.compare(pass, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { sub: user.iduser, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}

