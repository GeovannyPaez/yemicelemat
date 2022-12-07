const {Pool}= require('pg');

const {dbHost,dbName,dbUser,dbPassword,dbPort} = require('../config/config')

const USER= encodeURIComponent(dbUser);
const PASSWORD= encodeURIComponent(dbPassword);
const URL= `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`


  const pool = new Pool({
    connectionString:URL
  });



module.exports= pool;
