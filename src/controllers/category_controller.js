
const CategoryService = require('../services/category_service');
const CategoryRepository = require('../repositories/category_repostiory');
const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const { errorResponse } = require('../utils/error_response');

const categoryServicer = new CategoryService(new CategoryRepository());

async function createCategory(req,res){
    console.log(req.body);
    try {
        const response = await categoryServicer.createCategory(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            error : {},
            message: ReasonPhrases.CREATED + "Category",
            data:response
        })
    } catch (error) {
        console.log(error);
        console.log("CategoryController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
        
    }
}
async function getAllCategories(req,res){
    try {
        const response = await categoryServicer.getAllCategories();
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message: ReasonPhrases.OK+"All the Categories",
            data:response,
        })
    } catch (error) {
        console.log("CategoryController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}
async function getCategory(req,res){
    try {
        const response = await categoryServicer.getCategoryById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message: ReasonPhrases.OK+"All the Categories",
            data:response,
        })

    } catch (error) {
        console.log("CategoryController : something went wrong controller",error);
        return res.status(error.statusCode).json(errorResponse(error.reason,error));
    }
}

async function destroyCategoryById(req,res) {
    try {
        const response = await categoryServicer.destroyCategoryById(req.params.id);
        return res.status(StatusCodes.OK).json({
            success:true,
            error : {},
            message:'successfully removed the cateogy',
            data:response
        })
    } catch (error) {
        console.log("CategoryController : something went wrong controller",error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse(error.reason,error));
    }
}
module.exports = {
    createCategory,
    getAllCategories,
    getCategory,
    destroyCategoryById
}
