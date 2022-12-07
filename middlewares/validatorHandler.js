const boom= require('@hapi/boom')

function validatorHandler(schema,property) {
  //usamos un clouseres
    return (req, res, next)=>{
      const data = req[property];
      // el abortEarly sirve para que joi retorne todos los errores al mismo tiempo y no uno por uno
      const {error}= schema.validate(data, {abortEarly:false});
      // si hay erro se los mandamos al middleware que maneja los errores
      if(error){
        next(boom.badRequest(error))
      }
      // si no hay error, puede continuar con la peticion;
      next();
  }
}

module.exports =validatorHandler;
