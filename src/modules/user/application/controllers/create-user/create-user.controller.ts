import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '../../services/create-user/create-user.service';
import { User } from '../../../domain/entities/user.entity';
import { Password } from '../../../domain/value-objects/UserPassword';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; password: string; email: string },
  ): Promise<User> {
    const password = await Password.create(body.password);

    return this.createUserService.execute(
      body.username,
      password.getHashedPassword(),
      body.email,
    );
  }
}
