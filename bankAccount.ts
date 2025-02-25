export class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Сумма должна быть положительной");
    }
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Сумма должна быть положительной");
    }
    if (amount > this.balance) {
      throw new Error("Недостаточно средств");
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
