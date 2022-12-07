// const { string } = require('joi');
const { Model, DataTypes } = require('sequelize');

const {
  id,
  name,
  constructorTable
} = require('./allColumns');

const TYPERECEIPT_TABLE = 'type_receipt';
const TypeReceiptSchema = {
  id,
  title:{
    ...name
  },
  image:{
    allowNull:false,
    type:DataTypes.STRING,
  }
};
class TypeReceipt extends Model {
  static associate() {
    // this.hasMany(models.Celular,{
    //   as: 'receipts',
    //   foreignKey:'typeReceiptId'
    // })
  }
  static config(sequelize) {
    return constructorTable(sequelize,TYPERECEIPT_TABLE,'TypeReceipt')
  }
}
module.exports = { TypeReceipt, TypeReceiptSchema, TYPERECEIPT_TABLE };
