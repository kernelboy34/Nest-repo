// aca el dto pa que los cheques
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SendEmailDto {
  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  to: string;

  @IsString()
  @MinLength(3, { message: 'El asunto debe tener al menos 3 caracteres.' })
  subject: string;

  @IsString()
  @MinLength(10, { message: 'El contenido del correo debe tener al menos 10 caracteres.' })
  text: string;
}
