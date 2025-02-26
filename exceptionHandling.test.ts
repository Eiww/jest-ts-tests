import { divide, parseJSON } from "./exceptionHandling";
import { describe, test, expect } from "@jest/globals";

describe("divide", () => {
  test("Делит два числа", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(-4, 2)).toBe(-2);
  });

  test("Выбрасывает ошибку при делении на ноль", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
    expect(() => divide(-10, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("parseJSON", () => {
  test("Парсит валидный JSON", () => {
    expect(parseJSON('{"name": "John", "age": 30}')).toEqual({
      name: "John",
      age: 30,
    });
    expect(parseJSON("[1, 2, 3]")).toEqual([1, 2, 3]);
    expect(parseJSON("true")).toBe(true);
  });

  test("Выбрасывает ошибку при некорректном JSON", () => {
    expect(() => parseJSON("invalid json")).toThrow("Invalid JSON format");
    expect(() => parseJSON('{name: "John"}')).toThrow("Invalid JSON format");
    expect(() => parseJSON("")).toThrow("Invalid JSON format");
  });
});
