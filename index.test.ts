import { sum } from "./index";
import { describe, test, expect } from "@jest/globals";

describe("Sum function", () => {
  test("Возвращает корректное значение", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
