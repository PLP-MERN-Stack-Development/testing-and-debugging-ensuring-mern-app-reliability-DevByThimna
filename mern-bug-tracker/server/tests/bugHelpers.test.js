import { validateBug } from "../utils/validators.js";

test("should validate bug with title", () => {
  expect(validateBug({ title: "UI Bug" })).toBe(true);
});

test("should fail if title is empty", () => {
  expect(validateBug({ title: "" })).toBe(false);
});
