const {Category} = require('../models/index');


class CategoryRepository {
     async createCategory(name,description){
        try {
            const response = await Category.create({name,description});
            return response;
        } catch (error) {
            console.log(error,"something went wrong repo");
            throw error;
        }
    }
    async getAllCategories(){
        try {
            const response = await Category.findAll();
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async getCategoryById(categoryId){
        try {
            const response = await Category.findByPk(categoryId);
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    async destroyCategoryById(categoryId){
        try {
            const response = await Category.destroy({
                where : {
                    id : categoryId
                }
            });
            return response;
        } catch (error) {
            console.log(error,"Something went wrong");
            throw error;
        }
    }
    // async getProductsForCategory(categoryId){
    //     try {
    //         const category = await Category.findByPk(categoryId);
    //         const productsByCategory = await category.getProducts();
    //         return productsByCategory;
    //     } catch (error) {
    //         console.log(error,"Something went wrong");
    //         throw error;
    //     }
    // }
}

module.exports = CategoryRepository;
