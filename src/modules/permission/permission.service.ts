import { Injectable } from '@nestjs/common';
import { PermissionRepository } from './permission.repository';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  async createPermission(data: Partial<Permission>) {
    return this.permissionRepository.createPermission(data);
  }
}
