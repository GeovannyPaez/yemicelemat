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
  constructorTable,
  email,
  userId
} = require('./allColumns');

const PINES_TABLE = 'recargas_pines';
const PinesSchema = {
  id,
  userId,
  state,
  typeReceipt,
  date,
  comicion,
  value,
  urlVoucher,
  email,
  numPhone: {
    field:'num_phone',
    ...number,
  },
  entidad:{
    ...name
  },
  name
};

class Pines extends Model {
  static associate(models) {
    //asociate
    this.belongsTo(models.User,{
      as:'user'
    })
  }
  static config(sequelize) {
    return constructorTable(sequelize, PINES_TABLE, 'Pines');
  }
}
module.exports = { Pines, PinesSchema, PINES_TABLE };
