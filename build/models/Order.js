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
exports.OrdersStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrdersStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM orders";
                //@ts-ignore
                const conn = yield Client.connect();
                const result = yield conn.query(sql);
                const orders = result.rows;
                conn.release();
                return orders;
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        });
    }
    create(order) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "INSERT INTO products (name, price) VALUES ($1, $2)";
                const result = yield conn.query(sql, [order.id, order.status]);
                const newOrder = result.rows[0];
                conn.release();
                return newOrder;
            }
            catch (error) {
                throw new Error(`unable to create order: ${error}`);
            }
        });
    }
    addProduct(quantity, orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            // get order to see if it is open
            try {
                const ordersql = "SELECT * FROM orders WHERE id=($1)";
                //@ts-ignore
                const conn = yield Client.connect();
                const result = yield conn.query(ordersql, [orderId]);
                const order = result.rows[0];
                if (order.status !== "open") {
                    throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`);
                }
                conn.release();
            }
            catch (err) {
                throw new Error(`${err}`);
            }
            try {
                const sql = "INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
                //@ts-ignore
                const conn = yield Client.connect();
                const result = yield conn.query(sql, [quantity, orderId, productId]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (err) {
                throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`);
            }
        });
    }
    show(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM orders WHERE user_id=($1)";
                //@ts-ignore
                const conn = yield Client.connect();
                const result = yield conn.query(sql, [userId]);
                const orders = result.rows;
                conn.release();
                return orders;
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        });
    }
}
exports.OrdersStore = OrdersStore;
