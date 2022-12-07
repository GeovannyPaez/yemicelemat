const boom = require('@hapi/boom');
const {models}= require('../lib/sequelize');
// const { use } = require('../routes/users');


class UserService{
  constructor(){

  }
  // async create(){
  //   return data;
  // }
  async getAllUsers(){
    try {
      const res= await models.User.findAll({
        attributes:{exclude:['password']}
      });
      return {
        message:'success',
        users:res
      };
    } catch (error) {
      throw boom.notFound(error)
    }
  }

  async getUserById(id){
    try {
      const user= await models.User.findByPk(id,{
        attributes:{exclude:['password']}
      });
      return{
          message:'success',
          user
        }

    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async getUserAndReceipts(id){
    try {
      const user= await models.User.findAll({
        where: {
          id: id
        },
        include:[{all:true}]
      });
      return {
        message:'success',
        user
      }
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async create(body){
   try {
    const res = await models.User.create(body);
    delete res.dataValues.password;
    return res
   } catch (error) {
    throw boom.conflict(error);
   }
  }
}
module.exports= UserService;
