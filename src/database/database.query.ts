import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class DBQueries {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return await this.prisma.user.findMany();
  }
  async getUser(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
  async createUser(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data,
    });
  }
  async updateUser(id: number, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }
  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
  async deleteAll() {
    return await this.prisma.user.deleteMany();
  }
  async getUsersCount() {
    return await this.prisma.user.count();
  }
  async getUsersByEmail(email: string) {
    return await this.prisma.user.findMany({
      where: { email },
    });
  }
}
