import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './user.tdo';
import { create } from 'domain';

@Controller('users')
export class UsersController {
  constructor(private  readonly usersService: UsersService){}
    @Post()
    create(@Body() user: UserDto){
      this.usersService.create(user)
    }
  }

