import { DatabaseService, User } from "./databaseService";

export class UserService {
  private dbService: DatabaseService;

  constructor(dbService: DatabaseService) {
    this.dbService = dbService;
  }

  getUserById(id: string): User | undefined {
    return this.dbService.getUserById(id);
  }
}
