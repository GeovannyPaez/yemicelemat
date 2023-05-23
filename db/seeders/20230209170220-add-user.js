
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        email: 'loreangel19@gmail.com',
        password: "$2b$10$WessrDQHaTemj90a7w2l6en9yVw4rlVaCk1D5Lihlt//oNDAK8IQ.",
        nickname: "Michell Paez",
        admin: true,
        create_at:"9/09/2023"
        
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', { email: "loreangel19@gmail.com" });
  }
};

