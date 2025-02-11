import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Account } from 'src/modules/account/account.entity';
import { Permission } from 'src/modules/permission/permission.entity';
import { RolePermission } from 'src/modules/role-permission/role-permission.entity';
import { Role } from 'src/modules/role/role.entity';
import { User } from 'src/modules/user/user.entity';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true, // true in dev mode, false in production mode,
  entities: [User, Account, Role, Permission, RolePermission],
};
