const express = require('express');
const validatorHandler = require('../../middlewares/validatorHandler');
const { createUserSchema, getUserSchema } = require('../../schemas/userSchema');
const passport = require('passport');
// const { use } = require('../receipts');
const UserService = require('../../services/userServices');
const { checkAdminRole } = require('../../middlewares/authHandler');
const router = express.Router();
const Users = new UserService();

router.get('/all',
passport.authenticate('jwt',{session:false}),
checkAdminRole,
async (req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
router.get('/',
passport.authenticate('jwt',{session:false}),

validatorHandler(getUserSchema),
  async(req,res,next)=>{
  try {
    const  {id}= req.user;
    const user = await Users.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error)
  }
});
router.get('/receipts/',
passport.authenticate('jwt',{session:false}),
  async(req,res,next)=>{
  try {
    const  {id}= req.user;
    const user = await Users.getUserAndReceipts(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/',
  passport.authenticate('jwt',{session:false}),
  checkAdminRole,
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const user = await Users.create(data);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
