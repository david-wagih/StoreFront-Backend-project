"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Order_1 = __importDefault(require("./handlers/Order"));
const Product_1 = __importDefault(require("./handlers/Product"));
const User_1 = __importDefault(require("./handlers/User"));
const CurrentOrder_1 = __importDefault(require("./handlers/CurrentOrder"));
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello from the Main Route!");
});
app.listen(3000, function () {
    console.log(`starting app on: ${port}`);
});
(0, Order_1.default)(app);
(0, Product_1.default)(app);
(0, User_1.default)(app);
(0, CurrentOrder_1.default)(app);
