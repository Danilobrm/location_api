// src/modules/auth/auth.module.ts
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
// import { CheckEmailMiddleware } from '../../common/middlewares/CheckEmail';
import { PrismaClient } from '@prisma/client';
import { LocationRepositoryService } from './infrastructure/repositories/location-repository/location-repository.service';
import { LocationService } from './application/services/location.service';
import { LocationController } from './application/controllers/location.controller';
import { isAuthenticated } from 'src/common/middlewares/isAuthenticated';
import { JwtService } from '../auth/infrastructure/services/jwt.service';

@Module({
  controllers: [LocationController],
  providers: [
    PrismaClient,
    LocationService,
    LocationRepositoryService,
    JwtService,
  ],
})
export class LocationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .forRoutes({ path: 'location/*', method: RequestMethod.ALL });
  }
}
