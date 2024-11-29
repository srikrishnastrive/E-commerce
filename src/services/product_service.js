

const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require('../errors/not_found_error');

class productService{
    constructor(repostitory){
        this.repostitory = repostitory
    }
    async createProduct(product){
        try {
            const response = await this.repostitory.createProduct(product.title,product.description,product.price,product.image,product.categoryId);
            return response;
        } catch (error) {
            console.log(error,"something went wrong product service");
            throw new InternalServerError();
        }
        
    }
    
    async  getAllProducts(){
        try {
            const response = await this.repostitory.getAllProducts();
            return response;
        } catch (error) {
            console.log(error,"something went wrong product service");
            throw new InternalServerError();
        }
        
        
    }

   async getProductById(productId){
    try {
        const response = await this.repostitory.getProductById(productId);
        if (!response){
            console.log("productService",productId,"not found");
            throw new NotFoundError();
        }
        return response;
    } catch (error) {
        if (error.name == "NotFoundError"){
            throw error;
        }
        console.log(error,"something went wrong product service");
        throw new InternalServerError();
    }
                
    }
    async destroyProductId(productId){
        try {
           const response = await this.repostitory.destroyProductId(productId);
           if (!response){
            console.log("productService",productId,"not found");
            throw new NotFoundError();
        }
        return response;
        } catch (error) {
            if (error.name == "NotFoundError"){
                throw error;
            }
            console.log(error,"something went wrong product service");
            throw new InternalServerError();
        }
    }

    

   

}


module.exports = productService
