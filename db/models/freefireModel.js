const { Model } = require('sequelize');


const {state,id,value, number,urlVoucher, typeReceipt,date,comicion, userId,constructorTable} = require('./allColumns')

const FREEFIRE_TABLE = 'recargas_freefire';
const FreefireSchema = {
  id,
  state,
  typeReceipt,
  date,
  comicion,
  value,
  urlVoucher,
  idFreefire:{
    ...number,
    field:'id_freefire'
  },
  numPhone: {
    field:'num_phone',
    ...number,
  },
  userId,

};

class Freefire extends Model {
  static associate(models) {
    this.belongsTo(models.User,{
      as:'user'
    })
    //asociate
  }
  static config(sequelize) {
    return constructorTable(sequelize,FREEFIRE_TABLE,'Freefire');
  }
}
module.exports = { Freefire, FreefireSchema, FREEFIRE_TABLE };
