-- CreateTable
CREATE TABLE `bills` (
    `idbills` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_idsales` INTEGER NOT NULL,
    `total_price` DECIMAL(10, 2) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_bills_sales1_idx`(`sales_idsales`),
    PRIMARY KEY (`idbills`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `departments` (
    `iddepartments` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    PRIMARY KEY (`iddepartments`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `personal_data` (
    `idpersonal_data` INTEGER NOT NULL AUTO_INCREMENT,
    `user_iduser` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `lastname` VARCHAR(45) NOT NULL,
    `bank_account` VARCHAR(45) NOT NULL,
    `phone` VARCHAR(45) NULL,
    `address` VARCHAR(45) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_personal_data_user1_idx`(`user_iduser`),
    PRIMARY KEY (`idpersonal_data`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_sizes` (
    `idproduct_sizes` INTEGER NOT NULL AUTO_INCREMENT,
    `products_idproducts` INTEGER NOT NULL,
    `sizes_idsizes` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_product_sizes_products1_idx`(`products_idproducts`),
    INDEX `fk_product_sizes_sizes1_idx`(`sizes_idsizes`),
    PRIMARY KEY (`idproduct_sizes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `idproducts` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `imageUrl` VARCHAR(255) NULL,
    `unitPrice` DECIMAL(10, 2) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    PRIMARY KEY (`idproducts`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rols` (
    `idrols` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    PRIMARY KEY (`idrols`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale_products` (
    `idsale_products` INTEGER NOT NULL AUTO_INCREMENT,
    `sales_idsales` INTEGER NOT NULL,
    `products_idproducts` INTEGER NOT NULL,
    `quantity` VARCHAR(45) NOT NULL,
    `total_price` DECIMAL(10, 2) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_sale_products_products1_idx`(`products_idproducts`),
    INDEX `fk_sale_products_sales_idx`(`sales_idsales`),
    PRIMARY KEY (`idsale_products`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales` (
    `idsales` INTEGER NOT NULL AUTO_INCREMENT,
    `user_iduser` INTEGER NOT NULL,
    `date_sale` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` TINYINT NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_sales_user1_idx`(`user_iduser`),
    PRIMARY KEY (`idsales`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sizes` (
    `idsizes` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    PRIMARY KEY (`idsizes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks` (
    `idstocks` INTEGER NOT NULL AUTO_INCREMENT,
    `branches_idbranches` INTEGER NOT NULL,
    `products_idproducts` INTEGER NOT NULL,
    `quantity` INTEGER NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    INDEX `fk_stocks_branches1_idx`(`branches_idbranches`),
    INDEX `fk_stocks_products1_idx`(`products_idproducts`),
    PRIMARY KEY (`idstocks`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `iduser` INTEGER NOT NULL AUTO_INCREMENT,
    `rols_idrols` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `is_deleted` TINYINT NULL DEFAULT 0,

    UNIQUE INDEX `email_UNIQUE`(`email`),
    INDEX `fk_user_rols1_idx`(`rols_idrols`),
    PRIMARY KEY (`iduser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bills` ADD CONSTRAINT `fk_bills_sales1` FOREIGN KEY (`sales_idsales`) REFERENCES `sales`(`idsales`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `personal_data` ADD CONSTRAINT `fk_personal_data_user1` FOREIGN KEY (`user_iduser`) REFERENCES `user`(`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_sizes` ADD CONSTRAINT `fk_product_sizes_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products`(`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `product_sizes` ADD CONSTRAINT `fk_product_sizes_sizes1` FOREIGN KEY (`sizes_idsizes`) REFERENCES `sizes`(`idsizes`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sale_products` ADD CONSTRAINT `fk_sale_products_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products`(`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sale_products` ADD CONSTRAINT `fk_sale_products_sales` FOREIGN KEY (`sales_idsales`) REFERENCES `sales`(`idsales`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `sales` ADD CONSTRAINT `fk_sales_user1` FOREIGN KEY (`user_iduser`) REFERENCES `user`(`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `fk_stocks_branches1` FOREIGN KEY (`branches_idbranches`) REFERENCES `departments`(`iddepartments`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `fk_stocks_products1` FOREIGN KEY (`products_idproducts`) REFERENCES `products`(`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `fk_user_rols1` FOREIGN KEY (`rols_idrols`) REFERENCES `rols`(`idrols`) ON DELETE NO ACTION ON UPDATE NO ACTION;
