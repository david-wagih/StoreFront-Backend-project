CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(50),
      lastName VARCHAR(50),
      password text);

INSERT INTO users (firstName, lastName, password) VALUES ('John', 'Doe', 'password');
INSERT INTO users (firstName, lastName, password) VALUES ('John', 'Doe', 'password');
INSERT INTO users (firstName, lastName, password) VALUES ('John', 'Doe', 'password');
INSERT INTO users (firstName, lastName, password) VALUES ('John', 'Doe', 'password');
INSERT INTO users (firstName, lastName, password) VALUES ('John', 'Doe', 'password');

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    price integer NOT NULL
);

INSERT INTO products (name, price) VALUES ('Product 1', 100);
INSERT INTO products (name, price) VALUES ('Product 2', 200);
INSERT INTO products (name, price) VALUES ('Product 3', 300);
INSERT INTO products (name, price) VALUES ('Product 4', 400);
INSERT INTO products (name, price) VALUES ('Product 5', 500);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15)
    );


CREATE TABLE order_products( 
    id SERIAL PRIMARY KEY, 
    user_id bigint REFERENCES users(id), 
    product_id bigint REFERENCES products(id), 
    quantity integer NOT NULL
);


   