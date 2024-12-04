const {User} = require('../models/index');
const {Op} = require('sequelize');

class UserRepository {
     async createUser(email,password){
        try {
            const response = await User.create({email,password});
            return response;
        } catch (error) {
            console.log(error,"something went wrong repo");
            throw error;
        }
    }
    async getAllUsers(){
        try {
            
            const response = User.findAll();
            return response;
           
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async getUserbyEmail(email){
        try {
            const response = User.findOne({
                where :{
                    email : email
                }
            });
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async getUserById(userId){
        try {
            const response = await User.findByPk(userId);
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async destroyUser(userId){
        try {
            const response = await User.destroy({
                where : {
                    id : userId
                }
            });
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }

    
    
}

module.exports = UserRepository;
