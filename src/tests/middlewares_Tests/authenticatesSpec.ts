import request from "supertest";
import app from "../../server";

describe("Authentication method", () => {
  it("should return status 200", async () => {
    const user = {
      firstName: "John",
      password: "password",
    };
    const token = await request(app).post("/user/login").send(user);
    expect(token.status).toBe(200);
  });
});
