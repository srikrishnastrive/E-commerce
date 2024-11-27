const express = require('express');

const productRouter = require('./productRouter');
const pingRouter = require('./pingRoutesv1');
const categoryRouter = require('./category_router');
const v1Router = express.Router();

v1Router.use('/ping',pingRouter);
v1Router.use('/products',productRouter);
v1Router.use('/category',categoryRouter);


module.exports = v1Router;
