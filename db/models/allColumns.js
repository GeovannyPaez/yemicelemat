
const {DataTypes,Sequelize}= require('sequelize')
// const { TYPERECEIPT_TABLE } = require('./typeReceiptsModel')

module.exports={
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull:false,
    type: DataTypes.STRING,
    unique:true,
  },
  password: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull:false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  date:{
    allowNull:false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  typeReceipt:{
    allowNull:false,
    type: DataTypes.STRING,
    field: 'type_receipt'
  },
  comicion: {
    allowNull:false,
    type:DataTypes.INTEGER
  },
  // typeReceiptIdd:{
  //   allowNull:false,

  //   type:DataTypes.INTEGER,
  //   field:'type_receipt_idd',


  //   references:{
  //     model:'TypeReceit'      ,
  //     key:'id'
  //   },
  //   onUpdate:'CASCADE',
  //   onDelete:'SET NULL'
  // },
  number:{
    allowNull:false,
    type: DataTypes.BIGINT,
  },
  bench:{
    allowNull:false,
    type:DataTypes.STRING,
  },
  state:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
    defaultValue:false,
  },
  urlVoucher:{
    type:DataTypes.STRING,
    unique:true,
    field:'url_voucher',
  },
  name:{
    allowNull:false,
    type:DataTypes.STRING
  },
  userId:{
    field:'user_id',
    allowNull:false,
    type: DataTypes.INTEGER,
    references:{
      model:'users',
      key: 'id'
    },
    onUpdate:'CASCADE',
    onDelete:'SET NULL'
  },
  value:{
    allowNull:false,
    type:DataTypes.BIGINT
  },
  constructorTable:(sequelize,tableName,modelName)=>{
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      timestamps:false,
    }
  }
}
