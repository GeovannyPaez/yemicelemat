const passport = require('passport');
const express = require('express');
const router = express.Router();
const AuthService = require('../../services/authServices');
const service = new AuthService();
const validatorHandler = require('../../middlewares/validatorHandler');
const { changePassword } = require('../../schemas/userSchema');

router.post(
  '/login',
  passport.authenticate('local', {
    session: false,
  }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const response = await service.singToken(user);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/change-password',
  validatorHandler(changePassword, 'body'),
  async (req, res, next) => {
    try {
      const { token, newPassword } = req.body;
      const respose = await service.recoveryPassword(token, newPassword);
      res.json(respose);
    } catch (error) {
      next(error);
    }
  }
);
router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const response = await service.sendRecovery(email);
    res.json(response);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
