import client from "../database";

export type Order_Products = {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
};

export class Order_ProductsStore {
  async GetOrder(id: number): Promise<Order_Products[]> {
    try {
      const sql =
        "SELECT name,  price from products JOIN order_products ON products.id = order_products.product_id WHERE order_id = $1";
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);

      const order_products = result.rows;

      conn.release();

      return order_products;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async addProduct(cart: Order_Products): Promise<Order_Products[]> {
    try {
      const sql =
        "INSERT INTO order_products (order_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *";
      const result = await client.query(sql, [
        cart.order_id,
        cart.product_id,
        cart.quantity,
      ]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }
}
