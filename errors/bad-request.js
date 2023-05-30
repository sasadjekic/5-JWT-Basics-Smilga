
//uvozimo nasu klasu 
const CustomAPIError = require("./custom-error")

//ovde koristimo modul za status code - sa imenom umesto brojem - ovde destruktuiramo sta nam treba
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

class BadRequest extends CustomAPIError {
    constructor(message) { //statusCode) - ovo je izbaceno
      super(message)
      //koriscenje modula i objekta ili metoda StatusCodes (imamo i npr ReasonPhrases)
      this.statusCode = StatusCodes.BAD_REQUEST // umesto broja 400 //ovde direktno navodimo kod greske
    }
  }
  
  module.exports = BadRequest