import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserRepositoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(user: User): Promise<User> {
    try {
      const createdUser = await this.prisma.user.create({
        data: {
          username: user.username,
          password: user.password,
          email: user.email,
        },
      });
      return createdUser;
    } catch (error) {
      // console.log(error.meta.target);
      console.log(error);
    }
  }

  async getUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
