import { fetchApi } from "../utils/Fetcher";

describe("Units tests", () => {
  beforeAll(() => {
    /* Runs before all tests */
  });
  afterAll(() => {
    /* Runs after all tests */
  });
  beforeEach(() => {
    /* Runs before each test */
  });
  afterEach(() => {
    /* Runs after each test */
  });

  it("test function api 2", () => {
    expect(fetchApi).not.toBeNull();
  });

  test("test 1", () => {
    expect(1).toBe(1);
  });
});