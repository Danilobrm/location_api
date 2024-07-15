import { Module } from '@nestjs/common';
// import { AuthController } from './modules/auth/application/controllers/auth/auth.controller';
// import { CreateUserService } from './modules/user/application/services/create-user/user.service';
// import { UserRepositoryService } from './modules/user/infrastructure/repositories/user-repository/user-repository.service';
import { UserModule } from './modules/user/user.module';
import { LocationModule } from './modules/location/location.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, LocationModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
