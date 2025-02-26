export interface User {
  id: string;
  name: string;
}

export class DatabaseService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
