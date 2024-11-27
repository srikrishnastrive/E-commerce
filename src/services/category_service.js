

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
        }
       
    }
    async getAllCategories(){
        try {
            const response = await this.repository.getAllCategories();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async getCategoryById(categoryId){
        try {
            const response = await this.repository.getCategoryById(categoryId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    async destroyCategoryById(categoryId){
        try {
            const response = await this.repository.destroyCategoryById(categoryId);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = CategoryService;
