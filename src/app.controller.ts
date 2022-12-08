import { Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import {
  AppController as Controller,
  CreateUser,
  GetProfile,
} from './app.controller.decorator';

@Controller()
export class AppController {
  constructor(private authSerivce: AuthService) {}

  @CreateUser()
  async login(@Request() req) {
    return this.authSerivce.login(req.user);
  }

  @GetProfile()
  getProfile(@Request() req) {
    return req.user;
  }
}
