'use strict';

const { CELULAR_TABLE, CelularSchema } = require('../models/celularModel');
const { CONSIGNACIONES_TABLE, ConsignacionesSchema } = require('../models/consignacionesModel');
const { FREEFIRE_TABLE, FreefireSchema } = require('../models/freefireModel');
const { GIROS_TABLE, GirosSchema } = require('../models/girosModel');
const { PINES_TABLE, PinesSchema } = require('../models/pinesModel');
const { USER_TABLE, UserSchema } = require('../models/userModel');
const { VENEZUELA_TABLE, VenezuelaSchema } = require('../models/venezuelaModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(USER_TABLE,UserSchema);
    await queryInterface.createTable(CONSIGNACIONES_TABLE,ConsignacionesSchema);
    await queryInterface.createTable(GIROS_TABLE,GirosSchema);
    await queryInterface.createTable(FREEFIRE_TABLE,FreefireSchema);
    await queryInterface.createTable(VENEZUELA_TABLE,VenezuelaSchema);
    await queryInterface.createTable(CELULAR_TABLE,CelularSchema);
    await queryInterface.createTable(PINES_TABLE,PinesSchema);

  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropAllTables()
  }
};
