import { Injectable } from '@nestjs/common';
import { Location } from '../../domain/entities/location.entity';
import { LocationRepositoryService } from '../../infrastructure/repositories/location-repository/location-repository.service';

@Injectable()
export class LocationService {
  constructor(private readonly locationRepository: LocationRepositoryService) {}

  async createLocation(
    name: string,
    city: string,
    state: string,
    user_id: string,
  ): Promise<Location> {
    const location = new Location(null, name, city, state);
    return this.locationRepository.createLocation(location, user_id);
  }

  async getLocationById(location_id: string): Promise<Location> {
    return this.locationRepository.getLocationById(location_id);
  }

  async getAllLocations(name?: string): Promise<Location[]> {
    return this.locationRepository.getAllLocations(name);
  }

  async updateLocation(
    id: string,
    updateData: Partial<Location>,
  ): Promise<Location> {
    return this.locationRepository.updateLocation(id, updateData);
  }

  async deleteLocation(id: string): Promise<Location> {
    return this.locationRepository.deleteLocation(id);
  }
}
