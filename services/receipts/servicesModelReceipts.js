const boom = require('@hapi/boom');
const { Op } = require('sequelize');
const { User } = require('../../db/models/userModel');
const sequelize = require('../../lib/sequelize');


const { models } = sequelize;

class ServicesModelReceipts {
  constructor(nameModel) {
    this.Model = nameModel;
    this.options = {
      order: [['date', 'DESC']],
      include: {
        model: User,
        as: 'user',
        attributes: { exclude: ['password', 'recoveryToken', 'email'] },
      },
    };
  }

  async getAll(query) {
    try {
      if (query.hasOwnProperty('complete')) {
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
      return await this.getAllReceiptsDefault(query.userId, query.admin);
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async getAllReceiptsDefault(userId, admin) {
    const newOptions = { ...this.options };
    let where = {
      userId,
    };

    if (!admin) {
      newOptions.where = where;
    } else {
      newOptions.where = {};
    }
    const sumComicion = await models[this.Model].sum('comicion', {
      where:newOptions.where
    });
    const sumVentas = await models[this.Model].sum('value', {
      where:newOptions.where
    });
    const dinnerTotal = sumComicion + sumVentas;
    const data = await models[this.Model].findAll(newOptions);
    return {
      message: 'success',
      receipts: data,
      sumComicion,
      sumVentas,
      dinnerTotal,
    };
  }
  async getAllCompletOrNotComplet(boolean, userId, admin) {
    let options;
    options = {
      where: {
        state: boolean,
      },
    };
    if (!admin) {
      options = {
        where: {
          [Op.and]: [{ state: boolean }, { userId: userId }],
        },
      };
    }
    const receipts = await models[this.Model].findAll({
      ...options,
      ...this.options,
    });
    const sumComicion = await models[this.Model].sum('comicion', options);
    const sumVentas = await models[this.Model].sum('value', options);
    const dinnerTotal = sumComicion + sumVentas;
    return {
      receipts,
      sumComicion,
      dinnerTotal,
      sumVentas,
    };
  }
  async getReceiptsBetweenDates(dateInitial, dateEnd, user) {
    const copyOptions = { ...this.options };
    let options = {
      where: {
        date: {
          [Op.between]: [dateInitial, dateEnd],
        },
      },
    };
    if (!user.admin) {
      options.where = {
        [Op.and]: [
          { date: { [Op.between]: [dateInitial, dateEnd] } },
          { userId: user.userId },
        ],
      };
    }
    const sumComicion = await models[this.Model].sum('comicion', options);
    const sumVentas = await models[this.Model].sum('value', options);
    const dinnerTotal = sumComicion + sumVentas;
    const receipts = await models[this.Model].findAll({
      ...options,
      ...copyOptions,
    });
    return {
      receipts,
      sumComicion,
      dinnerTotal,
      sumVentas,
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

  async getReceiptsDay(user) {
    try {
      const options = {
        where: {
          date: new Date().toDateString()
        },
      };
      if (!user.admin) {
        options.where.userId = user.id;
      }
      const receipts = await models[this.Model].findAll({
        ...options,
        ...this.options,
      });
      const sumComicion = await models[this.Model].sum('comicion', options);
      const sumVentas = await models[this.Model].sum('value', options);
      const dinnerTotal = sumComicion + sumVentas;
      return {
        receipts,
        sumComicion,
        sumVentas,
        dinnerTotal,
      };
    } catch (error) {
      throw boom.notFound(error);
    }
  }
}
module.exports = ServicesModelReceipts;
