const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const productService = require('../services/product_service');

const FakeStoreRepository = require("../repositories/fake_store_repostitories");

const productServicewithFakeStoreRepo = new productService(new FakeStoreRepository);

function productController (req,res)  {
    return res.json({message:'product ok'});
}

async function createProduct (req,res){
    try {

        const response = await productServicewithFakeStoreRepo.createProduct(req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error : {},
            message:ReasonPhrases.CREATED + "Product",
            data : response
        });
    } catch (error) {
        console.log("something went wrong",error);
    }
}
async function getProducts(req,res){
    try {
        const response = await productServicewithFakeStoreRepo.getAllProducts();
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log("something went wrong",error);
    }
}
async function getProductById(req,res){
    try {

        const response = await productServicewithFakeStoreRepo.getProduct(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log("something went wrong",error);
    }
}

module.exports = {
    productController,
    createProduct,
    getProducts,
    getProductById
}
