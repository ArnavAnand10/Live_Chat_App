const express =  require("express");
const {loginController,registerController}= require("../Controllers/userController")
var  Router = express.Router();






Router.post('/login',loginController);
Router.post('/register',registerController);

module.exports =Router;