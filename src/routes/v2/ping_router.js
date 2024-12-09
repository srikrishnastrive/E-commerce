

const {pingController,pingAuthCheck} = require('../../controllers/ping_controller');
const {isLoggedIn} = require('../../middlewares/auth_middleware');
const express = require('express');
const pingRouter = express.Router();


pingRouter.get('/',pingController);
pingRouter.get('/authCheck',isLoggedIn,pingAuthCheck);


module.exports = pingRouter;
