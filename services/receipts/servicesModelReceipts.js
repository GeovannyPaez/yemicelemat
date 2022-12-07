const boom = require('@hapi/boom');

const sequelize = require('../../lib/sequelize');

const { models } = sequelize;

class ServicesModelReceipts {
  constructor(nameModel) {
    // this.model = nameModel;
    this.Model = nameModel;
  }

  async getAll(query) {


    try {
      // console.log(this.model)
      // const query= 'SELECT * FROM users';
    const options={};
    const {limit,offset}= query;
    let data;
    if(limit && offset){
      options.limit=Number(limit) ;
      options.offset= Number(offset);
      data = await models[this.Model].findAll(options);
      return {
        message: 'success',
        receipts: data,
      };
    }
    data=await models[this.Model].findAll({
      include:['user']
    });
      return {
        message: 'success',
        receipts: data,
      };
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async getOne(id) {

      const receipt = await models[this.Model].findByPk(id);
      if(!receipt) throw boom.notFound('not found receipt');
      return {
        message:'succes',
        receipt
      }

  }

  async delete(id) {
    try {
      const res = await models[this.Model].destroy({
        where:{
          id:id
        }
      });
      if( res===0 ){
        throw boom.notFound('not found receipt')
      }
      return {
        message:'succes',
        id: res
      };
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async create(body) {
    const receipt = await models[this.Model].create(body);
    return {
      message: 'success',
      receipt,
    };
  }

  async edict(id, body) {
    try {
      const receiptUpdated = await models[this.Model].update(body,{
        where: {
          id:id
        }
      });
      return {
        message: 'receipt has been updated',
        receiptUpdated,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
module.exports = ServicesModelReceipts;
