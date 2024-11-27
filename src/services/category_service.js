const { text } = require("body-parser");
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require('../errors/not_found_error');


class CategoryService{
    constructor(repository){
        this.repository = repository;
    }

    async createCategory(category){
        
        try {
            const response = await this.repository.createCategory(category.name,category.description);
            return response;
        } catch (error) {
            console.log(error,"something went wrong service");
            throw new InternalServerError();
        }
       
    }
    async getAllCategories(){
        try {
            const response = await this.repository.getAllCategories();
            return response;
        } catch (error) {
            console.log(error);
            throw new InternalServerError();
        }
    }
    async getCategoryById(categoryId){
        try {
            const response = await this.repository.getCategoryById(categoryId);
            if (!response){
                console.log("CategoryService",categoryId,"not found");
                throw new NotFoundError();
            }
            return response;
        } catch (error) {
            if (error.name ==  "NotFoundError"){
                throw error;
            }
            console.log(error);
            throw new InternalServerError();
            
        }
    }
    async destroyCategoryById(categoryId){
        try {
            const response = await this.repository.destroyCategoryById(categoryId);
            if (!response){
                console.log("CategoryService",categoryId,"not found");
                throw new NotFoundError();
            }
            return response;
        } catch (error) {
            console.log(error);
            throw new InternalServerError();
        }
    }
}

module.exports = CategoryService;
