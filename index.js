const express= require('express');
const {errorHandler,logErrors, boomErrorHandler, ormErrorHandler}= require('./middlewares/errorHandler');
const cors= require('cors')
const app= express();
const routerApi= require('./routes');
// const {checkApiKey} = require('./middlewares/authHandler');
const passport = require('passport');
const port = process.env.PORT || 3000;


// endpooints params
app.use(express.json());

const whitnList= [process.env.DOMINIO_FRONTEND];
const options = {
  origin:(origin,callback)=>{
    if(whitnList.includes(origin) || !origin){
      callback(null,true)
    } else {
       callback(new Error('Not access'))
    }
  }
}
app.use(cors(options));
app.use(passport.initialize());
routerApi(app);
require('./untils/auth')
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port,()=>{
  console.log('el servidor se inicion en el puerto: ' + port)
});
