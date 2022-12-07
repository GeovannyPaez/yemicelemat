// class Receipt {
//   constructor({
//     id,
//     typeReceipt,
//     price,
//     surplus,
//     date,
//     stade,
//     voucher

//   }){
//     this.id= id
//     this.typeReceipt=typeReceipt,
//     this.price= price,
//     this.surplus= surplus,
//     this.date= date,
//     this.state= stade,
//     this.voucher= voucher
//   }
// }
const recibos = [
  {
      "tipoRecibo": "Celular",
      "estado": false,
      "valor": "834383",
      "comicion": "48348",
      "fecha": "2022-11-15",
      // "tipoRecarga": "Recargas Celular",
      "numCelular": "8453",
      "operador": "Movistar",
      "id": 1
  },
  {
      "tipoRecibo": "Pines",
      "estado": false,
      "valor": "8433",
      "comicion": "8432",
      "fecha": "2022-11-15",
      // "tipoRecarga": "Pines",
      "numCelular": "7",
      "name": "2",
      "email": "sds@efsef.com",
      "entidad": "HBO",
      "id": 2
  },
  {
      "tipoRecibo": "Consignaciones",
      "estado": false,
      "valor": "1093294660",
      "comicion": "2000",
      "fecha": "2022-11-17",
      "numCuenta": "1093294660",
      "nombre": "Geovanny Paez Pabon",
      "banco": "Daviplata",
      "id": 3
  },
  {
    "tipoRecibo": "Consignaciones",
    "estado": false,
    "valor": "1093294660",
    "comicion": "2000",
    "fecha": "2022-11-17",
    "numCuenta": "1093294660",
    "nombre": "Geovanny Paez Pabon",
    "banco": "Bancolombia",
    "idComprobante":1,
    "id": 4
},
  {
      "tipoRecibo": "Celular",
      "estado": false,
      "valor": "11",
      "comicion": "8671",
      "fecha": "2022-11-17",
      // "tipoRecarga": "Recargas Celular",
      "numCelular": "45514",
      "operador": "Claro",
      "id": 6
  },
  {
      "tipoRecibo": "FreeFire",
      "estado": false,
      "valor": "6451",
      "comicion": "562",
      "fecha": "2022-11-17",
      // "tipoRecarga": "FreeFire",
      "idFreefire": "984651",
      "id": 7
  },
  {
      "tipoRecibo": "Celular",
      "estado": false,
      "valor": "51515",
      "comicion": "846464",
      "fecha": "2022-11-17",
      // "tipoRecarga": "Recargas Celular",
      "numCelular": "4651",
      "operador": "Movistar",
      "id": 8
  },
  {
      "tipoRecibo": "Celular",
      "estado": false,
      "valor": "4615",
      "comicion": "984",
      "fecha": "2022-11-17",
      // "tipoRecarga": "Recargas Celular",
      "numCelular": "4865132",
      "operador": "Movistar",
      "id": 9
  },
  {
      "tipoRecibo": "Venezuela",
      "estado": false,
      "valor": "10000",
      "comicion": "2993",
      "fecha": "2022-11-19",
      "nombreRemitente": "Geovanny paez",
      "nombreReceptor": "Maria del pilar ",
      "ccRemitente": "1093294660",
      "ccReceptor": "61316166",
      "destino": "maracaibo Venezuela",
      "tipoDocumento": "Extranjero",
      "nombreBanco": "BBVA",
      "tipoCuenta": "Ahorro",
      "numCuenta": "5613159",
      "id": 10
  },
  {
      "tipoRecibo": "Giros",
      "estado": false,
      "valor": "199999",
      "comicion": "9998",
      "fecha": "2022-11-21",
      "nombreRemitente": "jose del pilar",
      "nombreReceptor": "maria del pilar",
      "ccRemitente": "685132",
      "ccReceptor": "651",
      "destino": "cucuta",
      "entidad": "Efecty",
      "id": 11
  }
];

module.exports=recibos;
