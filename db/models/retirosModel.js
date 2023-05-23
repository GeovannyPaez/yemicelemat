const { Model } = require('sequelize');

const {
  urlVoucher,
  id,
  number,
  typeReceipt,
  date,
  constructorTable,
  userId,
  bench,
  state
} = require('./allColumns');

const RETIROS_TABLE = 'retiros';
const RetirosSchema = {
  id,
  userId,
  bench,
  urlVoucher,
  typeReceipt,
  date,
  totalReceived:{
    ...number,
    field: 'total_received'
  },
  totalDelivered:{
    ...number,
    field:'total_delivered'
  },
  numberReceipt:  {
    ...number,
    field:'number_receipt'
  },
  state,
};

class Retiros extends Model {
  static associate(models) {
    //asociate
    this.belongsTo(models.User,{
      as:'user'
    })
  }
  static config(sequelize) {
    return constructorTable(sequelize, RETIROS_TABLE, 'Retiros');
  }
}
module.exports = { Retiros, RetirosSchema, RETIROS_TABLE };
