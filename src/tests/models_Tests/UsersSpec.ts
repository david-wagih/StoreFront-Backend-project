import { UsersStore } from "../../models/User";

const store = new UsersStore();

// Test for the Create Method in User Model
describe("Create User Method", () => {
  it("should create a user", async () => {
    const user = {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      password: "12345",
    };
    const createdUser = await store.create(user);
    expect(createdUser.firstName).toBe(user.firstName);
    expect(createdUser.lastName).toBe(user.lastName);
    expect(createdUser.password).toBe(user.password);
  });
});
