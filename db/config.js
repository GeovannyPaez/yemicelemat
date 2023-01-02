// archivos de configuraion

const {dbHost,dbName,dbUser,dbPassword,dbPort} = require('../config/config');
// const setupModels= require('../db/models')

const USER= encodeURIComponent(dbUser);
const PASSWORD= encodeURIComponent(dbPassword);
const URL= `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`
// ?sslmode=require

module.exports= {
  development:{
    url:URL,
    dialect:'postgres',
  },
  production:{
    url:URL,
    dialect:'posgrest'
  }
}
