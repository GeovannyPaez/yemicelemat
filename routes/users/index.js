const express = require('express');
const validatorHandler = require('../../middlewares/validatorHandler');
const { createUserSchema, getUserSchema } = require('../../schemas/userSchema');

// const { use } = require('../receipts');
const UserService = require('../../services/userServices');
const router = express.Router();
const Users = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});
router.get('/:id',validatorHandler(getUserSchema),
  async(req,res,next)=>{
  try {
    const  {id}= req.params;
    const user = await Users.getUserById(id);
    res.json(user);
  } catch (error) {
    next(error)
  }
});
router.get('/:id/receipts',validatorHandler(getUserSchema),
  async(req,res,next)=>{
  try {
    const  {id}= req.params;
    const user = await Users.getUserAndReceipts(id);
    res.json(user);
  } catch (error) {
    next(error)
  }
})
router.post(
  '/',
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
