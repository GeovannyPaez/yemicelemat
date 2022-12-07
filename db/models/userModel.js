const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt= require('bcrypt');
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
  description:{
    allowNull:false,
    type:DataTypes.STRING,
    defaultValue: 'is the mejor user'
  }
};

class User extends Model {
  static associate(models) {
    this.hasMany(models.Celular,{as: 'celular',foreignKey:'userId'});
    this.hasMany(models.Pines,{as: 'pines',foreignKey:'userId'});
    this.hasMany(models.Consignaciones,{as: 'consignaciones',foreignKey:'userId'});
    this.hasMany(models.Giros,{as: 'giros',foreignKey:'userId'});
    this.hasMany(models.Venezuela,{as: 'venezuela',foreignKey:'userId'});
    this.hasMany(models.Freefire,{as: 'freefire',foreignKey:'userId'});
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName:USER_TABLE,
      modelName:'User',
      timestamps:false,
      hooks: {
        beforeCreate: async (user, options) => {
          const password = await bcrypt.hash(user.password, 10);
          user.password = password;
        },
    }
  }
}
}
module.exports = { User, USER_TABLE, UserSchema };
