'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../model/customerModel')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
