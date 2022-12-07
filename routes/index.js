

const userRouter= require('./users');
const celularRouter= require('./celular');
const express= require('express');
const pinesRouter= require('./pines')
const consignacionesRouter= require('./consignaciones')
const freefireRouter= require('./freefire')
const venezuelaRouter= require('./venezuela')
const girosRouter= require('./giros')
//  aqui importamos nuestros routes, o endpoints


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/celular',celularRouter);
  router.use('/users',userRouter)
  router.use('/consignaciones',consignacionesRouter)
  router.use('/giros',girosRouter)
  router.use('/venezuela',venezuelaRouter)
  router.use('/pines',pinesRouter)
  router.use('/freefire',freefireRouter)
}
module.exports= routerApi;
