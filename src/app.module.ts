import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { AuthController } from './modules/auth/application/controllers/auth/auth.controller';
import { CreateUserService } from './modules/user/application/services/create-user/create-user.service';
import { UserRepositoryService } from './modules/user/infrastructure/repositories/user-repository/user-repository.service';
import { UserModule } from './modules/user/user.module';
import { PrismaClient } from '@prisma/client';
import prisma from './common/prisma/prisma.provider';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    {
      provide: PrismaClient,
      useValue: prisma,
    },
    AppService,
    CreateUserService,
    UserRepositoryService,
  ],
})
export class AppModule {}
