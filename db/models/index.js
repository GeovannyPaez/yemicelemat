const { User, UserSchema } = require('./userModel');
const { Celular, CelularSchema } = require('./celularModel');
const { Freefire,FreefireSchema} = require('./freefireModel');
const {Pines,PinesSchema  } = require('./pinesModel');
const {Consignaciones,ConsignacionesSchema  } = require('./consignacionesModel');
const { Venezuela,VenezuelaSchema} = require('./venezuelaModel');
const {Giros,GirosSchema}= require('./girosModel');
const { Retiros, RetirosSchema } = require('./retirosModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Celular.init(CelularSchema,Celular.config(sequelize));
  Pines.init(PinesSchema,Pines.config(sequelize));
  Consignaciones.init(ConsignacionesSchema,Consignaciones.config(sequelize));
  Venezuela.init(VenezuelaSchema,Venezuela.config(sequelize));
  Freefire.init(FreefireSchema,Freefire.config(sequelize));
  Giros.init(GirosSchema,Giros.config(sequelize));
  Retiros.init(RetirosSchema,Retiros.config(sequelize))


  User.associate(sequelize.models);
  Celular.associate(sequelize.models);
  Consignaciones.associate(sequelize.models);
  Giros.associate(sequelize.models);
  Freefire.associate(sequelize.models);
  Pines.associate(sequelize.models);
  Venezuela.associate(sequelize.models);
  Retiros.associate(sequelize.models);
}

module.exports = setupModels;
