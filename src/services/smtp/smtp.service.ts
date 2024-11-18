// hice las configuraciones aca sergio
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { config } from 'src/config/config';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class SmtpService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.host, 
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    });
  }

  async sendMail(data: SendEmailDto) {
    const mailOptions = {
      from: 'vanpedrazas@gmail.com', 
      data
    };
    return this.transporter.sendMail(mailOptions);
  }
}
