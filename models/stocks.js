const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stocks', {
    idstocks: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    branches_idbranches: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'iddepartments'
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
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stocks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idstocks" },
        ]
      },
      {
        name: "fk_stocks_branches1_idx",
        using: "BTREE",
        fields: [
          { name: "branches_idbranches" },
        ]
      },
      {
        name: "fk_stocks_products1_idx",
        using: "BTREE",
        fields: [
          { name: "products_idproducts" },
        ]
      },
    ]
  });
};
