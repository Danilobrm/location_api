// src/modules/auth/auth.module.ts
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { AuthController } from './application/controllers/auth/auth.controller';
import { CreateUserController } from './application/controllers/create-user/create-user.controller';
import { CreateUserService } from './application/services/create-user/create-user.service';
import { UserRepositoryService } from './infrastructure/repositories/user-repository/user-repository.service';
import { CheckEmailMiddleware } from '../../common/middlewares/CheckEmail';
import { PrismaClient } from '@prisma/client';
import prisma from '../../common/prisma/prisma.provider';

@Module({
  controllers: [CreateUserController],
  providers: [
    {
      provide: PrismaClient,
      useValue: prisma,
    },
    CreateUserService,
    {
      provide: 'UserRepository',
      useClass: UserRepositoryService,
    },
    UserRepositoryService,
  ],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckEmailMiddleware)
      .forRoutes({ path: 'user/register', method: RequestMethod.POST });
  }
}
