
const {pingController} = require('../../controllers/pingController');
const express = require('express');
const pingRouter = express.Router();



pingRouter.get('/',pingController);



module.exports = pingRouter;
