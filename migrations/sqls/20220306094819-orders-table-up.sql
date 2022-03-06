CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    user_id bigint REFERENCES users(id)
    );

    INSERT INTO orders (status, user_id) VALUES ('active', 2);
    INSERT INTO orders (status, user_id) VALUES ('active', 2);
    INSERT INTO orders (status, user_id) VALUES ('active', 2);
    INSERT INTO orders (status, user_id) VALUES ('active', 2);
    INSERT INTO orders (status, user_id) VALUES ('active', 2);