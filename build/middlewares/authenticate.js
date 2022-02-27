"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = String(authorizationHeader);
        console.log(token);
        jsonwebtoken_1.default.verify(token, String(process.env.TOKEN_SECRET));
        next();
    }
    catch (err) {
        res.status(401);
        res.json("Access denied, invalid token");
        return;
    }
};
exports.default = authenticate;
