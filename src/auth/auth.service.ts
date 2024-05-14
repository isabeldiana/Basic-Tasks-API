import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { AuthResponseDto } from './auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtExpirationTimeSeconds: number,
    private readonly userService:UsersService,
    private readonly jwtService: JwtService,
    private readonly configService:ConfigService,
  ){
    this.jwtExpirationTimeSeconds = +this.configService.get<number>('JWT_EXPIRATION_TIME')
  } 
    signIn(username: string, password: string): AuthResponseDto{
      const foundUser = this.userService.findByUserName(username);
    if( !foundUser || !bcryptCompareSync(password, foundUser.password)){
      throw new UnauthorizedException();
    }
    const payload = {sub: foundUser.id, username: foundUser.username}
    const token = this.jwtService.sign(payload)
    return{token, expiresIn: this.jwtExpirationTimeSeconds}
    }
}
