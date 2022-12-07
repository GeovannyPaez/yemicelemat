// const sequelize= require('../lib/sequelize');
const ServicesModelReceipts= require('./receipts/servicesModelReceipts')


// const {models:Celular}= sequelize;
const CelularServices = new ServicesModelReceipts('Celular');
const PinesServices= new ServicesModelReceipts('Pines');
const ConsignacionesServices= new ServicesModelReceipts( 'Consignaciones');
const FreefrieServices= new ServicesModelReceipts('Freefire');
const GirosServices= new ServicesModelReceipts('Giros');
const VenezuelaServices= new ServicesModelReceipts('Venezuela');

module.exports= {CelularServices,PinesServices,ConsignacionesServices,FreefrieServices,GirosServices,VenezuelaServices};


