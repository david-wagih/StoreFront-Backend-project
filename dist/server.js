"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Order_1 = __importDefault(require("./handlers/Order"));
var Product_1 = __importDefault(require("./handlers/Product"));
var app = (0, express_1["default"])();
var port = 3000;
app.use(body_parser_1["default"].json());
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(port));
});
(0, Order_1["default"])(app);
(0, Product_1["default"])(app);
