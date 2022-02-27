import request from "supertest";
import app from "../../server";

describe("GET /orders", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/orders");
    expect(response.status).toBe(200);
  });
});

describe("GET /orders/:id", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "david",
      password: "dazy123",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .get("/orders/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("POST /orders", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "david",
      password: "dazy123",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .post("/orders")
      .send({
        userId: 1,
        status: "pending",
      })
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("DELETE /orders/:id", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "david",
      password: "dazy123",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .delete("/orders/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("PUT /orders/:id", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "david",
      password: "dazy123",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .put("/orders/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});
