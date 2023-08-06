import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(createUserDto: CreateUserDTO) {
    return this.userRepository.save(createUserDto);
  }

  getUser(id: string) {
    return this.userRepository.findOne(id);
  }

  getAllUsers() {
    const values = this.userRepository.findAll();
    console.log('Users:', values);
    return values;
  }
}
