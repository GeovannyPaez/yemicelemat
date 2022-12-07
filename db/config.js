// archivos de configuraion

const {dbHost,dbName,dbUser,dbPassword,dbPort} = require('../config/config');
// const setupModels= require('../db/models')

const USER= encodeURIComponent(dbUser);
const PASSWORD= encodeURIComponent(dbPassword);
const URL= `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

module.exports= {
  development:{
    url:URL,
    dialect:'mysql',
  },
  production:{
    url:URL,
    dialect:'mysql'
  }
}
