import client from "../database";

export type Product = {
  id: number;
  name: string;
  price: number;
};

export class ProductsStore {
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

  async delete(id: number) {
    try {
      const conn = await client.connect();
      const sql = "DELETE FROM products WHERE id = $1";
      const result = await conn.query(sql, [id]);
      conn.release();
      return result;
    } catch (error) {
      throw new Error(`unable to delete product: ${error}`);
    }
  }

  async update(id: number, product: Product) {
    try {
      const conn = await client.connect();
      const sql = "UPDATE products SET name = $1, price = $2 WHERE id = $3";
      const result = await conn.query(sql, [product.name, product.price, id]);
      conn.release();
      return result;
    } catch (error) {
      throw new Error(`unable to update product: ${error}`);
    }
  }
}
