// This file will contain the specification model of the User

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    active: Boolean,
    token: String
});

const userModel = mongoose.model("UserModel", userSchema);

module.exports = userModel;
