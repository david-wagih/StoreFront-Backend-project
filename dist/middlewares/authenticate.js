"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticate = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = String(authorizationHeader).split(" ")[1];
        jsonwebtoken_1["default"].verify(token, String(process.env.TOKEN_SECRET));
        next();
    }
    catch (err) {
        res.status(401);
        res.json("Access denied, invalid token");
        return;
    }
};
exports["default"] = authenticate;
