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
  async create(order: Order) {
    console.log(order);
    try {
      const conn = await client.connect();
      const sql =
        "INSERT INTO orders (status,user_id) VALUES ($1, $2) RETURNING *";
      const result = await conn.query(sql, [order.status, order.user_id]);
      const newOrder = result.rows[0];
      console.log(newOrder);
      conn.release();
      return newOrder;
    } catch (error) {
      throw new Error(`unable to create order: ${error}`);
    }
  }

  async updateOrder(id: number, order: Order): Promise<Order> {
    try {
      const sql = "UPDATE orders SET status = $1 WHERE id = $2";
      const conn = await client.connect();

      const result = await conn.query(sql, [order.status, id]);

      const updatedOrder = result.rows[0];

      conn.release();

      return updatedOrder;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async deleteOrder(id: number): Promise<Order> {
    try {
      const sql = "DELETE FROM orders WHERE id = $1";
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
