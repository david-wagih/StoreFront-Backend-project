import request from "supertest";
import app from "../../server";

describe("GET /products", () => {
  it("should return all products", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("GET /products/:id", () => {
  it("should return a product", async () => {
    const response = await request(app).get("/products/4");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("POST /products", () => {
  it("should create a product", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const newProduct = {
      name: "Test Product",
      price: 100,
    };
    const response = await request(app)
      .post("/products")
      .send(newProduct)
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("PUT /products/:id", () => {
  it("should update a product", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const newProduct = {
      name: "Updated Test Product",
      price: 100,
    };
    const response = await request(app)
      .put("/products/4")
      .send(newProduct)
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("DELETE /products/:id", () => {
  it("should delete a product", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const response = await request(app)
      .delete("/products/3")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});
