const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale_products', {
    idsale_products: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sales_idsales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sales',
        key: 'idsales'
      }
    },
    products_idproducts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'idproducts'
      }
    },
    quantity: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    total_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sale_products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idsale_products" },
        ]
      },
      {
        name: "fk_sale_products_sales_idx",
        using: "BTREE",
        fields: [
          { name: "sales_idsales" },
        ]
      },
      {
        name: "fk_sale_products_products1_idx",
        using: "BTREE",
        fields: [
          { name: "products_idproducts" },
        ]
      },
    ]
  });
};
