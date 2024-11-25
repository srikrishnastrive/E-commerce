function pingController(request,response){
    return response.json({message:'ok from v1'});
}

function pingControllerV2(request,response){
    return response.json({message:'ok from v2'});
}

module.exports = {
    pingController,
    pingControllerV2,
   
}
