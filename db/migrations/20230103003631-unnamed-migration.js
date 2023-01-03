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
        email: 'yuniorpaezpabon@gmail.com',
        password: '$2b$10$LSlvyAZ9gQ3WmWWwa1mTlu7979d4EK3BokxnBLJ9BA9M77MpEneSO',
        create_at: '2023-01-1',
        nickname: 'Geovanny Paez',
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
