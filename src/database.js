"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, ENV = _a.ENV, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_PORT = _a.POSTGRES_PORT;
var client;
if (ENV === "dev") {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        port: Number(POSTGRES_PORT),
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
else {
    client = new pg_1.Pool({
        host: POSTGRES_HOST,
        port: Number(POSTGRES_PORT),
        database: POSTGRES_DB_TEST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports["default"] = client;
