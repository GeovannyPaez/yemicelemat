const { Model } = require('sequelize');

const {
  state,
  id,
  value,
  number,
  name,
  typeReceipt,
  date,
  comicion,
  urlVoucher,
  userId,
  constructorTable,

} = require('./allColumns');

const CELULAR_TABLE = 'recargas_celular';
const CelularSchema = {
  id,
  state,
  typeReceipt,
  date,
  comicion,
  value,
  userId,
  urlVoucher,
  operador: {
    ...name,
  },
  numPhone: {
    ...number,
  },


};

class Celular extends Model {
  static associate(models) {
    this.belongsTo(models.User,
      {
        as:'user'
      });
  }
  static config(sequelize) {
    return constructorTable(sequelize, CELULAR_TABLE, 'Celular');
  }
}
module.exports = { CelularSchema, CELULAR_TABLE, Celular };
