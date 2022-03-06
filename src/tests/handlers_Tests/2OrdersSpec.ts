import request from "supertest";
import app from "../../server";

describe("GET /orders", () => {
  it("should return all orders", async () => {
    const response = await request(app).get("/orders");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("GET /orders/:id", () => {
  it("should return an order", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const response = await request(app)
      .get("/orders/2")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("POST /orders", () => {
  it("should create an order", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const newOrder = {
      status: "pending",
      user_id: 2,
    };
    const response = await request(app)
      .post("/orders")
      .send(newOrder)
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("GET /orders/:user_id", () => {
  it("should return Current Order for a user", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const response = await request(app)
      .get("/orders/2")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("PUT /orders/:id", () => {
  it("should update an order", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const newOrder = {
      status: "confirmed",
      user_id: 2,
    };
    const response = await request(app)
      .put("/orders/2")
      .send(newOrder)
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("DELETE /orders/:id", () => {
  it("should delete an order", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const response = await request(app)
      .delete("/orders/3")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});
