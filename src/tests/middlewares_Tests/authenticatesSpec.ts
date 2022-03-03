import request from "supertest";
import app from "../../server";

describe("Authentication method", () => {
  it("should return status 200", async () => {
    const user = {
      firstName: "David",
      password: "123456",
    };
    const token = await request(app).post("/user/login").send(user);
    expect(token.status).toBe(200);
  });
});
