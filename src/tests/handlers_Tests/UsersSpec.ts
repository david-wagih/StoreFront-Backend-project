import { UsersStore } from "../../models/User";
import request from "supertest";
import app from "../../server";

const store = new UsersStore();

describe("POST /user", () => {
  it("should return a token", async () => {
    const user = {
      firstName: "david",
      lastName: "wagih",
      password: "dazy123",
    };
    const res = await request(app).post("/user").send(user);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
});

describe("POST /user/login", () => {
  it("should return a token", async () => {
    const user = {
      firstName: "david",
      password: "dazy123",
    };
    const res = await request(app).post("/user/login").send(user);
    console.log(res.body);
    expect(res.status).toBe(200);
  });
});

// todo : needs authentication

describe("GET /user", () => {
  it("should return a 200 response", async () => {
    const res = await request(app).get("/user");
    expect(res.status).toBe(200);
  });
});
