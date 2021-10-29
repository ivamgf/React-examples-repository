import { ComponentFunction } from "../App/components/Component_1";

describe("Component1", () => {
  it("Should return an array with right objects", async () => {
    const result = await ComponentFunction();
    result.forEach((row: any) => {
      expect(row).toHaveProperty("color");
      expect(row).toHaveProperty("name");
      expect(row).toHaveProperty("backgroundColor");
    });
  });
});
