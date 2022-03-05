# All the Detailed Routes for Our Apis :

## User Apis :

- GET http://localhost:3000/user (to get a list of all users)
- GET http://localhost:3000/user/:id (to get a specific user , needs Authorization)
- POST http://localhost:3000/user (to create a new user)
- POST http://localhost:3000/user/login (to login a user)
- PUT http://localhost:3000/user/:id (to update the data of a user , needs Authorization)
- DELETE http://localhost:3000/user/:id (to delete certain user , needs Authorization )

## Product Apis :

- GET http://localhost:3000/products (to get a list of all products)
- GET http://localhost:3000/products/:id (to get a specific product)
- POST http://localhost:3000/products (to create a new product , need Authorization)
- PUT http://localhost:3000/products/:id (to update the data of a product , needs Authorization)
- DELETE http://localhost:3000/products/:id (to delete certain product , needs Authorization )

## Order Apis :

- GET http://localhost:3000/orders (to get a list of all orders)
- GET http://localhost:3000/orders/:id (to get a specific order , need Authorization)
- POST http://localhost:3000/orders (to create a new order , need Authorization)
- GET http://localhost:3000/orders/:user_id/currentOrder (to get current order with status pending for specific user , need Authorization )
- PUT http://localhost:3000/orders/:id (to update the data of a order , needs Authorization)
- DELETE http://localhost:3000/orders/:id (to delete certain order , needs Authorization )

<!-- # API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index
- Show
- Create [token required]
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders

- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete) -->
