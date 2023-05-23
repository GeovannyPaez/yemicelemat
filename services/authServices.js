const UserService = require('./userServices');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Emails = require('./emails/');
const { jwtSecret, gEmail , dominioFronEnd} = require('../config/config');

const service = new UserService();
const EmailService = new Emails();
class AuthService {
  constructor() {}

  async getUser(email, password) {
    const user = await service.getUserByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw boom.unauthorized();
    }
    delete user.dataValues.password;
    return user;
  }

  async singToken(user) {
    const payload = {
      id: user.id,
      admin: user.admin,
    };
    const token = jwt.sign(payload, jwtSecret,{
      expiresIn:'24h'
    });
    return {
      user,
      token,
    };
  }

  async recoveryPassword(token, newPassword) {

      const payload = jwt.verify(token, jwtSecret,(err,decoded)=>{
        if(err){
          throw boom.notAcceptable(err.name);
        }
        return decoded;
      });
      const { sub: id } = payload;
      const {user} = await service.getUserById(id);
      if (user.recoveryToken != token) {

        throw boom.unauthorized();

      }

      const hash = await bcrypt.hash(newPassword, 10);
      await service.updateUser(user.id, {
        recoveryToken: null,
        password: hash,
      });
      return {
        message: 'success your password has been updated',
      };
  }

  async sendRecovery(email) {
    const user = await service.getUserByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const payload = {
      sub: user.id,
    };
    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: '15min',
    });
    const link = `${dominioFronEnd}/?#/change-password/${token}`;
    await service.updateUser(user.id, { recoveryToken: token });
    const infoMail = {
      from: gEmail, // sender address
      to: user.email, // list of receivers
      subject: 'Recuperacion de Contraseña',
      text: 'Recuperacion de Contraseña',
      html: `<b>Para recuperar tu contraseña de tu cuenta en Yemicelemat ingrese a este <a href='${link}'>link</a></b>`, // html body
    };

    const rst = await EmailService.sendMail(infoMail);
    return rst;
  }
}
module.exports = AuthService;
