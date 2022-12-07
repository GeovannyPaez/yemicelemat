const {Client}= require('pg');


const getConection= async()=>{
  const client = new Client({
    host: 'localhost',
    port:5432,
    user: 'yemicelemat',
    password:'admin123',
    database:'yemicelematDB'
  });
  await client.connect();
  return client;
}


module.exports= getConection;
