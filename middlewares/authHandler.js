const boom = require('@hapi/boom');
const {apiKey}= require('../config/config');

function checkApiKey(req,res,next){

  const apiKeyHeader= req.headers['api'];
  if(apiKeyHeader === apiKey){
    next();
  } else {
    next(boom.unauthorized());
  }
}
function checkAdminRole(req,res,next){
  const user = req.user;
  // console.log(user)
  if(user.admin=== true){
    next();
  }else {
    next(boom.unauthorized());
  }

}



module.exports= {checkAdminRole,checkApiKey};
