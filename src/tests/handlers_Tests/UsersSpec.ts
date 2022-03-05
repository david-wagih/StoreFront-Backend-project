// import request from "supertest";
// import app from "../../server";

// // Create new user
// describe("POST /user", () => {
//   it("should return a token", async () => {
//     const user = {
//       firstName: "David",
//       lastName: "Wagih",
//       password: "123456",
//     };
//     const res = await request(app).post("/user").send(user);
//     expect(res.status).toBe(200);
//   });
// });

// // Login
// describe("POST /user/login", () => {
//   it("should return a token", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const res = await request(app).post("/user/login").send(user);
//     expect(res.status).toBe(200);
//   });
// });

// // Get All Users
// describe("GET /user", () => {
//   it("should return a 200 response", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const res = await request(app)
//       .get("/user")
//       .set("Authorization", token.body);
//     expect(res.status).toBe(200);
//   });
// });

// // Show User

// describe("GET /user/:id", () => {
//   it("should return a 200 response", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const res = await request(app)
//       .get("/user/1")
//       .set("Authorization", token.body);
//     expect(res.status).toBe(200);
//   });
// });

// // update User

// describe("PUT /user/:id", () => {
//   it("should return a 200 response", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const res = await request(app)
//       .put("/user/1")
//       .set("Authorization", token.body)
//       .send(user);
//     expect(res.status).toBe(200);
//   });
// });

// // delete User

// describe("DELETE /user/:id", () => {
//   it("should return a 200 response", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const res = await request(app)
//       .delete("/user/1")
//       .set("Authorization", token.body);
//     expect(res.status).toBe(200);
//   });
// });
