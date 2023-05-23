const { jwtSecret } = require('../../../config/config');
const {Strategy,ExtractJwt}= require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret

}

const jwtStrategy= new Strategy(options,(payload,done)=> done(null,payload));

module.exports= jwtStrategy;
