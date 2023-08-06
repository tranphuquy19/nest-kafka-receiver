import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  save(user: UserEntity) {
    this.users.push(...this.users, { ...user, id: `${this.users.length + 1}` });
    return user;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  findAll() {
    return this.users;
  }
}
