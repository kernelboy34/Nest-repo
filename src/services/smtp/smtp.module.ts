// src/email/email.module.ts
import { Module } from '@nestjs/common';
import { EmailController } from './smtp.controller';
import { SmtpService } from './smtp.service';
import { UserController } from 'src/user/user.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [EmailController],
  providers: [SmtpService],
  imports:[UserModule]
})
export class EmailModule {}
