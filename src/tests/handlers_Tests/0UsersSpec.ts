import request from "supertest";
import app from "../../server";

describe("Get /user index", () => {
  it("should return a list of users", async () => {
    const user = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user);
    const response = await request(app)
      .get("/user")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Get /user/:id show", () => {
  it("should return a user", async () => {
    const user = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user);
    const response = await request(app)
      .get("/user/2")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("Post /user create", () => {
  it("should create a user", async () => {
    const user = {
      firstName: "mohamed",
      lastName: "salah",
      password: "liver123",
    };
    const response = await request(app).post("/user").send(user);
    expect(response.status).toBe(200);
  });
});

describe("POST /user/login", () => {
  it("should login a user", async () => {
    const user = {
      firstName: "mohamed",
      password: "liver123",
    };
    const response = await request(app).post("/user/login").send(user);
    expect(response.status).toBe(200);
  });
});

describe("Put /user/:id update", () => {
  it("should update a user", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const user = {
      firstName: "mohamed",
      lastName: "salah",
      password: "pool5678",
    };
    const response = await request(app)
      .put("/user/2")
      .send(user)
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});

describe("Delete /user/:id delete", () => {
  it("should delete a user", async () => {
    const user1 = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user").send(user1);
    const response = await request(app)
      .delete("/user/3")
      .set("Authorization", token.body);
    expect(response.status).toBe(200);
  });
});
