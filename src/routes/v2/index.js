const express = require('express');

const productRouter = require('./productRouter');
const pingRouter = require('./pingRoutesv2');
const v2Router = express.Router();

v2Router.use('/ping',pingRouter);
v2Router.use('/products',productRouter);


module.exports = v2Router;
