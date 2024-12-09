const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UserService = require('../services/user_service');
const UserRepository = require('../repositories/user_repository');
const { errorResponse } = require("../utils/error_response");
const { NODE_ENV } = require("../config/serverConfig");
const userService = new UserService(new UserRepository());
const cookieParser = require('cookie-parser');



async function createUser (req,res){
    try {

        const response = await userService.createUser(req.body);
        console.log(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error : {},
            message:ReasonPhrases.CREATED + "User",
            data : response
        });
    } catch (error) {
        console.log(error);
        console.log("UserController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
       
    }
}
async function signInUser(req,res){
    try {
        const {email,password} = req.body;
        const response = await userService.signInUser(email,password);
        res.cookie('token',response,{httpOnly:true,
            maxAge:7 * 24 * 60 * 60 * 1000,secure : NODE_ENV === "production" ? true : false,
        });
        //secure-true //https 
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:"Successfully Sign In",
            data : (NODE_ENV === 'production') ? true : response
        });
    } catch (error) {
        console.log(error);
        console.log("UserController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}
async function getUsers(req,res){
    try {
        const response = await userService.getAllUsers();
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("UserController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}
async function getUserById(req,res){
    try {
        const response = await userService.getUserById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("UserController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}

async function removeUser(req,res) {
    try {
        const response = await userService.destroyUserId(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("UserController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }  
}


module.exports = {
    createUser,
    getUsers,
    getUserById,
    removeUser,
    signInUser
   
}
