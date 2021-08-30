import { setupJest } from "../jest";

describe("jest-adapter", () => {
  beforeAll(() => {
    setupJest();
  });

  it("should add extra matchers", () => {
    expect(expect(true).toHaveResource).toBeDefined();
    expect(expect(true).toHaveResourceWithProperties).toBeDefined();
  });
});
