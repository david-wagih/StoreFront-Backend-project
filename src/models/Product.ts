import client from "../database";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export class ProductsStore {
  // this is the GET method to get List of products
  async index() {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      const products = result.rows;
      conn.release();
      return products;
    } catch (error) {
      throw new Error(`unable to get products: ${error}`);
    }
  }
}
