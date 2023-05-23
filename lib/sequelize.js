const {Sequelize}= require('sequelize');

const {isProd,dbUrl} = require('../config/config');
const setupModels= require('../db/models')

const options ={
  dialect:'postgres',
  // logging: console.log,
}
if(isProd){
  options.dialectOptions={
    // ssl:{
    //   rejectUnauthorized:false
    // }
  }
}
  const sequelize = new Sequelize(dbUrl,options)
  setupModels(sequelize);

  // sequelize.sync({
  //   force:true
  // }); //metodo sync no se aconsea dejarlo en produccion

module.exports= sequelize;
