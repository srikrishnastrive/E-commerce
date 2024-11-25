function errorResponse(ReasonPhrase,error){
    return {
        success : false,
        data : {},
        message:ReasonPhrase,
        error : error
    }
}

module.exports = {
    errorResponse
}
