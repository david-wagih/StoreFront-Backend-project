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
      status: "old",
      user_id: 2,
      product_id: 2,
      quantity: 1,
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

describe("Update Order Method", () => {
  it("should return an order", async () => {
    // @ts-ignore
    const order: Order = {
      status: "new",
      user_id: 2,
      product_id: 2,
      quantity: 1,
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
