import { expect, it } from "vitest";

it("every time true ", () => {
  const result = true;
  expect(result).toBe(true);
});

it("every time false ", () => {
  const result = true;
  expect(result).toBe(false);
});
