import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, NotFoundException, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('product')
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

    
    @UsePipes(new ValidationPipe({transform: true , whitelist: true, transformOptions: { enableImplicitConversion: true },}))
    @Post('create')
    create(@UploadedFile() file: Express.Multer.File, @Body() createProductDto: CreateProductDto) {
        if (file) {
            createProductDto.imageUrl = file.path; // Guarda la ruta del archivo
        }
        return this.productService.create(createProductDto);
    }

    @UsePipes(new ValidationPipe({transform: true , whitelist: true, transformOptions: { enableImplicitConversion: true },}))
    @Get('findAll')
    findAll() {
        return this.productService.findAll();
    }

    @UsePipes(new ValidationPipe({transform: true }))
    @Get('findOne/:id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }

    @Get('fetchByIdWithImage/:id')
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
    @Patch('updateOne/:id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }

    @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
    @Delete('deleteOne/:id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }
}