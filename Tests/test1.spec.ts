import { getUserRecentlyViewedEssays } from 'utils/UserAccesses';

describe("UserAccesses", () => {
  it("getUserRecentlyViewedEssays should return an array with right objects", async () => {
      const result = await getUserRecentlyViewedEssays();
      result.forEach((row: any) => {
        expect(row).toHaveProperty("color");
        expect(row).toHaveProperty("name");
        expect(row).toHaveProperty("backgroundColor");
      });
  });
})
