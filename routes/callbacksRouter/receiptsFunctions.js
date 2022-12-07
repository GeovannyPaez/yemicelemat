const getReceipts = async (req, res, next, callback) => {
  try {
    const query= req.query;
    const receipts = await callback.getAll(query);
    res.json(receipts);
  } catch (error) {
    next(error);
  }
};
const getOneReceipt = async (req, res, next, callback) => {
  try {
    const {id} = req.params;
    const receipt = await callback.getOne(id);
    res.json(receipt);
  } catch (error) {
    next(error);
  }
};
const createReceipt = async (req, res, next, callback) => {
  try {
    const body = req.body;
    const response = await callback.create(body);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const updateReceipt = async (req, res, next, callback) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const resolve = await callback.edict(id, body);
    res.json(resolve);
  } catch (error) {
    next(error);
  }
};
const deleteReceipt = async (req, res, next, callback) => {
  try {
    const {id} = req.params;
    const response = await callback.delete(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getReceipts,
  getOneReceipt,
  deleteReceipt,
  updateReceipt,
  createReceipt,
};
