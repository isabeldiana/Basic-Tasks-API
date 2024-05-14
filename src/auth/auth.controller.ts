import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}
  @Post('login')
  singIn(
    @Body('username')username:string,
    @Body('password')password:string
  ):AuthResponseDto{
    return this.authService.signIn(username,password);
  }
}
