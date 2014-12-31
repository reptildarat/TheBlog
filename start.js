var app = module.exports = require("koa")();
var routes = require("koa-routes");

app.use(function *(){
    console.log(this.request);
});

app.listen(process.env.PORT);

console.log("Application Running on " + process.env.PORT + " And URL: " + process.env.C9_HOSTNAME);