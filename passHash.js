const bcrypt= require('bcrypt');


const myPassword= 'admin123';


async function generateHash(password){

  const hash = await bcrypt.hash(password,10);
  return hash
}
 generateHash(myPassword).then(res=>console.log(res));

