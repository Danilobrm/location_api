import { Injectable } from '@nestjs/common';
import { Location } from '../../../domain/entities/location.entity';
import { PrismaClient } from '@prisma/client';
import { AppError } from 'src/common/errors/AppError';

@Injectable()
export class LocationRepositoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async createLocation(location: Location, user_id: string): Promise<Location> {
    try {
      return await this.prisma.location.create({
        data: {
          name: location.name,
          city: location.city,
          state: location.state,
          user: { connect: { id: user_id } },
        },
      });
    } catch (error) {
      throw new AppError(error.meta.cause);
    }
  }

  async getLocationById(location_id: string): Promise<Location | null> {
    try {
      return await this.prisma.location.findUniqueOrThrow({
        where: { id: location_id },
      });
    } catch (error) {
      throw new AppError('localização não encontrada na base de dados.', 404);
    }
  }

  async getAllLocations(name?: string): Promise<Location[]> {
    try {
      return await this.prisma.location.findMany({
        where: { name },
      });
    } catch (error) {
      throw new AppError(error.meta.cause);
    }
  }

  async updateLocation(
    id: string,
    updateData: Partial<Location>,
  ): Promise<Location> {
    try {
      return await this.prisma.location.update({
        where: { id },
        data: updateData,
      });
    } catch (error) {
      throw new AppError(error.meta.cause);
    }
  }

  async deleteLocation(id: string): Promise<Location> {
    try {
      return await this.prisma.location.delete({
        where: { id },
      });
    } catch (error) {
      throw new AppError(error.meta.cause);
    }
  }
}
