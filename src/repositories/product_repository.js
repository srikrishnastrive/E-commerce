const {Product} = require('../models/index');
const {Op} = require('sequelize');

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
    async getAllProducts(offset,limit,min_price,max_price,brand){
        try {
            const query = {};
            if (offset){
                query.offset = offset;
            }
            if (limit){
                query.limit = limit;
            }
            const minValue = (min_price) ? min_price : Number.MIN_SAFE_INTEGER;
            const maxValue = (max_price) ? max_price : Number.MAX_SAFE_INTEGER;
            const brandValue = (brand) ? brand : null;
            const response = Product.findAll({
                where :{
                    price : {
                        [Op.between] : [minValue,maxValue]
                    },
                    title : {
                        [Op.like] : `%${brandValue}%`
                    }

                },
                ...query
            });
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

    async getProductsForCategory(categoryId){
        try {
           const response = await Product.findAll({
            where :{
                categoryId : categoryId
            }
           });
           return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async searchProducts(searchName){
        try {
            const response = await Product.findAll({
                where :{
                    title : {
                        [Op.like] : `%${searchName}%`
                    }
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
