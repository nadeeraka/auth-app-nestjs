import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { passwordCompare, passwordHash } from 'src/utils/common/hash';
import { User, userRegister } from 'src/utils/types';

@Injectable()
export class QueryService {
  constructor(private prisma: PrismaService) {}
  async checkPassword(hash: string, password: string): Promise<boolean> {
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
    const user = await this.getUsersByEmail(data.email);
    if (user) return false;
    // hash password
    const hash = await passwordHash(data.password);
    data.password = hash;

    const newUser = await this.prisma.user.create({
      data,
    });
    if (!newUser) return false;
    const { id, createdAt, isAdmin, updatedAt, password, ...rest } = newUser;
    return rest;
  }
  async updateUser(userId: number, data: Prisma.UserUpdateInput) {
    const user = await this.prisma.user.update({
      // @ts-ignore
      where: { userId },
      data,
    });
    if (!user) return false;
    const { id, createdAt, isAdmin, updatedAt, ...rest } = user;
    return rest;
  }
  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
  async deleteAll() {
    return await this.prisma.user.deleteMany();
  }
  async getUsersCount(): Promise<number | boolean> {
    const count = await this.prisma.user.count();
    if (count) return count;
    return false;
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
