import { sum, multiply, isEven } from "./math";
import { describe, test, expect } from "@jest/globals";

describe("Sum function", () => {
  test("Сумма положительных чисел", () => {
    expect(sum(8, 3)).toBe(11);
  });

  test("Сумма отрицательных чисел", () => {
    expect(sum(-1, -4)).toBe(-5);
  });

  test("Сумма положительного и отрицательного числа", () => {
    expect(sum(-2, 3)).toBe(1);
  });

  test("Сумма нулей", () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe("Multiply function", () => {
  test("Умноженик положительных чисел", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("Умножение отрицательных чисел", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("Умножение положительного и отрицательного числа", () => {
    expect(multiply(2, -5)).toBe(-10);
  });

  test("Умножение на ноль", () => {
    expect(multiply(7, 0)).toBe(0);
  });
});

describe("IsEven function", () => {
  test("Четность положительного числа", () => {
    expect(isEven(4)).toBe(true);
  });

  test("Нечетность положительного числа", () => {
    expect(isEven(5)).toBe(false);
  });

  test("Четность отрицательного числа", () => {
    expect(isEven(-2)).toBe(true);
  });

  test("Нечетность отрицательного числа", () => {
    expect(isEven(-3)).toBe(false);
  });

  test("Ноль", () => {
    expect(isEven(0)).toBe(true);
  });
});
