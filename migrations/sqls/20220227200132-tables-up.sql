CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      password text);
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price integer NOT NULL
);
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    user_id bigint REFERENCES users(id),
    product_id bigint REFERENCES products(id),
    quantity integer NOT NULL
    );
