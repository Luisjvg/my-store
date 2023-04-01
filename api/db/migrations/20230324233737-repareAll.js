'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../model/customerModel')
const { UserSchema, USER_TABLE } = require('../model/userModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(USER_TABLE)
  }
};
