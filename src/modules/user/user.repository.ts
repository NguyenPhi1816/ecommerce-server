import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(data: Partial<User>): Promise<User> {
    return this.repo.save(data);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repo.find();
  }
}
