const {Sequelize}= require('sequelize');

const {dbHost,dbName,dbUser,dbPassword,dbPort} = require('../config/config');
const setupModels= require('../db/models')

const USER= encodeURIComponent(dbUser);
const PASSWORD= encodeURIComponent(dbPassword);
const URL= `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`


  const sequelize = new Sequelize(URL,{
    dialect:'postgres',
    logging: console.log,
  })
  setupModels(sequelize);
  sequelize.sync({
    force:true
  }); //metodo sync no se aconsea dejarlo en produccion

module.exports= sequelize;
