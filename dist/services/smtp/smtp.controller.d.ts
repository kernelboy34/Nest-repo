import { SmtpService } from './smtp.service';
import { SendEmailDto } from './dto/send-email.dto';
import { UserService } from 'src/user/user.service';
export declare class EmailController {
    private readonly smtpService;
    private readonly userService;
    constructor(smtpService: SmtpService, userService: UserService);
    sendEmail(sendEmailDto: SendEmailDto): Promise<{
        message: string;
    }>;
}
