const {JWT_EXPIRY,JWT_SECRET} = require('../config/serverConfig');

const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized_error');

function generateJWT(payload){
    return jwt.sign(payload,JWT_SECRET,{expiresIn : JWT_EXPIRY});
}

function verifyJwtToken(token){
    try {
        return jwt.verify(token,JWT_SECRET);
    } catch (error) {
        throw new UnauthorizedError();
    }
    
}



module.exports = {
    generateJWT,
    verifyJwtToken
}
