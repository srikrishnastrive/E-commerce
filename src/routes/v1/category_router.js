const express = require('express');
const  categoryRouter = express.Router();
const {createCategory,getAllCategories,getCategory,destroyCategoryById} = require('../../controllers/category_controller');

categoryRouter.post('/',createCategory);
categoryRouter.get('/',getAllCategories);
categoryRouter.get('/:id',getCategory);
categoryRouter.delete('/:id',destroyCategoryById);

module.exports = categoryRouter

