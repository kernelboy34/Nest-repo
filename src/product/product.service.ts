import { ConflictException, Inject, Injectable, NotFoundException, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op} from 'sequelize';
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCTS_REPOSITORY")
    private productRepository: typeof Product
  ){}

  async create(data: CreateProductDto): Promise<Product>{
    const sameName = await this.productRepository.findOne({
      where:{
        name:{
          [Op.like]: data.name
        }
      }
    })
    if(sameName){
      throw new ConflictException("Este Producto ya existe")
    }

    
    return await this.productRepository.create({
      name: data.name,
      imageUrl: data.imageUrl,
      unitPrice: data.unitPrice
    })
  }

  async findAll(): Promise<Product[]>{
    return await this.productRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }
  
  async findOne(id: number):Promise<Product>{
    const productFound = await this.productRepository.findOne({
      where:{
        idproducts:{
          [Op.eq]:id
        },
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
    if(!productFound){
      throw new NotFoundException("Producto no encontrado o fue eliminado")
    }
    return productFound
  }

  async paginateProducts(take: number, skip:number){
    return await this.productRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        },
      },
      offset: skip,
      limit: take
    })
  }

  async update(id: number, data: UpdateProductDto, file?: Express.Multer.File) {
    // Buscar el producto actual para obtener la ruta de la imagen anterior
    const existingProduct = await this.productRepository.findByPk(id);
    if (!existingProduct) {
      throw new NotFoundException("Producto no encontrado");
    }
  
    // Si hay un archivo nuevo, elimina la imagen anterior
    if (file) {
      if (existingProduct.imageUrl) {
        const oldImagePath = path.join(__dirname, '..', '..', existingProduct.imageUrl);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath); // Eliminar la imagen anterior
        }
      }
      // Actualizar `imageUrl` con la nueva ruta
      data.imageUrl = `/uploads/${file.filename}`;
    }
  
    // Actualizar el producto con los datos del DTO y la nueva imagen
    const [productUpdate] = await this.productRepository.update(data, {
      where: {
        idproducts: {
          [Op.eq]: id,
        },
      },
    });
  
    if (productUpdate === 0) {
      throw new NotFoundException("Producto a actualizar no encontrado");
    }
  
    return { message: "Producto actualizado correctamente", status: 200, data };
  }

  async remove(id: number) {
    const [productDelete] = await this.productRepository.update(
      {is_deleted: 1},
      {
        where:{
          idproducts:{
            [Op.eq]:id
          },
          is_deleted:{
            [Op.ne]: 1
          }
      }
    })
    if(productDelete === 0){
      throw new NotFoundException("Producto no encontrado o fue eliminado")
    }
    return {message: "Producto eliminado correctamente", status: 200}
  }
}
