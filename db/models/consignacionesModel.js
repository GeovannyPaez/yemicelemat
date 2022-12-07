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
  bench,
  userId
} = require('./allColumns');

const CONSIGNACIONES_TABLE = 'consignaciones';
const ConsignacionesSchema = {
  id,
  state,
  typeReceipt,
  date,
  comicion,
  value,
  urlVoucher,
  userId,
  numAccount: {
    ...number,
    field:'num_account'
  },
  name,
  bench,
};

class Consignaciones extends Model {
  static associate(models) {
    this.belongsTo(models.User,{
      as:'user'
    });
    //asociate
  }
  static config(sequelize) {
    return constructorTable(sequelize, CONSIGNACIONES_TABLE, 'Consignaciones');
  }
}
module.exports = { ConsignacionesSchema, CONSIGNACIONES_TABLE, Consignaciones };
