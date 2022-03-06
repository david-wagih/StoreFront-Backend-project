import {
  Order_Products,
  Order_ProductsStore,
} from "../../models/Order_Products";

const store = new Order_ProductsStore();

describe("Get Order Method", () => {
  it("should return an array of orders", async () => {
    const orders = await store.GetOrder(2);
    expect(orders).toBeInstanceOf(Array);
  });
});

describe("Add Product Method", () => {
  it("should return an array of orders", async () => {
    // @ts-ignore
    const newItem: Order_Products = {
      order_id: 2,
      product_id: 4,
      quantity: 1,
    };
    const orders = await store.addProduct(newItem);
    expect(orders).toBeInstanceOf(Array);
  });
});
