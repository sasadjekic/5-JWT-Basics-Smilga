class CustomAPIError extends Error {
  constructor(message) { //statusCode) - ovo je izbaceno
    super(message)
    //Ovo izbacujemo i pravimo posebne klase gresaka za 400 i 401
    //this.statusCode = statusCode
  }
}

module.exports = CustomAPIError
