import { DatabaseService, User } from "./databaseService";
import { UserService } from "./userService";

describe("UserService", () => {
  let dbService: DatabaseService;
  let userService: UserService;

  beforeEach(() => {
    dbService = new DatabaseService();
    userService = new UserService(dbService);
  });

  test("Интеграционный тест: Получение пользователя", () => {
    const user: User = { id: "1", name: "John Doe" };
    dbService.addUser(user);
    const result = userService.getUserById("1");
    expect(result).toEqual(user);
  });

  test("Интеграционный тест: Не найденный пользователь", () => {
    const result = userService.getUserById("non-existent");
    expect(result).toBeUndefined();
  });
});
