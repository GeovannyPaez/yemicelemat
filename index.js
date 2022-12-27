const express= require('express');
const {errorHandler,logErrors, boomErrorHandler, ormErrorHandler}= require('./middlewares/errorHandler');
const cors= require('cors')
const app= express();
const routerApi= require('./routes');
const {checkApiKey} = require('./middlewares/authHandler');
const passport = require('passport');
const port = process.env.PORT || 3000;


// endpooints params
app.get('/',
checkApiKey,
(req,res)=>{
  res.send('hola mi server en express');
});
app.use(express.json());

const whitnList= ['http://localhost:3005'];
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


// querys params

// app.get('/products', (req, response) => {
//   const { limit } = req.query;
//   const products = [];
//   for (let i = 0 ; i < (limit || 10) ; i ++) { // Suponiendo que nuestro límite por defecto es 10
//     products.push({
//       companyName: faker.company.companyName(),
//       productName: faker.commerce.productName(),
//       productPrice: Number(faker.commerce.price()),
//       productImage: faker.image.imageUrl()
//     });
//   };
//   response.json({
//     limit: limit || 'No limit defined',
//     data: products
//   });
// });
app.listen(port,()=>{
  console.log('el servidor se inicion en el puerto: ' + port)
});
