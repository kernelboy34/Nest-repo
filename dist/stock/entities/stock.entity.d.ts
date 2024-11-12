import { Model } from "sequelize-typescript";
import { Department } from "src/department/entities/department.entity";
import { Product } from "src/product/entities/product.entity";
export declare class Stock extends Model {
    idstocks: number;
    branches_idbranches: number;
    products_idproducts: number;
    quantity: number;
    is_deleted: number;
    products: Product;
    departments: Department;
}
