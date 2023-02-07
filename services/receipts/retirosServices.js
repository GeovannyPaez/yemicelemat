const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { User } = require('../../db/models/userModel');
const sequelize = require('../../lib/sequelize');


const { models } = sequelize;

class ServicesRetiros {
  constructor() {
    this.Model= 'Retiros';
    this.options = {
      order: [['date', 'DESC']],
      include: {
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'recoveryToken', 'email'] },
      },
    };
  }
   async getSumDelivered(options={}) {
    return await models[this.Model].sum('total_delivered',options);
  }
   async getSumReceived(options={}){
    return await models[this.Model].sum('total_received',options)
  }
  async getAll(query) {
    try {
      if (query?.complete) {
        return await this.getAllCompletOrNotComplet(
          JSON.parse(query.complete),
          query.userId,
          query.admin
        );
      }
      if (query.dateInitial && query.dateEnd) {
        return await this.getReceiptsBetweenDates(
          query.dateInitial,
          query.dateEnd,
          { userId: query.userId, admin: query.admin }
        );
      }
      return await this.getAllReceiptsDefault();
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async getAllReceiptsDefault() {
    const newOptions = { ...this.options };
    // let where = {
    //   userId,
    // };

    // if (!admin) {
    //   newOptions.where = where;
    // } else {
    //   newOptions.where = {};
    // }
    const sumReceived = await this.getSumReceived()
    const sumDelivered = await this.getSumDelivered();
    const sumComicion = sumReceived - sumDelivered
    const data = await models[this.Model].findAll(newOptions);
    return {
      message: 'success',
      receipts: data,
      sumComicion,
      sumReceived,
      sumDelivered
    };
  }
  async getAllCompletOrNotComplet(boolean) {
    let options;
    options = {
      where: {
        state: boolean,
      },
    };
    // if (!admin) {
    //   options = {
    //     where: {
    //       [Op.and]: [{ state: boolean }, { userId: userId }],
    //     },
    //   };
    // }
    const receipts = await models[this.Model].findAll({
      ...options,
      ...this.options,
    });
    const sumReceived = await this.getSumReceived(options)
    const sumDelivered = await this.getSumDelivered(options);
    const sumComicion = sumReceived - sumDelivered
    // const sumComicion = await models[this.Model].sum('comicion', options);
    // const sumVentas = await models[this.Model].sum('value', options);
    // const dinnerTotal = sumComicion + sumVentas;
    return {
      receipts,
      sumComicion,
      sumReceived,
      sumDelivered
      // sumComicion,
      // dinnerTotal,
      // sumVentas,
    };
  }
  async getReceiptsBetweenDates(dateInitial, dateEnd) {
    const copyOptions = { ...this.options };
    let options = {
      where: {
        date: {
          [Op.between]: [dateInitial, dateEnd],
        },
      },
    };
    // if (!user.admin) {
    //   options.where = {
    //     [Op.and]: [
    //       { date: { [Op.between]: [dateInitial, dateEnd] } },
    //       { userId: user.userId },
    //     ],
    //   };
    // }
    const sumReceived = await this.getSumReceived(options)
    const sumDelivered = await this.getSumDelivered(options);
    const sumComicion = sumReceived - sumDelivered
    // const sumComicion = await models[this.Model].sum('comicion', options);
    // const sumVentas = await models[this.Model].sum('value', options);
    // const dinnerTotal = sumComicion + sumVentas;
    const receipts = await models[this.Model].findAll({
      ...options,
      ...copyOptions,
    });
    return {
      receipts,
      sumComicion,
      sumDelivered,
      sumReceived
      // dinnerTotal,
      // sumVentas,
    };
  }
  async getOne(id) {
    const receipt = await models[this.Model].findByPk(id);
    if (!receipt) throw boom.notFound('not found receipt');
    return {
      message: 'succes',
      receipt,
    };
  }
  async delete(id) {
    try {
      const res = await models[this.Model].destroy({
        where: {
          id: id,
        },
      });
      if (res === 0) {
        throw boom.notFound('not found receipt');
      }
      return {
        message: 'succes',
        id: res,
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
      const receiptUpdated = await models[this.Model].update(body, {
        where: {
          id: id,
        },
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
module.exports = ServicesRetiros;
