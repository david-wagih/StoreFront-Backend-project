import bcrypt from "bcrypt";
import Client from "../database";
import jwt from "jsonwebtoken";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
};

const pepper = String(process.env.BCRYPT_PASSWORD);
const saltRounds = String(process.env.SALT_ROUNDS);
export class UsersStore {
  // this is the CREATE method
  // todo : we will use here the JWT token to create the user
  async create(u: User): Promise<User> {
    try {
      const conn = await Client.connect();
      const sql =
        "INSERT INTO users (firstName, lastName , password) VALUES($1, $2 , $3) RETURNING *";

      const hash = bcrypt.hashSync(u.password + pepper, parseInt(saltRounds));

      const result = await conn.query(sql, [u.firstName, u.lastName, hash]);
      const user = result.rows[0];

      conn.release();

      return user;
    } catch (err) {
      throw new Error(`unable create user (${u.firstName}): ${err}`);
    }
  }

  async authenticate(u: User): Promise<User | null> {
    try {
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE firstName = $1";
      const result = await conn.query(sql, [u.firstName]);
      const user = result.rows[0];

      conn.release();

      if (user && bcrypt.compareSync(u.password + pepper, user.password)) {
        return user;
      } else {
        return null;
      }
    } catch (err) {
      throw new Error(`unable to authenticate user (${u.firstName}): ${err}`);
    }
  }
}
