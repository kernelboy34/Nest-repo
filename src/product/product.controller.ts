import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, NotFoundException, Res, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { Response } from 'express';
import * as fs from 'fs';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('product')
@ApiTags("Productos")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', // directorio donde se guardarán las imágenes
            filename: (req, file, cb) => {
                const fileName = `${uuidv4()}${path.extname(file.originalname)}`; // nombre único
                try{cb(null, fileName)}
                catch(error){
                    console.log(error);
                }
            },
        }),
    }))
    @UseGuards(RolesGuard)
    @Post('create')
    @ApiOperation({summary: "Crear un nuevo producto"})
    @Roles('Administrador')
    create(@UploadedFile() file: Express.Multer.File, @Body() createProductDto: CreateProductDto) {
        if (file) {
            createProductDto.imageUrl = file.path; // Guarda la ruta del archivo
        }
        return this.productService.create(createProductDto);
    }

    @UsePipes(new ValidationPipe({transform: true , whitelist: true, transformOptions: { enableImplicitConversion: true },}))
    @UseGuards(RolesGuard)
    @Get('findAll')
    @ApiOperation({summary: "Listar un nuevo producto"})
    @Roles('Administrador', 'Usuario')
    findAll() {
        return this.productService.findAll();
    }

    @UsePipes(new ValidationPipe({transform: true }))
    @UseGuards(RolesGuard)
    @Get('findOne/:id')
    @ApiOperation({summary: "Listar un producto segun el id"})
    @Roles('Administrador', 'Usuario')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    @Get('paginate/:tomar/:saltar')
    @ApiOperation({summary: "Paginar productos"})
    paginateProduct(@Param('tomar') take:number, @Param('saltar') skip: number){
        return this.productService.paginateProducts(take, skip)
    }

    @UseGuards(RolesGuard)
    @Get('fetchByIdWithImage/:id')
    @Roles('Administrador')
    async fetchByIdWithImage(@Param('id') id: string, @Res() res: Response) {
        const product = await this.productService.findOne(+id);
        
        if (!product) {
            throw new NotFoundException("Producto no encontrado");
        }

        // Define la ruta de la imagen
        const imagePath = path.join(__dirname,'..','..', product.imageUrl);
        console.log(imagePath) // Ajusta según tu ruta de imagen
        if (!fs.existsSync(imagePath)) {
            return res.status(404).send('Imagen no encontrada');
        }

        // Leer el archivo de imagen
        const image = fs.readFileSync(imagePath);

        // Enviar los datos del producto y la imagen como respuesta
        res.json({
            product,
            image: `data:image/jpeg;base64,${image.toString('base64')}`, // Ajusta el tipo MIME según tu imagen
        });
    }

    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    @UseGuards(RolesGuard)
    @Patch('updateOne/:id')
    @ApiOperation({summary: "Actualizar un producto segun el id"})
    @Roles('Administrador')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    @UseGuards(RolesGuard)
    @Delete('deleteOne/:id')
    @ApiOperation({summary: "Eliminar un producto segun el id"})
    @Roles('Administrador')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }

}