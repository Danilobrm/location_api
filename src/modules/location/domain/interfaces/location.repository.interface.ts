import { Location } from '../entities/location.entity';

export interface ILocationRepository {
  createLocation(location: Location): Promise<void>;
}
