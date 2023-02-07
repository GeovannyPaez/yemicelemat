'use strict';

const { RETIROS_TABLE, RetirosSchema } = require('../models/retirosModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });

     */
    queryInterface.createTable(RETIROS_TABLE,RetirosSchema)
  },


  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable(RETIROS_TABLE)
  }

};
