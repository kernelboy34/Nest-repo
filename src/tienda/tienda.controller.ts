import { Controller, Get } from '@nestjs/common';

@Controller('tienda')
export class TiendaController {
    @Get('/productos')
     get_ropa(){
      //buscamos en la base 
      return 'ropa'
    }

}
