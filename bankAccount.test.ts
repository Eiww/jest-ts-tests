// bankAccount.test.ts
import { BankAccount } from "./bankAccount";
import { describe, test, expect } from "@jest/globals";

describe("BankAccount", () => {
  describe("getBalance", () => {
    test("Начальный баланс", () => {
      const account = new BankAccount(-100);
      expect(account.getBalance()).toBe(-100);
    });
  });

  describe("deposit", () => {
    test("Добавляем сумму к балансу", () => {
      const account = new BankAccount(50);
      account.deposit(30);
      expect(account.getBalance()).toBe(80);
    });

    test("Ошибка при отрицательной сумме", () => {
      const account = new BankAccount(100);
      expect(() => account.deposit(-50)).toThrow(
        "Сумма должна быть положительной"
      );
    });
  });

  describe("withdraw", () => {
    test("Уменьшаем баланс на сумму", () => {
      const account = new BankAccount(250);
      account.withdraw(200);
      expect(account.getBalance()).toBe(50);
    });

    test("Выбрасываем ошибку при отрицательной сумме", () => {
      const account = new BankAccount(100);
      expect(() => account.withdraw(-50)).toThrow(
        "Сумма должна быть положительной"
      );
    });

    test("Выбрасываем ошибку при недостатке средств", () => {
      const account = new BankAccount(100);
      expect(() => account.withdraw(200)).toThrow("Недостаточно средств");
    });

    test("Снимаем всю сумму", () => {
      const account = new BankAccount(100);
      account.withdraw(100);
      expect(account.getBalance()).toBe(0);
    });
  });
});
