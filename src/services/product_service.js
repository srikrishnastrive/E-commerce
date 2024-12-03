

const { BadRequest } = require("../errors/bad_request_errors");
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
    
    async  getAllProducts(query){
        try {
            if ((query.limit && isNaN(query.limit)) || (query.offset && isNaN(query.offset))){
                throw new BadRequest("limit,offset",true);
            }
            if (query.min_price && isNaN(query.min_price)){
                throw new BadRequest("minimum price",true);
            }
            if (query.max_price && isNaN(query.max_price)){
                throw new BadRequest("maximum price",true);
            }
            const response = await this.repostitory.getAllProducts(+query.limit,+query.offset,+query.min_price,+query.max_price);
            return response;
        } catch (error) {
            if (error.name == "BadRequest"){
                throw error;
            }
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
