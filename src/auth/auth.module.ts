import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { QueryService } from 'src/database/query/query.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, UsersModule, QueryService],
})
export class AuthModule {}
