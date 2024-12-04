const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class BadRequest extends Error {
    constructor(property,inValidProperty = null,reason = null){
        const errorMessage =(inValidProperty) ?`${property} is invalid in  the request body` :  `${property} is missing from the request body`;
        super(errorMessage);
        this.statusCode = StatusCodes.BAD_REQUEST;
        this.reason = (reason) ? reason : ReasonPhrases.BAD_REQUEST,
        this.errorMessage = errorMessage;
        this.name = 'BadRequest'
        
    }
}


module.exports = {
    BadRequest
}
