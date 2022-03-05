import { Product, ProductsStore } from "../../models/Product";

const store = new ProductsStore();

describe("Create Product Method", () => {
  it("should return a product", async () => {
    // @ts-ignore
    const newProduct: Product = {
      name: "Product1",
      price: 100,
    };
    const product = await store.create(newProduct);
    expect(product).toBeDefined();
  });
});

describe("Index Method Products", () => {
  it("should return an array of products", async () => {
    const products = await store.index();
    expect(products).toBeInstanceOf(Array);
  });
});

describe("Show Product Method", () => {
  it("should return a product", async () => {
    const product = await store.show(1);
    expect(product).toBeDefined();
  });
});

describe("Update Product Method", () => {
  it("should return a product", async () => {
    // @ts-ignore
    const product: Product = {
      name: "Product 1",
      price: 100,
    };
    const product2 = await store.update(1, product);
    expect(product2).toBeDefined();
  });
});

describe("Delete Product Method", () => {
  it("should return a product", async () => {
    const product = await store.delete(1);
    expect(product).toBeDefined();
  });
});
