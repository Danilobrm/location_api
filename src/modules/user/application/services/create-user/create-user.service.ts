import { Injectable } from '@nestjs/common';
import { User } from '../../../domain/entities/user.entity';
import { UserRepositoryService } from '../../../infrastructure/repositories/user-repository/user-repository.service';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepositoryService) {}

  async execute(
    username: string,
    password: string,
    email: string,
  ): Promise<User> {
    const user = new User(null, username, password, email);
    return this.userRepository.create(user);
  }
}
