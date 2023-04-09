const express =  require("express");


const userRoute = express.Router();

const userController = require('../Controllers/user.controller');

userRoute.get('/', userController.getUsers);

userRoute.get('/:id', userController.getUserByID);

userRoute.post('/', userController.createUser);

userRoute.patch('/:id', userController.updateUserById);

userRoute.delete('/:id', userController.deleteUserdataById);



module.exports = userRoute;
