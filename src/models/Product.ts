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

  async show(id: number) {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM products WHERE id = $1";
      const result = await conn.query(sql, [id]);
      const product = result.rows[0];
      conn.release();
      return product;
    } catch (error) {
      throw new Error(`unable to get product: ${error}`);
    }
  }

  // CREATE METHOD REQUIRES TOKEN AUTHENTICATION
  // todo : needs the JWT token to be passed in the header
  async create(product: Product) {
    try {
      const conn = await client.connect();
      const sql = "INSERT INTO products (name, price) VALUES ($1, $2)";
      const result = await conn.query(sql, [product.name, product.price]);
      const newProduct = result.rows[0];
      conn.release();
      return newProduct;
    } catch (error) {
      throw new Error(`unable to create product: ${error}`);
    }
  }
}
