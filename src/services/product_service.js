const  products = [];
const FakeStoreRepository = require('../repositories/fake_store_repostitories');

const fakeRepostitory = new FakeStoreRepository();

class productService{
    constructor(repostitory){
        this.repostitory = repostitory
    }
    async createProduct(product){
        const response = await fakeRepostitory.createProduct(product);
        return response.data;

        // const newProduct = {
        //     id : products.length,
        //     ...product
        // }
        // products.push(newProduct);
        // return newProduct;
    }
    
    async  getAllProducts(){
        const response = await fakeRepostitory.getProducts();
        return response.data;
        //return products;
    }

   async getProduct(id){
        // const product = products.filter(product => product.id == id);
        const product = await fakeRepostitory.getProduct(id);
        return product.data;
    }

   

}


module.exports = productService
