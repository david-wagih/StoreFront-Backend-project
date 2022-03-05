import client from "../database";

export type Order = {
  id: number;
  status: string;
  user_id: number;
};

export class OrdersStore {
  async index(): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders";
      const conn = await client.connect();

      const result = await conn.query(sql);

      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
  async show(id: number): Promise<Order> {
    try {
      const sql = "SELECT * FROM orders WHERE id=($1)";
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);
      const orders = result.rows[0];

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async showByUser(id: number): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders WHERE user_id=($1)";
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);
      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async create(order: Order) {
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO orders (user_id , status) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [order.user_id, order.status]);
      const newOrder = result.rows[0];
      conn.release();
      return newOrder;
    } catch (error) {
      throw new Error(`unable to create order: ${error}`);
    }
  }

  async updateOrder(id: number, order: Order): Promise<Order> {
    try {
      const sql = "UPDATE orders SET status = $2   WHERE id = $1 RETURNING *";
      const conn = await client.connect();

      const result = await conn.query(sql, [id, order.status]);

      const updatedOrder = result.rows[0];

      conn.release();

      return updatedOrder;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async deleteOrder(id: number): Promise<Order> {
    try {
      const sql = "DELETE FROM orders WHERE id = $1 RETURNING *";
      const conn = await client.connect();

      const result = await conn.query(sql, [id]);

      const deletedOrder = result.rows[0];

      conn.release();

      return deletedOrder;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
