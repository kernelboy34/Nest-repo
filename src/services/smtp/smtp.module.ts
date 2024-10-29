// src/email/email.module.ts
import { Module } from '@nestjs/common';
import { EmailController } from './smtp.controller';
import { SmtpService } from './smtp.service';

@Module({
  controllers: [EmailController],
  providers: [SmtpService],
})
export class EmailModule {}
