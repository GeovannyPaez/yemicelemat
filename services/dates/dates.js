const currentDate = new Date();

class Dates {
  constructor() {}
  getDateCurrent() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Los meses empiezan en 0 (enero)
      const day = currentDate.getDate();
      // const yesterdayDate=  `${year}-${month}-${day-1}`
      const dateCurrent= `${year}-${month}-${day}`
    return dateCurrent
  }
}
module.exports = Dates
