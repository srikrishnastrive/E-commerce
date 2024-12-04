const express = require('express');
const userRouter = express.Router();
const {createUser,getUsers,getUserById,removeUser} = require('../../controllers/user_controller');
const {createUserValidator} = require('../../middlewares/user_middleware');



userRouter.post('/',createUserValidator,createUser);
userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.delete('/:id',removeUser);




module.exports = userRouter;
