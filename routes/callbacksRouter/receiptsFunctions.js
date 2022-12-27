
const getReceipts = async (req, res, next, callback) => {
  try {
    const querys= req.query;
    const query = {
      ...querys,
      userId: req.user.id,
      admin: req.user.admin
    }
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
    const {id}= req.user
    const body = req.body;
    body.userId= id;
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
const getReceiptsDay= async(req,res,next,callback)=>{
  try {
    const {user}= req;
    const response = await callback.getReceiptsDay(user);
    res.json(response)
  } catch (error) {
    next(error)
  }
}
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
  getReceiptsDay
};
