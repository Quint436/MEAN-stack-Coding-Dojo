var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded()); // app.use() is a moethod to configure the middleware used by the routes
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var server = app.listen(3000, function() {
    console.log("listening on port 3000")
});

var route = require("./routes/index.js")(app, server);
