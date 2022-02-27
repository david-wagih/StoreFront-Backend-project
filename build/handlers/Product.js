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
const Product_1 = require("../models/Product");
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const store = new Product_1.ProductsStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Products = yield store.index();
        res.json(Products);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Product = yield store.show(parseInt(req.params.id));
        res.json(Product);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const product = {
            name: req.body.name,
            price: req.body.price,
        };
        const newProduct = yield store.create(product);
        res.json(newProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // @ts-ignore
        const deletedProduct = yield store.delete(req.params.id);
        res.json(deletedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const productRoutes = (app) => {
    app.get("/products", index);
    app.get("/products/:id", show);
    app.post("/products", authenticate_1.default, create);
    app.delete("/products/:id", authenticate_1.default, deleteProduct);
};
exports.default = productRoutes;
