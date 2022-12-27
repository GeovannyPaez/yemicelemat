const jwt= require('jsonwebtoken');

const secret= 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjb3N0dW1lciIsImlhdCI6MTY3MDQzNDQ3Nn0.MoOa-lCrDng4sWoL8WrsWcSxGkmn_990WNqeyrp6giw';


const verifyToken=(token,secret)=>{
  return jwt.verify(token,secret);
}
const payload = verifyToken(token,secret);
console.log(payload);
