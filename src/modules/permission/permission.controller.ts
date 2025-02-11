import { Body, Controller, Post } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { Permission } from './permission.entity';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}
  @Post()
  async createPermission(@Body() data: Partial<Permission>) {
    return this.permissionService.createPermission(data);
  }
}
