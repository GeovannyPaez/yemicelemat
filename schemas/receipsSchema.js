
// const es = require('faker/lib/locales/es');
const joi = require('joi');

const id = joi.number();
const value = joi.number().min(1000);
const comicion = joi.number().min(100);
const fecha = joi.date();
const comprobante= joi.link();
const tipoRecibo=joi.string().max(20)
const tipoRecarga= joi.string().max(15);
const numCelular= joi.number().greater(10).integer();
const operador=joi.string().max(15);
const estado= joi.boolean();
const name= joi.string();
const email= joi.string().email({minDomainSegments:1, tlds:{allow:['com']}});
const entidad= joi.string().max(15);
const banco= joi.string().max(12);
const idComprobante= joi.number().id();
const idFreefire= joi.number();
const urlVoucher= joi.string().uri();
const title= joi.string();
const numAccount= joi.number();
const limit = joi.number();
const offset= joi.number();
const userId= joi.number();
const cc = joi.number();
const complete= joi.boolean();
const date= joi.date();

const createReceiptSchema = joi.object({
  value: value.required(),
  comicion: comicion.required(),
  typeReceipt:tipoRecibo.required(),
  numPhone: numCelular,
  entidad:entidad,
  operador,
  name,
  cc,
  state:estado,
  email,
  bench:banco,
  idFreefire,
  urlVoucher,
  numAccount,
  ccRemitente:numAccount,
  ccReceptor:numAccount,
  nameReceptor:name,
  nameRemitente:name,
  destino:name,
  typeAccount:name,
  typeDocument:name,

});

const createWhitdrawalsSchema = joi.object({
  typeReceipt:tipoRecibo.required(),
  totalReceived:value.required(),
  totalDelivered:comicion.required(),
  numberReceipt:id.required(),
  bench:banco.required(),
  date:date.required()
});
const updatedWhitdrawalsSchema =joi.object({
  typeReceipt:tipoRecibo,
  totalReceived:value,
  totalDelivered:comicion,
  numberReceipt:id,
  state:estado,
  urlVoucher,
  date
})
const updateReceiptSchema = joi.object({
  valor: value,
  comicion: comicion,
  userId:userId,
  fecha: fecha,
  cc,
  comprobante: comprobante,
  tipoRecibo:tipoRecibo,
  numCelular: numCelular,
  entidad:entidad,
  operador,
  tipoRecarga,
  email,
  banco,
  idComprobante,
  idFreefire,
  urlVoucher,
  numAccount,
  ccRemitente:numAccount,
  ccReceptor:numAccount,
  nameReceptor:name,
  nameRemitente:name,
  destino:name,
  state:estado,
  typeAccount:name,
  typeDocument:name
});
const createTypeReceiptSchema= joi.object({
  title:title.required()
})
const getReceiptSchema = joi.object({
  id: id.required(),
});

const quryReceiptSchema= joi.object({
  limit,
  offset,
  complete:complete,
  dateEnd:date,
  dateInitial:date
})
module.exports = { createReceiptSchema, updateReceiptSchema, quryReceiptSchema,getReceiptSchema ,createTypeReceiptSchema,createWhitdrawalsSchema,updatedWhitdrawalsSchema};
