import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { QueryService } from 'src/database/query/query.service';
import { User, userLogin, userRegister } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private query: QueryService,
  ) {}
  async login(user: userLogin) {
    // const payload = {
    //   email: user.email,
    //   id: user.id,
    // };
    return {
      // token: this.query.generateToken(payload),
    };
  }

  async validateUser(email: string, password: string) {
    const user: userRegister | boolean =
      await this.userService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordValid = await this.query.checkPassword(
      user?.password,
      password,
    );
    if (isPasswordValid) {
      return user;
    }
    throw new NotAcceptableException('Password is not valid');
  }
  async create(createAuthDto: CreateAuthDto) {
    const newUser = await this.query.createUser(createAuthDto);
    if (!newUser) throw new NotAcceptableException('User already exists');
    return newUser;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
