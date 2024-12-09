const express = require('express');

const productRouter = require('./product_router');
const pingRouter = require('./ping_router');
const categoryRouter = require('./category_router');
const userRouter = require('./user_router')
const v1Router = express.Router();

v1Router.use('/ping',pingRouter);
v1Router.use('/products',productRouter);
v1Router.use('/category',categoryRouter);
v1Router.use('/user',userRouter);


module.exports = v1Router;
