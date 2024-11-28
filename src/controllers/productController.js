const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ProductService = require('../services/product_service');
const productRepository = require('../repositories/product_repository');
const { errorResponse } = require("../utils/error_response");



const productService = new ProductService(new productRepository());



async function createProduct (req,res){
    try {

        const response = await productService.createProduct(req.body);
        console.log(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error : {},
            message:ReasonPhrases.CREATED + "Product",
            data : response
        });
    } catch (error) {
        console.log(error);
        console.log("ProductController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
       
    }
}
async function getProducts(req,res){
    try {
        const response = await productService.getAllProducts();
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("ProductController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}
async function getProductById(req,res){
    try {
        const response = await productService.getProductById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("ProductController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}

async function removeProduct(req,res) {
    try {
        const response = await productService.getProductById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log(error);
        console.log("ProductController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }  
}

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    removeProduct
}
