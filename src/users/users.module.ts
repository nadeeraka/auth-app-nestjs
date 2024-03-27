import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { QueryService } from 'src/database/query/query.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, QueryService],
  exports: [UsersService],
})
export class UsersModule {}
