import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { passwordCompare } from 'src/utils/common/hash';
import { User } from 'src/utils/types';

@Injectable()
export class QueryService {
  constructor(private prisma: PrismaService) {}
  async checkPassword(hash: string, password: string) {
    try {
      const isPasswordValid = await passwordCompare(hash, password);
      console.log(isPasswordValid, 'check2');

      if (!isPasswordValid) {
        return false;
      }
      return isPasswordValid;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
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
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) return false;
    const { id, createdAt, isAdmin, updatedAt, ...rest } = user;
    return rest;
  }
}
