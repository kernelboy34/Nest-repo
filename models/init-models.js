var DataTypes = require("sequelize").DataTypes;
var _bills = require("./bills");
var _departments = require("./departments");
var _personal_data = require("./personal_data");
var _product_sizes = require("./product_sizes");
var _products = require("./products");
var _rols = require("./rols");
var _sale_products = require("./sale_products");
var _sales = require("./sales");
var _sizes = require("./sizes");
var _stocks = require("./stocks");
var _user = require("./user");

function initModels(sequelize) {
  var bills = _bills(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var personal_data = _personal_data(sequelize, DataTypes);
  var product_sizes = _product_sizes(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var rols = _rols(sequelize, DataTypes);
  var sale_products = _sale_products(sequelize, DataTypes);
  var sales = _sales(sequelize, DataTypes);
  var sizes = _sizes(sequelize, DataTypes);
  var stocks = _stocks(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  stocks.belongsTo(departments, { as: "branches_idbranches_department", foreignKey: "branches_idbranches"});
  departments.hasMany(stocks, { as: "stocks", foreignKey: "branches_idbranches"});
  product_sizes.belongsTo(products, { as: "products_idproducts_product", foreignKey: "products_idproducts"});
  products.hasMany(product_sizes, { as: "product_sizes", foreignKey: "products_idproducts"});
  sale_products.belongsTo(products, { as: "products_idproducts_product", foreignKey: "products_idproducts"});
  products.hasMany(sale_products, { as: "sale_products", foreignKey: "products_idproducts"});
  stocks.belongsTo(products, { as: "products_idproducts_product", foreignKey: "products_idproducts"});
  products.hasMany(stocks, { as: "stocks", foreignKey: "products_idproducts"});
  user.belongsTo(rols, { as: "rols_idrols_rol", foreignKey: "rols_idrols"});
  rols.hasMany(user, { as: "users", foreignKey: "rols_idrols"});
  bills.belongsTo(sales, { as: "sales_idsales_sale", foreignKey: "sales_idsales"});
  sales.hasMany(bills, { as: "bills", foreignKey: "sales_idsales"});
  sale_products.belongsTo(sales, { as: "sales_idsales_sale", foreignKey: "sales_idsales"});
  sales.hasMany(sale_products, { as: "sale_products", foreignKey: "sales_idsales"});
  product_sizes.belongsTo(sizes, { as: "sizes_idsizes_size", foreignKey: "sizes_idsizes"});
  sizes.hasMany(product_sizes, { as: "product_sizes", foreignKey: "sizes_idsizes"});
  personal_data.belongsTo(user, { as: "user_iduser_user", foreignKey: "user_iduser"});
  user.hasMany(personal_data, { as: "personal_data", foreignKey: "user_iduser"});
  sales.belongsTo(user, { as: "user_iduser_user", foreignKey: "user_iduser"});
  user.hasMany(sales, { as: "sales", foreignKey: "user_iduser"});

  return {
    bills,
    departments,
    personal_data,
    product_sizes,
    products,
    rols,
    sale_products,
    sales,
    sizes,
    stocks,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
