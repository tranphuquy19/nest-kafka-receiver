import { Controller, ValidationPipe } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('create_user', Transport.KAFKA)
  createUser(@Payload(ValidationPipe) data: CreateUserDTO) {
    console.log(data);
    return this.authService.createUser(data);
  }

  @EventPattern('get_user', Transport.KAFKA)
  getUser(@Payload('id') id: string) {
    console.log(id);
    return this.authService.getUser(id);
  }

  @EventPattern('get_all_users', Transport.KAFKA)
  getAllUsers() {
    return this.authService.getAllUsers();
  }
}
