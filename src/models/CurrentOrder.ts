export type CurrentOrder = {
  id: number;
  quantity: number;
  order_id: number;
  product_id: number;
};

export class CurrentOrderStore {
  async showCurentOrder(id: number): Promise<CurrentOrder> {
    try {
      const sql =
        " SELECT name , price , order_id , product_id FROM products INNER JOIN order_products ON prdoucts.id = order_products.product_id WHERE order_products.order_id = $1";
      //@ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const orders = result.rows;

      conn.release();

      return orders;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }
}
