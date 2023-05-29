
//uvozimo nasu klasu 
const CustomAPIError = require("./custom-error")



class BadRequest extends CustomAPIError {
    constructor(message) { //statusCode) - ovo je izbaceno
      super(message)
      this.statusCode = 400 //ovde direktno navodimo kod greske
    }
  }
  
  module.exports = BadRequest