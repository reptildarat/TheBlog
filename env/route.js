var route = require("koa-route");

var usersController = require("./controller/userController.js");

module.exports.postUsers = route.post("/users/create", usersController.createUsers());