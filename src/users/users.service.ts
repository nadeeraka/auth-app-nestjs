import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryService } from 'src/database/query/query.service';

@Injectable()
export class UsersService {
  constructor(private query: QueryService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.query.getUsers();
  }

  async findOne(id: number) {
    return await this.query.getUser(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.query.updateUser(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.query.deleteUser(id);
  }
  async findOneByEmail(email: string) {
    return await this.query.getUsersByEmail(email);
  }
}
