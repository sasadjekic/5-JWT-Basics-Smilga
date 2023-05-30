

// Ovde cemo uvesti sve tri klase i izvesti kao jedan objekat...
const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')
const CustomAPIError = require('./custom-error')

module.exports = {
    BadRequestError,
    UnauthenticatedError,
    CustomAPIError,
}