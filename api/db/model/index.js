const { User, UserSchema } = require('./userModel')
const { Product, ProductSchema } = require('./productModel');
const { Customer, CustomerSchema } = require('./customerModel');
const { Category, CategorySchema } = require('./categoryModel');
const { Order, OrderSchema } = require('./orderModel');
const { OrderProduct, OrderProductSchema } = require('./order-product');


function setupModels(sequelize){
  // User.init(UserSchema, User.config(sequelize));
  // Customer.init(CustomerSchema, Customer.config(sequelize))
  // Order.init(OrderSchema, Order.config(sequelize))
  // OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Product.init(ProductSchema, Product.config(sequelize));



  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  // User.associate(sequelize.models);
  // Customer.associate(sequelize.models);
  // Order.associate(sequelize.models);

}

module.exports = setupModels;
