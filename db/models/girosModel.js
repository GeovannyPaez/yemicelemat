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
  userId
} = require('./allColumns');

const GIROS_TABLE = 'giros';
const GirosSchema = {
  id,
  state,
  typeReceipt,
  date,
  comicion,
  value,
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
  entidad:{
    ...name
  },
  destino:{
    ...name
  },
  numPhone: {
    field:'num_phone',
    ...number,
  },
  userId
};

class Giros extends Model {
  static associate(models) {
    //asociate
    this.belongsTo(models.User,{
      as:'user'
    })
  }
  static config(sequelize) {
    return constructorTable(sequelize, GIROS_TABLE, 'Giros');
  }
}
module.exports = { Giros, GirosSchema, GIROS_TABLE };
