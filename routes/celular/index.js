const express = require('express');
const {
  getReceipts,
  createReceipt,
  deleteReceipt,
  updateReceipt,
  getOneReceipt,
  getReceiptsDay
} = require('../callbacksRouter/receiptsFunctions');

const { CelularServices } = require('../../services/receiptsServicesAll');
const validatorHandler = require('../../middlewares/validatorHandler');
const {
  getReceiptSchema,
  updateReceiptSchema,
  createReceiptSchema,
  quryReceiptSchema,
} = require('../../schemas/receipsSchema');
const router = express.Router();

const callback = CelularServices;

router.get(
  '/',
  validatorHandler(quryReceiptSchema, 'query'),
  async (req, res, next) => {
    await getReceipts(req, res, next, callback);
  }
);
router.get('/day',
async(req,res,next)=>{
  await  getReceiptsDay( req,res,next,callback);
})
router.get(
  '/:id',
  validatorHandler(getReceiptSchema, 'params'),
  async (req, res, next) => await getOneReceipt(req, res, next, callback)
);
router.post(
  '/',
  validatorHandler(createReceiptSchema, 'body'),
  async (req, res, next) => {
    await createReceipt(req, res, next, callback);
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
