// hice las configuraciones aca sergio
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class SmtpService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 587,
      secure: false,
      auth: {
        user: "pruebasproyectos1234@gmail.com",
        pass: "okoj xvnc dcwr fpea",
      },
    });
  }

  async sendMail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'vanpedrazas@gmail.com', 
      to,
      subject,
      text,
    };
    return this.transporter.sendMail(mailOptions);
  }
}
