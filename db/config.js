// archivos de configuraion

const { dbUrl } = require('../config/config');
// const setupModels= require('../db/models')

// const USER= encodeURIComponent(dbUser);
// const PASSWORD= encodeURIComponent(dbPassword);
// const URL= `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`


module.exports = {
  development: {
    url: dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: dbUrl,
    dialect: 'postgres',
    // dialectOptions: {
    //   // ssl: {
    //   //   require: true,
    //   //   rejectUnauthorized: false,
    //   // },
    // },
  },
};
