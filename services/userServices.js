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
        attributes:{exclude:['password',"recoveryToken"]}
      });
      return {
        message:'success',
        users:res
      };
    } catch (error) {
      throw boom.notFound(error)
    }
  }
   async updateUser(id, changes){
      const {user} = await this.getUserById(id);
      const rst = user.update(changes);
      return rst
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
  async getUserByEmail(email){
    try {
      const user= await models.User.findOne({
        where:{
          email
        }
      });
      return user;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async getUserAndReceipts(id){
    try {
      const user= await models.User.findAll({
        where: {
          id
        },
        attributes:{exclude:['password','recoveryToken']},
        include:[{all:true}]
      });
      if(user.length === 0) throw boom.notFound();
      return {
        message:'success',
        user: user[0]
      }

    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async create(body){
   try {
    const res = await models.User.create(body);
    delete res.dataValues.password;
    {res.recoveryToken && delete res.dataValues.recoveryToken}
    return res
   } catch (error) {
    throw boom.conflict(error);
   }
  }
}
module.exports= UserService;
