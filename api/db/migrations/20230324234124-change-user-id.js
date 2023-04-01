'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');

const { CustomerSchema, CUSTOMER_TABLE } = require('../model/customerModel')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down (queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
