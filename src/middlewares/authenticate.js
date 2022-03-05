"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
var authenticate = function (req, res, next) {
    try {
        var authorizationHeader = req.headers.authorization;
        var token = String(authorizationHeader);
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
