const express = require('express');
const userRouter = express.Router();
const {createUser,getUsers,getUserById,removeUser,signInUser} = require('../../controllers/user_controller');
const {createUserValidator} = require('../../middlewares/user_middleware');



userRouter.post('/signup',createUserValidator,createUser);
userRouter.post('/signin',createUserValidator,signInUser);
userRouter.get('/',getUsers);
userRouter.get('/:id',getUserById);
userRouter.delete('/:id',removeUser);




module.exports = userRouter;
