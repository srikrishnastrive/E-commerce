const {Product} = require('../models/index');


class ProductRepository {
     async createProduct(title,description,price,image,categoryId){
        try {
            const response = await Product.create({title,description,price,image,categoryId});
            return response;
        } catch (error) {
            console.log(error,"something went wrong repo");
            throw error;
        }
    }
    async getAllProducts(){
        try {
            const response = await Product.findAll();
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async getProductById(productId){
        try {
            const response = await Product.findByPk(productId);
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async destroyProductId(productId){
        try {
            const response = await Product.destroy({
                where : {
                    id : productId
                }
            });
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
}

module.exports = ProductRepository;
