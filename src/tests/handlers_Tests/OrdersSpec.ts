import request from "supertest";
import app from "../../server";
// @ts-ignore
import DBMigrate from "db-migrate";

describe("GET /orders", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/orders");
    expect(response.status).toBe(200);
  });
});

describe("GET /orders/:id", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .get("/orders/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("DELETE /orders/:id", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "David",
      password: "123456",
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
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .put("/orders/1")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("POST /orders", () => {
  it("should return 200 OK", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    const response = await request(app)
      .post("/orders")
      .send({
        status: "pending",
        user_Id: "1",
      })
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

// afterAll(async function clearTestData() {
//   let dbMigrate = DBMigrate.getInstance(true, { env: "test" });
//   await dbMigrate.reset();
//   await dbMigrate.up();
// });
