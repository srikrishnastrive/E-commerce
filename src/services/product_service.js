const  products = [];

function createProduct(product){
    const newProduct = {
        id : products.length,
        ...product
    }
    products.push(newProduct);
    return newProduct;
}

function getAllProducts(){
    return products;
}
function getProduct(id){
    const product = products.filter(product => product.id == id);
    return product;
}

module.exports = {
    createProduct,
    getAllProducts,
    getProduct
    
}
