const express = require('express');
const productRouter = express.Router();
const {createProduct,getProducts,getProductById,removeProduct,searchProducts} = require('../../controllers/productController');
const {createProductValidator} = require('../../middlewares/product_middlewars');



productRouter.post('/',createProductValidator,createProduct);
productRouter.get('/',getProducts);
productRouter.get('/:id',getProductById);
productRouter.delete('/:id',removeProduct);
productRouter.post('/search',searchProducts);



module.exports = productRouter;
