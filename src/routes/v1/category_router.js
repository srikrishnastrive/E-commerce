const express = require('express');
const  categoryRouter = express.Router();
const {createCategory,getAllCategories,getCategory,destroyCategoryById,getProductsForCategory} = require('../../controllers/category_controller');

categoryRouter.post('/',createCategory);
categoryRouter.get('/',getAllCategories);
categoryRouter.get('/:id',getCategory);
categoryRouter.delete('/:id',destroyCategoryById);
categoryRouter.get('/:id/products',getProductsForCategory);

module.exports = categoryRouter

