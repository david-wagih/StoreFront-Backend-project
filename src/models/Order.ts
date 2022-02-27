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

  async show(userId: number): Promise<Order> {
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

  async updateOrder(id: number, order: Order): Promise<Order> {
    try {
      const sql = "UPDATE orders SET status = $1 WHERE id = $2";
      //@ts-ignore
      const conn = await Client.connect();

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
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const deletedOrder = result.rows[0];

      conn.release();

      return deletedOrder;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
