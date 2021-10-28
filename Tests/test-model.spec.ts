// Test model

jest.mock("fetch-ie8");
const { Response } = jest.requireActual("fetch-ie8");

describe("Class test", () => {
	describe("Function test", () => {
		it("Should return previus obj", async () => {
			const result = await fetch();
			expect(result).toBe("");
		});
	});
});