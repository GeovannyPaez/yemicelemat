
const passport = require('passport')
const userRouter= require('./users');
const celularRouter= require('./celular');
const express= require('express');
const pinesRouter= require('./pines')
const consignacionesRouter= require('./consignaciones')
const freefireRouter= require('./freefire')
const venezuelaRouter= require('./venezuela')
const girosRouter= require('./giros');
const authRouter= require('./authRouter');
//  aqui importamos nuestros routes, o endpoints


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/celular', passport.authenticate('jwt',{session:false}),celularRouter);
  router.use('/users',userRouter);
  router.use('/consignaciones', passport.authenticate('jwt',{session:false}),consignacionesRouter)
  router.use('/giros', passport.authenticate('jwt',{session:false}),girosRouter)
  router.use('/venezuela', passport.authenticate('jwt',{session:false}),venezuelaRouter)
  router.use('/pines',  passport.authenticate('jwt',{session:false}),pinesRouter)
  router.use('/freefire', passport.authenticate('jwt',{session:false}),freefireRouter)
  router.use('/auth',authRouter);
}
module.exports= routerApi;
