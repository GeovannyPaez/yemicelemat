const bcrypt= require('bcrypt');


const myPassword= 'lamaria del pilar 123';

const hash= '$2b$10$EEORHyRWYAp80ekz0/DowunWSRmoh5iPCh8uXpZXRxMncUS0faCxm'
async function verifyHash(password, hash){

  const res = await bcrypt.compare(password,hash)
  return res
}
verifyHash(myPassword,hash).then(res=>console.log(res));
