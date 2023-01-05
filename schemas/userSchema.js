const Joi = require('joi');

const id = Joi.number();
const email = Joi.string().email();
const password = Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).min(6)
const nickname = Joi.string().min(6);
const token= Joi.string().min(20);

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  nickname: nickname.required(),
}) ;
const getUserSchema = Joi.object({
  id: id.required(),
});
const loginUserSchema = Joi.object( {
  email: nickname.required(),
  password: password.required(),
});
const changePassword= Joi.object({
  token:token.required(),
  newPassword: password.required(),
})
module.exports = { getUserSchema, createUserSchema, loginUserSchema ,changePassword};
