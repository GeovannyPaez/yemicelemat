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
  userId,
} = require('./allColumns');

const VENEZUELA_TABLE = 'venezuela';
const VenezuelaSchema = {
  id,
  state,
  typeReceipt,
  date,
  comicion,
  value,
  userId,
  urlVoucher,
  nameReceptor:{
    ...name,
    field:'name_receptor'
  },
  nameRemitente:{
    ...name,
    field:'name_remitente'
  },
  ccReceptor:{
    ...number,
    field:'cc_receptor'
  },
  ccRemitente:{
    ...number,
    field:'cc_remitente'
  },
  typeAccount:{
    ...name,
    field:'type_account'
  },
  numAccount:{
    ...number,
    field:'num_account'
  },
  bench,
  destino:{
    ...name
  }
};

class Venezuela extends Model {
  static associate(models) {
    this.belongsTo(models.User,{as:'user'})
    //asociate
  }
  static config(sequelize) {
    return constructorTable(sequelize, VENEZUELA_TABLE, 'Venezuela');
  }
}
module.exports = { Venezuela, VenezuelaSchema, VENEZUELA_TABLE };
