const express = require('express');
const productRouter = express.Router();
const {createProduct,getProducts,getProductById} = require('../../controllers/productController');
const {createProductValidator} = require('../../middlewares/product_middlewars');



productRouter.post('/',createProductValidator,createProduct);
productRouter.get('/',getProducts);
productRouter.get('/:id',getProductById)

module.exports = productRouter;
