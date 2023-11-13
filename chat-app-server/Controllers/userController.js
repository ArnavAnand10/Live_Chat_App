const express = require("express")
const UserModel = require("../modals/userModel")
const expressAsyncHandler = require("express-async-handler")
const generateToken = require("../Controllers/config/generateToken");
const e = require("express");


const loginController = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    const user = await UserModel.findOne({ email });

    if (user) {
        if ((user.password===password)) {
            res.json(
                {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin : user.isAdmin,
                    password: user.password,
                    token: generateToken(user._id),
                }
            )
        }

    } else {
        throw new Error("Username or password is incorrect");
    }


});

const registerController = expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name)

    // all fields are required
    if (!name || !email || !password) {
        res.send(400)
        throw Error("All fields are required");
    }

    // pre existing user
    const userExist = await UserModel.findOne({ email });
    
    if (userExist) {
        res.send(502)
        console.log("user exists")
        throw new Error("User already exists");
    }

    //    user name already taken
    const userNameExist = await UserModel.findOne({ name });
    if (userNameExist) {
        res.send(501)
        throw new Error("Username already taken");
    }


    //    creating user in DB

    const newUser = {
        name, email, password
    }

    const user = await UserModel.create(newUser);

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id),
            isAdmin : user.isAdmin

        })
    }
    else {
        res.status(400);
        throw new Error("Registration Failed")
    }


});

module.exports = { loginController, registerController }