'use strict';

const { USER_TABLE } = require('../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert(USER_TABLE,[
      {
        email: 'yemicelemat2021@gmail.com',
        password: '$2b$20$Nkvrq42n1ryA1r/nrcdy7Ord/b8ri2j3rzdj5XVjwe3giYdvgua.S',
        create_at: '2023-01-1',
        nickname: 'Michell Paez',
        admin: true,
      },
    ])
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.bulkDelete(USER_TABLE);
  }
};
