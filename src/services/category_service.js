
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require('../errors/not_found_error');



class CategoryService{
    constructor(repository,produtRepository){
        this.repository = repository;
        this.produtRepository = produtRepository;
    }

    async getProductsForCategory(categoryId){
        try {
            await this.getCategoryById(categoryId);
            const response = await this.produtRepository.getProductsForCategory(categoryId);
            if (!response){
                console.log("CategoryService",categoryId,"not found");
                throw new NotFoundError("CategoryService",categoryId,"not found");
            }
            return response
        } catch (error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
        
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
                throw new NotFoundError("Category", "id", categoryId);
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
