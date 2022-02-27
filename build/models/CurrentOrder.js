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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentOrderStore = void 0;
class CurrentOrderStore {
    showCurentOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = " SELECT name , price , order_id , product_id FROM products INNER JOIN order_products ON prdoucts.id = order_products.product_id WHERE order_products.order_id = $1";
                //@ts-ignore
                const conn = yield Client.connect();
                const result = yield conn.query(sql, [id]);
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
exports.CurrentOrderStore = CurrentOrderStore;
