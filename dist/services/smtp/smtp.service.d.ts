export declare class SmtpService {
    private transporter;
    constructor();
    sendMail(to: string, subject: string, text: string): Promise<any>;
}
