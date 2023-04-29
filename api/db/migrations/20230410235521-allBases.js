'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('../model/categoryModel')
const { ProductSchema, PRODUCT_TABLE } = require('../model/productModel')
const { UserSchema, USER_TABLE } = require('../model/userModel')
const { CustomerSchema, CUSTOMER_TABLE } = require('../model/customerModel')
const { OrderSchema, ORDER_TABLE } = require('../model/orderModel')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(CUSTOMER_TABLE)
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
