import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(data) {
    return this.userRepository.createUser(data);
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }
}
