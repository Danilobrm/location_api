import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { LocationModule } from './modules/location/location.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, LocationModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
