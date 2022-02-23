import client from "../database";

export type Order = {
  id: number;
  userId: number;
  status: string;
};

export class OrdersStore {
  async index(): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders";
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql);

      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  // Create a new order
  // todo : it needs JWT here
  async create(order: Order) {
    try {
      const conn = await client.connect();
      const sql = "INSERT INTO products (name, price) VALUES ($1, $2)";
      const result = await conn.query(sql, [order.id, order.status]);
      const newOrder = result.rows[0];
      conn.release();
      return newOrder;
    } catch (error) {
      throw new Error(`unable to create order: ${error}`);
    }
  }

  // add products to an order
  // todo : we need JWT here
  async addProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<Order> {
    // get order to see if it is open
    try {
      const ordersql = "SELECT * FROM orders WHERE id=($1)";
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(ordersql, [orderId]);

      const order = result.rows[0];

      if (order.status !== "open") {
        throw new Error(
          `Could not add product ${productId} to order ${orderId} because order status is ${order.status}`
        );
      }

      conn.release();
    } catch (err) {
      throw new Error(`${err}`);
    }

    try {
      const sql =
        "INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [quantity, orderId, productId]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (err) {
      throw new Error(
        `Could not add product ${productId} to order ${orderId}: ${err}`
      );
    }
  }

  // show Orders of specific User
  // todo: need JWT also

  async show(userId: number): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders WHERE user_id=($1)";
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [userId]);

      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
