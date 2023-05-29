//uvozimo nasu klasu 
const CustomAPIError = require("./custom-error")



class UnauthenticatedError extends CustomAPIError {
    constructor(message) { //statusCode) - ovo je izbaceno
      super(message)
      this.statusCode = 401 //ovde direktno navodimo kod greske
    }
  }
  
  module.exports = UnauthenticatedError