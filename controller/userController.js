var parse = require("co-body");
var repository = require("./repository/usersRepository.js");

module.exports.createUsers = function *createUsers(){
    var theData = yield parse(this);
    repository.addUser(theData);
}