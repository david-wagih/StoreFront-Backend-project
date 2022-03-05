// import request from "supertest";
// import app from "../../server";

// describe("GET /orders", () => {
//   it("should return 200 OK", async () => {
//     const response = await request(app).get("/orders");
//     expect(response.status).toBe(200);
//   });
// });

// describe("GET /orders/:id", () => {
//   it("should return 200 OK", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const response = await request(app)
//       .get("/orders/1")
//       .set("Authorization", token.body);
//     expect(response.status).toBe(200);
//   });
// });

// describe("GET /orders/:user_id/currentOrder", () => {
//   it("should return 200 OK", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const response = await request(app)
//       .get("/orders/1/currentOrder")
//       .set("Authorization", token.body);
//     expect(response.status).toBe(200);
//   });
// });

// // todo : problem here
// describe("POST /orders", () => {
//   it("should return 200 OK", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const response = await request(app)
//       .post("/orders")
//       .send({
//         status: "pending",
//         user_id: "1",
//         product_id: "1",
//         quantity: "20",
//       })
//       .set("Authorization", token.body);
//     expect(response.status).toBe(200);
//   });
// });

// describe("PUT /orders/:id", () => {
//   it("should return 200 OK", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const response = await request(app)
//       .put("/orders/1")
//       .set("Authorization", token.body);
//     expect(response.status).toBe(200);
//   });
// });

// describe("DELETE /orders/:id", () => {
//   it("should return 200 OK", async () => {
//     const user = {
//       firstName: "David",
//       password: "123456",
//     };
//     const token = await request(app).post("/user/login").send(user);
//     const response = await request(app)
//       .delete("/orders/1")
//       .set("Authorization", token.body);
//     expect(response.status).toBe(200);
//   });
// });
