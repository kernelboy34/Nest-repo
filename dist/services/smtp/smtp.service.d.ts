import { SendEmailDto } from './dto/send-email.dto';
export declare class SmtpService {
    private transporter;
    constructor();
    sendMail(data: SendEmailDto): Promise<any>;
}
