const { Model, DataTypes, Sequelize } = require('sequelize');
const { constructorTable } = require('./allColumns');
const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at', // para manipular el tag de la columna en la DB, y no quede en camelcase
    defaultValue: Sequelize.NOW, //que coloqe la fehca de creacion en el moento que se ingrese el dato
  },
  nickname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },

};

class User extends Model {
  static associate() {
    //asociate
  }
  static config(sequelize) {
    return constructorTable(sequelize, USER_TABLE, 'User');
  }
}
module.exports = { User, USER_TABLE, UserSchema };
