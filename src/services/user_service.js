

const { ValidationErrorItem } = require("sequelize");
const { BadRequest } = require("../errors/bad_request_errors");
const ConflictError = require("../errors/conflict_error");
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require('../errors/not_found_error');

class UserService{
    constructor(repostitory){
        this.repostitory = repostitory
    }
    async createUser(user){
        try {
            const response = await this.repostitory.createUser(user.email,user.password);
            return response;
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError'){
                throw new ConflictError("user",error.errors[0].message);
            }
            if (error.name === 'SequelizeValidationError'){
                let propertiesHavingValidationIssue = '';
                let reasoning = [];
                error.errors.forEach((err)=>{
                    propertiesHavingValidationIssue+= err.path + ",";
                    reasoning.push(err.message);
                })
                throw new BadRequest(propertiesHavingValidationIssue,true,reasoning);
            }
            console.log(error,"something went wrong User service");
            throw new InternalServerError();
        }
        
    }
    
    async  getAllUsers(query){
        try {
           
            const response = await this.repostitory.getAllUsers(+query.limit,+query.offset,+query.min_price,+query.max_price,query.brand);
            return response;
        } catch (error) {
            if (error.name == "BadRequest"){
                throw error;
            }
            console.log(error,"something went wrong User service");
            throw new InternalServerError();
        }
        
        
    }

   async getUserById(userId){
    try {
        const response = await this.repostitory.getUserById(userId);
        if (!response){
            console.log("UserService",userId,"not found");
            throw new NotFoundError();
        }
        return response;
    } catch (error) {
        if (error.name == "NotFoundError"){
            throw error;
        }
        console.log(error,"something went wrong User service");
        throw new InternalServerError();
    }
                
    }
    async destroyUserId(userId){
        try {
           const response = await this.repostitory.destroyUser(userId);
           if (!response){
            console.log("UserService",userId,"not found");
            throw new NotFoundError();
        }
        return response;
        } catch (error) {
            if (error.name == "NotFoundError"){
                throw error;
            }
            console.log(error,"something went wrong User service");
            throw new InternalServerError();
        }
    }

    
    

   

}


module.exports = UserService;
