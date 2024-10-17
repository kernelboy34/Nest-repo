import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('tienda')
export class TiendaController {
    @Get('/productos')
     get_ropa(){
      //buscamos en la base 
      return 'ropa'
    }

}
