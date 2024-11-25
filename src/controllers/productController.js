const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const productService = require('../services/product_service');

function productController (req,res)  {
    return res.json({message:'product ok'});
}

function createProduct (req,res){
    try {

        const response = productService.createProduct(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error : {},
            message:ReasonPhrases.CREATED + "Product",
            data : response
        });
    } catch (error) {
        console.log("something went wrong");
    }
}
function getProducts(req,res){
    try {
        const response = productService.getAllProducts();
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log("something went wrong");
    }
}
function getProductById(req,res){
    try {

        const response = productService.getProduct(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:ReasonPhrases.OK,
            data:response
        });
    } catch (error) {
        console.log("something went wrong");
    }
}

module.exports = {
    productController,
    createProduct,
    getProducts,
    getProductById
}
