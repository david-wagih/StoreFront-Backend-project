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
const Order_1 = require("../models/Order");
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const store = new Order_1.OrdersStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Orders = yield store.index();
        res.json(Orders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.id);
        const orders = yield store.show(userId);
        res.json(orders);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const order = {
            userId: parseInt(_req.body.userId),
            status: _req.body.status,
        };
        const neworder = yield store.create(order);
        res.json(neworder);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.params.id;
    const productId = req.body.productId;
    const quantity = parseInt(req.body.quantity);
    try {
        const addedProduct = yield store.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const orderRoutes = (app) => {
    app.get("/orders", index);
    app.get("/orders/:id", authenticate_1.default, show);
    app.post("/orders", authenticate_1.default, create);
    app.post("/orders/:id/products", authenticate_1.default, addProduct);
};
exports.default = orderRoutes;
