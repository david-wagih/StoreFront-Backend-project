CREATE TABLE order_products( 
    id SERIAL PRIMARY KEY, 
    order_id bigint REFERENCES orders(id), 
    product_id bigint REFERENCES products(id), 
    quantity integer NOT NULL
);

    INSERT INTO order_products (order_id, product_id, quantity) VALUES (2, 2, 2);
    INSERT INTO order_products (order_id, product_id, quantity) VALUES (4, 2, 4);
    INSERT INTO order_products (order_id, product_id, quantity) VALUES (5, 2, 5);
    


   