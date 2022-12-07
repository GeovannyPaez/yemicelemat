const boom = require('@hapi/boom');
const {apiKey}= require('../config/config')
function checkApiKey(req,res,next){

  const apiKeyHeader= req.headers['api'];
  if(apiKeyHeader === apiKey){
    next();
  } else {
    next(boom.unauthorized());
  }

}

module.exports= checkApiKey;
