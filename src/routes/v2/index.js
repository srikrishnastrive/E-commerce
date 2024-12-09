const express = require('express');

const productRouter = require('./product_router');
const pingRouter = require('./product_router');
const v2Router = express.Router();

v2Router.use('/ping',pingRouter);
v2Router.use('/products',productRouter);


module.exports = v2Router;
