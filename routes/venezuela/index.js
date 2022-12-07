const express = require('express');
const {
  getReceipts,
  createReceipt,
  deleteReceipt,
  updateReceipt,
  getOneReceipt,
} = require('../callbacksRouter/receiptsFunctions');

const { VenezuelaServices } = require('../../services/receiptsServicesAll');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  getReceiptSchema,
  updateReceiptSchema,
  createReceiptSchema,
} = require('../../schemas/receipsSchema');
const router = express.Router();

const callback = VenezuelaServices;

router.get('/', async (req, res, next) => {
  await getReceipts(req, res, next, callback);
});
// router.post('/',(req,res,next)=>{
//   res.json(req.body)
// })
router.get('/:id', validatorHandler(getReceiptSchema,'params'),
  async (req,res,next)=>await getOneReceipt(req,res,next,callback)
)
router.post(
  '/',
  validatorHandler(createReceiptSchema, 'body'),
  async (req, res, next) => {
    await createReceipt(req, res, next, callback)
  }
);
router.put(
  '/:id',
  validatorHandler(getReceiptSchema, 'params'),
  validatorHandler(updateReceiptSchema, 'body'),
  async (req, res, next) => await updateReceipt(req, res, next, callback)
);
router.delete(
  '/:id',
  validatorHandler(getReceiptSchema, 'params'),
  async (req, res, next) => await deleteReceipt(req, res, next, callback)
);
module.exports = router;
