"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const store = new User_1.UsersStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield store.index();
        res.json(user);
    }
    catch (err) {
        res.status(404);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield store.show(parseInt(id));
        res.json(user);
    }
    catch (err) {
        res.status(404);
        res.json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    };
    try {
        const newUser = yield store.create(user);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, String(process.env.TOKEN_SECRET));
        res.json(token);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const user = {
        firstName: req.body.firstName,
        password: req.body.password,
    };
    try {
        const u = yield store.login(user);
        var token = jsonwebtoken_1.default.sign({ user: u }, String(process.env.TOKEN_SECRET));
        res.json(token);
    }
    catch (error) {
        res.status(401);
        res.json({ error });
    }
});
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield store.deleteUser(Number(req.params.id));
        res.json(deletedUser);
    }
    catch (err) {
        res.status(404);
        res.json(err);
    }
});
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield store.updateUser(Number(req.params.id), req.body);
        res.json(updatedUser);
    }
    catch (err) {
        res.status(404);
        res.json(err);
    }
});
const userRoutes = (app) => {
    app.get("/user", authenticate_1.default, index);
    app.get("/user/:id", authenticate_1.default, show);
    app.post("/user", create);
    app.post("/user/login", login);
    app.delete("/user/:id", authenticate_1.default, deleteUser);
    app.put("/user/:id", authenticate_1.default, updateUser);
};
exports.default = userRoutes;
