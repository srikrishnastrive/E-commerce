const { BadRequest } = require('../errors/bad_request_errors');
const {errorResponse} = require('../utils/error_response');
const {StatusCodes,ReasonPhrases} = require('http-status-codes')
function createUserValidator(req,res,next){
    if (!req.body.email){
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new BadRequest("Email")));

    }
    if (!req.body.password){
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse(ReasonPhrases.BAD_REQUEST,new BadRequest("Password")));
    }
   
    next();
}

module.exports = {
    createUserValidator
}
