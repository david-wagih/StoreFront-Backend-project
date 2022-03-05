import request from "supertest";
import app from "../../server";

describe("GET /products", () => {
  it("should return response of 200", async () => {
    const response = await request(app).get("/products");
    expect(response.status).toBe(200);
  });
});

// todo : problem here
describe("GET /products/:id", () => {
  it("should return response of 200", async () => {
    const response = await request(app).get("/products/1");
    expect(response.status).toBe(200);
  });
});

describe("POST /products", () => {
  it("should return response of 200", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .post("/products")
      .send({
        name: "test",
        price: "100",
      })
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("DELETE /products/:id", () => {
  it("should return response of 200", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .delete("/products/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("PUT /products/:id", () => {
  it("should return response of 200", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .put("/products/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});
