var app = module.exports = require("koa")();
var routes = require("./env/route.js");

app.use(routes.postUsers);

app.use(function *(){
    this.body = "You Reach Index Page!";
});

app.listen(process.env.PORT);

console.log("Application Running on " + process.env.PORT + " And URL: " + process.env.C9_HOSTNAME);