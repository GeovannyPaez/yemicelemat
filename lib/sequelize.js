const {Sequelize}= require('sequelize');

const {dbHost,dbName,dbUser,dbPassword,dbPort} = require('../config/config');
const setupModels= require('../db/models')

const USER= encodeURIComponent(dbUser);
const PASSWORD= encodeURIComponent(dbPassword);
const URL= `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`
// const URL= `postgres://oqkrsjmylrpduk:0f18b0e762479515ad9b04ca6bd108229f66b53ab0d982b4a0642858064b4c1d@ec2-34-194-158-176.compute-1.amazonaws.com:5432/d11ncgami6uoo7?sslmode=require`

  const sequelize = new Sequelize(URL,{
    dialect:'postgres',
    ssl:true,
    // logging: console.log,
  })
  setupModels(sequelize);

  // sequelize.sync({
  //   force:true
  // }); //metodo sync no se aconsea dejarlo en produccion

module.exports= sequelize;
