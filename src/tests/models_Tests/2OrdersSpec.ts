import { Order, OrdersStore } from "../../models/Order";

const store = new OrdersStore();

describe("Index Method Orders", () => {
  it("should return an array of orders", async () => {
    const orders = await store.index();
    expect(orders).toBeInstanceOf(Array);
  });
});

describe("Create Order Method", () => {
  it("should create an order", async () => {
    // @ts-ignore
    const order: Order = {
      status: "active",
      user_id: 2,
    };
    const newOrder = await store.create(order);
    expect(newOrder).toBeDefined();
  });
});

describe("Show Order Method", () => {
  it("should return an order", async () => {
    const order = await store.show(1);
    expect(order).toBeDefined();
  });
});

describe("Show Orders by User Method", () => {
  it("should return an array of orders", async () => {
    const orders = await store.showByUser(2);
    expect(orders).toBeInstanceOf(Array);
  });
});

describe("Update Order Method", () => {
  it("should return an order", async () => {
    // @ts-ignore
    const order: Order = {
      status: "confirmed",
      user_id: 2,
    };
    const order2 = await store.updateOrder(1, order);
    expect(order2).toBeDefined();
  });
});

describe("Delete Order Method", () => {
  it("should return an order", async () => {
    const order = await store.deleteOrder(1);
    expect(order).toBeDefined();
  });
});
