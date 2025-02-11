import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionRepository {
  constructor(
    @InjectRepository(Permission) private repo: Repository<Permission>,
  ) {}

  async createPermission(data: Partial<Permission>): Promise<Permission> {
    return this.repo.save(data);
  }

  async getAllPermissions(): Promise<Permission[]> {
    return this.repo.find();
  }
}
