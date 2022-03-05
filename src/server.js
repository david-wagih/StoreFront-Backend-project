"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var Order_1 = require("./handlers/Order");
var Product_1 = require("./handlers/Product");
var User_1 = require("./handlers/User");
var app = (0, express_1["default"])();
var port = 3000;
app.use(body_parser_1["default"].json());
app.get("/", function (req, res) {
    res.send("Hello from the Main Route!");
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(port));
});
(0, Order_1["default"])(app);
(0, Product_1["default"])(app);
(0, User_1["default"])(app);
exports["default"] = app;
