
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { SmtpService } from './smtp.service';
import { SendEmailDto } from './dto/send-email.dto';
import { UserService } from 'src/user/user.service';

@Controller('email')
export class EmailController {
  constructor(private readonly smtpService: SmtpService, private readonly userService: UserService) {}

  @Post('send')
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    const isValidDomain = await this.userService.findOne(sendEmailDto.to)
    if (!isValidDomain) {
      throw new HttpException('El dominio del correo no está permitido.', HttpStatus.FORBIDDEN);
    }
     //no estoy mostrando datos sencibles en el error pa que no se muestre nada
    try {
      await this.smtpService.sendMail(sendEmailDto.to, sendEmailDto.subject, sendEmailDto.text);
      return { message: 'Correo enviado exitosamente' };
    } catch (error) {
      console.log(error)
      throw new HttpException(
        'Hubo un error al enviar el correo. Inténtalo más tarde.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
