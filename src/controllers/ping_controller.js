

function pingController(request,response){
    return response.json({message:'ok from v1'});
}

function pingControllerV2(request,response){
    return response.json({message:'ok from v2'});
}

function pingAuthCheck(req,res){
    return res.json({message:'OK'});
}

module.exports = {
    pingController,
    pingControllerV2,
    pingAuthCheck
   
}
