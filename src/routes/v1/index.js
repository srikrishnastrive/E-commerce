const express = require('express');

const productRouter = require('./productRouter');
const pingRouter = require('./pingRoutesv1');
const v1Router = express.Router();

v1Router.use('/ping',pingRouter);
v1Router.use('/products',productRouter);


module.exports = v1Router;
