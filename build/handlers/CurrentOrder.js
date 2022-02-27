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
const authenticate_1 = __importDefault(require("../middlewares/authenticate"));
const CurrentOrder_1 = require("../models/CurrentOrder");
const store = new CurrentOrder_1.CurrentOrderStore();
const showCurentOrder = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Order = yield store.showCurentOrder(parseInt(_req.params.id));
        res.json(Order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const showOrderRoutes = (app) => {
    app.get("/showOrder/:id", authenticate_1.default, showCurentOrder);
};
exports.default = showOrderRoutes;
