import { expect, test } from "vitest";
import { checkAge } from "../src/functions";

test("check age > 18", () => {
  expect(checkAge({ age: 19 })).toBe(true);
  expect(checkAge({ age: 125 })).toBe(true);
});

test("check age <= 18", () => {
  expect(checkAge({ age: 18 })).toBe(false);
  expect(checkAge({ age: 0 })).toBe(false);
});

test("check age < 0", () => {
  expect(() => checkAge({ age: -1 })).toThrow("Age not Valid");
});
