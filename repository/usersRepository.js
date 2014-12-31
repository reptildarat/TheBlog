var monk = require("monk");
var wrap = require("co-monk");
var db = monk("localhost/Users");
var users = wrap(db.get("users"));

module.exports.users = users;

module.exports.addUser = function *addUser(data){
    var insertedUser = yield users.insert(data);
    return insertedUser._id;
}


